import React, { Component, useState } from "react";
import "../styles/App.css";
const projects = [
  {
    id: 1,
    projectname: "abcde",
    projectdescription: "sdfghjkl;",
  },
  {
    id: 2,
    projectname: "abchfde",
    projectdescription: "sdfghjjhjsdkfslkjflskkmslkdmkl;",
  },
];
const App = () => {
  return (
    <div id="main" className="ns-wrapper">
      {projects.map((project)=>( 
        <div key={project.id} className="project-item">
      <h1 data-ns-test="project-name">
        {project.projectname}
        </h1>
      <h6 data-ns-test="project-description">
        {project.projectdescription}
        </h6>
       </div>
       ))

      }
      
    </div>
  );
};

export default App;
