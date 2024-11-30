import React from 'react';
import '../Css/Home.css';
import { TypeAnimation } from 'react-type-animation';
import { AwesomeButtonProgress } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

function Home() {
  const viewResume = () => {
    window.open('/Resume.jpg', '_blank'); // Resume image
  };

  const contactMe = () => {
    window.open('https://wa.me/919677978876', '_blank'); // Replace with your WhatsApp number
  };

  return (
    <div className='Home-section'>
    <div className='Home-Container'>
      <div className='box'>
        <div className='content'>
          <h1>Hello!</h1>
          <TypeAnimation
            sequence={[
              'I am Rajasekar.M',
              2000,
              'I am Web Developer',
              2000,
              'I am Final Year Student',
              2000
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          <p>Pursing Bsc CS with Cyber Security at Dr.SNS Rajalakshmi College of Arts and Science. My passion lies in building innovative solutions with code and learning new technologies. I specialize in web development and I love working on projects that solve real-world problems.</p>
          <div className='Home-Btn'>
            <button className='normal' onClick={contactMe}>Contact Me</button>
            <AwesomeButtonProgress
              type="primary"
              onPress={(_, next) => {
                viewResume();
                next(); // Call next() to indicate the action is complete
              }}
            >
              View Resume Image
            </AwesomeButtonProgress>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
