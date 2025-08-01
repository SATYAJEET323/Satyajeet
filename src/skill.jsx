import React from 'react';
import './Skills.css';

// SkillCard Component
const SkillCard = ({ skill, description, icon }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{skill}</h3>
      <p>{description}</p>
    </div>
  );
};

// Skills Data
const skills = [
  {
    skill: 'MongoDB',
    description: 'NoSQL database for handling large amounts of unstructured data.',
    icon: '📦',
  },
  {
    skill: 'MERN Stack',
    description: 'Full-stack JavaScript development using MongoDB, Express, React, and Node.',
    icon: '🌐',
  },
  {
    skill: 'React.js',
    description: 'Building responsive and dynamic web applications.',
    icon: '⚛️',
  },
  {
    skill: 'React Native',
    description: 'Cross-platform mobile app development using JavaScript and React.',
    icon: '📱⚛️',
  },
  {
    skill: 'Next.js',
    description: 'Production-grade React framework for server-side rendering and SEO.',
    icon: '❄️',
  },
  {
    skill: 'Node.js',
    description: 'JavaScript runtime for scalable server-side and networking applications.',
    icon: '🌐',
  },
  {
    skill: 'Express.js',
    description: 'Minimal and flexible Node.js web application framework.',
    icon: '🚀',
  },
  {
    skill: 'JavaScript',
    description: 'Core language for front-end and back-end web development.',
    icon: '🟨',
  },
  {
    skill: 'HTML & CSS',
    description: 'Foundation for structuring and styling web content.',
    icon: '📄',
  },
  {
    skill: 'Python',
    description: 'Versatile language widely used in AI, ML, and scripting.',
    icon: '🐍',
  },
  {
    skill: 'Java',
    description: 'General-purpose language used for Android and enterprise applications.',
    icon: '☕',
  },
  {
    skill: 'SQL',
    description: 'Structured query language for managing relational databases.',
    icon: '🗄️',
  },
  {
    skill: 'PHP',
    description: 'Scripting language for dynamic web content and backend services.',
    icon: '🐘',
  },
  {
    skill: 'WordPress',
    description: 'CMS for website design and content management.',
    icon: '🌐',
  },
  {
    skill: 'WebFlow',
    description: 'No-code tool for designing responsive websites visually.',
    icon: '🧩',
  },
  {
    skill: 'Data Science & ML',
    description: 'Analyzing data to extract insights and build intelligent systems.',
    icon: '📊',
  },
  {
    skill: 'NLP',
    description: 'Working with natural language using AI techniques.',
    icon: '🗣️',
  },
  {
    skill: 'DSA-Solving',
    description: 'Solving problems using Data Structures and Algorithms.',
    icon: '🧠',
  },
  {
    skill: 'Project Management',
    description: 'Planning and executing software projects using Agile and Scrum.',
    icon: '📋',
  },
];

const software = [
  {
    skill: 'Visual Studio Code',
    description: 'Lightweight code editor with powerful extensions.',
    icon: '🖥️',
  },
  {
    skill: 'GitHub',
    description: 'Platform for hosting, sharing, and reviewing code.',
    icon: '🐙',
  },
  {
    skill: 'Git',
    description: 'Distributed version control system for tracking code changes.',
    icon: '🔀',
  },
  {
    skill: 'Android Studio',
    description: 'IDE for building native Android apps with Java/Kotlin.',
    icon: '🤖',
  },
  {
    skill: 'MySQL',
    description: 'Popular relational database management system.',
    icon: '🗄️',
  },
  {
    skill: 'Figma',
    description: 'Collaborative design tool for UI/UX wireframing and prototyping.',
    icon: '🎨',
  },
  {
    skill: 'Google Colab',
    description: 'Online Python notebook with GPU support for ML and data science.',
    icon: '☁️',
  },
  {
    skill: 'XAMPP',
    description: 'Open-source local web server for PHP and MySQL development.',
    icon: '🖧',
  },
  {
    skill: 'Postman',
    description: 'API testing and collaboration platform.',
    icon: '📫',
  },
  {
    skill: 'Jupyter Notebook',
    description: 'Interactive Python notebooks for data science and research.',
    icon: '📒',
  },
];


// App Component
function Skill() {
  return (
    <div className="skills-section">
      <div className="skills" id="skills">
        <h1>My Technical Skills</h1>
        <div className="skills-container">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              skill={skill.skill}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>

      <div className="software" id="software">
        <h1>Software I Use</h1>
        <div className="skills-container">
          {software.map((tool, index) => (
            <SkillCard
              key={index}
              skill={tool.skill}
              description={tool.description}
              icon={tool.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;