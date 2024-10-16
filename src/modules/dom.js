import {addCheck, addDelete} from '../index.js';
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
    form.name = 'taskForm';
    const close = document.createElement("button");
    close.textContent = 'X';
    close.type = 'button';
    close.classList.toggle('close');
    form.appendChild(close);
    const title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.placeholder = "Enter task name";
    title.id = "TaskTitle";
    title.required = 'true';
    form.appendChild(title);
    const description = document.createElement("textarea");
    description.name = "description";
    description.placeholder = "Describe your Task";
    description.id = "TaskDesc";
    description.required = 'true';
    form.appendChild(description);
    const timeLabel = document.createElement('label');
    timeLabel.textContent = "Deadline: ";
    timeLabel.setAttribute('for', 'TaskDate');
    const time = document.createElement("input");
    time.type = "date";
    time.name =" name";
    time.id = "TaskDate";
    time.required = 'true';
    timeLabel.appendChild(time);
    form.appendChild(timeLabel);
    const priority = document.createElement("select");
    priority.id = "TaskPrior";
    priority.name = "priority";
    priority.required = 'true';
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
    prompt.name = "projects";
    prompt.required = 'true';
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
    form.name = "projectForm";
    const close = document.createElement("button");
    close.textContent = 'X';
    close.type = 'button';
    close.classList.toggle('close');
    form.appendChild(close);
    const title = document.createElement("input");
    title.type = "text";
    title.name = "title";
    title.value = "";
    title.setAttribute("id","projectName");
    title.placeholder = "Enter project Name";
    title.required = 'true';
    form.appendChild(title);
    const description = document.createElement("textarea");
    description.name = "description"; 
    description.value = "";
    description.placeholder = "Enter your project description";
    description.setAttribute("id","projectDesc");
    description.required = 'true';
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
        let span = [];
        list[i] = document.createElement('div');
        items[i] = document.createElement('div');
        span[i] = document.createElement('span');
        span[i].textContent  = '˅';
        list[i].appendChild(span[i]);
        items[i].classList.add('none');
        list[i].textContent  = `${projects[i].name} (${(projects[i].tasks).length})`;
        updateTaskDisplay(projects[i].tasks, items[i]);
        span[i].style.float = 'right';
        list[i].appendChild(span[i]);
        list[i].appendChild(items[i]);
        list[i].classList.add('proactive');
        context.appendChild(list[i]);
        list[i].addEventListener("click", () => {
            items[i].classList.toggle('block');
            list[i].classList.toggle('selected');
            if(span[i].textContent === '˅') {
                span[i].textContent = '˄';
            } else {
                span[i].textContent = '˅';
            }
        });
    }
    
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
    element.innerHTML = '';
    let list = [];
    let title = [];
    let position = []
    let description = [];
    let deadline = [];
    let priority = [];
    let projects = [];
    let category = [];
    let status = [];
    let tasks = [];
    let erase = [];
    let numbers = [];
    let nodes = []; 
    let order = [];
    for(let i = 0; i < project.length; i++){
        for(let j = 0; j < (project[i].tasks).length; j++){
            list.push(document.createElement('div'));
            title.push(document.createElement('h1'));
            description.push(document.createElement('p'));
            erase.push(document.createElement('img'));
            deadline.push(document.createElement('div'));
            priority.push(document.createElement('div'));
            projects.push(document.createElement('div'));
            category.push(project[i].name);
            status.push(document.createElement('input'));
            tasks.push((project[i].tasks)[j]);
            numbers.push(((project[i].tasks)[j]).number);
            position.push(j);
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
        erase[k].classList.toggle('taskDel');
        status[k].addEventListener('change', (e) => {
            if(status[k].checked) {
                addCheck(category[k], position[k], true);
            } else {
                addCheck(category[k], position[k], false);
            }
        });
        status[k].type = 'checkbox';
        if (tasks[k].status  === true) {
            status[k].checked = true;
            title[k].classList.add("strikethrough");
            description[k].classList.add("strikethrough");
        } else{
            status[k].checked = false;
            title[k].classList.remove("strikethrough");
            description[k].classList.remove("strikethrough");
        }
        title[k].textContent = tasks[k].title;
        description[k].textContent = tasks[k].description;
        deadline[k].textContent = tasks[k].dueDate;
        priority[k].textContent = choosePriority(tasks[k].priority);
        projects[k].textContent = category[k];
        erase[k].src = './assets/trash.svg';
        erase[k].alt = 'erase icon';
        erase[k].addEventListener("click", (e) => {
            addDelete(category[k], position[k]); 
        })
        list[k].appendChild(title[k]);
        list[k].appendChild(description[k]);
        list[k].appendChild(deadline[k]);
        list[k].appendChild(erase[k]);
        list[k].appendChild(priority[k]);
        list[k].appendChild(projects[k]);
        list[k].appendChild(status[k]);
        list[k].style.borderLeft = `2px solid ${tasks[k].priority}`;       
    }
    nodes = numbers.map((value, index) => ({value, index}));
    nodes.sort((a,b) => a.value - b.value);
    order = nodes.map(item => item.index);
    for(let q = 0; q < order.length; q++) {
        element.appendChild(list[(order[q])]);
    }
 }
const close = () => {
    document.querySelector('.form2').style.display = 'none';
    document.querySelector('.form1').style.display = 'none';
};
export {sideMenu, popUp, popOut, popPro, displayProjects, reset, updateList, displayTasks, close};