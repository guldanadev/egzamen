let inpName = document.querySelector(".inpName");
let inpLastName = document.querySelector(".inpLastName");
let inpImg = document.querySelector(".inpImg");
let creatBtn = document.querySelector(".creatBtn");
let list = document.querySelector(".list");
let updName = document.querySelector(".updName");
let updLastName = document.querySelector(".updLastName");
let updImg = document.querySelector(".updImg");
let saveBtn = document.querySelector(".saveBtn");

read();
creatBtn.addEventListener("click", () => {
  let obj = {
    name: inpName.value,
    lastName: inpLastName.value,
    img: inpImg.value,
  };
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.push(obj);
  localStorage.setItem("contact", JSON.stringify(data));
  read();
});
function read() {
  let newData = JSON.parse(localStorage.getItem("contact")) || [];
  list.innerHTML = "";
  newData.forEach((el, index) => {
    let info = document.createElement("div");
    let infoText = document.createElement("div");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");

    img.src = el.img;
    p1.innerText = el.name;
    p2.innerText = el.lastName;
    deleteBtn.innerText = "delete";
    editBtn.innerText = "edit";
    info.classList.add("info");
    deleteBtn.classList.add("delete");
    editBtn.classList.add("edit");

    deleteBtn.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`;
    editBtn.innerHTML = `<ion-icon name="create-outline"></ion-icon>`;

    infoText.append(p1);
    infoText.append(p2);
    info.append(img);
    info.append(infoText);
    infoText.append(deleteBtn);
    infoText.append(editBtn);
    list.append(info);

    deleteBtn.addEventListener("click", () => {
      delBtn(index);
    });
    editBtn.addEventListener("click", () => {
      edit(index);
    });
  });
}
function delBtn(index) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  data.splice(index, 1);
  localStorage.setItem("contact", JSON.stringify(data));
  read();
}
function edit(index) {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  updName.setAttribute("id", index);
  updLastName.setAttribute("id", index);
  updImg.setAttribute("id", index);

  updName.value = data[index].name;
  updLastName.value = data[index].lastName;
  updImg.value = data[index].img;
}

saveBtn.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("contact")) || [];
  let nameId = updName.id;
  let lastNameId = updLastName.id;
  let imgId = updImg.id;

  let newObj = {
    name: updName.value,
    lastName: updLastName.value,
    img: updImg.value,
  };
  data.splice(nameId, 1, newObj);
  data.splice(lastNameId, 1, newObj);
  data.splice(imgId, 1, newObj);

  localStorage.setItem("contact", JSON.stringify(data));
  read();
});
