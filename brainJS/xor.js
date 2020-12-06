const brain = require('brain.js')

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3],
    activation: 'sigmoid'
}

const net = new brain.NeuralNetwork(config)

net.train([
    { input: [0, 0, 0], output: [0] },
    { input: [0, 0, 1], output: [1] },
    { input: [0, 1, 0], output: [1] },
    { input: [0, 1, 1], output: [0] },
    { input: [1, 0, 0], output: [1] },
    { input: [1, 0, 1], output: [0] },
    { input: [1, 1, 0], output: [0] },
    { input: [1, 1, 1], output: [1] }
])

const result = net.run([1, 0, 0]);
console.log(result)