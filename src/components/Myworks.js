import './myworks.css';
import React from 'react';
import pages from '../assets/pages.jpg';
import Herogen from './Herogen';
import updatebooks from '../assets/portfolio/updatebooks.png';
import rubyonrails from '../assets/portfolio/rubyonrails.png';
import updatetasks from '../assets/portfolio/updatetasks.png';
import updateleaderboard from '../assets/portfolio/updateleaderboard.png';
import vibranium from '../assets/portfolio/vibranium.png';
import calculator from '../assets/portfolio/calculator.png';
import doglovers from '../assets/portfolio/doglovers.png';

const Myworks = () => {
  const backgroundImg = pages;
  const title = 'Portfolio';
  const summary = 'A few of my works';

  const projects = [
    {
      name: 'Awesome Books',
      description: 'This is a basic website that allows users to add/remove books from a list. The list of books added by the user are saved to the local storage and are always available to the user at anytime.',
      image: updatebooks,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://ayomipomajek.github.io/Awesome-Books-Jav/',
      linkToSource: 'https://github.com/AyomipoMajek/Awesome-Books-Jav',
      dot: 'assets/Counter.svg',
      canopyli1: 'Front End Dev',
      canopyli2: '2022',
      btnId: 'see-project-1',
      contentDirection: '',
    },

    {
      name: 'Budget App',
      description: 'It provides features such as user authentication, category creation for budgeting purposes, and the ability to add transactions to track expenses and income.to simplify the process of budgeting.',
      image: rubyonrails,
      technologies: ['RUBY ON RAILS', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://budget-app-3ci8.onrender.com',
      linkToSource: 'https://github.com/AyomipoMajek/budget-app',
      dot: 'assets/Counter.svg',
      canopyli1: 'Back End Dev',
      canopyli2: '2023',
      btnId: 'see-project-2',
      contentDirection: 'reverseGrid',
    },

    {
      name: 'To-Do List',
      description: 'The todo list website is generally used to maintain our day-to-day tasks or list thereby making it easy to work around ones schedule.',
      image: updatetasks,
      technologies: ['Webpack', 'JavaScript', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://ayomipomajek.github.io/to-do-list/dist/',
      linkToSource: 'https://github.com/AyomipoMajek/to-do-list',
      dot: 'assets/Counter.svg',
      canopyli1: 'Front End Dev',
      canopyli2: '2023',
      btnId: 'see-project-3',
      contentDirection: '',
    },

    {
      name: 'Leaderboard',
      description: 'The leaderboard website allows the submission of scores by different players of a game. It also displays the score. All data is preserved in a live external Leaderboard API service.',
      image: updateleaderboard,
      technologies: ['React', 'Redux', 'JavaScript', 'Jest', 'API', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://ayomipomajek.github.io/Leaderboard/dist/',
      linkToSource: 'https://github.com/AyomipoMajek/Leaderboard',
    },

    {
      name: 'Metrics Webapp',
      description: 'This React capstone project is a mobile web app to check a list of metrics that I created using React and Redux. An API was used to provide numeric data about the topic and then I built the webapp around it.',
      image: vibranium,
      technologies: ['React', 'Redux', 'API', 'JavaScript', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://mobile-webapp.onrender.com',
      linkToSource: 'https://github.com/AyomipoMajek/react-capstone',
    },

    {
      name: 'Math Magicians',
      description: 'The "math-magicians" website, built using React, features a dedicated calculator page that functions as a desktop application, allowing users to perform basic calculations with ease.',
      image: calculator,
      technologies: ['React', 'JavaScript', 'HTML', 'SASS'],
      linkToLiveVersion: 'https://math-magicians-orbq.onrender.com/',
      linkToSource: 'https://github.com/AyomipoMajek/math-magicians',
    },

    {
      name: 'Canine Conference',
      description: 'The Canine Conference project serves as a website designed for an upcoming dog lovers conference. It offers details about the event date and includes information from previous conferences. This platform was developed using HTML, CSS, and JavaScript.',
      image: doglovers,
      technologies: ['JavaScript', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://ayomipomajek.github.io/Canine-Conference/',
      linkToSource: 'https://github.com/AyomipoMajek/Canine-Conference',
    },
  ];

  return (
    <div className="work-container">
      <Herogen title={title} summary={summary} backgroundImg={backgroundImg} />
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img src={project.image} alt={project.name} />
              <h4>{project.name}</h4>
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tech">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <section className="btnSection">
                <a className="seeLive" href={project.linkToLiveVersion} target="_blank" rel="noreferrer">
                  <button className="btn modal-btn" id="btn3" type="button">
                    See live
                    {/* <img src="assets/Icon - Export-btn.svg" alt="" /> */}
                  </button>
                </a>
                <a className="seeSource" href={project.linkToSource} target="_blank" rel="noreferrer">
                  <button className="btn modal-btn" id="btn3" type="button">
                    See Source
                    {/* <img src="../assets/Icon -GitHub-btn.svg" alt="" /> */}
                  </button>
                </a>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myworks;
