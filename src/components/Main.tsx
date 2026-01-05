import React, { useEffect, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GetAppIcon from "@mui/icons-material/GetApp";
import TerminalIcon from "@mui/icons-material/Terminal";
import CodeIcon from "@mui/icons-material/Code";
import "../assets/styles/Main.scss";
import mock10 from "../assets/images/photo.jpg";
import videoBg from "../assets/images/v2.mp4";

function Main() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // 1.0 is normal speed. 0.5 is half speed. 0.25 is very slow.
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <div className="container">
      <div className="video-docker">
        <video
          ref={videoRef} // Attach the ref here
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
        >
          <source src={videoBg} type="video/mp4" />
        </video>
      </div>

      <div className="about-section">
        <div className="image-wrapper">
          <img src={mock10} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/01priyanshubisht"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-bisht/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://leetcode.com/u/priyanshubisht1/"
              target="_blank"
              rel="noreferrer"
              title="LeetCode"
            >
              <CodeIcon />
            </a>
            <a
              href="https://www.codechef.com/users/priyanshu_310"
              target="_blank"
              rel="noreferrer"
              title="CodeChef"
            >
              <TerminalIcon />
            </a>
          </div>
          <h1>Priyanshu Bisht</h1>
          <p>
            Aspiring Competitive Programmer and Full Stack Developer passionate
            about DSA, problem-solving, and creating innovative automated
            applications.
          </p>

          <div className="button-group">
            <a
              href="/resume.pdf"
              download="Priyanshu_Bisht_Resume.pdf"
              className="resume-btn"
            >
              <GetAppIcon /> Download Resume
            </a>
          </div>

          {/* <div className="mobile_social_icons">
            <a
              href="https://github.com/01priyanshubisht"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-bisht/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://leetcode.com/u/01priyanshubisht/"
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon />
            </a>
            <a
              href="https://www.codechef.com/users/priyanshu_01"
              target="_blank"
              rel="noreferrer"
            >
              <TerminalIcon />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
