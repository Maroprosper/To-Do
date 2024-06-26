const sideMenu = (element) => {
    const aside = document.createElement("aside");
    const project = document.createElement("p");
    project.textContent = "Projects";
    aside.appendChild(project);
    const projects = document.createElement("div");
    const list = document.createElement("ul");
    list.classList.toggle("list");
    projects.appendChild(list);
    aside.appendChild(projects);
    element.appendChild(aside);
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
    const priorities = [{name: "Trivial", value: ""},{name:"Normal", value: ""},
{name:"Critical", value: ""}, {name: "None", value: ""}];
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
const displayProjects = (projects) => {
    const context = document.querySelector(".list");
    context.innerHTML = "";
    for(let i = 0;i < projects.length; i++){
        let list = [];
        list[i] = document.createElement('li');
        list[i].textContent  = projects[i].name;
        context.appendChild(list[i]);
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
    element.innerHTML = '';
    for(let i = 0; i < project.length; i++){
        for(let j = 0; j < (project[i].tasks).length; j++){
            list.push(document.createElement('div'));
            
        }
    }

}
export {sideMenu, popUp, popOut, popPro, displayProjects, reset, updateList};