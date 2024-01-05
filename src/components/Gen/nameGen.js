import React from "react";

export default class FetchRandomUser extends React.Component {
    state = {
        loading: true,
        name: null,
    }

    async componentDidMount() {
        const url = 'https://api.randomuser.me/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ name: data.results[0].name, loading: false })
        console.log(this.state.name.first)

    }
    render() {
        return (
            <p>
                {this.state.loading || !this.state.name ? <p>loading...</p>
                    : <p>
                        <p>{this.state.name.first} {this.state.name.last}</p>
                    </p>
                }
            </p>
        )
    }

}