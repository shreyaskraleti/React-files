import React from "react";
// using Arrow function
const Hello = () => {
   // return (
     //   <div className = 'dummyClass'>
       //     <h1>Hi Bonkers !!! from JSX version of functional component !!!</h1>
        // </div>
    // )
    return React.createElement('div', {id: 'hello', className: 'dummyClass'}, null, React.createElement('h1', null, 'Hi Bonkers !!!'))
}

export default Hello;