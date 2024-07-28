import React from 'react';

function Cards(props){
    return(
        <div className='cards'>
            <div className='crdimg'>
                <img src={props.cardImage} alt={props.alternateText}/>
                <p className='ratings'>{props.ratings}</p>
            </div>
            <h2 className='cardTitle'>{props.title}</h2>
            <p className='cardDesc'>{props.desc}</p>
            <div className='orderPricing'>
                <pre className='dsp'>{props.dPrice} <strike className='acp'>{props.aPrice}</strike></pre>
                <button className='btn'>Add to Cart</button>
            </div>
           

        </div>
    )
}

export default Cards;