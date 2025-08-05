import "../Css/Project.css";
import WeatherImg from '../Images/Weatherweb.png';
import PortfolioImg from '../Images/portfolio.png';
import TicTacToeImg from '../Images/tic-tac-toe.png';
import EcommerceMERNImg from '../Images/Ecommerce.png'; // Add your image here

function Project() {
    const projects = [
        { 
            id: 1, 
            image: EcommerceMERNImg,
            projectname: "E-Commerce MERN Web App",
            description: "Full-stack e-commerce app with login, cart, payment, and admin features.",
            technologies: "MongoDB, Express.js, React.js, Node.js",
            link: "https://ecommerce-new-demo.vercel.app/"  
        },
        { 
            id: 2, 
            image: WeatherImg,
            projectname: "Weather App", 
            description: "Real-time weather app using OpenWeather API.",
            technologies: "React.js, CSS, OpenWeather API",
            link: "https://rajasekar-01.github.io/Weather-Website/"
            
        },
        {
            id: 3,
            image: PortfolioImg,
            projectname: "Personal Portfolio", 
            description: "Modern portfolio to showcase projects and skills.",
            technologies: "HTML, CSS, JS, Bootstrap",
            link: "https://rajasekar-m-portfolio.netlify.app" 
            
        },
        {
            id: 4,
            image: TicTacToeImg,
            projectname: "Tic-Tac-Toe Game",
            description: "Fun, responsive 2-player game in JavaScript.",
            technologies: "HTML, CSS, JavaScript",
            link: "https://tic-tac-toe-game-raja.netlify.app/"
            
        }
    ];

    return (
        <section className="glass-section">
            <h1 className="glass-title">🚀 Projects</h1>
            <div className="glass-grid">
                {projects.map((project, index) => (
                    <div className="glass-card" key={project.id} style={{ animationDelay: `${index * 0.2}s` }}>
                        <img src={project.image} alt={project.projectname} />
                        <div className="glass-content">
                            <h3>{project.projectname}</h3>
                            <p>{project.description}</p>
                            <small><strong>Tech:</strong> {project.technologies}</small>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <button>View Project</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Project;
