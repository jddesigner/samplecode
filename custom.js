// const formFileds = document.querySelectorAll(".form-control");
// console.log(formFileds)

const submitBtn = document.getElementById("submit-btn");

var arra = [];

var fname = document.getElementById("fname");
var email = document.getElementById("email");

var tbody = document.getElementById("tbody");

let check = false;

function createTodo() {
  if (fname.value !== "" && email.value !== "") {
    function Person(name, email) {
      this.name = name;
      this.email = email;
    }

    arra.push(new Person(fname.value, email.value));
    // console.log(arra);

    fname.value = "";
    email.value = "";
  }

  else {
    console.log("please enter the text in input")
  }

  return arra;
}

submitBtn.addEventListener("click", () => {

  createTodo();
  // console.log(arra);
  const html = arra.map((item, key) => {
    // console.log(key);
    var htmlData = `<tr><td>${item.name}</td><td>${item.email}</td><td><button type="submit" class="btn btn-primary" data-bs-toggle="modal" onClick="editItme(this)" check=${key} data-bs-target="#exampleModal">Edit</button></td><td><button type="button" class="btn btn-danger" check=${key} onClick="delte(this)">Delete</button></td></tr>`;
    return htmlData;
  });
  tbody.innerHTML = html;

});


function delte(curentElemnt) {
  var targetItem = curentElemnt.attributes.check.textContent;
  console.log(targetItem);

  createTodo();

  arra.splice(targetItem, 1);

  const html = arra.map((item, key) => {
    // console.log(key);
    var htmlData = `<tr><td>${item.name}</td><td>${item.email}</td><td><button type="submit" class="btn btn-primary" data-bs-toggle="modal" onClick="editItme(this)" check=${key} data-bs-target="#exampleModal">Edit</button></td><td><button type="button" class="btn btn-danger" check=${key} onClick="delte(this)">Delete</button></td></tr>`;
    return htmlData;
  });

  tbody.innerHTML = html;
  console.log(arra);
}

var indexNum;

function editItme(e) {
  createTodo();
  // console.log(arra);
  var editCurentItem = e.attributes.check.textContent;
  // console.log(editCurentItem);
  // console.log("cehck");
  indexNum = editCurentItem;
  
  editname.value = `${arra[editCurentItem].name}`;
  editemail.value = `${arra[editCurentItem].email}`;
}


function update() {
  
  arra[indexNum].name = editname.value;
  arra[indexNum].email = editemail.value;
  createTodo();
  // console.log(arra)

  const html = arra.map((item, key) => {
    // console.log(key);
    var htmlData = `<tr><td>${item.name}</td><td>${item.email}</td><td><button type="submit" class="btn btn-primary" data-bs-toggle="modal" onClick="editItme(this)" check=${key} data-bs-target="#exampleModal">Edit</button></td><td><button type="button" class="btn btn-danger" check=${key} onClick="delte(this)">Delete</button></td></tr>`;
    return htmlData;
  });

  tbody.innerHTML = html;

}
