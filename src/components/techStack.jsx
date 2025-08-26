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
import Php from "../data/php.png";
import MySQL from "../data/MySQL.png";
import Linux from "../data/Linux.png";
import Docker from "../data/docker.svg";
import K8s from "../data/K8s.webp";
import Jenkins from "../data/Jenkins.png";
import Java from "../data/Java.png"; 
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
          <div className=" col col-md-4 row gap-2  mx-4 my-4" id="icons">
            {/* Es6 */}
            <div className=" col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Es6}
                alt="null"
              />
            </div>

            {/* NodeJS */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={NodeJS}
                alt="null"
              />
            </div>

            {/* Html */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4 ">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8"
                src={Html}
                alt="null"
              />
            </div>

            {/* MySQL */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={MySQL}
                alt="null"
              />
            </div>

            {/* Css */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8"
                src={Css}
                alt="null"
              />
            </div>

            {/* MongoDB */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={MongoDB}
                alt="null"
              />
            </div>
            {/* Bootstrap */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8"
                src={Bootstrap}
                alt="null"
              />
            </div>

            {/* Aws */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Aws}
                alt="null"
              />
            </div>

            {/* ReactJS */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={ReactJS}
                alt="null"
              />
            </div>

            {/* Linux */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Linux}
                alt="null"
              />
            </div>

            {/* Redux */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Redux}
                alt="null"
              />
            </div>

            {/* Docker */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Docker}
                alt="null"
              />
            </div>

            {/* Postman */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Postman}
                alt="null"
              />
            </div>

            {/* Kubernetes */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={K8s}
                alt="null"
              />
            </div>

            {/* Php */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Php}
                alt="null"
              />
            </div>

            {/* Java */}
            {/* <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Java} 
                alt="null"
              />
            </div> */}

            {/* Jenkins */}
            <div className="col-4 col-sm-4 col-md-5 col-lg-4">
              <img
                className="col-8 col-sm-6 col-md-12 col-lg-8 rounded-2 "
                src={Jenkins}
                alt="null"
              />
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
