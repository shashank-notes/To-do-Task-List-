const entryForm = document.querySelector("#entryForm")
const entrySection = document.querySelector("#entries")
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav');


/*Addional code for Local storage*/
const entryClear = document.querySelector('.clearLast')
const entryClearAll = document.querySelector('.clearAll')
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) :[]

let count = 1;


/*store entries in local storage*/
function addEntryToPage(event) {
    event.preventDefault();
    itemsArray.push(entryTextbox.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    entryTextbox.value = '';


}


function modifyDom(){
    let data = JSON.parse((localStorage.getItem('items')))
    data.forEach((item) => {
        const entryDiv = document.createElement('div');
        entryDiv.className = 'single-entry';
        entryDiv.innerText = item;
        entryDiv.style.display = 'none'
        entrySection.appendChild(entryDiv);
    })

    const displayEntryButton = document.createElement('button');
    displayEntryButton.className = 'display-entry-button';
    displayEntryButton.innerText = count;
    entriesNav.appendChild(displayEntryButton);


    displayEntryButton.addEventListener('click', function () {
        const allEntries = document.querySelectorAll('.single-entry');
        for (let index = 0; index < allEntries.length; index++) {
            allEntries[index].style.display = 'none';
        }
        entryDiv.style.display = 'block';
    })
    count +=1;
}

// function addItemsToDom(){
//     let data = JSON.parse((localStorage.getItem('items')))
//     //entrySection.innerHTML = '';
//     data.forEach((item) =>{
//         const entryDiv = document.createElement('div');
//         entryDiv.className = 'single-entry';
//         entryDiv.innerText = item;
//         entryDiv.style.display= 'block'
//         entrySection.appendChild(entryDiv);
//     })}

function clearAll(){
    localStorage.clear();
    entrySection.innerHTML = ''
}

function clearLast(){
    console.log('Clear Last Item')
    let data = JSON.parse((localStorage.getItem('items')))
    data.pop();
    localStorage.setItem('items', JSON.stringify(data));

}

entryForm.addEventListener('submit',addEntryToPage)
entryClearAll.addEventListener('submit',clearAll);
entryClear.addEventListener('submit',clearLast)

}