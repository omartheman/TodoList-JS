const addButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const deleteButton = document.querySelector('.delete-button');
const todoInput = document.querySelector('.todo-input');

let arr=[];

function displayList (){
  //display a list of html elements with your array...
  let output = '';
  for (let i = 0; i < arr.length; i++){
    const li = document.createElement('li');
    setAttributes(li, {
      class: 'list-group-item',
      id: `${i}`,
    })
    const button = document.createElement('button');
    setAttributes(button, {
      onClick: `deleteFunc(${i})`,
      class: 'delete-button btn btn-outline-danger',
    })
    button.innerText = 'X';
    const anchor = document.createElement('a');
    setAttributes(anchor, {
      href: '#',
      onClick: `editItem(${i})`
    })
    anchor.innerText = `${arr[i]}`; 
    console.log(li)
    li.insertAdjacentElement('afterbegin', button);
    li.insertAdjacentElement('beforeend', anchor);
    output += li.outerHTML;
    console.log(output);
  }
  todoList.innerHTML = output;
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
const deleteFunc = (id) => {
  
  // while (todoList.firstChild) {
  //   todoList.removeChild(todoList.firstChild);
  // }
  // var parent = el.parentNode;
  // const id = Number(parent.id);
  console.log(arr);
  arr.splice(id, 1);
  console.log(arr);
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

function editItem(id){
  console.log('ediiting')
  const input = document.createElement('input');
  setAttributes(input, {
    type: "text",
    value: id.innerText,
  })
  const button = document.createElement('button');
  button.innerText = 'Save Edit';
  setAttributes(button, {
    class: 'edit-button btn btn-outline-primary',
    onClick: `saveEdit(${id}, this)`
  })
  insertElementsAfterend(id, [
    button,
    input
  ]);
  id.remove();
  // const newString = await saveEdit();
}
function p(string){
  console.log(string)
}
function saveEdit(id, editButton){
  console.log(editButton)
  const input = editButton.parentNode.querySelector('input');
  const anchor = document.createElement('a');
  anchor.innerText = input.value;
  //change value in array
  arr[id] = input.value 

  setAttributes(anchor, {
    href: '#',
    onClick: 'editItem(this)'
  })
  editButton.insertAdjacentElement('afterend', anchor);
  input.remove();
  editButton.remove();
}