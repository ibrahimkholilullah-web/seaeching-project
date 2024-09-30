// class Products{
//     countey = "Bangladesh";
//     constructor(name, age, experians){
//         this.name = name
//         this.age = age
//         this.experians = experians
//     }
//     speak(talk){
//         console.log(`Talking About ${talk}`)
//     }
// }
// const lenobo =new Products('Tomer Name ki?', 23, '5 Yers')
// console.log(lenobo);
// lenobo.speak('Ibrahim Kholilullah')
// lenobo.speak('Khadija Khatun');

// class Bus{
//     constructor(name , ticate, price){
//         this.name = name;
//         this.ticate = ticate;
//         this.price = price;
//     }
//     chalu(){
//         console.log('Gari Chole Chole Re Bhi.')
//     }
// }
// class Bus extends Vehicle{
//     constructor(name, ticate, price, model, seat){
//         super(name, ticate, price);
//         this.model = model;
//         this.seat = seat;
//     }
// }

const instructor = [
    { No : 1, name : "Nodi", age: 28, position: "senior"},
    { No : 2, name : "Akhi", age: 38, position: "Junior"},
    { No : 3, name : "Sobuj", age: 18, position: "senior"}
];
instructor.push= {
    no :3,
}
const p = instructor;
console.log(p)
p.push = {name : 'ibrahim Kholil'}

console.log(p)