const fruitRoutes = require('express').Router();
const {FruitController} = require("../controllers");

fruitRoutes.get("/", FruitController.getFruits);
fruitRoutes.get("/add", FruitController.addPage);
fruitRoutes.post("/add", FruitController.add);
fruitRoutes.delete("/delete/:id", FruitController.delete);
fruitRoutes.get("/update/:id", FruitController.updatePage);
fruitRoutes.put("/update/:id", FruitController.update);

module.exports = fruitRoutes