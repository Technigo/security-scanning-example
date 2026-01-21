const express = require('express')
const reports = require('./routes/reports')
const files = require('./routes/files')
const search = require('./routes/search')
const users = require('./routes/users1')

const app = express()

app.use(express.json())

app.use('/users', users)

app.get('/', (req, res) => {
  res.send('security-scanning-example running')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
