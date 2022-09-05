const routes = require('express').Router()

routes.get("/", (req,res) => {
    res.json({
        message: "Home Page"
    })
})

const fruitRoutes = require('./fruit')
const categoryRoutes = require('./category')
const brandRoutes = require('./brand')

routes.use("/fruits", fruitRoutes)
routes.use("/categories", categoryRoutes)
routes.use("/brands", brandRoutes)

module.exports = routes;

