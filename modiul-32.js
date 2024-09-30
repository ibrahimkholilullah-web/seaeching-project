function kichen() {
    let rost = 0;
    return function(){
        rost++;
        return rost;
    }
}
const firstServer = kichen();
// console.log(firstServer());

/////////////////////
// clssBack Function
function greeting(person, name){
    person(name);
}
function greetingHandler(name){
       console.log("Good Morning", name)

}
function greetingEven(name){
    console.log("Good Morning", name)
}
greeting(greetingHandler, 'Ibrahim Kholil');
greeting(greetingHandler, 'Shazahan Miya');
greeting(greetingEven, "Tomal Hosean");

/////////////
function firstInput(seconderyInput, name){
    seconderyInput(name)
}
function seconderyInput(name){
    console.log('Good Morning', name)
}
function threedInput(name){
    console.log('Good Ufternun', name)
}

firstInput(seconderyInput, 'Ibrahim Kholil')
firstInput(threedInput, 'Monika Islam')

// only Even number print
const evenNumber = [2,5,9,90,34,25,7,9,24];
const result  = evenNumber.filter(e => e % 2 === 1 )
// const resultRepite = result + 1;
console.log(result);
const result1 = evenNumber.filter(e => e % 2 === 0)
// console.log(result1);

const instructor = [
    { No : 1, name : "Nodi", age: 28, position: "senior"},
    { No : 2, name : "Akhi", age: 38, position: "Junior"},
    { No : 3, name : "Sobuj", age: 18, position: "senior"},
    { No : 4, name : "Nodi", age: 28, position: "senior"},
    { No : 5, name : "Akhi", age: 38, position: "Junior"},
    { No : 6, name : "Sobuj", age: 18, position: "senior"},
    { No : 7, name : "Nodi", age: 28, position: "senior"},
    { No : 8, name : "Akhi", age: 38, position: "Junior"},
    { No : 9, name : "Sobuj", age: 18, position: "senior"},
    { No : 10, name : "Nodi", age: 28, position: "senior"},
    { No : 11, name : "Akhi", age: 38, position: "Midel"},
    { No : 12, name : "Sobuj", age: 18, position: "senior"}
];

// const output =instructor.filter(e => e.position === 'senior'||'midel')
// const output =instructor.map(e => e.age > 20)
// const output1 =instructor.filter(e => e.age >  20)
// instructor.forEach(e => console.log(e.age))
// const output =instructor.reduce( (c , u) => c+ u.age ,0 )
// const output =instructor.filter(e => e.No === 5)
// const output =instructor.find(e => e.age === 18)
// console.log(output);


function sumNumber( a,b,c,d ){
    // const argu = [...arguments]
    // console.log(argu)
    const result = a+b+c+d;
    return result 
}
const sumInput = sumNumber(2,4,6,7,50,40,20,80,90,100);
// console.log(`First fore Number Added ${sumInput}`);
// show output Beginner
let data2 = {
    data:
        [
            {
                bookId: 1,
                bookDetails: {
                    name: "habluder adda",
                    category: "XYZ",
                    price: "20$",
                },
                bookCategory: "Basic",
            },
            {
                bookId: 2,
                bookDetails: {
                    name: "gobluder adda",
                    category: "ABC",
                    price: "40$",
                },
                bookCategory: "Beginner",
            }
        ]
}
const dateTime = data2?.data[1]?.bookDetails?.price
// console.log(dateTime)
