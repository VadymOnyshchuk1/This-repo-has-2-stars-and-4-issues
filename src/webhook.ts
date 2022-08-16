const SmeeClient = require('smee-client')

const smee = new SmeeClient({
  source: 'https://smee.io/5X57x3tVLWJubvSa',
  target: 'http://localhost:3000',
  logger: console
})

const events = smee.start()