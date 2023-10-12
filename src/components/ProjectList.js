import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const mappedProject = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  ));

  // return <li>{project}</li>;

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{mappedProject}</div>
    </div>
  );
}

export default ProjectList;
