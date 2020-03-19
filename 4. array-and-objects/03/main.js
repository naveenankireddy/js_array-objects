
//1
myPenguin.outfit = {
    hat : "baseball cap",
    shirt :"hawwaian shirt",
    pants : "cargo shorts",
    shoes :"flip-flops",
}

//2
let penguinHatType = myPenguin.outfit.hat;

//3
myPenguin.outfit.accesery = "pocket watch";

//4
myPenguin.outfit.hat = "top hat"

//5

delete myPenguin.outfit.pants;

//6

for(let key in myPenguin.outfit){
    console.log(key);
}
