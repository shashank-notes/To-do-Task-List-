/* Constant declarations*/
const taskDescription = document.querySelector('#taskname')
// const addTask = document.querySelector('.addTask')
const addTaskForm = document.querySelector('.addTaskForm')
const todolist = document.querySelector('.todolist')
/*Variable Declarations*/



/* Logic and Other things*/

function addTotodolist(event){
    event.preventDefault();
//Capture the text from the entry form and add to the to do list//
    let input = taskDescription.value;
    const taskitem = document.createElement("li")
    taskitem.className = 'todolistitem';
    taskitem.textContent = input;
    taskitem.style.display = 'list-item'
    todolist.appendChild(taskitem);
    taskDescription.value = "";
}




/* User or Event Based actions to be done*/
addTaskForm.addEventListener('submit',addTotodolist)