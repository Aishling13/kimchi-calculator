/*
psudo-code
- references to the inputs (vegetable weight and salt percentage)
- place the display in p element

*/
let vegWeightInput = document.getElementById("veg-weight");
let saltPercentInput = document.getElementById("salt-percent");
const button = document.querySelector("button");
let saltWeight = document.getElementById("salt-weight");

button.addEventListener("click", calculateSaltWeight);

function calculateSaltWeight() {
    // convert string to number
    let vegWeight = parseInt(vegWeightInput.value);
    let saltPercent = parseInt(saltPercentInput.value);
    
    // calculation | salt = vegetable weight × (salt percentage ÷ 100)
    let saltWeight = parseInt(vegWeight * (saltPercent / 100));
    
    // Debug tests
    console.log("clicked")
    console.log(vegWeight, saltPercent);
    console.log(typeof vegWeight, typeof saltPercent);
    console.log(saltWeight);

    document.getElementById("salt-weight").innerHTML = saltWeight + "g";
}   

