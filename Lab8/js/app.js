/**
 * app.js
 */

"use strict"

//1. Q1 the output is: undefined889101

//2. Local scope defines accessibility/visibility within a given context (e.g. function). In essence, only the function can access it. However,  global scope defines accessibility/visibility outside a function in such a way that all scripts and functions can access it.

//3. a. false; b. true; c. false; d. true; e. true

//4. It outputs 81 in the first instance and then output 25 in the second instance

//5. It alerts 10 because var unlike let is function scoped rather than block scoped

//6. defining a count object with two methods --- a) add() b) reset()
const count = (function (){
    let counter = 0
    return {
        add: function() { 
            return counter += 1; 
        },
        reset: function() {
            return counter=0; 
        }
    }
})();
console.log(count.add());
console.log(count.reset());

//7. counter is a free variable. A free variable is a variable referred to by a function without having it defined as a parameter or a local variable.

//8. make adder
let make_adder = function (val){
    let counter = 0
    return function (){
        return counter += val
    }    
}; 

var add5 = make_adder(5);
console.log(add5());
console.log(add5());
console.log(add5());
var add7 = make_adder(7);
console.log(add7());
console.log(add7());
console.log(add7());

//9. Using modules which can be IIFE

//10. Revealing module pattern
var Employee = (function() {
        //private fields
        let name;
        let age;
        let salary;
        // private getter 
        let getAge = function() { 
            return this.age;
        };
        let getSalary = function() { 
            return this.salary;
        };
        let getName = function() { 
            return this.name;
        };
               
        
        return { // public functions
            setAge: function(newAge) { 
                this.age = newAge;
            },
            setSalary: function(newSalary) { 
                this.salary = newSalary;
            },
            setName: function(newName) {
                this.name = newName; 
           },            
           increaseSalary: function(percentage) {
                getSalary() + (getSalary() * percentage);
            },
           incrementAge: function() { 
                getAge() + 1;
            }
        };

    })();

Employee.setSalary(120000);
console.log(Employee.salary); //120000

//11. Extension with address fields and methods
const employee2 = Object.create(Employee);

employee2.address;
employee2.getAddress = function(){
    return this.address;
}
employee2.setAddress = function(address){
    return this.address = address;
}
