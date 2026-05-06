import React from 'react';
import Hero from '../components/Hero';
import StatsTicker from '../components/StatsTicker';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Education from '../components/Education';
import ProjectsTerminal from '../components/ProjectsTerminal';
import AboutStatement from '../components/AboutStatement';
import Contact from '../components/Contact';
import GitHubStats from '../components/GitHubStats';

const Home = () => {
  return (
    <main>
      <Hero />
      <StatsTicker />
      <ExperienceTimeline />
      <Education />
      <ProjectsTerminal />
      <GitHubStats />
      <AboutStatement />
      <Contact />
    </main>
  );
};

export default Home;
