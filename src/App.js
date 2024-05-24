import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Header name = "from functional component"/>
      <Footer name = "from class component"/>
      <Greet name = "from functional component"/>
      <Welcome name = "from class component"/>
      <Hello name = "from JSX version of functional component"/>

    </div>
  );
}

export default App;
