import Header from "./components/Header";
import Landing from "./pages/Landing";
import Carousel from "./components/Carousel";
import "./style.css";
import Plan from "./components/Plan";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

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
      <Whatsapp />
    </div>
  );
}

export default App;
