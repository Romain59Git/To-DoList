// To-DoList/app.js

// Récupérer les éléments HTML
const taskInput = document.getElementById("taskInput"); // Récupérer l'élément HTML avec l'id "taskInput"
const addTaskBtn = document.getElementById("addTaskBtn"); // Récupérer l'élément HTML avec l'id "addTaskBtn"
const taskList = document.getElementById("taskList"); // Récupérer l'élément HTML avec l'id "taskList"

// Ajouter une tâche
addTaskBtn.addEventListener("click", function () {
  // Récupérer la valeur de l'élément taskInput et la stocker dans la variable taskText
  const taskText = taskInput.value.trim(); // Récupérer la valeur de l'élément taskInput et la stocker dans la variable taskText

  // Vérifier si la variable taskText est vide
  if (taskText === "") { // Vérifier si la variable taskText est vide
    alert("Veuillez entrer une tâche !"); // Afficher un message d'alerte si la variable taskText est vide
    return; // Arrêter l'exécution de la fonction si la variable taskText est vide
  }

  // Créer un élément <li>
  const taskItem = document.createElement("li"); // Créer un nouvel élément HTML de type "li" (liste)
  taskItem.classList.add("task-item"); // Ajouter une classe CSS à l'élément taskItem

  // Texte de la tâche
  const taskSpan = document.createElement("span"); // Créer un nouvel élément HTML de type "span"
  taskSpan.classList.add("task-text"); // Ajouter une classe CSS à l'élément taskSpan
  taskSpan.textContent = taskText; // Définir le contenu textuel de l'élément taskSpan à la valeur de la variable taskText

  // Bouton de suppression
  const deleteBtn = document.createElement("button"); // Créer un nouvel élément HTML de type "button"
  deleteBtn.classList.add("delete-btn"); // Ajouter une classe CSS à l'élément deleteBtn
  deleteBtn.textContent = "Supprimer"; // Définir le contenu textuel de l'élément deleteBtn

  // Marquer comme terminé en cliquant
  taskSpan.addEventListener("click", function () {
    taskSpan.classList.toggle("completed"); // Ajouter ou supprimer la classe CSS "completed" à l'élément taskSpan
  });

  // Supprimer la tâche
  deleteBtn.addEventListener("click", function () {
    taskList.removeChild(taskItem); // Supprimer l'élément taskItem de la liste taskList
  });

  // Ajouter les éléments à la tâche
  taskItem.appendChild(taskSpan); // Ajouter l'élément taskSpan à l'élément taskItem
  taskItem.appendChild(deleteBtn); // Ajouter l'élément deleteBtn à l'élément taskItem

  // Ajouter la tâche à la liste
  taskList.appendChild(taskItem); // Ajouter l'élément taskItem à la liste taskList

  // Effacer l'input
  taskInput.value = ""; // Effacer la valeur de l'élément taskInput
});

// Ajouter une tâche en appuyant sur "Entrée"
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") { // Vérifier si la touche "Entrée" est appuyée
    addTaskBtn.click(); // Simuler un clic sur le bouton addTaskBtn
  }
});