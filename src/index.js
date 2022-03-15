import './css/col1Style.css';
import './css/col2Style.css';
import './css/col3Style.css';
import './css/formStyle.css';
import './css/mainStyle.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

(()=>{
    // This IIFE assigns the eventListeners to all the buttons found in the first column
    // This is eventlistener to the '+' button beside the 'File' title is to display the form for adding the fil
    document.getElementById('addFile').parentElement.addEventListener('click', ()=>{displayAddFile()});
})();

function displayAddFile(){
    // displays the add file windows and disables the main wrapper.
    document.querySelector(".editFolderWrapper").classList.add('editFolderWrapperActive');
    document.querySelector(".editFolder").classList.add('editFolderActive');
    // Eventlisteners to each button found in the add file windows.
    // This takes the data found in the input box and procces it
    document.querySelector(".fileSave").addEventListener('click', siphonDataFile)
    // Hides the add file window.   
    document.querySelector(".fileCancel").addEventListener('click', removeAddFile)
}

function removeAddFile() {
    document.querySelector(".editFolderWrapper").classList.remove('editFolderWrapperActive');
    document.querySelector(".editFolder").classList.remove('editFolderActive');
}

function removeFileFromList(iconElement) {
    iconElement.remove();
}

function insertFileIntoList(name) {
    let filesList = document.querySelector('.filesList');

    let fileItem = document.createElement('li');
    fileItem.textContent = name;
    fileItem.classList.add('fileItem');

    let delIcon = document.createElement('i');
    let spanIcon = document.createElement('span');
    delIcon.classList.add('fas');
    delIcon.classList.add('fa-minus-circle');
    spanIcon.addEventListener('click', ()=>{removeFileFromList(fileItem)});

    filesList.appendChild(fileItem)
    fileItem.appendChild(spanIcon)
    spanIcon.appendChild(delIcon)
}

function siphonDataFile() {
    let fileName = document.getElementById('fileName').value;
    insertFileIntoList(fileName)
    removeAddFile()
}


function createItemToDo(itemName, itemDesc, itemDueDate, itemPriority, fileName){
    // This a a factory function that produces a item to do.
        const name = itemName;
        const desc = itemDesc;
        const date = itemDueDate;
        const priority = itemPriority;
        const file = fileName;

    // The only way to access the information of the item object is through these methods.
    // This is to protect the integrity of the object.
        const returnName = () => {return name}
        const returnDesc = () => {return desc}
        const returnDate = () => {return date}
        const returnPriority = () => {return priority}
        const returnFile = () => {return file}

    // This returns the methods/attributes you can use to access the method.
        return{returnName, returnDesc, returnDate, returnPriority, returnFile}
};












