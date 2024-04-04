document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo =e.target.querySelector('#new-task-description').value
    buildToDo(newToDo);
    newTaskForm.reset();

  })
  //As a user, I should be able to type a task into the input field.
//As a user, I should be able to click some form of a submit button.
//As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

});
function buildToDo(newToDo){
  const taskLi = document.createElement('li');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'x';
  taskLi.textContent = newToDo;
  taskLi.appendChild(deleteButton);
  document.querySelector('#tasks').appendChild(taskLi);
  deleteButton.addEventListener('click', handleDelete);
}
function handleDelete(e){
  e.target.parentNode.remove();
}