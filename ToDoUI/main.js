import {PRIORITY_BLOCKS, ADD} from './view.js';

for (let i = 0; i < ADD.BTNS.length; i++) {
	ADD.BTNS[i].addEventListener ('click', function () {
  	alert("Step2");
    let isAddContent = ADD.INPUTS[i].value.trim();
    alert("Step3");
    if (!isAddContent) return;
    alert("Step4");
    const DIV = document.createElement('div');
    DIV.className = 'task';
    alert("Step5");
    DIV.innerHTML = `<label> 
        <input class="task_check" type="checkbox"> 
        <span class="cursor"></span>
      </label>
      <span class="task_text" > ${ADD.INPUTS[i].value} </span>
      <button class="task_delete"><img src="./img/delete-task-icon.svg" alt="-"></button>`	
      alert("Step6");
      PRIORITY_BLOCKS[i].append(DIV);
      alert("Step7");
    ADD.INPUTS[i].value = '';
    alert("Step8");
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

