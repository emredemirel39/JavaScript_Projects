// ********     SELECTORS   *********

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const addButton = document.querySelector('.add-button');
const todoList = document.querySelector('.todo-list');

let deleteBtns; 
let completedBtns;



// ************     FUNCTIONS   ************

function app() {

    checkLocalStorage()

    // delete todos from local storage
    deleteBtns = document.querySelectorAll('.delete-button');
    deleteFunc(deleteBtns);

    // completed todos from local storage
    completedBtns = document.querySelectorAll('.complete-button');
    completeFunc(completedBtns);
    
};

const checkLocalStorage = () => {

    let todos = localStorage.getItem('todos');

    if(!todos) {
        let todosJson = JSON.stringify([]);
        localStorage.setItem('todos', todosJson);

    } else if (todos.length > 0) {
        let todosObj = JSON.parse(todos, undefined, 4);
        todosObj.forEach(e => displayFunc(e));
    };
};


const addTodo = (e) => {
    e.preventDefault();

    const inputTxt = todoInput.value;

    if (inputTxt === undefined || inputTxt.length === 0) {
        
        window.alert('Input is empty!');
    } else {
        
        //create todo object
        let todo = {
            name: inputTxt,
            isCompeleted: false
        };
    
        //display on page
        displayFunc(todo);
    
        //add to local storage
        let todos = localStorage.getItem('todos');
        let todosObj = JSON.parse(todos);
        todosObj.push(todo);
        localStorage.setItem('todos', JSON.stringify(todosObj));

        // delete new added todos
        deleteBtns = document.querySelectorAll('.delete-button');
        deleteFunc(deleteBtns);

        // event to set 'completed' status of new added todos
        completedBtns = document.querySelectorAll('.complete-button');
        completeFunc(completedBtns);
    
        todoForm.reset();
    };
};



const displayFunc = (e) => {

    const todoEl = document.createElement('div');
    todoEl.className = 'todo';
    todoEl.setAttribute('data-status', `${e.isCompeleted}`);

    todoEl.innerHTML = `
    <li>${e.name}</li>
    <button class="delete-button"><i class="fa-solid fa-x fa-xl"></i></button>
    <button class="complete-button"><i class="fa-solid fa-check fa-xl"></i></button>
    `;

    if (e.isCompeleted === true) {
        
        todoEl.classList.add('completed-todo');
    }

    todoList.appendChild(todoEl);
};



const deleteFunc = (deleteBtnsArr) => {

    deleteBtnsArr.forEach(btn => {

        btn.addEventListener('click', (e) => {

            const todosObjFromStorage = JSON.parse(localStorage.getItem('todos'));
            const todoText = e.target.closest('.todo').querySelector('li').textContent;
            const filteredTodos = todosObjFromStorage.filter(e => e.name !== todoText);

            localStorage.setItem('todos', JSON.stringify(filteredTodos));

            e.target.closest('.todo').remove();
        });
    });
};



const completeFunc = (completedBtnsArr) => {

    completedBtnsArr.forEach(btn => {

        btn.addEventListener('click', (e) => {

            let todoEl = e.target.closest('.todo');
            const todoText = e.target.closest('.todo').querySelector('li').textContent;
            const todosObjFromStorage = JSON.parse(localStorage.getItem('todos'));
            let todoStatus = todoEl.dataset.status;

            changeClassList(todoEl);

            if (todoStatus === 'false') {
                const filteredTodos = todosObjFromStorage.filter(e => e.name !== todoText);
                const changedObj = todosObjFromStorage.find(e => e.name === todoText);
                changedObj.isCompeleted = true;

                const newTodos = filteredTodos.concat(changedObj);
                localStorage.setItem('todos', JSON.stringify(newTodos));

            } else if (todoStatus === 'true') {

                const filteredTodos = todosObjFromStorage.filter(e => e.name !== todoText);
                const changedObj = todosObjFromStorage.find(e => e.name === todoText);
                changedObj.isCompeleted = false;

                const newTodos = filteredTodos.concat(changedObj);
                localStorage.setItem('todos', JSON.stringify(newTodos));
            }
        })
    })
}


const changeClassList = (e) => {
    e.classList.toggle('completed-todo');
};





// ****************     EVENT LISTENERS     ****************

window.addEventListener('DOMContentLoaded', () => app());

todoForm.addEventListener('submit', addTodo);


