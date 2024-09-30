const student = [
    {name:"Ibrahim Kholil", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: true},
    {name:"Monika Islam", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: true},
    {name:"Jami Islam", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: false},
    {name:"Mithila Farjana", email:"ibrahimkholil3329@gmail.com", avg:48, fiftyPerson: true},
    {name:"Elam", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: true},
    {name:"Rabbi Hasan", email:"ibrahimkholil3329@gmail.com", avg:48, fiftyPerson: false},
    {name:"Mim", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: true},
    {name:"Khidaja", email:"ibrahimkholil3329@gmail.com", avg:38, fiftyPerson: false},
    {name:"Shajahan Mia", email:"ibrahimkholil3329@gmail.com", avg:28, fiftyPerson: true},
    {name:"Mokbul Hosain", email:"ibrahimkholil3329@gmail.com", avg:58, fiftyPerson: false},
];

const finalScic = (student) =>{
    const scic = student.filter((person) => person.avg >= 50 || person.fiftyPerson === true);
    const name = scic.map((name)=> name.name)
    console.log(name)
}
// finalScic(student);

// problem 02 conceptual sessions

const polapain = [
    { No:1, name:"Ibrahim Kholil", job:"sorkari", salary:22000},
    { No:2, name:"Milon Miya", job:"besorkari", salary:40000},
    { No:3, name:"Miraj Mia", job:"sorkari", salary:25000},
    { No:4, name:"Eshan Sorker", job:"besorkari", salary:22000},
    { No:5, name:"Al-Amin", job:"besorkari", salary:100000},
    { No:6, name:"Ikram Khan", job:"sorkari", salary:19000},
    { No:7, name:"Mijan Khan", job:"besorkari", salary:40000},
    { No:8, name:"Asif Mia", job:"sorkari", salary:30000},
]

const patro = polapain.filter((select)=> (select.job === 'sorkari' && select.salary >= 20000) || (select.job === 'besorkari' && select.salary >= 40000));

const lottery = Math.floor(Math.random()*patro.length)
const patroNameOrNumber = `
${patro[lottery].No}
${patro[lottery].name}`

console.log(patroNameOrNumber)