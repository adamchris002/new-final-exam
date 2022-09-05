const routes = require('express').Router()

routes.get("/", (req,res) => {
    res.json({
        message: "Home Page"
    })
})

const fruitRoutes = require('./fruitRoutes')
const categoryRoutes = require('./categoryRoutes')
const brandRoutes = require('./brandRoutes')

routes.use("/fruits", fruitRoutes)
routes.use("/categories", categoryRoutes)
routes.use("/brands", brandRoutes)

module.exports = routes;

