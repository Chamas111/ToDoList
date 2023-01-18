// button to add tasks to the list

const addButton = document.getElementById("addTask");
let inputTask = document.getElementById("taskInput");
let taskCount = 1;

addButton.addEventListener("click", (e) => {
  if (inputTask.value === "") {
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
      inputTask.value +
      '</p></li><li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"><div class="d-flex flex-row justify-content-end align-items-center mb-1"><a href="#!" class="text-info" data-mdb-toggle="tooltip" title="Edit todo"><i class="bi-pen me-3"></i></a><a href="#!" class="text-danger" data-mdb-toggle="tooltip" title="Delete todo"><i class="bi-trash3"></i></a></div></li></ul>';
    task.innerHTML = strHtml;
    document.getElementById("taskList").appendChild(task);
    taskCount++;
    inputTask.value = "";
  }
});

/*
let addButton = document.getElementById("addTask");
let inputTask = document.getElementById("taskInput");
let paragraph = document.querySelector(".lead");
let task_List = document.getElementById("taskList");

//let list_Task_Value = document.getElementById("listTaskValue");
addButton.addEventListener("click", (e) => {
  if (inputTask.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("list-group");
    newItem.innerHTML =
      '<ul class="list-group list-group-horizontal rounded-0 bg-transparent" id="listTaskValue"><li class="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent"><div class="form-check"><input class="form-check-input me-0"      type="checkbox" value="" id="flexCheckChecked1" aria-label="..." checked /></div></li><li class="list-group-item px-3 py-1 d-flex lign-items-center flex-grow-1 border-0 bg-transparent" >  <p class="lead fw-normal mb-0">' +
      inputTask.value +
      '</p></li><li  class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent"> <div    class="d-flex flex-row justify-content-end align-items-center mb-1"  > <a href="#!" class="text-info"      data-mdb-toggle="tooltip"      title="Edit todo"      ><i class="bi-pen me-3"></i    ></a>    <a      href="#!"      class="text-danger"      data-mdb-toggle="tooltip"      title="Delete todo"      ><i class="bi-trash3"></i    ></a>  </div></li></ul>';
    task_List.appendChild(newItem);
    inputTask.value = "";
  } else {
    document
      .getElementById("taskInput")
      .classList.add("border", "border-danger", "border-3");
  }
});

document.querySelector(".list-group").addEventListener("click", (e) => {
  let target = e.target;
  if (target.classList.contains("bi-trash3")) {
    let item = target.parentElement;
    item.parentElement.parentElement.parentElement.remove();
  }
  // Edit task is not finished yet!!
  else if (target.classList.contains("bi-pen")) {
    const ul = document.querySelector("ul");
    // const li = ul.querySelector(li)[1];
    console.log(target);
    let childElement = ul.children[1];
    childElement.innerHTML = "<input  />";
    //const cell = task_List.getElementsByTagName("li");
  }
});
*/
