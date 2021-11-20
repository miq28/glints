const PORT = 3000
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')

const express = require('express')
const app = express()


const AdminBroSequelize = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroSequelize)

const db = require('./models');

const adminBro = new AdminBro({
    databases: [db.actor], // you can still load an entire database and adjust just one resource
    // resources: [{
    //     resource: db.book,
    //     options: {
    //         //...
    //     }
    // }],
    rootPath: '/admin',
})

const router = AdminBroExpress.buildRouter(adminBro)

app.use(adminBro.options.rootPath, router)

app.use('/', (req, res) => res.redirect('/admin'))
// app.use('/api', routesApi)

app.listen(PORT, () => console.log(`AdminBro is under http://localhost:${PORT}/admin`))