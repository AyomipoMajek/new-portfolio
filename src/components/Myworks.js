import './myworks.css';
import React from 'react';
import pages from '../assets/pages.jpg';
import Herogen from './Herogen';

const Myworks = () => {
  const backgroundImg = pages;
  const title = 'Portfolio';
  const summary = 'Some of my most recent projects';

  const projects = [
    {
      name: 'Awesome Books',
      description: 'This is a basic website that allows users to add/remove books from a list. The list of books added by the user are saved to the local storage and are always available to the user anytime for future purposes and to monitor usage or traffic.',
      resume: 'Users can add or remove books from a list on the website, and the list is then kept locally for convenient access and tracking.',
      image: 'assets/portfolio/updatebooks.png',
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
      resume: 'The budget app is mobile web app designed to help users manage their finances effectively.',
      image: 'assets/portfolio/rubyonrails.png',
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
      resume: 'The todo list website is designed to help users organize and manage their daily tasks efficiently, providing a convenient way to structure and prioritize their schedules.',
      image: 'assets/portfolio/updatetasks.png',
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
      resume: 'The leaderboard website enables players to submit and view game scores, which are stored and updated in real-time using an external Leaderboard API service.',
      image: 'assets/portfolio/updateleaderboard.png',
      technologies: ['React', 'Redux', 'JavaScript', 'Jest', 'API', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://ayomipomajek.github.io/Leaderboard/dist/',
      linkToSource: 'https://github.com/AyomipoMajek/Leaderboard',
      dot: 'assets/Counter.svg',
      canopyli1: 'Front End Dev',
      canopyli2: '2023',
      btnId: 'see-project-4',
      contentDirection: 'reverseGrid',
    },

    {
      name: 'Metrics Webapp',
      description: 'This React capstone project is a mobile web app to check a list of metrics that I created using React and Redux. An API was used to provide numeric data about the topic and then I built the webapp around it.',
      resume: 'Created with React and Redux toolkit, this mobile webapp displays the revenue generated from Vibranium sale and allows filter by year',
      image: 'assets/portfolio/vibranium.png',
      technologies: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      linkToLiveVersion: 'https://mobile-webapp.onrender.com',
      linkToSource: 'https://github.com/AyomipoMajek/react-capstone',
      dot: 'assets/Counter.svg',
      canopyli1: 'Front End Dev',
      canopyli2: '2023',
      btnId: 'see-project-5',
      contentDirection: '',
    },
  ];

  return (
    <div className="work-container">
      <Herogen title={title} summary={summary} backgroundImg={backgroundImg} />
      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myworks;
