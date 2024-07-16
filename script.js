const itemform = document.getElementById('item-form');
const iteminput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');
const err = document.getElementById('error');

//? functions

function additem(e) {
  e.preventDefault();
  const newitem = iteminput.value;

  //* validate input
  if (newitem === '') {
    alert('please add an item!');
    return;
  }

  //* create list item
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

//? event listeners
itemform.addEventListener('submit', additem);
