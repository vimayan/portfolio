import React from "react";
import Ticket from "../data/Ticket.jpeg";
import VegSite from "../data/vegsite.jpeg";
import ClonedApp from "../data/ClonedApp.jpeg";

function Deploys() {
  return (
    <>
      <div className="container my-4" id="deploys">
        <div className="row my-4 mx-0 ">
          <div className="col d-flex flex-column text-center bg-info  rounded-3 text-white">
            <span className="fs-1 fw-bold">ALIVE SITES</span>
            <p className="fs-6">Something I have built and deployed</p>
          </div>
        </div>
        
        <div className="card-group">

          <div className="card ticket">
            <a href="https://guvi-hackathon2-frontend-villavan.netlify.app/">
              <img src={Ticket} className="card-img-top"  alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Ticket Booking</h5>
              <p class="card-text">
                <b  onClick={()=>window.open("https://github.com/vimayan/guvi-hackathon2-frontend")} className="me-1 text-primary">Front end</b>
                <span>ReactJS React-router-Dom Redux Formik Yup Bootstrap</span>
                <br />
                <b onClick={()=>window.open("https://github.com/vimayan/guvi-hackathon2-backend")} className="me-2 text-primary">Back end</b>
                <span>
                  NodeJS Express jwt joi bcryptjs mongoose SocketIO{" "}
                </span>{" "}
              </p>
            </div>
            <div className="card-footer bg-info">
              <small className="text-muted">
                <a
                  href="https://github.com/vimayan/guvi-hackathon2-frontend"
                  className="text-decoration-none text-black card-text"
                >
                  https://github.com/vimayan/guvi-hackathon2-frontend
                </a>
              </small>
            </div>
          </div>



          <div className="card">
            <a href="https://villavan-react-task3.netlify.app/">
              <img src={VegSite} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Veg Shop</h5>
              <p className="card-text">
                <b onClick={()=>window.open("https://github.com/vimayan/GUVI-Tasks/tree/main/react-tasks/task-3")} className="me-1 text-primary">Front end</b>
                <span>ReactJS Bootstrap responsive cart design</span>
              </p>
            </div>
            <div className="card-footer bg-info">
              <small className="text-muted">
                <a
                  href="https://github.com/vimayan/GUVI-Tasks/tree/main/react-tasks/task-3"
                  className="text-decoration-none text-black card-text"
                >
                  https://github.com/vimayan/GUVI-Tasks/tree/main/react-tasks/task-3
                </a>
              </small>
            </div>
          </div>



          <div className="card">
            <a href="https://villavan-react-training.netlify.app/">
              <img src={ClonedApp} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
              <h5 className="card-title">Copy Cat</h5>
              <p className="card-text text-start">
                this is my first front end website before joining GUVI using
                React JS
              </p>
            </div>
            <div className="card-footer bg-info">
              <small className="text-muted">
                <a
                  href="https://github.com/vimayan/job-clone"
                  className="text-decoration-none text-black card-text"
                >
                  https://github.com/vimayan/job-clone
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Deploys;
