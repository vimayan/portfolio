import React from "react";
import GitHubCalendar from "react-github-calendar";

function GitHub() {
  const colourTheme = {
    dark: ["white", "#006d32", "#26a641", "#39d353", "greenyellow"],
  };
  return (   <>
      <div className="container-fluid" id="github">
        <div className="row" >
          <span className="col fs-1 fw-bold pb-2 text-white">
            Days I <strong className="text-warning">Code</strong>
          </span>
        </div>

        <div className="row ">
         <div className="col col-md-11 mx-auto">
         <GitHubCalendar
          username="vimayan"
          blockSize={20}
          blockMargin={6}
          fontSize={18}
          theme={colourTheme}
          style={{fontWeight: "bolder",color:'whitesmoke' }}
        />
         </div>
      
      </div>


      </div>

   
    </>
  );
}

export default GitHub;
