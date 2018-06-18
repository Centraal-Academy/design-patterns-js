const PoolManager = require('./PoolManager')
const Transaction = require('./Transaction')

const PoolTransactions = new PoolManager(Transaction, 2)

let transaction1 = PoolTransactions.acquire()
let transaction2 = PoolTransactions.acquire()
let transaction3 = PoolTransactions.acquire()

console.log(transaction1, transaction2, transaction3)

PoolTransactions.release(transaction2)
transaction3 = PoolTransactions.acquire()
transaction3.log()
