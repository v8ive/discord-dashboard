import React from "react";

export default class FetchRandomText extends React.Component {
    state = {
        loading: true,
        text: null,
    }

    async componentDidMount() {
        const url = 'https://icanhazdadjoke.com/';
        const response = await fetch(url, {
            headers: {
                "Accept": "application/json"
            }
        });
        const data = await response.json();
        this.setState({ text: data.joke, loading: false })
        // console.log(this.state.text)

    }
    render() {
        return (
            <div>
                {this.state.loading || !this.state.text ? <div>loading...</div>
                    : <div>
                        <div>{this.state.text}</div>
                    </div>
                }
            </div>
        )
    }

}