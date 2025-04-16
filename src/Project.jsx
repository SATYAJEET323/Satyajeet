// project.jsx
import React from 'react';
import './project.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-card-content">
        <h2 className="project-title">{project.title}</h2>
        <p className="project-description">{project.description}</p>
        <div className="project-buttons">
          <a
            href={project.repoLink}
            className="project-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
          <a
            href={project.liveLink}
            className="project-button secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Project
          </a>
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  const projects = [
    {
      title: 'Cafe Management',
      description: 'A simple Cafe Management System built with Python and Tkinter.',
      repoLink: 'https://github.com/SATYAJEET323/Cafe-Managment',
      liveLink: 'https://example.com/cafe-live',
    },
    {
      title: 'Gym Locator',
      description: 'Helps users find nearby gyms with an intuitive UI.',
      repoLink: 'https://github.com/SATYAJEET323/GYM-LOCATOR',
      liveLink: 'https://example.com/gym-locator',
    },
    {
      title: 'Railway Reservation System',
      description: 'A railway ticket booking and management system.',
      repoLink: 'https://github.com/SATYAJEET323',
      liveLink: 'https://example.com/railway-reservation',
    },
    {
      title: 'DSA Code Snippets',
      description: 'LeetCode answers in multiple languages, neatly organized.',
      repoLink: 'https://github.com/SATYAJEET323/DSA-Snippets',
      liveLink: 'https://satyajeet323.github.io/DSA-Snippets',
    },
    {
      title: 'Face Detection Model',
      description: 'YOLOv8-based face detection using Python and OpenCV.',
      repoLink: 'https://github.com/SATYAJEET323/Face-Detection',
      liveLink: 'https://satyajeet323.github.io/raw_prj/',
    },
    {
      title: 'Music Player',
      description: 'A sleek web-based music player built with HTML, CSS & JS.',
      repoLink: 'https://github.com/SATYAJEET323/CodexTune/',
      liveLink: 'https://example.com/music-player',
    },
    {
      title: 'CodeCypherAI - Chatbot',
      description: 'A smart AI-powered chatbot built with React, Express & Gemini API.',
      repoLink: 'https://github.com/SATYAJEET323/CodeCypherAI',
      liveLink: 'https://codecypher.netlify.app',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with Vite and React showcasing projects & skills.',
      repoLink: 'https://github.com/SATYAJEET323/Portfolio',
      liveLink: 'https://your-portfolio.netlify.app',
    },
    {
      title: 'Expense Tracker App',
      description: 'A MERN stack app for managing and analyzing daily expenses.',
      repoLink: 'https://github.com/SATYAJEET323/Expense-Tracker',
      liveLink: 'https://expense-trackr.netlify.app',
    },
    {
      title: 'Weather Forecast App',
      description: 'Live weather info fetched via OpenWeatherMap API in React.',
      repoLink: 'https://github.com/SATYAJEET323/Weather-App',
      liveLink: 'https://weather-now-react.netlify.app',
    },
    {
      title: 'Blog CMS',
      description: 'A content management system allowing users to post and manage blogs.',
      repoLink: 'https://github.com/SATYAJEET323/Blog-CMS',
      liveLink: 'https://cms-blogs.netlify.app',
    },
    {
      title: 'Task Manager (To-Do App)',
      description: 'Simple and beautiful to-do list app made with React & localStorage.',
      repoLink: 'https://github.com/SATYAJEET323/Task-Manager',
      liveLink: 'https://taskmate.netlify.app',
    },
  ];

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Project;
