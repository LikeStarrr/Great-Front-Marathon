const list = [ 
    { 
        id: 1,
        name: 'create a post', 
        status: 'To Do', 
        priority: 'low'  
    }, 
    { 
        id: 2,
        name: 'test', 
        status: 'To Do', 
        priority: 'high'  
    } 
    ] 
    
function changeStatus (nameTask, statusTask) {
    for (i=0; i <= list.length; i++){
        for (let key in list[i]){
            if (list[i][key]  === nameTask) {
                list[i].status = statusTask;
        }
    }
}
}
    
    function addTask(nameNewTask, priorityNewTask) {
    const number_New_element = list.length + 1 ;
    list.push(
        {
        id: number_New_element,
        name: nameNewTask,
        status: "To Do",
        priority: priorityNewTask,
        } 
    )
    }
      
    function deleteTask(nameTask){
        const resFindTask = list.indexOf(list.name === nameTask, 0);
        if (!~resFindTask) { list.splice(resFindTask, 1);
        }
    }
    
    function showList(){
        let captionToDo = "To Do:";
        let captionInProgress = "In Progress:";
        let captionDone = "Done:";
        let arrToDo = list.filter(list => list.status === "To Do");
        let arrInProgress = list.filter(list => list.status === "In Progress");
        let arrDone = list.filter(list => list.status === "Done");
        if (arrToDo.length === 0) { 
            arrToDo = '-'; }
        if (arrInProgress.length === 0) {
            arrInProgress = '-'; }
        if (arrDone.length === 0) {
            arrDone = '-';} 
        console.log(captionToDo);
        console.log(arrToDo);
        console.log(captionInProgress);
        console.log(arrInProgress);
        console.log(captionDone);
        console.log(arrDone);
    }

    function ShowAllList(){
      for (i=0; i< list.length; i++){
        console.log(list[i]); 
        }  
    }
   
    changeStatus('create a post', 'Done'); 
    //ShowAllList();
    addTask('go to work', 'low');
    //ShowAllList();
    //deleteTask('go to work');
    //ShowAllList();

    showList();


   // addTask('have a walk');
   // addTask('go to work');
   // addTask('come home');
   // changeStatus('write a post', 'Done');
   // changeStatus('go to work', 'In Progress');
   // changeStatus('have a walk', 'Done');
   // deleteTask('make a bed');
   // deleteTask('come home');
    //deleteTask("write a post");
    //deleteTask("have a walk");
    //deleteTask("create a task");
    //deleteTask("go to work");
    //showList();

    