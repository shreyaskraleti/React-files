import React, {Component} from 'react';

class Counter extends Component {
constructor(props) {
    super(props)

    this.state = {
        count: 0
    }
}

/* increment() {
    this.setState(
        {
            count: this.state.count + 1
        },
        () => {
        console.log('call back value', this.state.count)
        }
    ) */

    increment() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    
    console.log(this.state.count)
}

decrement() {
    this.setState(prevState => ({
        count: prevState.count - 1
    }))
    console.log(this.state.count)
}

incrementFive() {
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}

decrementFive() {
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
}

    render() {
        return(
        <div>
            <div> Count - {this.state.count}</div>
            <button onClick={() => {this.incrementFive()}}>Increment</button>
            <button onClick={() => {this.decrementFive()}}>Decrement</button>
        </div>
        )
    }
}


export default Counter;