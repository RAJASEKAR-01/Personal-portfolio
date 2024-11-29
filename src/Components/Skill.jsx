import React, { useState } from 'react';
import '../Css/Skill.css'; // Ensure this includes your custom animation styles
import Html from '../Images/html.webp';
import Css from '../Images/css-icon.webp';
import Js from '../Images/js-logo.png';
import Bootstrap from '../Images/bootstrap.webp';
import ReactJs from '../Images/react.svg';
import Git from '../Images/git.png';
import GitHub from '../Images/github.png';
import VisualStudio from '../Images/vs.png';
import C from '../Images/C.png';
import Cpp from '../Images/c-plus.webp';
import Java from '../Images/java.webp';
import Sql from '../Images/sql.png'

function Skill() {
  const Skills = [
    {
      id: 1,
      name: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "bootstrap"],
    },
    {
      id: 2,
      name: "Tools",
      skills: ["Git", "GitHub", "Visual Studio"],
    },
    {
      id: 3,
      name: "Programming Language",
      skills: ["C", "C++", "Java"],
    },
    {
      id: 4,
      name: "Data Base",
      skills: ["Sql plus"],
    },
  ];

  const skillImages = {
    HTML: Html,
    CSS: Css,
    JavaScript: Js,
    bootstrap: Bootstrap,
    "React JS": ReactJs,
    Git: Git,
    GitHub: GitHub,
    "Visual Studio": VisualStudio,
    C: C,
    "C++": Cpp,
    Java: Java,
    "Sql plus": Sql
  };

  const [skillstitle, setskillstitle] = useState(''); // Initially empty to show all skills

  const Showtitle = (e) => {
    const txt = e.target.innerText;
    setskillstitle(txt);
  };

  const filteredSkills = skillstitle
    ? Skills.filter(
        (skill) => skill.name.toLowerCase() === skillstitle.toLowerCase()
      )
    : Skills; // Show all skills if no title is selected

  return (
    <div className='Skills'>
    <div className="Skill-Container">
      <div className="Skill-section-Head">
        <h1>Technical Proficiency</h1>
      </div>
      <div className="Skill-section">
        {Skills.map((skill) => (
          <div
            key={skill.id}
            className="Skill-box"
            onClick={Showtitle}
          >
            {skill.name}
          </div>
        ))}
      </div>
      <div className="Skill-section">
        <ul>
          {filteredSkills.map((category) =>
            category.skills.map((skill, index) => (
              <li key={index}>
                <img
                  src={skillImages[skill]}
                  alt={skill}
                  title={skill}
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Skill;
