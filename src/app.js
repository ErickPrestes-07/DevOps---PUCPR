export function createApp() {
  const taskInput = document.getElementById('taskInput')
  const addBtn = document.getElementById('addBtn')
  const taskList = document.getElementById('taskList')
  const totalTasksEl = document.getElementById('totalTasks')
  const completedTasksEl = document.getElementById('completedTasks')

  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]')

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  function updateStats() {
    const total = tasks.length
    const completed = tasks.filter(t => t.done).length
    totalTasksEl.textContent = `${total} tarefa${total !== 1 ? 's' : ''}`
    completedTasksEl.textContent = `${completed} concluída${completed !== 1 ? 's' : ''}`
  }

  function renderTasks() {
    taskList.innerHTML = ''
    tasks.forEach((task, index) => {
      const li = document.createElement('li')
      li.className = `task-item${task.done ? ' done' : ''}`
      li.innerHTML = `
        <input type="checkbox" ${task.done ? 'checked' : ''} data-index="${index}" />
        <span>${task.text}</span>
        <button class="delete-btn" data-index="${index}">🗑️</button>
      `
      taskList.appendChild(li)
    })
    updateStats()
  }

  function addTask() {
    const text = taskInput.value.trim()
    if (!text) return
    tasks.push({ text, done: false })
    taskInput.value = ''
    saveTasks()
    renderTasks()
  }

  taskList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
      const index = parseInt(e.target.dataset.index)
      tasks[index].done = e.target.checked
      saveTasks()
      renderTasks()
    }
  })

  taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const index = parseInt(e.target.dataset.index)
      tasks.splice(index, 1)
      saveTasks()
      renderTasks()
    }
  })

  addBtn.addEventListener('click', addTask)
  taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTask()
  })

  renderTasks()
}

export function add(a, b) {
  return a + b
}

export function formatTask(text) {
  return text.trim().charAt(0).toUpperCase() + text.trim().slice(1)
}

export function validateTask(text) {
  return text.trim().length >= 3
}

export function getTaskStatusLabel(done) {
  return done ? 'Concluída' : 'Pendente'
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
