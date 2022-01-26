'use strict';
let dep = ["Administration", "Marketing", "Development", "Finance"];
let lev = ["Junior", "Mid-Senior", "Senior"];
let employeesSection=document.getElementById("employees")
function Employee(fullName, department, level) {
  this.id = this.generateRandomIdNumber();
  this.fullName = fullName;
  this.department = dep[department];
  this.level = lev[level];
  this.salary = this.salary() * 0.925;
  this.render();
}


Employee.prototype.salary = function () {
  if (this.level == "Senior") {
    return Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
  }
  else if (this.level == "Mid-Senior") {
    return Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
  }
  else if (this.level == "Junior") {
    return Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
  }
}
Employee.prototype.render = function () {
  //document.write(`<h3>Name: ${this.fullName}</h3> `);
  //document.write(`<p> Salary: ${this.salary}</p> `);
  let heading = document.createElement('h4');
  heading.textContent = this.name;
  employeesSection.appendChild(heading);
}

Employee.prototype.generateRandomIdNumber = function () {
  return Math.floor(Math.random() * 9000 + 9999);
}

let form = document.getElementById("employeeForm");
form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let dep = event.target.dep.value;
  let level = event.target.level.value;
  let img = event.target.imgURL.value;
  let newEmployee = new Employee( name, dep, level);
  console.log(newEmployee);
  
}
