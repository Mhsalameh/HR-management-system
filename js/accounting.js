'use strict';
let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);
getData();

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

//methods

Employee.prototype.generateRandomIdNumber = function () {
    let randomId = Math.floor(1000 + Math.random() * 9000);
    let uniqeId = randomId * Date.now();
    //console.log(randomId);
    return Math.floor(1000 + Math.random() * 9000);
  }


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

  Employee.prototype.renderTableBody = function (){
      let tr2 = document.createElement('tr');
      table.appendChild(tr2);
      let td1=document.createElement('td');
      tr2.appendChild(td1)
      td1.textContent=`${this.department}`;
  }

  function renderAll() {
    for (let i = 0; i < Employee.allEmployees.length; i++) {
      Employee.allEmployees[i].renderTableBody();
    }
  }

//functions

function renderTableHead(){
    //creates a row
    let tr=document.createElement('tr');
    table.appendChild(tr);
    let th1=document.createElement('th');
    th1.textContent="Department Name";
    tr.appendChild(th1);
    let th2=document.createElement('th');
    th2.textContent="Number of Employees";
    tr.appendChild(th2);
    let th3=document.createElement(`th`);
    th3.textContent="Avarage Salary";
    tr.appendChild(th3);
    let th4=document.createElement(`th`);
    th4.textContent="Total Salary";
    tr.appendChild(th4);
}

function getData (){
    let data = localStorage.getItem("employees");
    let parsedData= JSON.parse(data);
    if(parsedData !=null && parsedData != undefined){
        console.log(parsedData);
    for (let i=0 ; i<parsedData.length ; i++){
      new Employee(parsedData[i].fullName, parsedData[i].department, parsedData[i].level, parsedData[i].image);
    }
  }
  }

  renderTableHead();
  renderAll();