class Drone {
    constructor(id, name) {
       this._id = id;
       this._name = name;
    }

    get id(){
        return this._id;
    }

    set id(id){
        this._id = id;
    }

   fly(){
       console.log("Drone " + this.id + " is flying");
   }
   static getCompany(){
       console.log("in company");
   }
}





let drone = new Drone("a123", "flyer");
let drone2 = new Drone("b456", "jump");

console.log(drone.id);
drone.id = "5555";
console.log(drone.id);




// console.log(typeof drone);
// console.log(drone instanceof Drone);

// instance variabler vs static/class propery