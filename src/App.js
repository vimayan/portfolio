import "./App.css";
import "./components/component.css";

import TechStack from "./components/techStack";
import Guider from "./components/guider";
import Deploys from "./components/deploys";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import GitHub from "./components/gitHub";
import Particle from "./components/particle";

function App() {
  return (
    <div className="App container-fluid">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-10 d-flex flex-column justify-content-center gap-5" id="page" >
          <Home />
          <Deploys />
          <TechStack />
          <GitHub/>
          <Footer/>
          <Guider /> 
        </div>
        <Particle />
      </div>
   
      {/* <About/> */}      
    </div>
  );
}

export default App;
