import React from 'react'
import '../Css/About.css'
import Raja from '../Images/Raja.jpg';
function About() {
  return (
    <div className='About-section'>
      <div className='About-container'>
        <div className='About-Head'>
          <h1>About</h1>
        </div>
        <div className='About'>
        <div className='About-box'>
          <p>"Innovating the Digital World, One Line of Code at a Time"</p>
          <p>I'm Rajasekar, a self-motivated developer who loves crafting functional and visually appealing web applications. My passion lies in transforming ideas into interactive user experiences.</p>
          <p>🏆 Achievements: Winner of Brototype's web development competition.</p>
          <p>🎯 Current Focus: Building scalable applications and mastering backend integration.</p>
          <p>💼 Goal: Securing a top-tier role in a product-based company to create innovative solutions.          </p>
          <p>🌱 Fun Fact: I’m a fitness enthusiast who believes in balancing health and technology!          </p>
          <p>Feel free to explore my journey, skills, and projects. Together, let’s create something extraordinary!          </p>
        </div>
        <div className='About-box'> 
        <img src={Raja} alt="" />
        </div>
        </div>
        

      </div>
    </div>
  )
}

export default About