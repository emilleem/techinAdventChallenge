const conversionRates = {
    'teaspoon': { 'tablespoon': 1 / 3, 'cup': 1 / 48 },
    'tablespoon': { 'teaspoon': 3, 'cup': 1 / 16 },
    'cup': { 'teaspoon': 48, 'tablespoon': 16 }
}

function convertMeasurement(quantity, fromUnit, toUnit) {
    
    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        return 'These units are currently not supported.'
    }

    const convertedQuantity = quantity * conversionRates[fromUnit][toUnit]
    const formattedResult = convertedQuantity.toFixed(2)
    return `${quantity} ${fromUnit}${quantity !== 1 ? 's' : ''} is equal to ${formattedResult} ${toUnit}${convertedQuantity !== 1 ? 's' : ''}.`
}

// Example usage of function. 
console.log(convertMeasurement(2, 'cup', 'tablespoon'))

