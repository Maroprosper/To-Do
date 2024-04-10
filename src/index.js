import layout from "./modules/render";
import { projects, createProject,addProject } from "./modules/logic";
import { displayProjects } from "./modules/dom";
layout();

document.querySelector('.form2 button[type="button"]').addEventListener('click', () => {
    addProject(createProject(document.querySelector('.form2 input').textContent, document.querySelector('.form2 textarea').textContent));
    alert("successful");
});