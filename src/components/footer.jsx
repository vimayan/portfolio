import React from "react";
import Stack from "@mui/material/Stack";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Fab from '@mui/material/Fab';
function Footer() {
  const year = new Date().getFullYear();
  const openWindow = (page)=> window.open(page)

  return (
    <div className="container-fluid bg-dark text-white" id="footer">
      <div className="row">
        <div className=" col-4  my-auto">
          <span>Created with <span className="fs-5"> ✨</span>  by Villavan</span>
        </div>
        <div  className="col-4 my-auto ">
          <span>Copyright © {year}</span>
        </div>
        <div className="col-4 my-auto ">
                    
        <Stack direction="row" spacing={1} sx={{alignItems:"center"}} >

<Fab color="primary" size="small" >
    <GitHubIcon onClick={()=>openWindow("https://github.com/vimayan")} className="fa-brands fa-github"/>
    </Fab>

    <Fab color="secondary" size="small" onClick={()=>openWindow("https://www.linkedin.com/in/villavan-eng2016/")}>
    <LinkedInIcon/>
    </Fab>
 

 
    <Fab size="small">
  <a href="mailto:joblessdesks@gmail.com?body=My custom mail body"> <EmailIcon/></a>
  </Fab> 
</Stack>
        </div>
      </div>
    </div>
  );
}

export default Footer;