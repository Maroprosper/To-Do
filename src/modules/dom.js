const sideMenu = (element) => {
    const aside = document.createElement("aside");
    const project = document.createElement("p");
    project.textContent = "Projects";
    aside.appendChild(project);
    const projects = document.createElement("div");
    projects.classList.add('taskBox');
    const list = document.createElement("ul");
    list.classList.toggle("list");
    projects.appendChild(list);
    aside.appendChild(projects);
    element.appendChild(aside);
};
const choosePriority = (value) => {
    switch (value) {
      case '#add8e6':
        return  'Trivial';
      break;
      case '#008000':
        return  'Normal';
      break;
      case '#ff0000':
        return  'Critical';
      break;
      case '#808080':
        return  'None';
      break;
      default:
        return 'None';
    }
};
const popOut = (element) => {
    const task = document.createElement("div");
    task.textContent = "Add Task";
    task.classList.toggle('task');
    element.appendChild(task);
    task.addEventListener('click', () => {
        document.querySelector('.form2').style.display = 'none';
        document.querySelector('.form1').style.display = 'flex';
    });
    const project = document.createElement("div");
    project.textContent = "Add Project";
    project.classList.toggle('project');
    element.appendChild(project);
    project.addEventListener('click', () => {
        document.querySelector('.form1').style.display = 'none';
        document.querySelector('.form2').style.display = 'flex';
    });
    return {task, project};
};
const popUp = (element) => {
    const form = document.createElement("form");
    form.classList.toggle('form1');
    const close = document.createElement("button");
    close.textContent = 'X';
    close.type = 'button';
    close.classList.toggle('close');
    form.appendChild(close);
    const title = document.createElement("input");
    title.type = "text";
    title.placeholder = "Enter task name";
    title.id = "TaskTitle";
    form.appendChild(title);
    const description = document.createElement("textarea");
    description.placeholder = "Describe your Task";
    description.id = "TaskDesc";
    form.appendChild(description);
    const timeLabel = document.createElement('label');
    timeLabel.textContent = "Deadline: ";
    timeLabel.setAttribute('for', 'TaskDate');
    const time = document.createElement("input");
    time.type = "date";
    time.id = "TaskDate";
    timeLabel.appendChild(time);
    form.appendChild(timeLabel);
    const priority = document.createElement("select");
    priority.id = "TaskPrior";
    const query = document.createElement('option');
    query.textContent = "--Choose task priority--";
    query.value = "";
    priority.appendChild(query);
    const priorities = [{name: "Trivial", value: "#add8e6"},{name:"Normal", value: "#008000"},
{name:"Critical", value: "#ff0000"}, {name: "None", value: "#808080"}];
    let dropDown = [];
    for(let i = 0; i < priorities.length; i++){
        dropDown[i] = document.createElement('option');
        dropDown[i].textContent = priorities[i].name;
        dropDown[i].value = priorities[i].value;
        priority.appendChild(dropDown[i]);
    }
    form.appendChild(priority);
    const prompt = document.createElement("select");
    prompt.id = "prompt";
    form.appendChild(prompt);
    const submit = document.createElement("button");
    submit.textContent = 'submit';
    submit.setAttribute("id","click");
    submit.type = "button";
    form.appendChild(submit);
    element.appendChild(form);
    close.addEventListener("click",(e) => {
        form.style.display = 'none';
});
  };
