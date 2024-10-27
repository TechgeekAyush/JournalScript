const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const cors = require('cors')
const path = require('path')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) //to use req.body -> this middleware is required
//Available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'))
  })
}

app.listen(port, () => {
  console.log(`JournalScript listening on port ${port}`)
})