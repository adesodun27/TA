import React from "react";
import "./index.css";
import Nav from "./components/Nav"
import {Hero, Frame1, Footer} from  "./sections"


const App = () => {
  return (
    <section className="relative overflow-hidden">
      <Nav />
      <section>
        <Hero/>
      </section>
      <section>
        <Frame1 />
      </section>
      <section>
        <Footer/>
      </section>
   </section>
  );
};

export default App;

