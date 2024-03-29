const passwordInput = document.querySelector("#password");
const passwordInput2 = document.querySelector("#password2");
const eye = document.querySelector("#eye");
const eye2 = document.querySelector("#eye2");
const greetingElement = document.getElementById('greeting');
const Name = document.getElementById('uname');
const NameDisp = document.getElementById('namedisp');
const Todos = document.querySelector('.todos');
eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash");
  const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
  passwordInput.setAttribute("type", type);
})  
eye2.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash");
  const type = passwordInput2.getAttribute("type") === "password" ? "text" : "password"
  passwordInput2.setAttribute("type", type);
})
//////////////////////////////////////////////////////////////////////////////////
function getGreeting() {
  const currentTime = new Date().getHours();

  if (currentTime >= 1 && currentTime < 12) {
    return 'Good Morning';
  } else if (currentTime >= 12 && currentTime < 16) {
    return 'Good Afternoon';
  } else if (currentTime >= 16 && currentTime <= 23) {
    return 'Good Evening';
  } else {
    return 'Good Morning';
  }
}
greetingElement.textContent = getGreeting();
////////////////////////////////////////////////////////////////////
function nameDisplay(){
  NameDisp.textContent = Name.value;
  NameDisp.style.color ="#CEE5D0";
}
////////////////////////////////////////////////////
window.addEventListener('DOMContentLoaded', function () {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
        taskList.push(...savedTasks);
        displayTasks('All');
    }
});
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}
const taskList = []; 
function addTask(taskTitle, taskCategory, taskDate, startTime, endTime, taskDescription) {
  const taskId = taskList.length > 0 ? taskList[taskList.length - 1].taskId + 1 : 1;

  const task = {
    taskId: taskId,
    taskTitle: taskTitle,
    taskCategory: taskCategory,
    taskDate: taskDate,
    startTime: startTime,
    endTime: endTime,
    taskDescription: taskDescription
  };

  taskList.push(task); 
  saveTasksToLocalStorage();
  displayTask(task); 
}
///////////////////////////////////////////////////////////
function displayTask(task) {
  const todosElement = document.querySelector('.todos');
  const taskElement = document.createElement('div');
  taskElement.className = "taske";
  taskElement.dataset.taskId = task.taskId;
  taskElement.innerHTML = `
    <div class="card">
      <div class="front">
        <h2>${task.taskTitle}</h2>
        <p class="dtime">Date: ${task.taskDate} | <i class="fa-regular fa-clock"></i> ${task.startTime} - ${task.endTime} </p>
      </div>
      <div class="back">
        <div class="des">
          <p><span>Description</span>:<br>${task.taskDescription}</p>
        </div>
      </div>
    </div>
  `;

  todosElement.appendChild(taskElement);
}
//////////////////////////////////////
function displayTasks(category) {
  const todosElement = document.querySelector('.todos');
  todosElement.innerHTML = '';

  if (category === 'All') {
    taskList.forEach(task => displayTask(task));
  } else {
    const filteredTasks = taskList.filter(task => task.taskCategory === category);
    filteredTasks.forEach(task => displayTask(task));
  }
}
///////////////////////////////////////////
document.querySelector('.tasks h2:first-child').classList.add('active');
document.querySelectorAll('.tasks h2').forEach(function(category) {
  category.addEventListener('click', function() {
    document.querySelectorAll('.tasks h2').forEach(function(cat) {
      cat.classList.remove('active');
    });

    this.classList.add('active');

    const selectedCategory = this.textContent;
    displayTasks(selectedCategory);
  });
});
displayTasks('All');
///////////////////////////////////
document.getElementById('cnew').addEventListener('click', function() {
  const taskTitle = document.querySelector('#ttitle').value;
  const taskCategory = document.querySelector('.cat h2.active').textContent;
  const taskDate = document.querySelector('.date input[type="date"]').value;
  const startTime = document.querySelector('.time .starttime input[type="time"]').value;
  const endTime = document.querySelector('.time .endtime input[type="time"]').value;
  const taskDescription = document.querySelector('.descr textarea').value;

  addTask(taskTitle, taskCategory, taskDate, startTime, endTime, taskDescription);
});
/////////////////////////////////////////////////////
document.querySelectorAll('.cat h2').forEach(function(category) {
  category.addEventListener('click', function() {
    document.querySelectorAll('.cat h2').forEach(function(cat) {
      cat.classList.remove('active');
    });
    this.classList.add('active');
  });
});