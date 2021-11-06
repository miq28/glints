const express = require('express');
const app = express();
const routes = require('./routes');
const logger = require('morgan');
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(logger('dev'))

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`)
})

// export for test with supertest
module.exports = app