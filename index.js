const METERS_TO_FEET_RATE = 3.281
const LITERS_TO_GALLONS_RATE = 0.264
const KILOGRAMS_TO_POUNDS_RATE = 2.204

const numberEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")
const lengthTextEl = document.getElementById("length-text-el")
const volumeTextEl = document.getElementById("volume-text-el")
const massTextEl = document.getElementById("mass-text-el")

convertBtn.addEventListener("click", () => {
    const number = numberEl.value
    lengthTextEl.textContent = buildConversionText(number, METERS_TO_FEET_RATE, 'meters', 'feet')
    volumeTextEl.textContent = buildConversionText(number, LITERS_TO_GALLONS_RATE, 'liters', 'gallons')
    massTextEl.textContent = buildConversionText(number, KILOGRAMS_TO_POUNDS_RATE, 'kilograms', 'pounds')
})

function buildConversionText(number, conversionRate, firstUnit, secondUnit) {
    const fromFirstToSecondUnit = number * conversionRate
    const fromSecondToFirstUnit = number / conversionRate
    return `${number} ${firstUnit} = ${fromFirstToSecondUnit.toFixed(3)} ${secondUnit} | ${number} ${secondUnit} = ${fromSecondToFirstUnit.toFixed(3)} ${firstUnit}`
}
