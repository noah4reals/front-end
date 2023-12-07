const newTask = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

function addTask(){
    if(newTask.value === ''){
        alert("you must enter a task...")

    }
    else{
        let li=document.createElement("li");
        li.innerHTML = newTask.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);

    }
    newTask.value= "";
    saveData();

}
taskList.addEventListener("click", function(edit){
    if (edit.target.tagName == "LI") {
        edit.target.classList.toggle("checked");
        saveData();
        
    } else if(edit.target.tagName === "SPAN"){
        edit.target.parentElement.remove()
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}
function viewTask(){
    taskList.innerHTML = localStorage.getItem("data");
}
viewTask();
