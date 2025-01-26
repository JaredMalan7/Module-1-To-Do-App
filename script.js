// Select Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

//Add task even listener
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        // This creates a new list item
        const listItem = document.createElement('li');
        listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="remove-task-btn">Remove</button>`;
        
        //Append the task to the list
        taskList.appendChild(listItem);
        
        // Clear the input field
        taskInput.value = '';
    } else {
        alert("Please enter a task");
    }
});

// Remove task functionality
taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove-task-btn")) {
        const listItem = event.target.parentElement;
        taskList.removeChild(listItem);
    }
});

// Mark task as complete functionality
taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.classList.toggle("completed");
    }
});