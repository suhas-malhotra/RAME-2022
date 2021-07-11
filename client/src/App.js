import Navbar from "./components/layouts/Navbar";
import AboutUs from "./components/layouts/AboutUs";
import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home"
function App() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
      </div>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
