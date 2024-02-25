(function toDoLogic() {
  let createTask = function (title, description, dueDate, priority, status) {
    return { title, description, dueDate, priority, status };
  };
  let addTask = function (project, task) {
    project.push(task);
  };
  let createProject = function (name) {
    let tasks = [];
    return { name, tasks };
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
})();
(function toDoDom() {
  const body = document.querySelector("body");
  const layout = () => {
    const header = document.createElement("header");
    const h1 = document.createElement("h1");
    h1.textContent = "ToDo";
    header.appendChild(h1);
    const menu = document.createElement("div");
    menu.classList.toggle("menu");
    header.appendChild(menu);
    (function (){
      for (let i = 0; i < 9; i++) {
        let box = [];
        box[i] = document.createElement("div");
        box[i].classList.toggle("box");
        menu.appendChild(box[i]);
      }
    })();
    menu.addEventListener('click', () => {
        document.querySelector('aside').style.display = 'block';
    });
    const main = document.createElement("main");
    const hover = document.createElement("div");
    hover.classList.toggle("hover");
    const hoverText = document.createElement("div");
    hoverText.textContent = "+";
    hoverText.classList.toggle("plus");
    hover.appendChild(hoverText);
    sideMenu(body);
    popOut(hover);
    popUp(body);
    hoverText.addEventListener("click", (e) => {
        document.querySelector('.task').style.display = 'block';
        document.querySelector('.project').style.display = 'block';
    });
    const footer = document.createElement("footer");
    const right = document.createElement("p");
    right.textContent = "Maro@sabiDEVs";
    footer.appendChild(right);
    body.appendChild(header);
    body.appendChild(main);
    body.appendChild(hover);
    body.appendChild(footer);
  };
  const sideMenu = (element) => {
    const aside = document.createElement("aside");
    const project = document.createElement("p");
    project.textContent = "Projects";
    aside.appendChild(project);
    const projects = document.createElement("div");
    aside.appendChild(projects);
    const task = document.createElement("p");
    task.textContent = "Tasks";
    aside.appendChild(task);
    const tasks = document.createElement("div");
    aside.appendChild(tasks);
    element.appendChild(aside);
  };
  const popOut = (element) => {
    const task = document.createElement("div");
    task.textContent = "Add Task";
    task.classList.toggle('task');
    element.appendChild(task);
    task.addEventListener('click', () => {
        document.querySelector('.form').style.display = 'flex';
    });
    const project = document.createElement("div");
    project.textContent = "Add Project";
    project.classList.toggle('project');
    element.appendChild(project);
    return {task, project};
  };
  const popUp = (element) => {
    const form = document.createElement("form");
    form.classList.toggle('form');
    const close = document.createElement("button");
    close.textContent = 'X';
    close.type = 'button';
    form.appendChild(close);
    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "";
    form.appendChild(title);
    const description = document.createElement("textarea");
    form.appendChild(description);
    const time = document.createElement("input");
    time.type = "date";
    form.appendChild(time);
    const priority = document.createElement("select");
    form.appendChild(priority);
    const submit = document.createElement("button");
    submit.textContent = 'submit';
    submit.type = "button";
    form.appendChild(submit);
    element.appendChild(form);
    close.addEventListener('click', () => {
        alert('working');
    });
  };
  layout();
})();
