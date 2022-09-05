const categoryRoutes = require('express').Router();
const {CategoryController} = require('../controllers');

categoryRoutes.get("/", CategoryController.getCategories);
categoryRoutes.get("/add", CategoryController.addPage);
categoryRoutes.post("/add", CategoryController.add);
categoryRoutes.delete("/delete/:id", CategoryController.delete);
categoryRoutes.get("/update/:id", CategoryController.updatePage);
categoryRoutes.put("/update/:id", CategoryController.update);

module.exports = categoryRoutes;