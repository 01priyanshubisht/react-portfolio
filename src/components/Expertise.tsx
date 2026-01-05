import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import { faCode, faTrophy } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman",
    "NodeJs",
    "Mongo DB"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Linux",
    "Pandas",
];

const labelsThird = [
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "Streamlit",
];
const labelsfour = [
    "OpenAI",
    "LangChain",
    "Hugging Face",
    "Streamlit",
];

function Expertise() {
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <FontAwesomeIcon icon={faReact} size="3x" />
              <h3>Full Stack Web Development</h3>
              <p>
                I have built a diverse array of web applications from scratch
                using modern technologies such as React and Flask. I have a
                strong proficiency in the SDLC process and frontend + backend
                development.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faDocker} size="3x" />
              <h3>DevOps & Automation</h3>
              <p>
                Once the application is built, next step is to set up DevOps
                testing, CI/CD pipelines, and deployment automation to support
                the successful Go-Live.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsSecond.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>

            <div className="skill">
              <FontAwesomeIcon icon={faPython} size="3x" />
              <h3>GenAI & LLM</h3>
              <p>
                To Stay relevant in the market I usually leveraging the latest
                AI models in my projects.
              </p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {labelsThird.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
            <div className="expertise-item">
              <FontAwesomeIcon
                icon={faCode}
                size="3x"
                style={{ color: "#00599C" }}
              />
              <h3>C++ Programming</h3>
              <p>Data Structures, STL, and systems programming.</p>
              <div className="flex-chips">
                <Chip label="C++17" variant="outlined" />
                <Chip label="STL" variant="outlined" />
              </div>
            </div>
            <div className="expertise-item">
              <FontAwesomeIcon
                icon={faTrophy}
                size="3x"
                style={{ color: "#FFD700" }}
              />
              <h3>Competitive Programming</h3>
              <p>Algorithmic problem solving on Codechef and LeetCode.</p>
              <div className="flex-chips">
                <Chip label="Algorithms" variant="outlined" />
                <Chip label="Data Structures" variant="outlined" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Expertise;