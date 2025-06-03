function startConversion() {
     const userInput = document.getElementById("kilometers").value;
     const conversionResult = document.getElementById("result");

    if (userInput === "") {
    conversionResult.textContent = "Please enter a Kilometer value first!";
    return;
    }

    const kilometers = parseFloat(userInput);
     
    if (isNaN(kilometers) || kilometers < 0) {
        conversionResult.textContent = "Please enter a positive integer!";
        return;
    }

    const miles = (kilometers * 0.621371).toFixed(2);
    conversionResult.textContent = `Miles: ${miles}`;
}

function clearConversion() {
    document.getElementById("kilometers").value = "";
    document.getElementById("result").textContent = "Miles: 0";
}