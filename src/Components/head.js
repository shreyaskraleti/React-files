import React from "react";

function Header(props) {
    return(
        <div className="Header">
            <h1> This is Heading {props.name} </h1>
        </div>
    )
}

export default Header;