const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   }

function changeStatus (nameTask, statusTask) {
    for (let key in list){
        if (key  === nameTask) {
            list[key] = statusTask;
        }
    }
}

function addTask(nameTask) {
    list[nameTask] = "To Do";    
}
  
function deleteTask(nameTask){
    delete list[nameTask];
}

function showList(){
    let listToDo = "ToDo:\n";
    let listInProgress = "In Progress:\n";
    let listDone = "Done:\n";
    for (let task in list) {
        if (list[task] === "To Do") {
            listToDo += ` "${task}",\n`;
        }  else if (list[task] === "In Progress") {
            listInProgress += ` "${task}",\n`;
        } else if (list[task] === "Done") {
            listDone += ` "${task}",\n`;
        } 
    }
    if (listToDo === "ToDo:\n") listToDo += " \u2013\n";
    if (listInProgress === "In Progress:\n") listInProgress += " \u2013\n";
    if (listDone === "Done:\n") listDone += " \u2013\n";
    
    console.log(listToDo + listInProgress + listDone);
   
}

addTask('have a walk');
addTask('go to work');
addTask('come home');
changeStatus('write a post', 'Done');
changeStatus('go to work', 'In Progress');
changeStatus('have a walk', 'Done');
deleteTask('make a bed');
deleteTask('come home');
//deleteTask("write a post");
//deleteTask("have a walk");
//deleteTask("create a task");
//deleteTask("go to work");
showList();

