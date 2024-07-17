const itemform = document.getElementById('item-form');
const iteminput = document.getElementById('item-input');
const itemlist = document.getElementById('item-list');
const clearbtn = document.getElementById('clear');
const nothing = document.getElementById('nothing');
const err = document.getElementById('error');
const itemfilter = document.getElementById('filter');

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

  //? add li to the dom
  itemlist.appendChild(li);

  clearui();
  iteminput.value = '';
}

function createbutton(classes) {
  const button = document.createElement('button');
  button.className = classes;
  const icon = createicon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function createicon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function removeitem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('are you sure you want to delete')) {
      e.target.parentElement.parentElement.remove();

      clearui();
    }
  }
}

function clearitem() {
  while (itemlist.firstChild) {
    itemlist.removeChild(itemlist.firstChild);
  }
  clearui();
}

function filteritems(e) {
  const items = itemlist.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemname = item.firstChild.textContent.toLowerCase();

    if (itemname.indexOf(text) != -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
     
  });
}

function clearui() {
  const items = itemlist.querySelectorAll('li');
  if (items.length === 0) {
    clearbtn.style.display = 'none';
    itemfilter.style.display = 'none';
  } else {
    clearbtn.style.display = 'block';
    itemfilter.style.display = 'block';
  }
}

//? event listeners
itemform.addEventListener('submit', additem);
itemlist.addEventListener('click', removeitem);
clearbtn.addEventListener('click', clearitem);
itemfilter.addEventListener('input', filteritems);

clearui();
