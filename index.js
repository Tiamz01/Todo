const taskField = document.querySelector("#inputField");
const addTodos = document.querySelector("#btn");
const todos = document.querySelector("#todoContainer");
const task = document.querySelector(".task");

const todoAdder = addTodos.addEventListener("click", todoHandler);
// deleteTodo.addEventListener("click", removeTodo);

function todoHandler() {
	if (taskField.value.length == 0) {
		alert("input task");
	} else {
		const template = `<div class='task'>
        <span id='taskValue'>${taskField.value}</span>
		<div>
		<button id="edit" onclick={editValue()}><i class="icofont-pencil-alt-3 icofont-1x"></i></button>
        <button id='del-btn' onclick={todoRemover()}></i><i class="icofont-trash icofont-1x"></i></button>
        </div>
		</div>`;
		todos.innerHTML += template;
		taskField.value = "";
	}
}

function todoRemover() {
	const deleteTodo = document.getElementById("del-btn");
	deleteTodo.parentNode.parentNode.remove();
}

function editValue() {
	const editTodo = document.getElementById("edit");
	editTodo.onclick = function () {
		const todo = document.getElementById("taskValue");
		todo.value = taskField.value;
	};
}

// editTodo.onclick = function () {
// 	todo.taskField.value;
// };
