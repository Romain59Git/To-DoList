Je vais vous fournir un commentaire pour chaque méthode utilisée dans le code que vous avez sélectionné.

1. document.addEventListener("DOMContentLoaded", function () { ... });

Cette méthode est utilisée pour ajouter un événement à l'objet document lorsque le contenu de la page est entièrement chargé. Cela signifie que le code à l'intérieur de cette fonction sera exécuté uniquement lorsque la page est prête à être utilisée.

2. const taskInput = document.getElementById("taskInput");

Cette méthode est utilisée pour récupérer un élément HTML avec l'id "taskInput" dans le document. L'élément est stocké dans la variable taskInput.

3. addTaskBtn.addEventListener("click", function () { ... });

Cette méthode est utilisée pour ajouter un événement de clic à l'élément addTaskBtn. Lorsque l'utilisateur clique sur le bouton, la fonction à l'intérieur de cette méthode sera exécutée.

4. const taskText = taskInput.value.trim();

Cette méthode est utilisée pour récupérer la valeur de l'élément taskInput (qui est un champ de saisie) et la stocker dans la variable taskText. La méthode trim() est utilisée pour supprimer les espaces en début et en fin de la chaîne de caractères.

5. if (taskText === "") { ... }

Cette méthode est utilisée pour vérifier si la variable taskText est vide. Si c'est le cas, la fonction à l'intérieur de cette condition sera exécutée.

6. const taskItem = document.createElement("li");

Cette méthode est utilisée pour créer un nouvel élément HTML de type "li" (liste) et le stocker dans la variable taskItem.

7. taskItem.classList.add("task-item");

Cette méthode est utilisée pour ajouter une classe CSS à l'élément taskItem. La classe "task-item" est ajoutée pour styler l'élément.

8. const taskSpan = document.createElement("span");

Cette méthode est utilisée pour créer un nouvel élément HTML de type "span" et le stocker dans la variable taskSpan.

9. taskSpan.textContent = taskText;

Cette méthode est utilisée pour définir le contenu textuel de l'élément taskSpan à la valeur de la variable taskText.

10. taskSpan.addEventListener("click", function () { ... });

Cette méthode est utilisée pour ajouter un événement de clic à l'élément taskSpan. Lorsque l'utilisateur clique sur l'élément, la fonction à l'intérieur de cette méthode sera exécutée.

11. taskItem.appendChild(taskSpan);

Cette méthode est utilisée pour ajouter l'élément taskSpan à l'élément taskItem.

12. taskList.appendChild(taskItem);

Cette méthode est utilisée pour ajouter l'élément taskItem à la liste taskList.

13. taskInput.value = "";

Cette méthode est utilisée pour effacer la valeur de l'élément taskInput (qui est un champ de saisie).

14. taskInput.addEventListener("keypress", function (event) { ... });

Cette méthode est utilisée pour ajouter un événement de saisie à l'élément taskInput. Lorsque l'utilisateur appuie sur une touche, la fonction à l'intérieur de cette méthode sera exécutée.

J'espère que cela vous aidera à comprendre les différentes méthodes utilisées dans le code !