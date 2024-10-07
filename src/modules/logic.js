let projects = [];
let createTask = function (title, description, dueDate, priority, status) {
    return { title, description, dueDate, priority, status };
  };
let addTask = function (project, task) {
    project.push(task);
  };
let createProject = function (name, description) {
    let tasks = [];
    return {name, description, tasks};
  };
let addProject = function (project) {
    projects.push(project);
};
let updateTaskTitle = (task, title) => {
    task.title = title;
  };
let updateTaskDescription = (task, description) => {
    task.description = description;
  };
let updateTaskDueDate = (task, dueDate) => {
    task.dueDate = dueDate;
  };
let updateTaskPriority = (task, priority) => {
    task.priority = priority;
  };
let updateTask = (task, status) => {
    task.status = status;
  };
let deleteToDo = () => {};
let deleteProject = () => {};
let updateProjectName = () => {};

let decideProject = (value, project) => {
  let answer = 0;
  project.forEach(element => {
    if(value === element.name){
      answer = project.indexOf(element);
    }
  });
  return answer;
}
let general = createProject('Default', 'This is the default project directory for this app');
addProject(general);
export {createTask, addTask,createProject,addProject, projects, decideProject};