const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

const envelopeApi = require('./routes/envelope')

const frontPage = (req,res) => res.send('Envelope-Budgeting!')
// const getEnvelopes = (req,res) => {
//     console.log()
// }

app.use(morgan('tiny'))
app.get('/', frontPage)
app.use('/api/envelopes', envelopeApi)



// const getEnvolopes = (req, res) = 


app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})