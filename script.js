// Declare your arrays here
let optionOne = document.querySelector("optionOne");

// let img1 = document.createElement("img");
// img1.src = "pancakes.jpg";
// let img2 = document.createElement("img");
// img2.src = "waffles.jpg";
// let img3 = document.createElement("img");
// img3.src = "baconeggs.jpg";

let breakfast = ["pancakes.jpg", "waffles.jpg", "baconeggs.jpg"];
let lunch = ["sandwich.jpg", "noodles.jpg", "burger.jpg"];
let dinner = ["pizza.jpg", "spaghetti1.jpg", "steak.jpg"];
// Make sure to declare your HTML elements as variables! 

// Submit Button 

let submitButton = document.querySelector("button");


submitButton.addEventListener("click", function() {

    let answer = document.querySelector(".answer").value;
    console.log(answer);


if(answer === "breakfast" || "Breakfast"){
    answer = breakfast;
} else if(answer === "lunch"){
    answer = lunch;
} else if(answer === "dinner"){
    answer = dinner;

    answer.forEach(function(answers){
        let img = document.createElement("img");
        img.src = "answers ";
    })
}
//     if(answer === "breakfast"){

// breakfast.forEach(function(food){
// let image = document.createElement("image")
// image.src = "food";
// optionOne.appendChild(image);

// });
//     }

});