// Generate the first 'a' odd numbers (1, 3, 5, ...)

function generateOddSeries(a) {
    //Validate and normalize the input
    if (typeof a === "string" && a.trim() !== "") {
        a = Number(a);
    }

    if (typeof a !== "number" || Number.isNaN(a)) {
        throw new Error("Invalid input: 'a' must be a number.");
    }


    //Use integer part only
    a = Math.floor(a);

    //Return Empty if the input is zoro or less
    if (a <= 0) {
        return [];
    }

    //If a is an integer, create odd series
    const result = Array.from({ length: a }, (_, i) => 2 * i + 1);
    return result;
}


//========= Example Usage =========
const examples = [1, 2, 3, 4, "5", 6.5, "m"];

examples.forEach((val) => {
    try {
        const series = generateOddSeries(val);
        console.log(`a = ${val} -> ${series.join(", ")}`);
    } catch (err) {
        console.log(`a = ${val} -> Error: ${err.message}`);
    }
});


// If you want to test other inputs:
// console.log(generateOddSeries(7));         // [1,3,5,7,9,11,13]
// console.log(generateOddSeries("4"));       // works with numeric string -> [1,3,5,7]
// console.log(generateOddSeries(3.9));       // floors to 3 -> [1,3,5]
// console.log(generateOddSeries(-2));        // -> []