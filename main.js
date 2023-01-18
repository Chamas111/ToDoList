// button to add tasks to the list
/*
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

const form = document.querySelector("#inputTask");
console.log("ffff", form);
const input = document.querySelector("input");
//console.log("cccc", input);
const main = document.querySelector(".main");
//console.log("ddd", main);
const ul = document.querySelector("#incomplete-tasks");
//console.log("ddd", ul);

/*
1. create li
------------
*/
function createLi() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = input.value;
  const label = document.createElement("label");
  label.textContent = "confirmed";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const editBtn = document.createElement("i");
  //editBtn.innerHTML = '<i class="bi-pen me-3"></i>';
  editBtn.className = "bi-pen me-3";
  const removeBtn = document.createElement("i");
  //removeBtn.innerHTML = '<i class="bi-trash3"></i>';
  removeBtn.className = "bi-trash3";
  li.appendChild(span);
  li.appendChild(label);
  label.appendChild(checkbox);
  li.appendChild(editBtn);
  li.appendChild(removeBtn);

  return li;
}

// ----------------Add new Task---------------------
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const li = createLi();

  if (input.value !== "") {
    ul.appendChild(li);
    input.value = "";
  }
});

/* checkbox confirmation */

ul.addEventListener("change", (event) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const li = checkbox.parentNode.parentNode;
  if (checked) {
    li.className = "responded";
  } else {
    li.className = "";
  }
});

/* Button actions for each task */

ul.addEventListener("click", (event) => {
  if (
    event.target.className === "bi-pen me-3" ||
    event.target.className === "bi-trash3"
  ) {
    //console.log(event.target);
    console.log("gggggggggggggg", "BUTTON");
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    console.log(li);
    console.log(ul);
    if (button.className === "bi-trash3") {
      ul.removeChild(li);
    } else if (button.className === "bi-pen me-3") {
      const span = li.firstElementChild;
      const input = document.createElement("input");
      input.type = "text";
      input.value = span.textContent;
      console.log("ffff", input.value);
      li.insertBefore(input, span);
      console.log("eeeeeeeeeee");
      li.removeChild(span);
      console.log("sssssssssss");
      button.textContent = "save";
      //console.log(button.className);
    } else if (button.textContent === "save") {
      const input = li.firstElementChild;

      const span = document.createElement("span");

      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "bi-pen me-3";
    }
  }
});
