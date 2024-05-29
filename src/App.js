import React, {Component} from "react";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Shreya" heroName="Wonder Woman">
          <p>This is children props from function component</p> </Greet>
        <Greet name="Phani" heroName="Ajith">
          <button>Action</button>
        </Greet>
        <Greet name="Bonky" heroName="Charlie" />
        <Welcome name="Deepika" heroName="Nibbi Star">
          <p>This is children props from class component</p> </Welcome>
     
      </div>
    );
  }
}

export default App;
