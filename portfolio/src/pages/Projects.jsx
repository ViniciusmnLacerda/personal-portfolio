import React from 'react';
import DrawerAppBar from '../components/DrawerAppBar';
import ImgMediaCard from '../components/ImgMediaCard';
import infoProjects from '../services/infoProjects';
import './Projects.css';

class Projects extends React.Component {
  render() {
    return (
      <div className="main-container">
        <DrawerAppBar color="red" />
        <main className="projects">
          <div>
            <h1 className="projects-title">{'Projects I\'ve Worked On'}</h1>
            <p className="projects-paragraph">{'Here are some Front-end projects I\'ve worked on recently'}</p>
          </div>
          <div className="projects-container">
            {infoProjects.map((project) => {
              const {
                description, title, image, path, href,
              } = project;
              return (
                <div key={title}>
                  <ImgMediaCard
                    description={description}
                    title={title}
                    image={image}
                    path={path}
                    href={href}
                  />
                </div>
              );
            })}
          </div>
        </main>
      </div>
    );
  }
}

export default Projects;
