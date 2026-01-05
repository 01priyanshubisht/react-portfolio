import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'


function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date=""
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
            
            </h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management,
              Business Development
            </p>
          </VerticalTimelineElement> */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2027"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              B.Tech in Computer Science and Engineering
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dehradun, Uttarakhand
            </h4>
            <p>
              Relevant coursework: DSA, DBMS, OS, CN, FullStack Development
              <br />
              <b>Cgpa:9.56</b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Higher Secondary Education (Class XII)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rudrapur, Uttarakhand
            </h4>
            <p>
              Science stream with Physcial Education <br />
              Focused on Physics, Chemistry, Mathematics, and Physcial Education
              <br />
              <b>Score:94.8%</b>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Secondary Education (Class X)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Rudrapur, Uttarakhand
            </h4>
            <p>
              Completed Secondary Education with focus on science and
              Mathematics.
              <br />
              <b>Score:93.4%</b>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;