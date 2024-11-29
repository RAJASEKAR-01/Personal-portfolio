import React, { useEffect, useRef } from 'react';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';
import Skill from './Components/Skill';

function App() {
    const sections = useRef([]); // Use an array to store section refs

    useEffect(() => {
        // Ensure sections exist
        if (!sections.current) return;

        // Create Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the element is visible
        );

        // Attach observer to each section
        sections.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect(); // Cleanup
    }, []);

    return (
        <div>
            <Navbar />
            <div
                id="home"
                ref={(el) => (sections.current[0] = el)}
                className="hidden"
            >
                <Home />
            </div>
            <div
                id="about"
                ref={(el) => (sections.current[1] = el)}
                className="hidden"
            >
                <About />
            </div>
            <div
                id="skill"
                ref={(el) => (sections.current[2] = el)}
                className="hidden"
            >
                <Skill />
            </div>
            <div
                id="projects"
                ref={(el) => (sections.current[3] = el)}
                className="hidden"
            >
                <Project />
            </div>
            <div
                id="contact"
                ref={(el) => (sections.current[4] = el)}
                className="hidden"
            >
                <Contact />
            </div>
        </div>
    );
}

export default App;
