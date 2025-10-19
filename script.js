/*
psudo-code
- references to the inputs (vegetable weight and salt percentage)
- place the display in p element
- look up what DOM methods to select

*/
const button = document.querySelector("button");
var saltWeight = document.querySelector("p");

button.addEventListener("click", calculateSaltWeight);

function calculateSaltWeight() {
    var vegWeight = document.getElementById("veg-weight").value;
    var saltPercent = document.getElementById("salt-percent").value;
    //var vegWeight = document.getElementById("veg-weight").value;
    //var saltPercent = document.getElementById("salt-percent").value;
    
    // salt = vegetable weight × (salt percentage ÷ 100)
    saltWeight = vegWeight * (saltPercent % 100);

    //return saltWeight;
    // console.log("clicked")
    console.log(vegWeight, saltPercent);

}
// console.log(saltPercent);
