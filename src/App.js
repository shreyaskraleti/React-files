import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Home from "./Components/Home";
import Pages from "./Components/Pages";
import Blogs from "./Components/Blogs";
import Support from "./Components/Support";
import './App.css';

// import MobileList from "./Components/MobileList";
// import LaptopList from "./Components/LaptopList";
// import HeadsetList from "./Components/HeadsetList";
// import FunctionClick from "./Components/FunctionClick";
// import ClassClick from "./Components/ClassClick";
// import EventBind from "./Components/EventBind";
// import Greet from "./Components/Greet";
// import Welcome from "./Components/Welcome";
//import Message from "./Components/Message";
// import Counter from "./Components/Counter";
// import Card from "./Components/Card"; */


const App = () => {
  return(
    <Router>
    <div className="App">
      <Header />
      <MainContent />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/support" element={<Support />} />
      </Routes>
      </div>
      </Router>
  );
};

export default App;
      

         /* <Greet name="Shreya" heroName="Wonder Woman">
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
         <Card />
         <PopularProducts />
         <MobileList />
      <LaptopList />
      <HeadsetList />
      <FunctionClick />
      <ClassClick />
      <EventBind />
  
    */ 



