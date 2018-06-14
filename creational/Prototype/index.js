const CreditCard = require('./CreditCard')

const card = new CreditCard({ owner: 'Joel', ccv: 324 })

console.log(card.clone())
