document.addEventListener("DOMContentLoaded", () => {
  let textFun = document.getElementById('create-task-form')
  textFun.addEventListener('submit', (e) => {
    e.preventDefault()
  let description = document.getElementById('new-task-description') 
    const newTask = document.createElement("li")
    newTask.innerText = description.value
  let toDoContainer = document.getElementById("tasks")
  toDoContainer.appendChild(newTask)
  e.target.reset()
  //console.log(e)
  })
})
