const {
    capitalize,
    reverse,
    calculator,
    caesar,
    analyze
} = require('./util');

// Capitalize
test('joe must be Joe', () => {
    const name = capitalize('joe');
    expect(name).toBe('Joe');
});


// Reverse
test('hello should be olleh', () => {
    const reversed = reverse('hello');
    expect(reversed).toBe('olleh');
});


// Calculator

// Add
test('2 + 2 equal 4', () => {
    const addResult = calculator.add(2, 2);
    expect(addResult).toBe(4);
});

// Sub
test('2 - 2 equal 0', () => {
    const subResult = calculator.subtraction(2, 2);
    expect(subResult).toBe(0);
});

// Mul
test('2 * 2 equal 4', () => {
    const mulResult = calculator.multiplication(2, 2);
    expect(mulResult).toBe(4);
});


// Div
test('4 / 2 equal 2', () => {
    const divResult = calculator.divide(4, 2);
    expect(divResult).toBe(2);
});


// Caesar chiper
test('hello should be mjqqt with key shift 5', () => {
    const chiphedStr = caesar('hello', 5);
    expect(chiphedStr).toBe('mjqqt');
});

test('HELLO should be mjqqt with key shift 5', () => {
    const chiphedStr = caesar('HELLO', 5);
    expect(chiphedStr).toBe('mjqqt');
});

test('hello! should be mjqqt! with key shift 5', () => {
    const chiphedStr = caesar('hello!', 5);
    expect(chiphedStr).toBe('mjqqt!');
});


test('HeLlO, i\'m JoE! should be "mjqqt, n\'r otj!" with key shift 5', () => {
    const chiphedStr = caesar("HeLlO, i'm JoE!", 5);
    expect(chiphedStr).toBe("mjqqt, n'r otj!");
});

// Array Analyzer
test('[1,8,3,4,2,6] analyze should return object stats of array', () => {
    const expectedObject = {
        average: 4,
        min: 1,
        max: 8,
        length: 6
    };
    const arrayToAnalyze = analyze([1,8,3,4,2,6]);

    expect(arrayToAnalyze).toEqual(expectedObject);
});