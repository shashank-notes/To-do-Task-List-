/* Constant declarations*/
const taskDescription = document.querySelector('#taskname')
// const addTask = document.querySelector('.addTask')
const addTaskForm = document.querySelector('.addTaskForm')
const todolist = document.querySelector('.todolist')
let itemList = document.getElementsByTagName("li")
/*Variable Declarations*/



/* Logic and Other things*/
// var i;
// for (i= 0;i<itemList.length;i++){
//     var span = document.createElement("Span");
//     var text = document.createTextNode("/u00D7");
//     span.className ="close";
//     span.appendChild(text);
//     itemList[i].appendChild(span);

function addTotodolist(event){
    event.preventDefault();
//Capture the text from the entry form and add to the to do list//
    let input = taskDescription.value;
    const taskitem = document.createElement("li")
    // const close   = document.createElement('span')
    // close.className = "close"
    // close.textContent = 'X'
    taskitem.className = 'todolistitem';
    console.log(close)
    taskitem.textContent = input;
    taskitem.style.display = 'list-item'
    todolist.appendChild(taskitem);
    taskDescription.value = "";
}


/* User or Event Based actions to be done*/
addTaskForm.addEventListener('submit',addTotodolist)

