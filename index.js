const entryForm = document.querySelector("#entryForm")
const entrySection = document.querySelector("#entries")
const entryTextbox = document.querySelector('.entry-textbox')
const entriesNav = document.querySelector('.entries-nav')

let entryCount  = 1
function addEntryToDom(event){
    event.preventDefault();
    const entryDiv = document.createElement('div');
    entryDiv.className = 'single-entry';
    entryDiv.innerText = entryTextbox.value;
    entryDiv.style.display='none'
    entrySection.appendChild(entryDiv);
    entryTextbox.value = '';
    /*
      - In the addEntryToDom() function, create a new variable named
          displayEntryButton.
      - Use the document.createElement method to create an HTML button
          and make that the value of the new variable.
      - Use the innerText property to set the button's inner text to "1";
      - Append the button to the entriesNav div we created on line 4.
    */

    const displayEntryButton = document.createElement('button')
    displayEntryButton.className = 'display-entry-button'
    displayEntryButton.innerText = entryCount
    entriesNav.appendChild(displayEntryButton)

    /*
     - Inside the displayEntryButton addEventListener function,
         create a new variable named 'allEntries'.
     - use the document.queryselectorAll method to select all
         elements with the class of 'single-entry' and make that the
         value of the new allEntries variable.
   */

    /*
  - Add a click event listener to the displayEntryButton.
  - Set the display property of the entryDiv to 'block' whenever
      it's clicked.
*/
    displayEntryButton.addEventListener('click',function(){
        var allEntries = document.querySelectorAll('.single-entry')
        for (var i = 0; i<allEntries.length;i++){
            allEntries[i].style.display = 'none'
        }

        entryDiv.style.display = 'block'
    })
    entryCount += 1

}

entryForm.addEventListener('submit',addEntryToDom)