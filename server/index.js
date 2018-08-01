const moment = require('moment');
const beNice = require('terminal-sweetness');

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log(`Listening on port ${port}, time is ${moment().format('hh:mm:ss')}`)
  beNice();
})
