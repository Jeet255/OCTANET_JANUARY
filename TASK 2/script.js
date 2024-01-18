const newTaskInput = document.getElementById("new-task-input");
const tasksList = document.querySelector(".tasks");
const addButton = document.querySelector("button");

addButton.addEventListener("click", () => {
    const taskText = newTaskInput.value.trim();
    if (taskText) {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.classList.add("incomplete");
        tasksList.appendChild(newTask);
        newTaskInput.value = "";

        newTask.addEventListener("click", () => {
            newTask.classList.toggle("completed");
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        newTask.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            tasksList.removeChild(newTask);
        });
    }
});
