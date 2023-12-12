import discord, os
from flask import Flask, render_template
import asyncio
import aiomysql
from discord.ext import commands
from dotenv import load_dotenv

load_dotenv()

# Initialize web app with Flask
app = Flask(__name__)

# Initialize Discord Bot
bot = commands.Bot(command_prefix="!", intents=discord.Intents.all())

# Replace these with appropriate credentials/connection details
db_config = {
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASS'),
    'db': os.getenv('DB_NAME')
}


@app.route("/")
async def index():
    # Use aiohttp alongside flask if needed or run coroutines elsewhere
    # that are managed through views or before_first_request handlers

    async with aiomysql.create_pool(**db_config) as pool:
        async with pool.get() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute("SELECT * FROM invites")
                data = await cur.fetchall()

        return render_template("routes/home/dashboard.html", data=data)


@bot.command()
async def add_command(ctx, command_name: str):
    pool = await aiomysql.create_pool(**db_config)
    try:
        async with pool.acquire() as conn:
            async with conn.cursor() as cur:
                sql_insert_query = (
                    f"INSERT INTO bot_commands (command_name) VALUES (%s)"
                )
                await cur.execute(sql_insert_query, (command_name,))
                await conn.commit()
                await ctx.send(f"Command {command_name} added.")
    finally:
        pool.close()

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(bot.start(os.getenv('BOT_TOKEN')))
    loop.create_task(app.run(debug=True))
