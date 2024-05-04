// input fields on "focus" for the input "liters" as its value is "0"
    // "window.onload" method to automatically focus on the input field when the window loads
    // "function" takes input (liters) and returns an output (focus on liters input)
    window.onload = function() {
        // "getElementById" finds the id "liters" and using "focus" to readily receive the input from the user
        document.getElementById("liters").focus();
    }

// calculator 
    // "document" allows users to access and interact with the calculator
    // "addEventListener" responds to the "DOMContentLoaded" which loads and executes the calculator structure
    // while "function" takes the input (variables) and returns an output (constants)
    document.addEventListener("DOMContentLoaded", function() {
        // "const" creates constant (costInput, litersInput, calculateButton, totalCostDisplay) from the..
        // "getElementById" id (cost, liters, calculate, and total-cost) 
        const costInput = document.getElementById("cost");
        const litersInput = document.getElementById("liters");
        const calculateButton = document.getElementById("calculate");
        const totalCostDisplay = document.getElementById("total-cost");

        // "calculateButton" was a variable turned in to a constant and is used as a button that calculates the input data
        // "addEventListener" responds to "click" which loads and executes the total cost of petrol of the user
        // while "function" takes the input (constants) and returns an output (strings)
        calculateButton.addEventListener("click", function() {
            // "const" creates constants (costPerLiter, litersPurchased, totalCost)
            // "parseFloat" creates string of decimal numbers (costPerLiter, litersPurchased) from the..
            // previous "const" (costInput, litersInput) along with their values (cost(var)=costInput(const) value=1.72, liters(var)=litersInput(const) value=0)
            const costPerLiter = parseFloat(costInput.value);
            const litersPurchased = parseFloat(litersInput.value);
            // output (total cost) comes from multiplying (*) the cost per liter and the purchased liters of the user
            const totalCost = costPerLiter * litersPurchased;

            // "totalCostDisplay" was a variable turned in to a constant and is used to display the output
            // "textContent" changes and returns the "totalCostDisplay" to display the output "totalCost" of the..
            // calculated input of the strings (costPerLiter, litersPurchased) into a currency with two decimal places using "toFixed(2)"
            totalCostDisplay.textContent = `$${totalCost.toFixed(2)}`;
        });
    });