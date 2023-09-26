const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors());

app.use(express.json())

// // Available routes
app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

// app.get('/',(req,res)=>{
//     res.send('hello world')
// })

// app.get('/api/v1/signup',(req,res)=>{
//     res.send('hello login')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})