import "./App.css";
import "./components/component.css";
import About from "./components/about";
import TechStack from "./components/techStack";
import Guider from "./components/guider";
import Contact from "./components/contact";
import Deploys from "./components/deploys";

function App() {
  return (
    <div className="App">
      <About />
      <TechStack />
      <Guider />
      <Deploys />
      <Contact />
    </div>
  );
}

export default App;
