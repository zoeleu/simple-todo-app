function createTaskHtml(taskId, task) {
    return `<input type="checkbox" onclick="taskDone(${taskId})"><h2 id="task-description-${taskId}" class="task-description">${task}</h2>`
}

/** @returns {number} */
const random = () => Math.floor(Math.random() * 999999999);

function buttonClicked() {
    const taskInput = document.querySelector("input#input-task")

    /** @type {string} */
    const task = taskInput.value;

    if(task === "") return;

    const taskId = random();

    const container = document.querySelector("div#todo-tasks-container");

    const taskElement = document.createElement("div");

    taskElement.id = `task-container-${taskId}`;
    taskElement.className = "task-container";

    taskElement.innerHTML = createTaskHtml(taskId, task);

    container.appendChild(taskElement);

    taskInput.value = ""
}

function taskDone(taskId) {
    document.querySelector("div#task-container-"+taskId).classList.add("task-removed");
    setTimeout(() => {
        document.querySelector("div#task-container-"+taskId).remove();
    }, 400);
}