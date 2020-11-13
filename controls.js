const addButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const deleteButton = document.querySelector('.delete-button');
const todoInput = document.querySelector('.todo-input');
let todoInputVal;

function createArr(val){
  for (let i = 0; i < arr.length; i++){
    //create an HTML element for each array. 
  }
}

let arr=[];
addButton.onclick = () => {addItem()};

function displayListArr(){
  for (let i = 0; i < arr.length; i++){
    //
  }
}

function displayList (){
  console.log('arr in displayList', arr)
  //display a list of html elements with your array...
  for (let i = 0; i < arr.length; i++){
    todoList.insertAdjacentHTML('beforeend',
    `<li class="list-group-item" id="${i}">
    <button onClick="deleteFunc(this)" class="delete-button btn btn-outline-danger">X</button> ${arr[i]}
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
