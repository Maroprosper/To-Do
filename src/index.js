import layout from "./modules/render";
import { projects, createProject,addProject,createTask, addTask, decideProject } from "./modules/logic";
import { displayProjects, reset, displayTasks, updateList, close} from "./modules/dom";
layout();
const taskDisplay = document.querySelector('#main');
const projectName = document.querySelector('#projectName');
const projectDesc = document.querySelector('#projectDesc');
const projectDrop = document.querySelector('#prompt');
const TaskTitle = document.querySelector('#TaskTitle');
const TaskDesc = document.querySelector('#TaskDesc');
const TaskDate = document.querySelector('#TaskDate');
const TaskPrior = document.querySelector('#TaskPrior');
document.querySelector('#submit').addEventListener('click', () => {
    addProject((createProject(projectName.value, projectDesc.value)));
    displayProjects(projects);
    updateList(projectDrop, projects);
    reset(projectName, projectDesc);
    close();
});
document.querySelector('#click').addEventListener('click', () => {
    addTask((projects[decideProject(projectDrop.value, projects)].tasks),createTask(TaskTitle.value,TaskDesc.value,TaskDate.value, TaskPrior.value , 'false'))
    reset(projectDrop,TaskTitle, TaskDesc, TaskPrior, TaskDate);
    displayTasks(taskDisplay,projects);
    displayProjects(projects);
    close();
});
updateList(projectDrop, projects);
displayProjects(projects);