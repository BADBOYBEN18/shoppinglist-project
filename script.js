const itemform = document.getElementById('item-form');
const iteminput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');
const clearbtn = document.getElementById('clear');
const nothing = document.getElementById('nothing');
const err = document.getElementById('error');

//? functions

function additem(e) {
  e.preventDefault();
  const newitem = iteminput.value;

  //? validate input
  if (newitem === '') {
    alert('please add an item!');
    return;
  }

  //? create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newitem));

  const button = createbutton('remove-item btn-link text-red');
  li.appendChild(button);

  itemlist.appendChild(li);
  iteminput.value = '';
}


function createbutton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createicon('fa-solid fa-xmark'); 
  button.appendChild(icon)
  return button;
}

function createicon(classes){
  const icon = document.createElement('i')
  icon.className = classes;
  return icon
}

function removeitem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
      e.target.parentElement.parentElement.remove()
    }
}

function clearitem() {
  while(itemlist.firstChild){
    itemlist.removeChild(itemlist.firstChild);
  }
  
}

function clearui() {
  
}



//? event listeners
itemform.addEventListener('submit', additem);
itemlist.addEventListener('click', removeitem);
itemlist.addEventListener('click', removeitem);
clearbtn.addEventListener('click', clearitem);


