'use strict';
let parent = document.getElementById('parent');
parent.style.display="flex";
parent.style.justifyContent="center";
parent.style.alignItems="center";
parent.style.height="100%";
let table = document.createElement('table');
parent.appendChild(table);
table.style.alignSelf="stretch";
table.style.textAlign="center";
table.style.borderCollapse="collapse";
table.style.border="black solid"
Employee.allEmployees = [];
let tr1 = document.createElement('tr');
table.appendChild(tr1);
let th1 = document.createElement('th');
th1.textContent = "Department Name";
tr1.appendChild(th1);
let th2 = document.createElement('th');
th2.textContent = "Number of Employees";
tr1.appendChild(th2);
let th3 = document.createElement(`th`);
th3.textContent = "Avarage Salary";
tr1.appendChild(th3);
let th4 = document.createElement(`th`);
th4.textContent = "Total Salary";
tr1.appendChild(th4);
let tr2 = document.createElement('tr');
table.appendChild(tr2);
let thr2 = document.createElement('th');
tr2.appendChild(thr2);
thr2.textContent = "Administration";
let tr3 = document.createElement('tr')
table.appendChild(tr3);
let thr3 = document.createElement('th');
tr3.appendChild(thr3);
thr3.textContent = "Finance";
let tr4 = document.createElement('tr')
table.appendChild(tr4);
let thr4 = document.createElement('th');
tr4.appendChild(thr4);
thr4.textContent = "Development";
let tr5 = document.createElement('tr')
table.appendChild(tr5);
let thr5 = document.createElement('th');
tr5.appendChild(thr5);
thr5.textContent = "Marketing";
let td21 = document.createElement('td');
let td22 = document.createElement('td');
let td23 = document.createElement('td');
let td31=document.createElement('td');
let td32=document.createElement('td');
let td33=document.createElement('td');
let td41=document.createElement('td');
let td42=document.createElement('td');
let td43=document.createElement('td');
let td51=document.createElement('td');
let td52=document.createElement('td');
let td53=document.createElement('td');
let tf=document.createElement('tr');
table.appendChild(tf);
let tfEmpty=document.createElement('td');
let tf1=document.createElement('td');
let tf2=document.createElement('td');
let tf3=document.createElement('td');


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
function TableData( ){
  this.numberOfEmployees=this.count();
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
  tr2.appendChild(td21);
  td21.textContent=count(Employee.allEmployees, "Administration");
  tr2.appendChild(td22);
  td22.textContent=avg(Employee.allEmployees, "Administration");
  tr2.appendChild(td23);
  td23.textContent=sum(Employee.allEmployees, "Administration");
  tr3.appendChild(td31);
  td31.textContent=count(Employee.allEmployees, "Finance");
  tr3.appendChild(td32);
  td32.textContent=avg(Employee.allEmployees, "Finance");
  tr3.appendChild(td33);
  td33.textContent=sum(Employee.allEmployees, "Finance");
  tr4.appendChild(td41);
  td41.textContent=count(Employee.allEmployees, "Development");
  tr4.appendChild(td42);
  td42.textContent=avg(Employee.allEmployees, "Development");
  tr4.appendChild(td43);
  td43.textContent=sum(Employee.allEmployees, "Development");
  tr5.appendChild(td51);
  td51.textContent=count(Employee.allEmployees, "Marketing");
  tr5.appendChild(td52);
  td52.textContent=avg(Employee.allEmployees, "Marketing");
  tr5.appendChild(td53);
  td53.textContent=sum(Employee.allEmployees, "Marketing");

  tf.appendChild(tfEmpty);
  tfEmpty.textContent="";
  tf.appendChild(tf1);
  tf1.textContent=`Total Employees: ${countAll(Employee.allEmployees)}`;
  tf.appendChild(tf2);
  tf2.textContent=`Avarage Salary for all Departments: ${avgAll(Employee.allEmployees)}`;
  tf.appendChild(tf3);
  tf3.textContent=`Summation of all employee's salary: ${sumAll(Employee.allEmployees)}`;
}



//functions
function renderAll() {
  for (let i = 0; i < Employee.allEmployees.length; i++) {
    Employee.allEmployees[i].renderTableBody();
  }
}
function sumAll(arr){
  let sum =0;
  for (const obj of arr){
    sum=sum+obj.salary;
  }
  return sum;
}
function avgAll(arr){
  
  return Math.round(sumAll(arr)/arr.length);
}
function countAll(arr){
  let counts=0;
  for (const element of arr){
    counts=counts+1;
  }
  console.log(counts);
  return counts;
}

function count(arr, depName) {
  let counts = 0;
  for (const element of arr) {
    counts = (element.department == depName) ? counts + 1 : counts;
  }

  return counts;
}

function sum(arr,depName){
let sum=0;
for (const element of arr){
  sum=(element.department == depName)? sum + element.salary : sum;
}
return sum;
}

function avg(arr, depName){
  let avarage=sum(arr,depName)/count(arr, depName);
  if (avarage !=null){
    return Math.round(avarage);
  }
}

function getData() {
  let data = localStorage.getItem("employees");
  let parsedData = JSON.parse(data);
  if (parsedData != null && parsedData != undefined) {
    console.log(parsedData);
    for (let i = 0; i < parsedData.length; i++) {
      new Employee(parsedData[i].fullName, parsedData[i].department, parsedData[i].level, parsedData[i].image);
    }
  }
}

getData();
countAll(Employee.allEmployees);
renderAll();