const metersToFeetRate = 3.281
const litersToGallonsRate = 0.264
const kilogramsToPoundsRate = 2.204

const numberEl = document.getElementById("number-el")
const convertBtn = document.getElementById("convert-btn")
const lengthTextEl = document.getElementById("length-text-el")
const volumeTextEl = document.getElementById("volume-text-el")
const massTextEl = document.getElementById("mass-text-el")
const themeEl = document.getElementById('theme')

const userPrefersDarkColorScheme = window.matchMedia('(prefers-color-scheme: dark)')

convertBtn.addEventListener("click", () => {
	const number = numberEl.value
	lengthTextEl.textContent = buildConversionText(number, metersToFeetRate, 'meters', 'feet')
	volumeTextEl.textContent = buildConversionText(number, litersToGallonsRate, 'liters', 'gallons')
	massTextEl.textContent = buildConversionText(number, kilogramsToPoundsRate, 'kilos', 'pounds')
})

function buildConversionText(number, conversionRate, metricUnit, imperialUnit) {
	const fromMetricToImperialUnit = number * conversionRate
	const fromImperialToMetricUnit = number / conversionRate
	return `${number} ${metricUnit} = ${fromMetricToImperialUnit.toFixed(3)} ${imperialUnit} | ${number} ${imperialUnit} = ${fromImperialToMetricUnit.toFixed(3)} ${metricUnit}`
}

function numberizeAndResizeInputField() {
	if (isNaN(numberEl.value) || numberEl.value < 0) {
		numberEl.value = "0"
	}
	numberEl.style.width = (numberEl.value.length + 3) + "ch";
}

function makeThemeDark(dark) {
	if (dark) {
		document.body.classList.add('dark')
		themeEl.innerHTML = '<i class="fa-regular fa-moon theme-icon"></i>'
	} else {
		document.body.classList.remove('dark')
		themeEl.innerHTML = '<i class="fa-regular fa-sun theme-icon"></i>'
	}
}

themeEl.addEventListener('click', () => {
	if (document.body.classList.contains('dark')) {
		makeThemeDark(false)
	} else {
		makeThemeDark(true)
	}
})

makeThemeDark(userPrefersDarkColorScheme?.matches)

userPrefersDarkColorScheme?.addEventListener('change', event => {
	makeThemeDark(event.matches)
})
