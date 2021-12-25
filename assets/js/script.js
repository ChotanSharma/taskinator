var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
    listItemEl.className = "task-item";
};

formEl.addEventListener("submit", createTaskHandler);

