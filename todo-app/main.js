const taskNameInput = document.getElementById("task-name");
const taskDetailInput = document.getElementById("task-detail");
const taskList = document.getElementById("task-list");
const taskDetailModal = document.getElementById("task-detail-modal");
const modalTaskName = document.getElementById("modal-task-name");
const taskDetailText = document.getElementById("task-detail-text");

function addTask() {
    const taskName = taskNameInput.value.trim();
    const taskDetail = taskDetailInput.value.trim();

    if (taskName === '') {
        alert("Please enter a task name.");
    } else {
        let li = document.createElement("li");
        li.innerHTML = `<span class="fa fa-info-circle" onclick="showDetail('${encodeURIComponent(taskName)}', '${encodeURIComponent(taskDetail)}')"></span> ${taskName} <span class="fa fa-times" onclick="deleteTask(this)"></span>`;
        taskList.appendChild(li);
        taskNameInput.value = '';
        taskDetailInput.value = '';
        saveData();
    }
}

function showDetail(taskName, taskDetail) {
    modalTaskName.textContent = decodeURIComponent(taskName);
    taskDetailText.textContent = taskDetail ? decodeURIComponent(taskDetail) : 'No details provided.';
    taskDetailModal.style.display = "flex";
}

function closeModal() {
    taskDetailModal.style.display = "none";
}

function deleteTask(taskElement) {
    taskElement.parentElement.remove();
    saveData();
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === taskDetailModal) {
        closeModal();
    }
};

// Mark task as done or undo
taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("tasks") || '';
}

window.onload = loadTasks;
