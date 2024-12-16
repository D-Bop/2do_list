const addTodo = document.querySelector(".add-todo");
const todoInput = document.querySelector(".todo-input");
const displayTodo = document.querySelector(".js-todo-list");
const dateInputElement = document.querySelector(".js-due-date-input");
const dateValue = dateInputElement.value;
const todoValue = todoInput.value;
let todoArray = [{
    name: "make dinner",
    dueDate: "2022-12-11"
}, {
    name: "wash dishes", 
    dueDate: "2022-10-13"
}];
renderTodoList();
// A function to display the todos
function renderTodoList() {
    let todoListHTML = '';
    for (i = 0; i < todoArray.length; i++) {
        const todoObject = todoArray[i];
        // const name = todoObject.name;
        // const dueDate = todoObject.dueDate;
        const { name, dueDate} = todoObject;
        const html = `
            <div>${name}</div>
            <div>${dueDate}</div>
            <button class="delete-btn" onclick='
                console.log("Deleted");
                todoArray.splice(${i}, 1);
                renderTodoList();
            '>Delete</button>
        `;
        todoListHTML += html;
    };
    displayTodo.innerHTML = todoListHTML;
}
addTodo.addEventListener("click", function() {
    todoArray.push({
        name: todoInput.value,
        dueDate: dateInputElement.value
    });
    todoInput.value = '';
    dateInputElement.value = "";
    renderTodoList();
});
