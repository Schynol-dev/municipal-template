import './assets/css/main.css';

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />

      <About />

      <Events />

      <Footer />
    </div>
  );
}

export default App;
