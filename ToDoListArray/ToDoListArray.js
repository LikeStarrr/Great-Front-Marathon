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
const STATUS_TO_DO = "To Do";
const STATUS_IN_PROGRESS = "In Progress";
const STATUS_DONE = "Done";     

function changeStatus (nameTask, statusTask) {
    for (i=0; i <= list.length; i++){
        for (let key in list[i]){
            if (list[i][key]  === nameTask) {
                list[i].status = statusTask;
            }
        }
    }
}

function getNextId(){
    var maxid = 0;
   
    list.map(function(obj){     
      if (obj.id > maxid) maxid = obj.id;    
    });
    return maxid + 1;      
}

function addTask(nameNewTask, priorityNewTask) {
    const numberNewTask = getNextId();   
    list.push(
        {
        id: numberNewTask,
        name: nameNewTask,
        status: STATUS_TO_DO,
        priority: priorityNewTask,
        } 
    )
}
      
    function deleteTask(nameTask){
        var idTask = 0;
   
        list.map(function(obj){     
        if (obj.name === nameTask) idTask = obj.id;    
        });       
       
        if (idTask>0) {
            list.splice(idTask - 1, 1, {});
        }
    }
    
    function showListByStatus(statusTask){
        let listFilteredByStatus = list.filter(list => list.status === statusTask); 
        if (!listFilteredByStatus.length) {
            console.log("--");
        } else {
            for (let task of listFilteredByStatus) {
                console.log(`id ${task.id}  "${task.name}" `);                       
            };        
        }       
    }

    function showList(){
        let captionToDo = STATUS_TO_DO + ":";
        let captionInProgress = STATUS_IN_PROGRESS +":";
        let captionDone = STATUS_DONE + ":";
               
        console.log(captionToDo);
        showListByStatus(STATUS_TO_DO);
        console.log(captionInProgress);
        showListByStatus(STATUS_IN_PROGRESS);
        console.log(captionDone);
        showListByStatus(STATUS_DONE);
    }

    function ShowAllList(){
        console.log('All ToDoList:')
      for (i=0; i< list.length; i++){
        console.log(list[i]); 
        }  
    }
   
    changeStatus('create a post', 'Done'); 
    addTask('333', 'low');
    addTask('444', 'low');
    deleteTask('333');
    addTask('555', 'low');
    addTask('6666', 'low');
    addTask('7777', 'low');
    deleteTask('555');   
    addTask('2222', 'low');
    ShowAllList(); 
    showList();
    //ShowAllList();



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

    