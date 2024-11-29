import "../Css/Project.css";
import ProjectImage from '../Images/P-weather.png'; 

function Project() {
    const projects = [
        { 
            id: 1, 
            projectname: "Weather Web Application", 
            description: "A real-time weather application showing current conditions and forecasts using the OpenWeather API.",
            technologies: "React.js, CSS, OpenWeather API",
            link: "https://rajasekar-01.github.io/Weather-Website/" 
        },
        { 
            id: 2, 
            projectname: "Personal Portfolio", 
            description: "A personal portfolio showcasing my projects, skills, and contact information. ",
            technologies: "HTML, CSS, JavaScript, Bootstrap",
            link: "https://rajasekar-m-portfolio.netlify.app" 
        },
        { 
            id: 3, 
            projectname: "Profile Card", 
            description: "An interactive profile card built using React.js, showcasing modern design principles.",
            technologies: "React.js, CSS",
            link: "https://RAJASEKAR-01.github.io/PROFILE-CARD--REACT-JS/" 
        },
        { 
            id: 4, 
            projectname: "E-Commerce Front-end", 
            description: "A front-end design for an e-commerce platform featuring a modern, responsive UI.",
            technologies: "HTML, CSS, JavaScript",
            link: "https://rajasekar-ecommerce.netlify.app/" 
        },
        {
            id:5,
            projectname: "Tic-Tac-Toe game",
            description: "An interactive and responsive Tic-Tac-Toe game showcasing game logic, sleek design, and seamless deployment on Netlify.",
            technologies: "HTML, CSS, JavaScript",
            link: "https://tic-tac-toe-game-raja.netlify.app/"
        }
    ];

    function Box({ projectname, description, technologies, link }) {
        return (
            <div className='Project-box'>
                <img src={ProjectImage} alt="Project Preview" />
                <h3>{projectname}</h3>
                <p>{description}</p>
                <small><strong>Technologies:</strong> {technologies}</small>
                <button>
                    <a href={link} target="_blank" rel="noopener noreferrer">Visit Project</a>
                </button>
            </div>
        );
    }

    return (
        <div className='Project-section'>
            <h1>Projects</h1>
            <div className='Project-container'>
                {projects.map((project) => (
                    <Box 
                        key={project.id} 
                        projectname={project.projectname} 
                        description={project.description} 
                        technologies={project.technologies}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Project;
