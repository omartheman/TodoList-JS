const addButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const deleteButton = document.querySelector('.delete-button');
const todoInput = document.querySelector('.todo-input');
let todoInputVal;

let arr=[];
addButton.onclick = () => {addItem()};

function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

function insertElsAfterend(neighborEl,newEls){
  console.log('inserting els afterend')
  for (const key in newEls){
    neighborEl.insertAdjacentElement('afterend', newEls[key])
  }
}

function editItem(anchor){
  const input = document.createElement('input');
  setAttributes(input, {
    class: "bongo-drums",
    type: "text",
    value: anchor.innerText,
  })
  const button = document.createElement('button');
  setAttributes(button, {
    class: 'btn btn-primary'
  })
  const input2 = `<input type="text" value=${anchor.innerText}><button class="edit-button btn btn-primary">Save Edit</button>`
  // anchor.insertAdjacentHTML('afterend', input)
  // anchor.insertAdjacentElement('afterend', input);
  insertElsAfterend(anchor, {
    0: input
  })
  
  anchor.remove();
}

function displayList (){
  console.log('arr in displayList', arr)
  //display a list of html elements with your array...
  for (let i = 0; i < arr.length; i++){
    todoList.insertAdjacentHTML('beforeend',
    `<li class="list-group-item" id="${i}">
    <button onClick="deleteFunc(this)" class="delete-button btn btn-outline-danger">X</button><a href="#" onClick="editItem(this)">${arr[i]}</a>
    </li>`
    )
  }
}
function addItem(){
  if (todoInputVal === '') {alert('Please input something'); return}
  
  //remove all list items
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  
  todoInputVal = todoInput.value;
  arr.push(todoInputVal);
  console.log('arr in additem', arr)
  displayList()
  todoInput.value = null;
}
const deleteFunc = (el) => {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  var parent = el.parentNode;
  const id = Number(parent.id);
  arr.splice(id, 1);
  console.log('arr',arr);
  displayList();
}
