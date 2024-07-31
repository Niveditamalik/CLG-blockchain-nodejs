const { Blockchain, Block } = require('./blockchain');

let simpleBlockchain = new Blockchain();

console.log('Mining block 1...');
simpleBlockchain.addBlock(new Block(1, '01/07/2023', { amount: 4 }));

console.log('Mining block 2...');
simpleBlockchain.addBlock(new Block(2, '01/07/2023', { amount: 8 }));

console.log(JSON.stringify(simpleBlockchain, null, 4));

console.log('Is blockchain valid? ' + simpleBlockchain.isChainValid());

// Tamper with the blockchain
simpleBlockchain.chain[1].data = { amount: 100 };
simpleBlockchain.chain[1].hash = simpleBlockchain.chain[1].calculateHash();

console.log('Is blockchain valid? ' + simpleBlockchain.isChainValid());
