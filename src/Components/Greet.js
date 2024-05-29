import React from "react";
// using Arrow function
const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hi {props.name} a.k.a {props.heroName}
            </h1>
            {props.children}

        </div>
    )


}
    

export default Greet;