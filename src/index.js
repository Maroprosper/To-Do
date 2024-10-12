import layout from "./modules/render";
import { projects, createProject,addProject,createTask,updateTask, addTask, decideProject, deleteToDo } from "./modules/logic";
import { displayProjects, reset, displayTasks, updateList, close} from "./modules/dom";
import { backUp, restore} from "./modules/storage";
layout();
let sn = 1;
const taskDisplay = document.querySelector('#main');
const projectName = document.querySelector('#projectName');
const projectDesc = document.querySelector('#projectDesc');
const projectDrop = document.querySelector('#prompt');
const TaskTitle = document.querySelector('#TaskTitle');
const TaskDesc = document.querySelector('#TaskDesc');
const TaskDate = document.querySelector('#TaskDate');
const TaskPrior = document.querySelector('#TaskPrior');
window.addEventListener('load', () => {
    if(localStorage){
        sn = restore().number;
        projects = restore().array;
        displayProjects(projects);
        updateList(projectDrop, projects);
        displayTasks(taskDisplay,projects);
    }
});

document.querySelector('#submit').addEventListener('click', () => {
    addProject((createProject(projectName.value, projectDesc.value)));
    displayProjects(projects);
    updateList(projectDrop, projects);
    reset(projectName, projectDesc);
    close();
    backUp(sn, projects);
});
document.querySelector('#click').addEventListener('click', () => {
    sn++;
    addTask((projects[decideProject(projectDrop.value, projects)].tasks),createTask(TaskTitle.value,TaskDesc.value,TaskDate.value, TaskPrior.value , 'false', sn))
    reset(projectDrop,TaskTitle, TaskDesc, TaskPrior, TaskDate);
    displayTasks(taskDisplay,projects);
    displayProjects(projects);
    close();
    backUp(sn, projects);
    console.log(localStorage);
});
//add event listener to delete tasks
const addDelete = (item, index) => {
    projects = deleteToDo(projects ,decideProject(item, projects), index);
    backUp(sn, projects);
    displayTasks(taskDisplay,projects);
};
const addCheck = (item, index, value) => {
    projects = updateTask(projects ,decideProject(item, projects), index, value);
    backUp(sn, projects);
    displayTasks(taskDisplay,projects);
};

updateList(projectDrop, projects);
displayProjects(projects);
export {addDelete, addCheck};