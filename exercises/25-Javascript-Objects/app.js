var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};

family.members[0].lucky_numbers[3] = 33;

var person3 = Object.create(person);
person3.name = "Jimmy";
person3.lastname = "Doe";
person3.age = 38;
person3.gender = "male";
person3.lucky_numbers = [1, 2, 3, 4];
person3.significant_other = null;


family.members.push(person3);

function addAllFamilyLuckyNumbers(anArray) {
    var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < family.members.length; i++) {
        //To-Do: loop and add; consider nested loops
        //Hint: use the anArray variable to get all of the lucky numbers
        for (let j = 0; j < family.members[i].lucky_numbers.length; j++) {
            sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + family.members[i].lucky_numbers[j]
        }
    }
    return sumOfAllLuckyNumbers;
}

//Enter all your code here:


//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 