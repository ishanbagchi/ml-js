const brain = require('brain.js')

const a = character(
    '.#####.' +
    '#.....#' +
    '#.....#' +
    '#######' +
    '#.....#' +
    '#.....#' +
    '#.....#'
)
const b = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.' +
    '#.....#' +
    '#.....#' +
    '######.'
)
const c = character(
    '#######' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#......' +
    '#######'
)
const d = character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '#.....#' +
    '######.'
)

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [1],
    activation: 'sigmoid'
}
const net = new brain.NeuralNetwork(config)

net.train([
    { input: a, output: { a: 1 } },
    { input: b, output: { b: 1 } },
    { input: c, output: { c: 1 } },
    { input: d, output: { d: 1 } }
], { log: detail => console.log(detail) })

/**
 * Predict the letter A, even with a pixel off.
 */
const result = brain.likely(character(
    '######.' +
    '#.....#' +
    '#.....#' +
    '##.#..#' +
    '#.....#' +
    '#.....#' +
    '##.###.'
), net)


console.log(result)

/**
 * Return 0 or 1 for '#'
 * @param character
 * @returns {number}
 */
function integer(pixel) {
    if ('#' === pixel) return 1
    return 0
}

/**
 * Turn the # into 1s and . into 0s. for whole string
 * @param string
 * @returns {Array}
 */
function character(string) {
    return string
        .trim()
        .split('')
        .map(integer)
}

