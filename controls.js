const addButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const deleteButton = document.querySelector('.delete-button');
const todoInput = document.querySelector('.todo-input');
const todoListContainer = document.querySelector('.todo-list-container');
let todoInputVal;

function createArr(val){
  for (let i = 0; i < arr.length; i++){
    //create an HTML element for each array. 
  }
}

let arr=[];
addButton.onclick = () => {addToList(arr)};

function addInputToArr(){
  todoInputVal = todoInput.value;
  if (todoInputVal === '') {alert('Please input something'); return}
  
  todoInputVal = todoInput.value;
  arr.push(todoInputVal);
  todoInput.value = null;  
}

function createList(){
  const list = document.createElement('ul');
  list.setAttribute('class', 'todo-list list-group');
}
function appendList(){
  todoListContainer.appendChild(list);
}
function addToList(arr){
  //add value to array on input
  addInputToArr();
  const list = document.createElement('ul');
  list.setAttribute('class', 'todo-list list-group');
  for (let i = 0; i < arr.length; i++){
    const item = document.createElement('li');
    item.setAttribute('id', i);
    item.setAttribute('class', 'list-group-item');
    
    //add delete button
    const button = document.createElement('button');
    button.setAttribute('class', 'delete-button btn btn-outline-danger');
    button.textContent = 'X';
    button.setAttribute('onClick', "removeListItem(this)")
    item.appendChild(button);
    
    //set content of todo item
    item.appendChild(document.createTextNode(arr[i]));
    
    list.appendChild(item);
  }
  //append list to <main>
  
  //remove all list items
  removeOldList();  
  
  todoListContainer.appendChild(list);
}

function removeOldList(){
  const oldList = document.querySelector('.todo-list');
  if (oldList){
    oldList.remove();
  }
}

const removeListItem = (buttonElement) => {
  //delete the current element
  var parent = buttonElement.parentNode;
  const id = Number(parent.id);
  arr.splice(id, 1);
  console.log('arr',arr);
  removeOldList();
  // displayList();
}

function displayList (){
  console.log('arr in displayList', arr)
  //display a list of html elements with your array...
  for (let i = 0; i < arr.length; i++){
    todoList.insertAdjacentHTML('beforeend',
    `<li class="list-group-item" id="${i}">
    <button onClick="removeListItem(this)" class="delete-button btn btn-outline-danger">X</button> ${arr[i]}
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
  todoInput.value = null;
  addToList(arr);
}
