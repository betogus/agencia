import React from "react";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Carousel from "./components/Carousel";
import "./style.css";
import Plan from "./components/Plan";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import { ImWhatsapp } from "react-icons/im";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Landing />
        <Carousel />
        <Plan />
        <Companies/>
      </div>
      <Footer />
      <div style={{position: "fixed", bottom: "1em", right: "1em"}}>
        <ImWhatsapp size={50} color="green"/>
      </div>
    </div>
  );
}

export default App;
