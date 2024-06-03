import React, {Component} from "react";
import Card from "./Components/Card";
import './App.css';
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
//import Message from "./Components/Message";
// import Counter from "./Components/Counter";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
      

        { /* <Greet name="Shreya" heroName="Wonder Woman">
          <p>This is children props from function component</p> </Greet>
        <Greet name="Phani" heroName="Ajith">
          <button>Action</button>
        </Greet>
        <Greet name="Bonky" heroName="Charlie" />
        <Welcome name="Deepika" heroName="Nibbi Star">
          <p>This is children props from class component</p> </Welcome>
        <Message />   
        <Counter />
        <Greet name= "Shreya" heroName="Wonder Woman" />
        <Welcome name="Deepika" heroName="Nibbi Star" />
  
    */ }


      </div>
    );
  }
}

export default App;
