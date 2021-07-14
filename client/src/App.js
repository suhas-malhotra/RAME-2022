import Navbar from "./components/layouts/Navbar";
import AboutUs from "./components/layouts/AboutUs";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home"
import MovingHeader from "./components/layouts/MovingHeader";
function App() {
  
  return (
    <div>
      <Navbar />
      <MovingHeader/>
      <div className="sections">
       
        <Home />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
