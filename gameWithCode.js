let numbers = [1, 4, 3, 22, 66, 42, 765, 2, 78, 64];

console.log("All array: " + numbers);
console.log("array[index]: " + numbers[3]);


// Sort the numbers in ascending order:
console.log(numbers.sort((a, b) => a-b));


// Sort the numbers in descending order:
console.log(numbers.sort((a, b) => b-a));


const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

for(const el of fruits) {
    console.log(el);
    for(const letter of el) {
        console.log(letter);
    }
}



for(const el in fruits) {
    console.log(el);
}



const person = {
    name : "Francesco",
    surname : "Rapisarda",
    fullname : function() {
        return this.name + " " + this.surname;
    },
    codFis : "RPSFNC89M02A028F",
    age : 34,
    address : {
        via : "Vittorio Emanuele",
        nCiv : 23,
        cap : 95024
    }    
}


console.log(person);
console.log(person.codFis)
console.log(person.fullname());


