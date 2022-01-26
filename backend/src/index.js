const express = require('express')
const cors = require('cors')
const net = require('net')

const app = express()
const autocompleteConnection = net.createConnection({ port: 1337 })

autocompleteConnection.on('end', () => {
  process.exit(1)
})

app.use(cors())

const executeQuery = (query = '', connection = autocompleteConnection) => {
  return new Promise((resolve) => {
    let resolver = (data) => {
      resolve(data)
      connection.removeListener('data', resolver)
    }

    connection.on('data', resolver)
    connection.write(query)
  })
}

app.get('/autocomplete', async (req, res) => {
  const query = req.query.query
  const data = await executeQuery(query)
  return res.status(200).end(data)
})

app.listen(3333, () => console.log('Server started on port :3333'))
