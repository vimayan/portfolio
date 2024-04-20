import React from "react";
import Ticket from "../data/Ticket.jpg";
// import VegSite from "../data/vegsite.jpeg";
import ShoutOut from "../data/ShouOut.png";
import ClonedApp from "../data/ClonedApp.jpeg";
import Fitness from "../data/fitness-logger.jpeg";
import Shortner from "../data/shortner.png";
import SpaceX from "../data/spacex.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

function Deploys() {
  const sites = [
    {
      name:'Fitness Logger',
      text:"badge text-decoration-underline fs-4",
      img: Fitness,
      front: "https://github.com/vimayan/Fitness_Logger_frontend",
      back: "https://github.com/vimayan/guvi-hackathon2-backend",
      launch: "https://fitness-loggerl-villavan.netlify.app",
      size: { color: "black", marginX: "3px" },
    },
    {
      name:'ShoutOut',
      text:"badge text-decoration-underline fs-4",
      img: ShoutOut,
      front: "https://github.com/vimayan/shoutout/tree/main/chatbox",
      back: "https://github.com/vimayan/shoutout/tree/main/chatserver",
      launch: "https://gossip-shoutouts.netlify.app/",
      size: { color: "black", marginX: "3px" },
    },
    {
      name:'Ticket New',
      text:"badge text-decoration-underline fs-4",
      img: Ticket,
      front: "https://github.com/vimayan/guvi-hackathon2-frontend",
      back: "https://github.com/vimayan/guvi-hackathon2-backend",
      launch: "https://guvi-hackathon2-frontend-villavan.netlify.app",
      size: { color: "black", marginX: "3px" },
    },
    {
      name:'Tiny Url',      
      text:"badge text-black text-decoration-underline fs-4",
      img: Shortner,
      front:
        "https://github.com/vimayan/GUVI-Tasks/tree/main/url-shortner/client",
      back: "https://github.com/vimayan/GUVI-Tasks/tree/main/url-shortner/server",
      launch: "https://tinyshortner.netlify.app",
      size: { color: "black", marginX: "3px" },
    },
    {
      name:'SpaceX-clone',      
      text:"badge text-decoration-underline fs-4",
      img: SpaceX,
      front: "https://github.com/vimayan/spacex-clone",
      launch: "https://spacex-lazylode.netlify.app",
      size: { color: "#e3f2fd", marginX: "3px" },
    },
    // {
    //   img: VegSite,
    //   front:
    //     "https://github.com/vimayan/GUVI-Tasks/tree/main/react-tasks/task-3",
    //   launch: "https://villavan-react-task3.netlify.app",
    //   size: { color: "black", marginX: "3px" },
    // },
    {
      name:"Inetriors-clone",
      text:"badge  text-decoration-underline fs-4",
      img: ClonedApp,
      front: "https://github.com/vimayan/job-clone",
      launch: "https://villavan-react-training.netlify.app",
      size: { color: "lime", marginX: "3px" },
    },
  ];
  return (
    <>
      <div className="container my-4" id="deploys">
        <div className="row my-4 mx-0 ">
          <div className="col d-flex flex-column text-center bg-info  rounded-3 text-white">
            <span className="fs-1 fw-bold">ALIVE SITES</span>
            <p className="fs-6">Something I have built and deployed</p>
          </div>
        </div>

        <div className="row">
          {sites.map((site, index) => (
            <div key={index} className="col-12 col-md-4 p-0 sites">
              <img src={site.img} className="img-fluid h-100" alt="..." />
              <div className="icons">
              <h4 className={site.text}>{site.name} </h4>
                <p className="text">
                  <a  href={site.front}  target="_blank" rel="noopener">
                    <b className="me-2 badge bg-primary">Front end</b>
                    <GitHubIcon fontSize="large" sx={site.size} />
                  </a>

                  <br />
                  {site.back ? (
                    <a  href={site.back}  target="_blank" rel="noopener">
                      <b className="me-2 badge bg-primary">Back end</b>
                      <GitHubIcon fontSize="large" sx={site.size} />
                    </a>
                  ) : (
                    <></>
                  )}
                </p>
                <p className="text">
                  <a  href={site.launch}  target="_blank" rel="noopener">
                    <b className="me-2 badge bg-primary">Live Site</b>
                    <LaunchIcon fontSize="large" sx={site.size} />
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Deploys;
