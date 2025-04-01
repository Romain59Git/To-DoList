document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");

    // Ajouter une tâche
    addTaskBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Veuillez entrer une tâche !");
            return;
        }

        // Créer un élément <li>
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");

        // Texte de la tâche
        const taskSpan = document.createElement("span");
        taskSpan.classList.add("task-text");
        taskSpan.textContent = taskText;

        // Bouton de suppression
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.textContent = "Supprimer";

        // Marquer comme terminé en cliquant
        taskSpan.addEventListener("click", function () {
            taskSpan.classList.toggle("completed");
        });

        // Supprimer la tâche
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        // Ajouter les éléments à la tâche
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteBtn);

        // Ajouter la tâche à la liste
        taskList.appendChild(taskItem);

        // Effacer l'input
        taskInput.value = "";
    });

    // Ajouter une tâche en appuyant sur "Entrée"
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTaskBtn.click();
        }
    });
});