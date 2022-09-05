const brandRoutes = require('express').Router();
const {BrandController} = require('../controllers');

brandRoutes.get("/", BrandController.getBrands);
brandRoutes.get("/add", BrandController.addPage);
brandRoutes.post("/add", BrandController.add);
brandRoutes.delete("/delete/:id", BrandController.delete);
brandRoutes.get("/update/:id", BrandController.updatePage);
brandRoutes.put("/update/:id", BrandController.update);

module.exports = brandRoutes;