let submit = document.querySelector(".submit");
let input = document.querySelector("input");
let tag = document.querySelector("#userName");
let select = document.querySelector("#typeName");

let inpDiv = document.querySelector(".inputDiv");
let typeDiv = document.querySelector(".PhoneType");
let submitdiv = document.querySelector(".submitBtn");
let newDiv = {};

function createTable() {
  if (localStorage.getItem("Devices") === null) {
    return;
  }
  let data = JSON.parse(localStorage.Devices);
  if (!Array.isArray(data)) {
    data = [data];
  }
  let Thead = document.querySelector("#tableCon #headTa");
  let Bhead = document.querySelector("#tableCon #boadTa");

  let titles = ["Client Name", "Phone Type", "Price", "condition"];
  let tds = [];
  let trHeader = document.createElement("tr");
  for (title in titles) {
    tds.push(document.createElement("th"));
    let Ntext = document.createTextNode(titles[title]);
    tds[title].appendChild(Ntext);
    trHeader.appendChild(tds[title]);
  }
  Thead.appendChild(trHeader);
  for (row in data) {
    let tr = document.createElement("tr");
    for (pros in data[row]) {
      let td = document.createElement('td')
      let tdtext = document.createTextNode(data[row][pros])
      td.appendChild(tdtext)
      tr.appendChild(td)

    }
    Bhead.appendChild(tr)
  }
}
createTable()

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    intiDevice(e.target);
  }
});

select.addEventListener("change", (e) => {
  newDiv.PhoneType = e.target.options[e.target.selectedIndex].value;
  typeDiv.style.display = "none";
  inpDiv.style.display = "block";
  tag.textContent = "Enter Phone price";
});

function intiDevice(inp) {
  switch (tag.textContent) {
    case "Client Name":
      newDiv.Cname = inp.value;
      inp.value = "";
      inpDiv.style.display = "none";
      typeDiv.style.display = "block";
      break;
    case "Enter Phone price":
      newDiv.Price = Number(inp.value);
      if (newDiv.Price > 100) newDiv.condition = "New Device";
      else newDiv.condition = "Used";
      inp.value = "";
      inpDiv.style.display = "none";
      submitdiv.style.display = "block";
      break;
  }
}

submit.addEventListener("click", (e) => {
  if (localStorage.getItem("Devices") === null) {
    localStorage.setItem("Devices", JSON.stringify(newDiv));    
  }
  else{ 
    let devices = JSON.parse(localStorage.Devices);
    if (!Array.isArray(devices)) {
      devices = [devices];
    }
    devices.push(newDiv);
    localStorage.Devices = JSON.stringify(devices);
  }
    updateTable(newDiv);
  newDiv = {};
});

function updateTable(e){
  let Bhead = document.querySelector("#tableCon #boadTa");

  let tr = document.createElement("tr");
  for (pros in e) {
      let td = document.createElement('td')
      let tdtext = document.createTextNode(e[pros])
      td.appendChild(tdtext)
      tr.appendChild(td)

    }
    Bhead.appendChild(tr)
}
