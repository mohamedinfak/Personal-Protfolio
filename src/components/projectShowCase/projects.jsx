import React,{useContext} from 'react';
import './projects.css';
import ProjectShowCase from './projectShowCase';
import { themeContext } from '../../Context';
import ecommerce from '../../img/e-commerce.png';
import weatherapp from '../../img/weather app.png';
import tasktrcker from '../../img/tasktrcker.png';
import Portfolioweb from '../../img/portfolio.png';
import todoapp from '../../img/todo.png';
import quizeapp from '../../img/q.png';
import TourisamApp from '../../img/tourisam.jpg';
import certificateVerfication from '../../img/cerv.png';

function Projects() {



  const projectData = [
    {
      image: Portfolioweb ,
      projectName: 'Portfolio Website',
      details: 'A modern and responsive portfolio built with React.',
      gitLink: 'https://github.com/mohamedinfak/persnal-Portfolio.git',
      liveLink: 'https://mohamedinfak.github.io/persnal-Portfolio/',
    },
    {
      image: ecommerce,
      projectName: 'E-commerce App',
      details: 'An online store built with React and Node.js.',
      gitLink: 'https://github.com/username/ecommerce',
      liveLink: 'https://ecommerce-live-link.com',
    },
    {
      image: weatherapp,
      projectName: 'Weather App',
      details: 'A weather app built with React and OpenWeatherMap API using HTMl ,css,JavaScript.',
      gitLink: 'https://github.com/mohamedinfak/Weather-App.git',
      liveLink: 'https://mohamedinfak.github.io/Weather-App/',
    },
    {
      image: tasktrcker,
      projectName: 'Task Tracker',
      details: 'A task tracking app tool built with React and Node.js, MongoDB, and Express.',
      gitLink: 'https://github.com/username/social-media',
      liveLink: 'https://social-media-live-link.com',
    },
    {
      image: todoapp,
      projectName: 'Todo App',
      details: 'A Todo app tool built with HTML, CSS, and JavaScript.',
      gitLink: 'https://github.com/mohamedinfak/To-Do-List-App.git',
      liveLink: 'https://mohamedinfak.github.io/To-Do-List-App/',
    },
    {
      image: quizeapp,
      projectName: 'Quize App',
      details: 'A Quize app tool built with HTML, CSS, boststrap and JavaScript,.',
      gitLink: 'https://github.com/mohamedinfak/Interactive-Quiz-App.git',
      liveLink: 'https://mohamedinfak.github.io/Interactive-Quiz-App/',
    },{
      image: TourisamApp,
      projectName: 'Tourisam Management ',
      details: ' built Technology with Php, MySql, HTML, CSS and JavaScript.',
      gitLink: 'https://github.com/mohamedinfak/TourisamManagementSystem.git',
      liveLink: 'https://Tourisam-live-link.com',
    },{
      image: certificateVerfication,
      projectName: 'Certificate Verfication ',
      details: 'A  built Technology with Nextjs,Nodejs,MySql,Prisma,  Tailwind CSS and TypeScript.',
      gitLink: 'https://github.com/username/task-manager',
      liveLink: 'https://task-manager-live-link.com',
    },
   
  ];
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="projects">
  <h1 style={{ textAlign: 'center', margin: '20px 0', color: darkMode ? 'white' : '' }}>
    My Projects
  </h1>
  <div className="project-grid">
    {projectData.map((project, index) => (
      <ProjectShowCase
        key={index}
        image={project.image}
        projectName={project.projectName}
        details={project.details}
        gitLink={project.gitLink}
        liveLink={project.liveLink}
      />
    ))}
  </div>
</div>

  );
}

export default Projects;
