const { brand } = require("../models");

class BrandController {
  static async getBrands(req, res) {
    try {
      let result = await brand.findAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async addPage(req, res) {}
  static async add(req, res) {
    try {
      const { name, image, city, total_employees } = req.body;
      let result = await brand.create({
        name,
        image,
        city,
        total_employees,
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      const id = Number(req.params.id);

      const { name, image, city, total_employees } = req.body;

      let result = await brand.update(
        {
          name,
          image,
          city,
          total_employees,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.status(200).json({
            message: `Brand with id of ${id} has been updated`,
          })
        : res.status(200).json({
            message: `Brand with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async delete(req, res) {
    try {
      const id = Number(req.params.id);

      let result = await brand.destroy({
        where: { id },
      });
      result === 1
        ? res.status(200).json({
            message: `Brand with id of ${id} has been deleted`,
          })
        : res.status(200).json({
            message: `Brand with id of ${id} has not been deleted`,
          });
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BrandController;
