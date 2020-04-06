class Drone {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    fly() {
        console.log("Drone " + this.id + " is flying");
    }
    static getCompany() {
        console.log("in company");
    }
}





let drone = new Drone("a123", "flyer");
let drone2 = new Drone("b456", "jump");


const helloworld = () => [1, 2, 3, 45];

const dragonEvents = [{
        type: "attack",
        value: 12,
        target: "player-dorkman"
    },
    {
        type: "yawn",
        value: 40
    },
    {
        type: "eat",
        target: "horse"
    },
    {
        type: "attack",
        value: 23,
        target: "player-fluffykins"
    },
    {
        type: "attack",
        value: 12,
        target: "player-dorkman"
    },
]

const totalDamageOnDorkman = dragonEvents
    .filter(function isAttack(event) {
        return event.type === "attack"
    })
    .filter(function isDorkman(event) {
        return event.target === "player-dorkman"
    })
    .map(function (value) {
        return value.value
    })
    .reduce(function (prev, value) {
        return (prev || 0) + value;
    })


console.log(totalDamageOnDorkman);


const totalDamageOnDorkman2 = dragonEvents
    .filter(event => event.type === "attack")
    .filter(event => event.target === "player-dorkman")
    .map(event => event.value)
    .reduce((prev, value) => (prev || 0) + value);

console.log(totalDamageOnDorkman2)


const list  = [1,2,3,4,5]
const newList = list.map((value)=> value*2)

console.log(newList)

const anotherList = list.map( (value) =>"hi");

console.log(anotherList);


const filterList = list.filter((value) => value > 2 );

console.log(filterList)

const anotherList2 = list.filter((value)=> false);
console.log(anotherList2)


const person = {
    name: 'Earthling Ed',
    age: 29,
    location: 'London',
    mood: 'Content',
    likes: ['animals', 'people', 'talking']
   } 

const {name,age,location} = person;

console.log(name,age,location);


const lista = ['a', 'b', 'c'];
console.log(...lista); // 'a' 'b' 'c'


const person2 = { name: 'Will', age: 55, location: 'America' }

console.log(...person2)

// console.log(typeof drone);
// console.log(drone instanceof Drone);

// instance variabler vs static/class propery