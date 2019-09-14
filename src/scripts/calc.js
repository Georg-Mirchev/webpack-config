const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const catToHumanYears = (catYears) => {
    if (catYears <= 0 || typeof catYears !== 'number') {
        return 0;
    }

    if (catYears === 1) {
        return 15;
    }
    if (catYears === 2) {
        return add(15 + 9);
    }

    return 16 + multiply(catYears, 4);
}

export {
    add,
    subtract,
    multiply,
    divide,
    catToHumanYears
}