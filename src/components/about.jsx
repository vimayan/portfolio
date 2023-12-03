import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TerminalIcon from "@mui/icons-material/Terminal";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import Typography from "@mui/material/Typography";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import Guvi from "../data/guvi.png";
function About() {
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
          <Timeline position="alternate" sx={{ color: "white" }}>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
              >
                2017-2020
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <PrecisionManufacturingIcon sx={{ color: "steelblue" }} />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Manufacturnig Engineer
                </Typography>
                <Typography>
                  I was an vmc programmer for siemens and mitsubishi controller.{" "}
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent sx={{ m: "auto 0" }} variant="body2">
                2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Career Change
                </Typography>
                <Typography>
                  {" "}
                  After working as VMC programmer, I took a deliberate break with
                  Reassess my career goals and personal interests, During the
                  Break, I dedicated myself to self-development, I chose the
                  A career that matches to skills like
                  Analysing, reporting, Attention to Details, problem solving, and
                  progrmming that leads software programmer!
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <TerminalIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Code
                </Typography>
                <Typography>
                  "Recognizing that I was a misfit in my previous work
                  environment, I took a proactive approach to align my career
                  with my strengths. I made a conscious decision to enter the
                  software development field, where my problem-solving abilities
                  could thrive."
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary">
                  <img
                    src={Guvi}
                    alt="guvi"
                    width={"30px"}
                    className="rounded-circle"
                  />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  GUVI
                </Typography>
                <Typography>
                  I met guvi, then I planned to improve progrmming skill, so I
                  enrolled myself in Full Stack Developer course, "I am
                  genuinely passionate about my transition to software
                  programming. The challenges and problem-solving aspects of
                  programming resonate with my strengths and personal interests,
                  making it a fulfilling and purposeful career choice."
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default About;
