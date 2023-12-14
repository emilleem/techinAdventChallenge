const layers = 10;
drawChristmasTree(layers);

function drawChristmasTree(n) {
    let maxAsterisksCount = 1 + (n - 1) * 2; // Count how many asterisks are in the last row.
    for (let i = 1; i <= n; i++) {
        let asterisksCount = 1 + (i - 1) * 2; // Count how many asterisks must there be in the current row.
        let shiftColsCount = (maxAsterisksCount - asterisksCount) / 2; // Count how many spaces to insert.
        console.log(" ".repeat(shiftColsCount) + "*".repeat(asterisksCount)); // Print spaces and asterisks.
    }
}
