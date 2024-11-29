import React from 'react';
import { Link } from 'react-scroll';
import { FiAlignJustify } from "react-icons/fi";
import '../Css/Navbar.css';

function Navbar() {
    function show() {
        const Sidenavbar = document.querySelector('.side-nav');
        Sidenavbar.classList.toggle('block');
    }

    return (
        <div className='Navbar-section'>
            <div className='nav'>
                <div>
                    <h2>Portfolio</h2>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li>
                            <Link to="skill" smooth={true} duration={500}>Skill</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                    <h2 onClick={show} className='btn'>
                        <FiAlignJustify />
                    </h2>
                </div>
            </div>
            <div className='side-nav'>
                <div>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} duration={500} onClick={show}>Home</Link>
                        </li>
                        <li>
                            <Link to="about" smooth={true} duration={500} onClick={show}>About</Link>
                        </li>
                        <li>
                            <Link to="skill" smooth={true} duration={500} onClick={show}>Skill</Link>
                        </li>
                        <li>
                            <Link to="projects" smooth={true} duration={500} onClick={show}>Projects</Link>
                        </li>
                        <li>
                            <Link to="contact" smooth={true} duration={500} onClick={show}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
