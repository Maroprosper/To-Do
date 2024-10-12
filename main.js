(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{T:()=>q,x:()=>S});const t=e=>{switch(e){case"#add8e6":return"Trivial";case"#008000":return"Normal";case"#ff0000":return"Critical";default:return"None"}},n=(e,t)=>{const n=document.createElement("ul");let o=[];for(let t=0;t<e.length;t++)o[t]=document.createElement("li"),o[t].textContent=e[t].title,o[t].classList.toggle("listItems"),n.appendChild(o[t]);t.appendChild(n)},o=e=>{const t=document.querySelector(".list");t.innerHTML="";for(let o=0;o<e.length;o++){let l=[],a=[],c=[];l[o]=document.createElement("div"),a[o]=document.createElement("div"),c[o]=document.createElement("span"),c[o].textContent="˅",l[o].appendChild(c[o]),a[o].classList.add("none"),l[o].textContent=`${e[o].name} (${e[o].tasks.length})`,n(e[o].tasks,a[o]),c[o].style.float="right",l[o].appendChild(c[o]),l[o].appendChild(a[o]),l[o].classList.add("proactive"),t.appendChild(l[o]),l[o].addEventListener("click",(()=>{a[o].classList.toggle("block"),l[o].classList.toggle("selected"),"˅"===c[o].textContent?c[o].textContent="˄":c[o].textContent="˅"}))}},l=(...e)=>{for(let t=0;t<e.length;t++)e[t].value=""},a=(e,t)=>{let n=[];e.innerHTML="";const o=document.createElement("option");o.textContent="--Choose task project--",o.value="",e.appendChild(o);for(let o=0;o<t.length;o++)n[o]=document.createElement("option"),n[o].textContent=t[o].name,n[o].value=t[o].name,e.appendChild(n[o])},c=(e,n)=>{e.innerHTML="";let o=[],l=[],a=[],c=[],s=[],r=[],d=[],i=[],u=[],p=[],m=[],h=[],C=[],g=[];for(let e=0;e<n.length;e++)for(let t=0;t<n[e].tasks.length;t++)o.push(document.createElement("div")),l.push(document.createElement("h1")),c.push(document.createElement("p")),m.push(document.createElement("img")),s.push(document.createElement("div")),r.push(document.createElement("div")),d.push(document.createElement("div")),i.push(n[e].name),u.push(document.createElement("input")),p.push(n[e].tasks[t]),h.push(n[e].tasks[t].number),a.push(t);for(let e=0;e<p.length;e++)o[e].classList.toggle("taskContainer"),l[e].classList.toggle("taskName"),c[e].classList.toggle("taskDesc"),s[e].classList.toggle("taskDead"),r[e].classList.toggle("taskPrior"),d[e].classList.toggle("taskDir"),u[e].classList.toggle("taskCheck"),m[e].classList.toggle("taskDel"),u[e].addEventListener("change",(t=>{u[e].checked?q(i[e],a[e],!0):q(i[e],a[e],!1)})),u[e].type="checkbox",!0===p[e].status?(u[e].checked=!0,l[e].classList.add("strikethrough"),c[e].classList.add("strikethrough")):(u[e].checked=!1,l[e].classList.remove("strikethrough"),c[e].classList.remove("strikethrough")),l[e].textContent=p[e].title,c[e].textContent=p[e].description,s[e].textContent=p[e].dueDate,r[e].textContent=t(p[e].priority),d[e].textContent=i[e],m[e].src="./assets/trash.svg",m[e].alt="erase icon",m[e].addEventListener("click",(t=>{S(i[e],a[e])})),o[e].appendChild(l[e]),o[e].appendChild(c[e]),o[e].appendChild(s[e]),o[e].appendChild(m[e]),o[e].appendChild(r[e]),o[e].appendChild(d[e]),o[e].appendChild(u[e]),o[e].style.borderLeft=`2px solid ${p[e].priority}`;C=h.map(((e,t)=>({value:e,index:t}))),C.sort(((e,t)=>e.value-t.value)),g=C.map((e=>e.index));for(let t=0;t<g.length;t++)e.appendChild(o[g[t]])},s=()=>{document.querySelector(".form2").style.display="none",document.querySelector(".form1").style.display="none"},r=document.querySelector("body");let d=[],i=function(e,t){return{name:e,description:t,tasks:[]}},u=function(e){d.push(e)},p=(e,t)=>{let n=0;return t.forEach((o=>{e===o.name&&(n=t.indexOf(o))})),n},m=i("Default","This is the default project directory for this app");u(m);const h=(e,t)=>{localStorage.setItem("count",e.toString()),localStorage.setItem("projects",JSON.stringify(t))},C=()=>({number:parseInt(localStorage.getItem("count")),array:JSON.parse(localStorage.getItem("projects"))});(()=>{(e=>{const t=document.createElement("aside"),n=document.createElement("p");n.textContent="Projects",t.appendChild(n);const o=document.createElement("div");o.classList.add("taskBox");const l=document.createElement("ul");l.classList.toggle("list"),o.appendChild(l),t.appendChild(o),e.appendChild(t)})(r);const e=document.createElement("header"),t=document.createElement("h1");t.textContent="ToDo",e.appendChild(t);const n=document.createElement("div");n.classList.toggle("menu"),e.appendChild(n),function(){for(let e=0;e<9;e++){let t=[];t[e]=document.createElement("div"),t[e].classList.toggle("box"),n.appendChild(t[e])}}(),n.addEventListener("click",(()=>{document.querySelector("aside").classList.toggle("block")}));const o=document.createElement("main");o.id="main";const l=document.createElement("div");l.classList.toggle("hover");const a=document.createElement("div"),c=document.createElement("p");c.textContent="+",c.classList.toggle("plus"),a.appendChild(c),l.appendChild(a),(e=>{const t=document.createElement("div");t.textContent="Add Task",t.classList.toggle("task"),e.appendChild(t),t.addEventListener("click",(()=>{document.querySelector(".form2").style.display="none",document.querySelector(".form1").style.display="flex"}));const n=document.createElement("div");n.textContent="Add Project",n.classList.toggle("project"),e.appendChild(n),n.addEventListener("click",(()=>{document.querySelector(".form1").style.display="none",document.querySelector(".form2").style.display="flex"}))})(l),(e=>{const t=document.createElement("form");t.classList.toggle("form1"),t.name="taskForm";const n=document.createElement("button");n.textContent="X",n.type="button",n.classList.toggle("close"),t.appendChild(n);const o=document.createElement("input");o.type="text",o.name="title",o.placeholder="Enter task name",o.id="TaskTitle",o.required="true",t.appendChild(o);const l=document.createElement("textarea");l.name="description",l.placeholder="Describe your Task",l.id="TaskDesc",l.required="true",t.appendChild(l);const a=document.createElement("label");a.textContent="Deadline: ",a.setAttribute("for","TaskDate");const c=document.createElement("input");c.type="date",c.name=" name",c.id="TaskDate",c.required="true",a.appendChild(c),t.appendChild(a);const s=document.createElement("select");s.id="TaskPrior",s.name="priority",s.required="true";const r=document.createElement("option");r.textContent="--Choose task priority--",r.value="",s.appendChild(r);const d=[{name:"Trivial",value:"#add8e6"},{name:"Normal",value:"#008000"},{name:"Critical",value:"#ff0000"},{name:"None",value:"#808080"}];let i=[];for(let e=0;e<d.length;e++)i[e]=document.createElement("option"),i[e].textContent=d[e].name,i[e].value=d[e].value,s.appendChild(i[e]);t.appendChild(s);const u=document.createElement("select");u.id="prompt",u.name="projects",u.required="true",t.appendChild(u);const p=document.createElement("button");p.textContent="submit",p.setAttribute("id","click"),p.type="button",t.appendChild(p),e.appendChild(t),n.addEventListener("click",(e=>{t.style.display="none"}))})(r),(e=>{const t=document.createElement("form");t.classList.toggle("form2"),t.name="projectForm";const n=document.createElement("button");n.textContent="X",n.type="button",n.classList.toggle("close"),t.appendChild(n);const o=document.createElement("input");o.type="text",o.name="title",o.value="",o.setAttribute("id","projectName"),o.placeholder="Enter project Name",o.required="true",t.appendChild(o);const l=document.createElement("textarea");l.name="description",l.value="",l.placeholder="Enter your project description",l.setAttribute("id","projectDesc"),l.required="true",t.appendChild(l);const a=document.createElement("button");a.textContent="submit",a.setAttribute("id","submit"),a.type="button",t.appendChild(a),e.appendChild(t),n.addEventListener("click",(e=>{t.style.display="none"}))})(r),a.addEventListener("click",(e=>{document.querySelector(".task").classList.toggle("block"),document.querySelector(".project").classList.toggle("block"),"+"===c.textContent?c.textContent="-":c.textContent="+"}));const s=document.createElement("footer"),d=document.createElement("p");d.textContent="Maro@sabiDEVs",s.appendChild(d),r.appendChild(e),r.appendChild(o),r.appendChild(l),r.appendChild(s)})();let g=1;const E=document.querySelector("#main"),y=document.querySelector("#projectName"),k=document.querySelector("#projectDesc"),v=document.querySelector("#prompt"),L=document.querySelector("#TaskTitle"),f=document.querySelector("#TaskDesc"),x=document.querySelector("#TaskDate"),b=document.querySelector("#TaskPrior");window.addEventListener("load",(()=>{localStorage&&(g=C().number,d=C().array,o(d),a(v,d),c(E,d))})),document.querySelector("#submit").addEventListener("click",(()=>{u(i(y.value,k.value)),o(d),a(v,d),l(y,k),s(),h(g,d)})),document.querySelector("#click").addEventListener("click",(()=>{var e,t;g++,e=d[p(v.value,d)].tasks,t=function(e,t,n,o,l=!1,a){return""==o&&(o="#808080"),{title:e,description:t,dueDate:n,priority:o,status:l,number:a}}(L.value,f.value,x.value,b.value,"false",g),e.push(t),l(v,L,f,b,x),c(E,d),o(d),s(),h(g,d),console.log(localStorage)}));const S=(e,t)=>{d=((e,t,n)=>(e[t].tasks.splice(n,1),e))(d,p(e,d),t),h(g,d),c(E,d)},q=(e,t,n)=>{d=((e,t,n,o)=>(e[t].tasks[n].status=o,e))(d,p(e,d),t,n),h(g,d),c(E,d)};a(v,d),o(d)})();