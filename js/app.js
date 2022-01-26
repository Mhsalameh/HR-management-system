'use strict';
let dep=["Administration", "Marketing", "Development", "Finance"];
let lev=["Junior", "Mid-Senior", "Senior"];

function Employee(id, fullName, department, level){
            this.id=id;
            this.fullName=fullName;
            this.department=dep[department];
            this.level=lev[level];
            this.salary=this.salary();
            this.render();
}


Employee.prototype.salary = function(){
        if(this.level=="Senior"){
        return Math.floor(((Math.random() * (2000 - 1500 + 1) ) + 1500)*0.925);
        }
      else if(this.level=="Mid-Senior") {
        return Math.floor(((Math.random() * (1500 - 1000 + 1) ) + 1000)*0.925);
      }
      else if (this.level=="Junior"){
        return Math.floor(((Math.random() * (1000 - 500 + 1) ) + 500)*0.925);
      }
}
Employee.prototype.render = function(){
    document.write(`<h3>Name: ${this.fullName}</h3> `);
    document.write(`<p> Salary: ${this.salary}</p> `);
}

    const ghazi = new Employee("1000", "Ghazi Samer",0 ,2);
    const lana = new Employee("1001", "Lana Ali", 3, 2);
    const tamara = new Employee("1002", "Tamara Ayoub", 1, 2);
    const safi = new Employee("1003", "Safi Walid", 0 ,1);
    const omar = new Employee("1004", "Omar Zaid", 2, 2);
    const rana = new Employee("1005", "Rana Saleh", 2, 0);
    const Hadi = new Employee("1006", "Hadi Ahmad", 3, 1);
