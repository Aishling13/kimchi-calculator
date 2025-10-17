/*
psudo-code
- references to the inputs (vegetable weight and salt percentage)
- place the display in p element
- look up what DOM methods to select

*/
var vegWeight = document.getElementById("#veg-weight").value;
var saltPercentage = document.getElementById("#salt-percent").value;

const button = document.querySelector("button");
var saltWeight = document.querySelector("p");

button.addEventListener("click", calculateSaltWeight);

function calculateSaltWeight() {
    // salt = vegetable weight × (salt percentage ÷ 100)
    saltWeight = vegWeight * (saltPercentage % 100);

    return saltWeight;

    console.log()
}
