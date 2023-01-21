const taskField = document.querySelector("#inputField");
const addTodos = document.querySelector("#btn");
const todos = document.querySelector("#todoContainer");
const task = document.querySelector(".task");

const todoAdder = addTodos.addEventListener("click", todoHandler);

function todoHandler() {
	if (taskField.value.length == 0) {
		alert("input task");
	} else {
		const template = `
		<li class='taskList'>
        <span id='taskValue'>${taskField.value}</span>
		<div>
		<button id="edit" value="edit" onClick={editTodo()}><i class="icofont-pencil-alt-3 icofont-1x"></i></button>
        <button id='del-btn' value="delete" onClick={todoRemover()} >Delete</i><i class="icofont-trash icofont-1x"></i></button>
        </div>
		</li>
		`;
		task.innerHTML += template;
		taskField.value = "";
	}
}

// task.addEventListener("click", (e) => {
// 	if (e.target.tagName === "BUTTON") {
// 		const button = e.target;
// 		const li = button.parentNode;
// 		const ul = li.parentNode;
// 		if (button.innerText === "delete") {
// 			function todoRemover() {
// 				const deleteTodo = document.getElementById("del-btn");
// 				deleteTodo.parentNode.parentNode.remove();
// 			}
// 		}
// 	}
// });

function todoRemover() {
	const deleteTodo = document.getElementById("del-btn");
	deleteTodo.parentNode.parentNode.remove();
}

function editTodo() {
	const editPage = document.getElementById("editPage");
	editPage.style.display = "block";
	task.addEventListener("click", (e) => {
		const editBtn = document.getElementById("edit");
		const li = editBtn.parentNode.parentNode.event.target;
		const span = li.firstElementChild;
		const editInput = document.getElementById("editInput");
		editInput.value = span.textContent;
	});
}
// input.type = "text";
// editButton.onclick = () => {

// const input = document.createElement("inputField");
// li.insertBefore(inputField, span);
// li.removeChild(span);
