function enterInput(event) {
  if (event.key === "Enter") {
    const text = input.value.trim();
    if (text !== "") {
      const newTodo = document.createElement("div");
      newTodo.classList.add("todo-item");

      const todoText = document.createElement("span");
      todoText.textContent = text;
      newTodo.style.border = "1px solid gray";
      newTodo.style.padding = "10px";
      newTodo.style.width = "310px";
      newTodo.style.wordWrap = "break-word";
      newTodo.style.overflowWrap = "break-word";
      newTodo.style.whiteSpace = "pre-wrap";
      todoText.classList.add("todo-text");

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("delete-btn");

      const deleteImg = document.createElement("img");
      deleteImg.src = "https://images.icon-icons.com/37/PNG/512/delete_4219.png";
      deleteImg.alt = "Delete";
      deleteImg.classList.add("delete-btn");
      deleteImg.style.width = "18px";
      deleteImg.style.height = "18px";
      deleteImg.style.cursor = "pointer";

      newTodo.appendChild(deleteImg);
      newTodo.appendChild(todoText);
      list.appendChild(newTodo);
      input.value = "";

      todoText.addEventListener("click", function() {
        todoText.classList.toggle("completed");
      });

      deleteImg.addEventListener("click", function() {
        newTodo.remove();
      });
    }
  }
}


const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

input.addEventListener("keydown", enterInput);
