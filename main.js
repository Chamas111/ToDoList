const form = document.querySelector("#inputTask");
console.log("ffff", form);
const input = document.querySelector("input");
//console.log("cccc", input);
const main = document.querySelector(".main");
//console.log("ddd", main);
const ul = document.querySelector("#incomplete-tasks");
//console.log("ddd", ul);

/* Create Task */

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
      console.log("dfdfs", span);
      let editElement = prompt("Please enter your change", span.innerText);
      if (editElement != null) {
        span.innerHTML = editElement;
      }
      /*
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
      //const input = li.firstElementChild;

      const span = document.createElement("span");
      console.log("sssssssssss", span);
      span.textContent = input.value;
      li.insertBefore(span, input);
      li.removeChild(input);
      button.textContent = "bi-pen me-3";
    }
  }
});
function editTask() {
 */
    }
  }
});
