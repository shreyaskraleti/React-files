import React from "react";

// using Arrow function
/* const Greet = ({name, heroName}) => {
    return (
        <div>
            <h1>
                Hi {name} a.k.a {heroName}
            </h1>
            </div>
    )
}
export default Greet; */

const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroName}
            </h1>
        </div>
    )
}

export default Greet;