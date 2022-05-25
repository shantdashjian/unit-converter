let numberToConvert = 20
const numberToConvertEl = document.getElementById("number-to-convert")
const meterFeetEl = document.getElementById("meter-feet")
const litersGallonsEl = document.getElementById("liters-gallons")
const kilogramsPoundsEl = document.getElementById("kilograms-pounds")

numberToConvertEl.value = numberToConvert

convertLengthMeterFeet()
convertVolumeLitersGallons()
convertMassKilogramsPounds()

function updateNumberToConvert() {
    numberToConvert = numberToConvertEl.value
    convertLengthMeterFeet()
    convertVolumeLitersGallons()
    convertMassKilogramsPounds()   
}

function convertLengthMeterFeet() {
    const conversionFactor = 3.28084;
    const meterToFeet = multiplyNumberByFactorRoundResult(conversionFactor);
    const feetToMeter = divideNumberByFactorRoundResult(conversionFactor);
    meterFeetEl.textContent = formatConversionOutput("meters", "feet", meterToFeet, feetToMeter)
}

function convertVolumeLitersGallons() {
    const conversionFactor = 0.264172 ;
    const litersToGallons = multiplyNumberByFactorRoundResult(conversionFactor);
    const gallonsToLiters = divideNumberByFactorRoundResult(conversionFactor);
    litersGallonsEl.textContent = formatConversionOutput("liters", "gallons", litersToGallons, gallonsToLiters);
}

function convertMassKilogramsPounds() {
    const conversionFactor = 2.20462;
    const kilogramsToPounds = multiplyNumberByFactorRoundResult(conversionFactor);
    const poundsToKilograms = divideNumberByFactorRoundResult(conversionFactor);
    kilogramsPoundsEl.textContent = formatConversionOutput("kilos", "pounds", kilogramsToPounds, poundsToKilograms);
}

function multiplyNumberByFactorRoundResult(conversionFactor) {
    return (numberToConvert * conversionFactor).toFixed(3);
}

function divideNumberByFactorRoundResult(conversionFactor) {
    return (numberToConvert / conversionFactor).toFixed(3);
}

function formatConversionOutput(firstUnit, secondUnit, firstValue, secondValue) {
    return numberToConvert + " " + firstUnit + " = " + firstValue + " " + secondUnit + " | " + 
                              numberToConvert + " " + secondUnit + " = " + secondValue + " " + firstUnit;    
}
