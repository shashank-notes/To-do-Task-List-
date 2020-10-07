/* Constant declarations*/
const taskDescription = document.querySelector('#taskname')
// const addTask = document.querySelector('.addTask')
const addTaskForm = document.querySelector('.addTaskForm')
const todolist = document.querySelector('.todolist')
const progresslist = document.querySelector('.inprogresslist')
const completed = document.querySelector('.finishedlist')
let itemList = document.getElementsByTagName("li")
let activeToDoTask ;
let activeinProgressTask;
/*Variable Declarations*/

/* Storage related declaration */
let todoArray = localStorage.getItem('todoitems') ? JSON.parse(localStorage.getItem('todoitems')) : []
let inprogressArray = localStorage.getItem('inprogressdoitems') ? JSON.parse(localStorage.getItem('inprogressdoitems')) : []
let finishedArray = localStorage.getItem('finisheditems') ? JSON.parse(localStorage.getItem('finisheditems')): []



localStorage.setItem('todoitems',JSON.stringify(todoArray))
tododata = JSON.parse(localStorage.getItem('todoitems'))
localStorage.setItem('inprogressitems',JSON.stringify(inprogressArray))
inprogressdata = JSON.parse(localStorage.getItem('inprogressitems'))
localStorage.setItem('finisheditems',JSON.stringify(finishedArray))
finisheddata = JSON.parse(localStorage.getItem('finisheditems'))

// Add all items in to do  item display
const todomaker = (text) => {
    let li = document.createElement("li")
    li.className = 'todolistitem';
    li.textContent = text;
    li.style.display = 'list-item';
    todolist.appendChild (li)
}
// Add all items in inprogress item display
const inProgressMaker = (text) => {
    let li = document.createElement("li")
    li.className = 'inprogresslistitem';
    li.textContent = text;
    li.style.display = 'list-item';
    progresslist.appendChild (li)
}

// Add all items in finished item display
const finishedMaker = (text) => {
    let li = document.createElement("li")
    li.className = 'finishedlistitem';
    li.textContent = text;
    li.style.display = 'list-item';
    completed.appendChild (li)
}





function addTotodolist(event){
    event.preventDefault();
    let input = taskDescription.value;
    todoArray.push(input)
    localStorage.setItem('todoitems',JSON.stringify(todoArray))
    todomaker(input.value);
    input.value = "";
    }

    tododata.forEach(item => {
      todomaker(item);
    });
   /* event.preventDefault();
//Capture the text from the entry form and add to the to do list//
    let input = taskDescription.value;
    const taskitem = document.createElement("li")
    taskitem.className = 'todolistitem';
    console.log(close)
    taskitem.textContent = input;
    taskitem.style.display = 'list-item'
    todolist.appendChild(taskitem);
    taskDescription.value = "";*/
//}

function movetoprogress(event) {
  var selected;
  if(event.target.tagName === 'LI') {
    selected= document.querySelector('li.todolistitem');
    if(selected) {
    selected.className = 'inprogresslistitem';
    progresslist.appendChild(selected)

    }
  }
};

function movetofinished(event) {
  var selected;
  if(event.target.tagName === 'LI') {
    selected= document.querySelector('li.inprogresslistitem');
    if(selected) {
    selected.className = 'finishedlistitem';
    completed.appendChild(selected)
    }
  }
};

function clearStorage(event){
    localStorage.Clear();
}

/* User or Event Based actions to be done*/
addTaskForm.addEventListener('submit',addTotodolist)

activeTask = document.querySelector('ul.todolist')
activeTask.addEventListener('click',movetoprogress)
activeinProgressTask = document.querySelector('ul.inprogresslist')
activeinProgressTask.addEventListener('click',movetofinished)
document.getElementById("clearfinished").addEventListener('click',clearStorage)






