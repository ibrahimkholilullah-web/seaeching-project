const People = [
    {
        id: 1,
        name:"Ibrahim Kholil",
        age: 21,
        occopation: 'Web designer',
        contact : {
            email: 'ibrahim@gmail.com',
            phone:'+08801862823329'
        },
        address: {
            street : '789-890-567',
            city: 'Mymensing',
            state : 'BD',
            zip: '9078'
        },
        social:{
            twitter: '@ibrahimkholil'
        },
        hobbies: ['FoodBoll Play', 'Movie Weaching']
    },
    {
        id: 2,
        name:"Monika Islam",
        age: 19,
        occopation: 'grapices Design',
        contact : {
            email: 'monika@gmail.com',
            phone:'+088019823839'
        },
        social:{
            linkdin: 'monikaIslam'
        },
        hobbies: ['FoodBoll Play']
    },
    {
        id: 3,
        name:"Mithila Farjana Mim",
        age: 14,
        occopation: 'web Developer',
        contact : {
            email: 'mim@gmail.com',
            phone:'+08801862823329'
        },
        address: {
            street : '789-890-567',
            city: 'Dhaka',
            state : 'BD',
            zip: '9097'
        },
        social:{
            twitter: '@mithilamim'
        },
        hobbies: ['Cricket Play' , 'Movie Weaching']
    }
];

// javaScript funtion start here
const personList = document.getElementById('person-name');
const petsonInfo = document.getElementById('person-info');


const rendomePeopleList = (people) => {
    people.map((people) => {
        const li = document.createElement('li');
        li.classList.add('cursor-pointer', 'p-2', 'text-sm', 'font-bold')
        li.textContent = people.name;
        

        li.addEventListener('click', () => {
            handelrPersonClick(people.id)
            
        })
        personList.appendChild(li)
    })
}
const displayPerson = (person) =>{
    petsonInfo.innerHTML = `
    <p  class="text-lg font-bold">Id : ${person.id}</p>
    <h1 class="text-lg font-bold">Person Name : ${person.name}. </h1>
    <p class="text-lg font-bold">Age : ${person?.age || "N/A"}</p>
    <p class="text-lg font-bold">Occopation : ${person?.occopation || "N/A"}</p>
    <p class="text-lg font-bold">Phone : ${person?.contact?.phone || "N/A"}</p>
    <p class="text-lg font-bold">Street : ${person?.address?.street || "N/A"}</p>
    <p class="text-lg font-bold">City : ${person?.address?.city || "N/A"}</p>
    <p class="text-lg font-bold">State : ${person?.address?.state || "N/A"}</p>
    <p class="text-lg font-bold">Zip : ${person?.address?.zip || "N/A"}</p>
    <p class="text-lg font-bold">Twitter : ${person?.social?.twitter || "N/A"}</p>
    <p class="text-lg font-bold">Linkdin : ${person?.social?.linkdin || "N/A"}</p>
    <p class="text-lg font-bold">Hobbies : ${person?.hobbies?.map((p)=> p )}</p>
    `
    document.getElementById('no-selection').classList.add('hidden')

}

const handelrPersonClick = (id) =>{
    const person = People.find((p) => p.id == id )
    displayPerson(person)
}
rendomePeopleList(People);

