const addButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const deleteButton = document.querySelector('.delete-button');
const todoInput = document.querySelector('.todo-input');

let arr=[];

function displayList (){
  //display a list of html elements with your array...
  for (let i = 0; i < arr.length; i++){
    const li = document.createElement('li');
    setAttributes(li, {
      class: 'list-group-item',
      id: `${i}`,
    })
    console.log(li);
    const button = document.createElement('button');
    setAttributes(button, {
      onClick: 'deleteFunc(this)',
      class: 'delete-button btn btn-outline-danger',
    })
    button.innerText = 'X';
    const anchor = document.createElement('a');
    setAttributes(anchor, {
      href: '#',
      onClick: 'editItem(this)'
    })
    anchor.innerText = `${arr[i]}`; 
    li.insertAdjacentElement('afterbegin', button);
    li.insertAdjacentElement('beforeend', anchor);
    todoList.insertAdjacentElement('beforeend', li);

    // shorter method:
    /*
    todoList.insertAdjacentHTML('beforeend',
    `<li class="list-group-item" id="${i}">
    <button onClick="deleteFunc(this)" class="delete-button btn btn-outline-danger">X</button><a href="#" onClick="editItem(this)">${arr[i]}</a>
    </li>`
    )
    */
  }
}
function addItem(){
  if (todoInput.value === '') {alert('Please input something'); return}
  
  //remove all list items
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  
  arr.push(todoInput.value);
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
  displayList();
}
function setAttributes(el, attrs) {
  for (const key in attrs) {
    el.setAttribute(key, attrs[key])
  }
}

function insertElementsAfterend(neighborEl,newEls){
  newEls.forEach(el => neighborEl.insertAdjacentElement('afterend', el)
  )
}

function editItem(anchor){
  const input = document.createElement('input');
  setAttributes(input, {
    type: "text",
    value: anchor.innerText,
  })
  const button = document.createElement('button');
  button.innerText = 'Save Edit';
  setAttributes(button, {
    class: 'edit-button btn btn-outline-primary',
    onClick: 'saveEdit(this)'
  })
  insertElementsAfterend(anchor, [
    button,
    input
  ]);
  anchor.remove();
  // const newString = await saveEdit();
}
function p(string){
  console.log(string)
}
function saveEdit(editButton){
  const itemId = editButton.parentNode.id;
  const input = editButton.parentNode.querySelector('input');
  const anchor = document.createElement('a');
  anchor.innerText = input.value;
  //change value in array
  arr[itemId] = input.value 

  setAttributes(anchor, {
    href: '#',
    onClick: 'editItem(this)'
  })
  editButton.insertAdjacentElement('afterend', anchor);
  input.remove();
  editButton.remove();
}