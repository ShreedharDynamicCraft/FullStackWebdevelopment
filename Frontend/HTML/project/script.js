document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('push');

    addButton.addEventListener('click', createTask);
    taskInput.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            createTask();
        }
    });

    function createTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('The task field is blank. Enter a task name and try again.');
            return;
        }

        const taskItem = document.createElement('div');
        taskItem.className = 'task';
        taskItem.innerHTML = `
            <label>
                <input type="checkbox" class="check-task">
                <p>${taskText}</p>
            </label>
            <button class="delete-task">Delete</button>
        `;

        const deleteButton = taskItem.querySelector('.delete-task');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});
