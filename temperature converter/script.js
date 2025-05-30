function convertTemperature() {
    const tempInput = document.getElementById('tempInput').value;
    const tempUnit = document.getElementById('tempUnit').value;
    const output = document.getElementById('output');

    if (tempInput === '') {
        output.innerHTML = 'Please enter a temperature value.';
        return;
    }

    let celsius, fahrenheit, kelvin;

    switch (tempUnit) {
        case 'Celsius':
            celsius = parseFloat(tempInput);
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case 'Fahrenheit':
            fahrenheit = parseFloat(tempInput);
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case 'Kelvin':
            kelvin = parseFloat(tempInput);
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    output.innerHTML = `
        <strong>${tempUnit}:</strong> ${parseFloat(tempInput).toFixed(2)}<br>
        <strong>Celsius:</strong> ${celsius.toFixed(2)}<br>
        <strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)}<br>
        <strong>Kelvin:</strong> ${kelvin.toFixed(2)}
    `;
}
