const form = document.getElementById('temp-form');
const temperatureInput = document.getElementById('temperature');
const unitFromSelect = document.getElementById('unit-from');
const convertedTemperatureSpan = document.getElementById('converted-temperature');
const convertedUnitSpan = document.getElementById('converted-unit');
const explanationSpan = document.getElementById('explanation');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let temperature = parseFloat(temperatureInput.value);
  const unitFrom = unitFromSelect.value;

  // Input validation
  if (isNaN(temperature)) {
    convertedTemperatureSpan.textContent = '';
    convertedUnitSpan.textContent = '';
    explanationSpan.textContent = '';
    alert('Harap masukkan angka valid untuk suhu.');
    return;
  }

  // Conversion calculation
  const fahrenheitToCelsius = (temperature - 32) * 5 / 9;
  const celsiusToFahrenheit = temperature * 9 / 5 + 32;

  let convertedTemperature;
  let convertedUnit;
  let explanationText;

  switch (unitFrom) {
    case 'celsius':
      convertedTemperature = fahrenheitToCelsius;
      convertedUnit = 'Fahrenheit';
      explanationText = `${temperature}°C sama dengan ${convertedTemperature.toFixed(2)}°F.`;
      break;
    case 'fahrenheit':
      convertedTemperature = celsiusToFahrenheit;
      convertedUnit = 'Celsius';
      explanationText = `${temperature}°F sama dengan ${convertedTemperature.toFixed(2)}°C.`;
      break;
    default:
      convertedTemperatureSpan.textContent = '';
      convertedUnitSpan.textContent = '';
      explanationSpan.textContent = 'Error: Unit tidak valid.';
      return;
  }

  // Display results
  convertedTemperatureSpan.textContent = convertedTemperature;
  convertedUnitSpan.textContent = convertedUnit;
  explanationSpan.textContent = explanationText;
}
