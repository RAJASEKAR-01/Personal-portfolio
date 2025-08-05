import React, { useState } from 'react';
import '../Css/Skill.css';

// Images
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
import Sql from '../Images/sql.png';
import NodeJs from '../Images/nodejs.png';
import MongoDB from '../Images/mongodb.png';
import Eclipse from '../Images/eclipse.png';
import IntelliJ from '../Images/intellij.png';
import VMware from '../Images/vmware.png';

function Skill() {
  const skillsData = [
    {
      id: 1,
      name: "Front-end",
      skills: ["HTML", "CSS", "JavaScript", "React JS", "bootstrap"],
    },
    {
      id: 2,
      name: "Back-end",
      skills: ["Node.js", "MongoDB"],
    },
    {
      id: 3,
      name: "Tools",
      skills: ["Git", "GitHub", "Visual Studio", "Eclipse IDE", "IntelliJ IDEA", "VMware"],
    },
    {
      id: 4,
      name: "Programming Language",
      skills: ["C", "C++", "Java"],
    },
    {
      id: 5,
      name: "Database",
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
    "Eclipse IDE": Eclipse,
    "IntelliJ IDEA": IntelliJ,
    VMware: VMware,
    C: C,
    "C++": Cpp,
    Java: Java,
    "Sql plus": Sql,
    "Node.js": NodeJs,
    MongoDB: MongoDB
  };

  const [activeCategory, setActiveCategory] = useState('');

  const handleCategoryClick = (e) => {
    const selected = e.target.innerText;
    setActiveCategory((prev) => (prev === selected ? '' : selected));
  };

  const filteredSkills = activeCategory
    ? skillsData.filter((cat) => cat.name.toLowerCase() === activeCategory.toLowerCase())
    : skillsData;

  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <h1 className="skills-title">Technical Proficiency</h1>

        <div className="category-list">
          {skillsData.map((category) => (
            <div
              key={category.id}
              className={`category-box ${activeCategory === category.name ? 'active' : ''}`}
              onClick={handleCategoryClick}
            >
              {category.name}
            </div>
          ))}
        </div>

        <div className="icons-grid">
          {filteredSkills.map((category) =>
            category.skills.map((skill, idx) => (
              <div className="skill-icon-box" key={idx} title={skill}>
                <img src={skillImages[skill]} alt={skill} />
                <span>{skill}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Skill;
