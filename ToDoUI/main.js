import {PRIORITY_BLOCKS, ADD} from './view.js';

for (let i = 0; i < ADD.BTNS.length; i++) {
	ADD.BTNS[i].addEventListener ('click', function () {
 
    let isAddContent = ADD.INPUTS[i].value.trim();
    try{
       if (!isAddContent) {
         throw "err1";
       }
    } catch(error) {
      if (error=="err1") {
        alert("Enter new task!");
        return;
      }
    }
    
 
    const DIV = document.createElement('div');
    DIV.className = 'task';

    DIV.innerHTML = `<label> 
        <input class="task_check" type="checkbox"> 
        <span class="cursor"></span>
      </label>
      <span class="task_text" > ${ADD.INPUTS[i].value} </span>
      <button class="task_delete"><img src="./img/delete-task-icon.svg" alt="-"></button>`	
 
      PRIORITY_BLOCKS[i].append(DIV);

    ADD.INPUTS[i].value = '';

    DIV.querySelector('.task_check').addEventListener('click', changeColor);
    DIV.querySelector('.task_delete').addEventListener('click', deleteTask); 
  })
}


function changeColor () {
  let task = this.parentElement.parentElement;
  task.classList.toggle('done');
}

function deleteTask () {
  let task = this.parentElement;
  task.remove();
}

