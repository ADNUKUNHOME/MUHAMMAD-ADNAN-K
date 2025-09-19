// Generate pattern where:
// - If a is odd  -> print first a odd numbers
// - If a is even -> print first (a-1) odd numbers


function generatePattern(a) {
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

    //If a is even, reduce by 1. If odd, keep as is
    const count = a % 2 === 0 ? a - 1 : a;


    //If a is an integer, create odd series
    const result = Array.from({ length: count }, (_, i) => 2 * i + 1);
    return result;
}


//========= Example Usage =========
const examples = [1, 2, 3, 4, "5", 6.5, "m"];

examples.forEach((val) => {
    try {
        const series = generatePattern(val);
        console.log(`a = ${val} -> ${series.join(", ")}`);
    } catch (err) {
        console.log(`a = ${val} -> Error: ${err.message}`);
    }
});

/*
Expected output: 
a = 1 -> 1
a = 2 -> 1
a = 3 -> 1, 3, 5
a = 4 -> 1, 3, 5
a = 5 -> 1, 3, 5, 7, 9         - string converts to a number ("5" -> 5)
a = 6.5 -> 1, 3, 5, 7, 9       - converts to an integer (6.5 -> 6)
a = m -> Error: Invalid input: 'a' must be a number.
*/