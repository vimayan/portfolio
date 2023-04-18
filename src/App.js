import "./App.css";
import "./components/component.css";

import TechStack from "./components/techStack";
import Guider from "./components/guider";
import Deploys from "./components/deploys";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <TechStack />
      <Guider />
      <Deploys />
      <Footer/>
      
    </div>
  );
}

export default App;