const popPro = (element) => {
    const form = document.createElement("form");
    form.classList.toggle('form2');
    const close = document.createElement("button");
    close.textContent = 'X';
    close.type = 'button';
    close.classList.toggle('close');
    form.appendChild(close);
    const title = document.createElement("input");
    title.type = "text";
    title.value = "";
    title.setAttribute("id","projectName");
    title.placeholder = "";
    form.appendChild(title);
    const description = document.createElement("textarea");
    description.value = "";
    description.setAttribute("id","projectDesc");
    form.appendChild(description);
    const submit = document.createElement("button");
    submit.textContent = 'submit';
    submit.setAttribute("id","submit");
    submit.type = "button";
    form.appendChild(submit);
    element.appendChild(form);
    close.addEventListener("click",(e) => {
        form.style.display = 'none';
});
}
const updateTaskDisplay = (array, node) => {
    const container = document.createElement('ul');
    let list = [];
    for(let i = 0; i < array.length; i++){
        list[i] = document.createElement('li');
        list[i].textContent = array[i].title;
        list[i].classList.toggle('listItems');
        container.appendChild(list[i]);
    }
    node.appendChild(container);
};
const displayProjects = (projects) => {
    const context = document.querySelector(".list");
    context.innerHTML = "";
    for(let i = 0;i < projects.length; i++){
        let list = [];
        let items = [];
        list[i] = document.createElement('div');
        items[i] = document.createElement('div');
        items[i].classList.add('none');
        list[i].textContent  = `${projects[i].name} (${(projects[i].tasks).length})`;
        updateTaskDisplay(projects[i].tasks, items[i]);
        list[i].appendChild(items[i]);
        context.appendChild(list[i]);
        list[i].addEventListener("click", () => {
            items[i].classList.toggle('block');
        });
    }
    console.log(projects);
};
const reset = (...param) => {
    for(let i = 0; i < param.length; i++){
        param[i].value = "";
    }
}
const updateList = (node, options) => {
    let list = [];
    node.innerHTML = '';
    const prompt = document.createElement('option');
    prompt.textContent = "--Choose task project--";
    prompt.value = "";
    node.appendChild(prompt);
    for(let i = 0; i < options.length; i++){
        list[i] = document.createElement('option');
        list[i].textContent = options[i].name;
        list[i].value = options[i].name;
        node.appendChild(list[i]);
    }
}
const displayTasks = (element, project) => {
    let list = [];
    let title = [];
    let description = [];
    let deadline = [];
    let priority = [];
    let projects = [];
    let category = [];
    let status = [];
    let tasks = [];
    element.innerHTML = '';
    for(let i = 0; i < project.length; i++){
        for(let j = 0; j < (project[i].tasks).length; j++){
            list.push(document.createElement('div'));
            title.push(document.createElement('h1'));
            description.push(document.createElement('p'));
            deadline.push(document.createElement('div'));
            priority.push(document.createElement('div'));
            projects.push(document.createElement('div'));
            category.push(project[i].name);
            status.push(document.createElement('input'));
            tasks.push((project[i].tasks)[j]);
        }
    }
    for(let k = 0; k < tasks.length; k++){
        list[k].classList.toggle('taskContainer');
        title[k].classList.toggle('taskName');
        description[k].classList.toggle('taskDesc');
        deadline[k].classList.toggle('taskDead');
        priority[k].classList.toggle('taskPrior');
        projects[k].classList.toggle('taskDir');
        status[k].classList.toggle('taskCheck');
        status[k].type = 'checkbox';
        title[k].textContent = tasks[k].title;
        description[k].textContent = tasks[k].description;
        deadline[k].textContent = tasks[k].dueDate;
        priority[k].textContent = choosePriority(tasks[k].priority);
        projects[k].textContent = category[k];
        list[k].appendChild(title[k]);
        list[k].appendChild(description[k]);
        list[k].appendChild(deadline[k]);
        list[k].appendChild(priority[k]);
        list[k].appendChild(projects[k]);
        list[k].appendChild(status[k]);
        list[k].style.borderLeft = `2px solid ${tasks[k].priority}`;
        element.appendChild(list[k]);
    }
}
const close = () => {
    document.querySelector('.form2').style.display = 'none';
    document.querySelector('.form1').style.display = 'none';
};
export {sideMenu, popUp, popOut, popPro, displayProjects, reset, updateList, displayTasks, close};