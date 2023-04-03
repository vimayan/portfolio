import React,{useState} from 'react';
import "./guider.css";

function Guider() {
    const[open,setOpen] =useState("")
    return (  <>



    <nav className={open}  id='guider' >
    <div className="nav-content ">
      <div className="toggle-btn" onClick={()=>open===''?setOpen("open"):setOpen("")}>
        <i className='bx bx-plus'></i>
      </div>
      <span style={{"--i":"1"}}>
        <a href="#contact"><i className='bx bxs-envelope'></i></a>
      </span>
      <span style={{"--i":"2"}}>
        <a href="#deploys"><i className='bx bxs-window-alt'></i></a>
      </span>
      <span style={{"--i":"3"}}>
        <a href="#techstack"><i className='bx bxs-widget' ></i></a>
      </span>
      <span style={{"--i":"4"}}>
        <a href="#about"><i className='bx bxs-home' ></i></a>
      </span>
    
    </div>
  </nav>

    </>);
}

export default Guider;