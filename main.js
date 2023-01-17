// button to add tasks to the list
const addButton = document.getElementById("addTask");
let taskCount = 1;

addButton.addEventListener("click", (e) => {
  let inputTask = document.getElementById("taskInput").value;
  if (inputTask === "") {
    document
      .getElementById("taskInput")
      .classList.add("border", "border-danger", "border-3");
  } else {
    document
      .getElementById("taskInput")
      .classList.remove("border", "border-danger", "border-3");
    const task = document.createElement("div");
    task.classList.add(`task${taskCount}`);
    let strHtml =
      '<ul class="list-group list-group-horizontal rounded-0 bg-transparent"><li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent"><div class="form-check"><input class="form-check-input me-0" type="checkbox" value="" id="markedDone' +
      taskCount +
      '" aria-label="..." /></div></li><li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent" > <p class="lead fw-normal mb-0">' +
      inputTask +
      '</p></li><li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"><div class="d-flex flex-row justify-content-end align-items-center mb-1"><a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i class="bi-pen me-3"></i></a><a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i class="bi-trash3"></i></a></div></li></ul>';
    task.innerHTML = strHtml;
    document.getElementById("taskList").appendChild(task);
    taskCount++;
  }
});
