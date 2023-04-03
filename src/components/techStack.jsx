import React from "react";
import Html from "../data/html.png";
import Css from "../data/css.png";
import Bootstrap from "../data/bootstrap.png";
import Es6 from "../data/ES6.jpg";
import NodeJS from "../data/node.png";
import ReactJS from "../data/react.png";
import MongoDB from "../data/mongodb.png";
import Redux from "../data/Redux.png";
import Aws from "../data/Aws.png";
import Postman from "../data/Postman.png";
import Api from "../data/API-amico.svg";

function TechStack() {
  return (
    <>
      <div
        className="container bg-warning shadow-lg rounded-3 rounded-md-4"
        id="techstack"
      >
        <div className="row ">
          <span className="fs-1 fw-bold">Tech Stack</span>
          <p className="fs-6">
            These are the few Technologies , languages and frameworks that i
            grind on a regular basis..
          </p>
        </div>
        <div className="row ms-sm-5 ps-5  my-4">
          <div className=" col col-md-4 row gap-2   mx-4 my-4">
            <div className="col-4 col-sm-4 col-md-5 col-lg-4 ">
              <div className="d-flex flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Html}
                  alt="null"
                />
                <b>HTML 5</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className=" d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Css}
                  alt="null"
                />
                <b>Css 5</b>
              </div>
            </div>

            <div className=" col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Es6}
                  alt="null"
                />
                <b>ES 6</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8"
                  src={Bootstrap}
                  alt="null"
                />
                <b>BOOTSTRAP 5</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={NodeJS}
                  alt="null"
                />
                <b>NodeJS</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={ReactJS}
                  alt="null"
                />
                <b>ReactJS</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={MongoDB}
                  alt="null"
                />
                <b>MongoDB</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Redux}
                  alt="null"
                />
                <b>Redux</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Postman}
                  alt="null"
                />
                <b>Postman</b>
              </div>
            </div>

            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <div className="col d-flex  flex-column align-items-center gap-2 text-nowrap">
                <img
                  className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                  src={Aws}
                  alt="null"
                />
                <b>AWS</b>
              </div>
            </div>
          </div>

          <div className="col-md-5 d-none d-md-block ms-md-4">
            <img src={Api} alt="null" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack;
