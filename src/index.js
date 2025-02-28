document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let newTaskDescription = document.querySelector('#new-task-description')
  newTaskDescription.setAttribute('id','newTasks')
  let form = document.querySelector('form')
  form.addEventListener('submit',(e)=>{
    e.preventDefault()
    buildToDo(e.target.newTasks.value)
    form.reset()
  })
})
function buildToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}
function handleDelete(e){
  e.target.parentNode.remove()
}