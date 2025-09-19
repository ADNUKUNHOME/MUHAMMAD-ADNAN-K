// Count how many numbers in an array are multiples of 1..9

function countMultiples(arr) {
    // Normalize input: convert numeric strings to numbers; ignore non-numbers/NaN
    const nums = arr
        .map((x) => (typeof x === "string" ? Number(x) : x))
        .filter((x) => typeof x === "number" && !Number.isNaN(x));


    // Initialize result object for divisors 1..9
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = 0;
    }

    // Count multiples
    for (const num of nums) {
        // ignore non-finite numbers (Infinity, -Infinity)
        if (!Number.isFinite(num)) continue;

        // If num is not integer, skip it (unless it is an integer-like float)
        if (!Number.isInteger(num)) continue;

        for (let i = 1; i <= 9; i++) {
            if (num % i === 0) {
                result[i] += 1;
            }
        }
    }
    return result;
}


// ======= Example usage (matches the mail example) =======
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
const counts = countMultiples(input);
console.log(counts);
// Expected output:
// { '1': 11, '2': 8, '3': 4, '4': 4, '5': 3, '6': 2, '7': 0, '8': 1, '9': 1 }