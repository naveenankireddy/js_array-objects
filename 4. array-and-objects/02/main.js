var gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    }
  };
  
  var ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: true,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    }
  };
  
  var fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    }
  };

  //1

  let penguins = [gunter,ramon,fred];

  //2
  console.log(penguins[0]);

  //3

 let secondPenguin = penguins[1];

 //4

 console.log(penguins.length-1);

 //5
 penguins.push(myPenguin);

 //6
 console.log(penguins.length);


 //7
 penguins[0].canFly = true;

 //8
 penguins[0].sayHello();

 //9

 for(let i = 0 ; i <= penguins.length-1 ; i++){
     console.log(penguins[i]);
 }

 //10
 for(let i = 0 ; i <= penguins.length-1 ; i++){
    console.log(penguins[i].sayHello());
}

//11
for(let key of penguins){
    key.numberOfFeet = 2;
}

//12
for(let key of penguins){
    if(key.canFly == true){
        console.log(key.name + " can fly" )
    }else{
        console.log(key.name + "cannot fly")
    }
};