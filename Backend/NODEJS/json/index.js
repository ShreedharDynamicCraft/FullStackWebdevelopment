const bioData={
    name:"vinod",
    age:26,
    channnel:"thapa technical",

};


// {"name":"vinod","age":26,"channel":"thapa" }

const jsonData=JSON.stringify(bioData);
const objData=JSON.parse(jsonData);
console.log(objData);