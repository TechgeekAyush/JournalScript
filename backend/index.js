const connectToMongo = require('./db')
const express = require('express')
connectToMongo();
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json()) //to use req.body -> this middleware is required
//Available routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`JournalScript listening on port ${port}`)
})