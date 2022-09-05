const { fruit } = require("../models");

class FruitController {
  static async getFruit(req, res) {
    try {
      let result = await fruit.findAll();
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async addPage(req, res) {}
  static async add(req, res) {
    try {
      const { name, image, price, stock, brandId, categoryId } = req.body;
      let result = await fruit.create({
        name,
        image,
        price,
        stock,
        brandId,
        categoryId,
      });
      res.json(result);
    } catch (err) {
      res.json(err);
    }
  }
  static async updatePage(req, res) {}
  static async update(req, res) {
    try {
      const id = Number(req.params.id);

      const { name, image, price, stock, brandId, categoryId } = req.body;

      let result = await fruit.update(
        {
          name,
          image,
          price,
          stock,
          brandId,
          categoryId,
        },
        {
          where: { id },
        }
      );

      result[0] === 1
        ? res.json({
            message: `Fruit with id of ${id} has been updated`,
          })
        : res.json({
            message: `Fruit with id of ${id} has not been updated`,
          });
    } catch (err) {
      res.json(err);
    }
  }
  static async delete(req, res) {
    const id = Number(req.params.id);

    let result = await fruit.destroy({
      where: { id },
    });
    result === 1
      ? res.json({
          message: `Fruit with id of ${id} has been deleted`,
        })
      : res.json({
          message: `Fruit with id of ${id} has not been deleted`,
        });
  }
}

module.exports = FruitController;
