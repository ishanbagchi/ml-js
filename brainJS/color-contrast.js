const brain = require('brain.js')

const config = {
    binaryThresh: 0.5,
    activation: 'sigmoid',
    hiddenLayers: [1]
}

var net = new brain.NeuralNetwork(config)

const trainingData = ([
    { input: { r: 0.03, g: 0.7, b: 0.5 }, output: { black: 1 } },
    { input: { r: 0.16, g: 0.09, b: 0.2 }, output: { white: 1 } },
    { input: { r: 0.5, g: 0.5, b: 1.0 }, output: { white: 1 } }
])

net.train(trainingData, {
    iterations: 1500,
    log: details => console.log(details),
    errorThresh: 0.011
})

var output = net.run({ r: 1, g: 0.4, b: 0 })
var result = brain.likely({ r: 1, g: 0.4, b: 0 }, net)

console.log(output)
console.log(result)