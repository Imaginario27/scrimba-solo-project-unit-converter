/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//VARIABLES
const conversionInputField = document.getElementById("conversion-input-field")
const convertBtn = document.getElementById("convert-btn")

const conversionLength = document.getElementById("conversion-length")
const conversionVolume = document.getElementById("conversion-volume")
const conversionMass= document.getElementById("conversion-mass")

let conversionStringLength = ""
let conversionStringVolume = ""
let conversionStringMass = ""
let feetConversion = 0
let metersConversion = 0
let gallonsConversion = 0
let litersConversion = 0
let poundsConversion = 0
let kilosConversion = 0
const decimalRounding = 3;

function conversion(number){
    
    //Length
    feetConversion = number * 3.281
    metersConversion = number / 3.281
    conversionStringLength = `${number} meter(s) = ${feetConversion.toFixed(decimalRounding)} feet | ${number} feet = ${metersConversion.toFixed(decimalRounding)} meters`
    
    //Volume
    gallonsConversion = number * 0.264
    litersConversion = number / 0.264
    conversionStringVolume = `${number} liter(s) = ${gallonsConversion.toFixed(decimalRounding)} gallons | ${number} gallon(s) = ${litersConversion.toFixed(decimalRounding)} liters`
       
    //Mass
    poundsConversion = number * 2.204
    kilosConversion = number / 2.204
    conversionStringMass = `${number} kilo(s) = ${poundsConversion.toFixed(decimalRounding)} pounds | ${number} pound(s) = ${kilosConversion.toFixed(decimalRounding)} kilos`
    
    //HTML render
    conversionLength.innerHTML = conversionStringLength
    conversionVolume.innerHTML = conversionStringVolume 
    conversionMass.innerHTML = conversionStringMass
}

//EVENT LISTENER
onload = function() {
    conversion(conversionInputField.value);
}

convertBtn.addEventListener("click", function(){
    conversion(conversionInputField.value);
    
})

