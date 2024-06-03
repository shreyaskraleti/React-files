import React from 'react';

function Card() {
    const internalStyle = {
        color: 'black',
        backgroundColor: 'aqua',
        padding: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        fontSize: 'xx-large',
        fontWeight: 'bold'

    }
    return(
        <div>
            <h1>Implementation of CSS</h1>
            <ul>
                <li style={{color: 'red', backgroundColor: 'black', fontSize: 'XX-large', padding: '10px'}}>Inline CSS</li>
                <li style={internalStyle}>Internal CSS</li>
                <li className='external'>External CSS</li>


            </ul>
        </div>
    )
}

export default Card;