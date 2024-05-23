import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <h1>React App</h1>
      <Header name = "from functional component"/>
      <Footer name = "from class component"/>
      <Header name = "from functional component"/>
      <Footer name = "from class component"/>

    </div>
  );
}

export default App;
