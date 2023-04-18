import React from "react";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TerminalIcon from '@mui/icons-material/Terminal';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Guvi from '../data/guvi.png'
function About() {

    const steps = [
        'learning basics',
        'Create an ad group',
        'Create an ad',
      ]


  return (
    <>
      <div className="container" id="about">
        <div className="row">
            <div className="col">
            <Typography color={"primary.light"} my={2} variant="h3">
                My Journey so Far
            </Typography>
            </div>

        </div>
      <div className="row">
          <Timeline position="alternate" sx={{color:'white'}}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
        >
          2017-2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <PrecisionManufacturingIcon sx={{color:'steelblue'}} />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Manufacturnig Engineer
          </Typography>
          <Typography>I had designed spm machines & fixtures and
             I did the process planning for Manufacturnig process   </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
        
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Career Change
          </Typography>
          <Typography> I kind of felt missing somthing on my work, 
            so i just took a break , and did lot of search,
             Some how learning the JavaScript makes me surprise more
              </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <TerminalIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>I had been learning
              JavaScript with a little knowledge and information I had . I was
              working on coding tutorials and debugging and , DOM manipulation.
              Then I had few interviews, i got failed!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <img src={Guvi} alt="guvi" width={"30px"} className="rounded-circle"/>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            GUVI
          </Typography>
          <Typography>
            I met guvi then i planned to improve developer skill,
            so I had enrolled the Full Stack Developer course,
            now i am  keen to use my skills and shine,
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>

          </div>
          {/* <div className="row">
            <Stepper activeStep={2} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </div> */}
       
        
      </div>
    </>
  );
}

export default About;
