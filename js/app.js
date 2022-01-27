'use strict';
//defining variables
let container = document.getElementById("container")
container.style.display = "flex";
container.style.justifyContent = "space-between";
container.style.textAlign = "center";
//container.style.flexWrap="wrap";
container.style.alignContent = "center";
let admin = document.getElementById("admin");
admin.style.width = "20%";
let adminHead = document.createElement('h3');
admin.appendChild(adminHead);
adminHead.textContent = "Administration";
let marketing = document.getElementById("marketing");
marketing.style.width = "20%";
let marketingHead = document.createElement('h3');
marketing.appendChild(marketingHead);
marketingHead.textContent = "Marketing";
let development = document.getElementById("development");
development.style.width = "20%";
let developmentHead = document.createElement('h3');
development.appendChild(developmentHead);
developmentHead.textContent = "Development";
let finance = document.getElementById("finance");
finance.style.width = "20%";
let financeHead = document.createElement('h3');
finance.appendChild(financeHead);
financeHead.textContent = "Finance";
Employee.allEmployees = [];
let form = document.getElementById("employeeForm");

//constructor
function Employee(fullName, department, level, image) {
  this.id = this.generateRandomIdNumber();
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.salary = this.salary();
  this.image = image;
  Employee.allEmployees.push(this);
}
//end of constructor

//methods
Employee.prototype.salary = function () {
  if (this.level == "Senior") {
    return Math.floor((Math.random() * (2000 - 1500 + 1) + 1500) * 0.925);
  }
  else if (this.level == "Mid-Senior") {
    return Math.floor((Math.random() * (1500 - 1000 + 1) + 1000) * 0.925);
  }
  else if (this.level == "Junior") {
    return Math.floor((Math.random() * (1000 - 500 + 1) + 500) * 0.925);
  }
}

Employee.prototype.render = function () {
  //checking department name
  switch (this.department) {
    case "Administration":
      parent = admin;
      break;
    case "Development":
      parent = development;
      break;
    case "Marketing":
      parent = marketing;
      break;
    case "Finance":
      parent = finance;
      break;
    default:
      parent = container;
  }
  //adding card container
  let card = document.createElement('div');
  parent.appendChild(card);
  card.style.width = "100%";
  card.style.backgroundColor = "#9AD0EC";
  card.style.margin = "8px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "center";
  card.style.alignItems = "center";

  //adding image
  let img = document.createElement('img');
  card.appendChild(img);
  img.setAttribute("src", this.image);
  img.style.width = "100%";

  //adding header with name and id
  let heading = document.createElement('h4');
  heading.textContent = `Name: ${this.fullName} - id: ${this.id}`;
  card.appendChild(heading);

  //adding level insise a paragraph
  let levelPara = document.createElement('p');
  card.appendChild(levelPara);
  levelPara.textContent = `${this.level}'s level`;
  //adding salary
  let salaryPara = document.createElement('p');
  card.appendChild(salaryPara);
  salaryPara.textContent = `Salary: ${this.salary}`
}

Employee.prototype.generateRandomIdNumber = function () {
  let randomId = Math.floor(1000 + Math.random() * 9000);
  let uniqeId = randomId * Date.now();
  //console.log(randomId);
  return Math.floor(1000 + Math.random() * 9000);
}
//end of methods

function renderAll() {
  for (let i = 0; i < Employee.allEmployees.length; i++) {
    Employee.allEmployees[i].render();
  }
}

function saveToLocalStorage(){
  let stringifiedData = JSON.stringify(Employee.allEmployees);
  if (stringifiedData != null){
  localStorage.setItem("employees", stringifiedData);
  }
}

function getData (){
  let data = localStorage.getItem("employees");
  let parsedData= JSON.parse(data);
  if(parsedData !=null){
  for (let i=0 ; i<parsedData.length ; i++){
    new Employee(parsedData[i].fullName, parsedData[i].department, parsedData[i].level, parsedData[i].image);
  }
}
}

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let dep = event.target.dep.value;
  let level = event.target.level.value;
  let img = event.target.imgURL.value;
  let newEmployee = new Employee(name, dep, level, img);
  newEmployee.render();
  saveToLocalStorage();
}
getData();
renderAll();
