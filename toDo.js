let deals = [
    {
        id: 1,
        text: 'Homework'
    },
    {
        id: 2,
        text: 'Clean room'
    },
    {
        id: 3,
        text: 'Cook meal'
    }
]

const todoList = document.querySelector('.toDolist');
const addBtn = document.querySelector('#add');
const todoInput = document.querySelector('#write');
const box = document.querySelector('.box')

function updateNewTodo(){
todoList.innerHTML = ''
    
for(let todo of deals){
    todoList.innerHTML += `<div class="checkList">
      
    <input type="checkbox" id="${todo.id}">
    <label for="${todo.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"
         viewBox="0 0 24 24"><g id="feCheck0" 
          fill-rule="evenodd" stroke="none" stroke-width="1">
          <g id="feCheck1"><path id="feCheck2" 
            d="m6 10l-2 2l6 6L20 8l-2-2l-8 8z"/></g></g></svg>
            
    </label>
    <p>${todo.text}</p>
    <button id="${todo.id}" class="delete">×</button>
  </div>`
}
}
updateNewTodo()

function addTodo(){
    const newTodo = {
        id: deals.length === 0 ? 1 : deals.at(-1).id + 1,
        text: todoInput.value
    }
    deals.push(newTodo)
    todoInput.value = ''
    updateNewTodo()
}

function deleteToDo(id){
    deals = deals.filter(todo => todo.id != id)
    updateNewTodo()
}

addBtn.addEventListener('click', addTodo)
box.addEventListener('click', (e) => {
    if(e.target.innerHTML === '×'){
        deleteToDo(e.target.id)
    };
})

// function downloadLocalStoriage(){
//     for(let deal of deals){
//         console.log(localStorage.setItem(deal));
//     }
// }
// downloadLocalStoriage()