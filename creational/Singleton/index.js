const Storage = require('./Storage')

const myStorage = Storage.getInstance()
const myStorage2 = Storage.getInstance()

console.log(myStorage === myStorage2)
