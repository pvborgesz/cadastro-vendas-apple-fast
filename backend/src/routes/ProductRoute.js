const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const routes = express.Router();
const cors = require("cors");

const ProductController = require("../controllers/ProductController");

routes.use(cors());

routes.get("/produtos", ProductController.all);

routes.post(
  "/registerProduct",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      nome: Joi.string(),
      descricao: Joi.string(),
    }).unknown(),
  }),
  ProductController.registerProduct
);

routes.delete(
  "/produtos/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  ProductController.deleteProduct
);

module.exports = routes;
