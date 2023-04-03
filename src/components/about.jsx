import React from "react";
import Coder from "../data/Code typing-bro.svg";
import Coder2 from "../data/Developer activity-bro.svg";

function About() {
  const openResume = () =>
    window.open(
      "https://www.canva.com/design/DAFdYATzWR0/sBSQGhKzzz5xn9vlgJpXiA/view?utm_content=DAFdYATzWR0&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
    );

  return (
    <>
      <div className="container" id="about">
        <div className="row h-100 ">
          <div className="col my-auto d-flex flex-column text-start">
            <i>
              Hi! <i>I am</i>
            </i>
            <div className="fw-bold" id="name">
              <span className=" text-success me-2">VILLAVAN</span>
              <span>MURUGAN</span>
            </div>
            <span className="mt-2" id="profession">
              MEARN stack Developper
            </span>
            <p className="col" id="mystory">
              Some how learning the JavaScript makes me surprise more than the
              experience I had as a SPM designer . I had been learning
              JavaScript with a little knowledge and information I had . I was
              working on coding tutorials and debugging and , DOM manipulation.
              Then I met GUVI, now I have endeavours on exploring new
              technologies and keen to use my skills.
            </p>

            <p className="pt-3">
              <button
                onClick={openResume}
                className="btn btn-success"
                id="resume"
              >
                resume
              </button>
            </p>
          </div>
          <img
            className="col-3 p-0 d-none d-md-block d-lg-none "
            src={Coder}
            alt="null"
          />
          <img className="col-5 d-none d-lg-block" src={Coder2} alt="null" />
        </div>
      </div>
    </>
  );
}

export default About;
