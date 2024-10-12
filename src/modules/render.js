//render.js

import { popUp, popPro, popOut, sideMenu } from "./dom";
const body = document.querySelector("body");
  const layout = () => {
    sideMenu(body);
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
        document.querySelector('aside').classList.toggle('block');
    });
    const main = document.createElement("main");
    main.id = "main";
    const hover = document.createElement("div");
    hover.classList.toggle("hover");
    const hoverBlock = document.createElement("div");
    const hoverText = document.createElement("p");
    hoverText.textContent = "+";
    hoverText.classList.toggle("plus");
    hoverBlock.appendChild(hoverText);
    hover.appendChild(hoverBlock);
    popOut(hover);
    popUp(body);
    popPro(body);
    hoverBlock.addEventListener("click", (e) => {
        document.querySelector('.task').classList.toggle('block');
        document.querySelector('.project').classList.toggle('block');
        if(hoverText.textContent === '+'){
            hoverText.textContent = '-';
        }
        else{
            hoverText.textContent = '+';
        }
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
  export default layout;