const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("task-buttons");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.classList.add("done-btn");
  
  doneBtn.addEventListener("click", () => {
    span.classList.toggle("done");
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  buttonGroup.appendChild(doneBtn);
  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(buttonGroup);
  taskList.appendChild(li);

  taskInput.value = "";
});


