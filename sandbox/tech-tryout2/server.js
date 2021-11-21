require('dotenv').config()
const express = require("express");
const app = express()
const PORT = process.env.PORT
// const routerApi = require("./routes")




// const app = express();
// app.use(...);

const db = require("./models");
db.sequelize.sync();

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.status(200).send("Welcome to profile api")
});

// app.use('/', (req, res) => res.redirect('/province'))

// app.use("/api", routerApi)

require("./routes/province.routes")(app);
require("./routes/regency.routes")(app);
require("./routes/district.routes")(app);

app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`);
});