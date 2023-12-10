// Sorts cities first by length of the city name, then alphabetically. 

// Bubble sort algorithm.
const optimizeRoute = (arr) => {
    if (!Array.isArray(arr)) {
        console.log("Input argument must be an array.");
        return [];
    }
    const n = arr.length;
    const sortedArr = arr.slice(); // Copy array.
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Swap places if elements are in the wrong order.
            if (sortedArr[j].length < sortedArr[j + 1].length) {
                const temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            } else if (sortedArr[j].length === sortedArr[j + 1].length) { 
                // Sort alphabetically if lengths are equal.
                if (sortedArr[j] > sortedArr[j + 1]) {
                    const temp = sortedArr[j];
                    sortedArr[j] = sortedArr[j + 1];
                    sortedArr[j + 1] = temp;
                }
            }
        }
    }
    return sortedArr;
};

// Calling 
const inputCities = ['New York', 'Tokyo', 'Paris', 'London'];
const sortedCities = optimizeRoute(inputCities);

for (let i = 0; i < sortedCities.length; i++) {
    console.log(sortedCities[i]);
}
