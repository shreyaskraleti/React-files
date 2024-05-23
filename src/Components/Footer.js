import React, { Component } from "react";


class Footer extends Component {
    constructor () {
        super();
        this.state = {
            name: "Bonkers",
            age: 2,
        }
    }

    render() {
        return (
            <div className="Footer">
                <h1>my cute pet name is {this.state.name} and age is {this.state.age}</h1>
            </div>
        )
    }
}

export default Footer;
            
    



