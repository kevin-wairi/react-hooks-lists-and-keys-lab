import React from "react";
import ProjectItem from "./ProjectItem";


function ProjectList({ projects }) {
  console.log(projects);

const projData = projects.map((project)=> {
    return (
      <div id="project-list" key={project.id}>
        <ProjectItem name={project.name} about={project.about} technologies={project.technologies}/>
      </div>
    )})

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* render ProjectItem components here */}
        {projData}
      </div>
    </div>
  );
}

export default ProjectList;
