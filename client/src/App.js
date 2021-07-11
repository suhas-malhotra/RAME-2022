import Navbar from "./components/layouts/Navbar";

import Footer from "./components/layouts/Footer";
import Home from "./components/layouts/Home"
function App() {
  return (
    <div>
      <Navbar />
      <div className="sections">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
