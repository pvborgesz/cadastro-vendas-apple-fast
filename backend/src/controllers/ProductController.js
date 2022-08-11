const connection = require("../database/connection");

module.exports = {
  all(req, res) {
    connection.query(
      "SELECT id_produto as idProduto, nome, descricao FROM produto",
      function (err, results, fields) {
        if (err) {
          res.json({
            status: false,
            message: err,
          });
        } else {
          res.send(results);
        }
      }
    );
  },

  registerProduct(req, res) {
    const produto = {
      nome: req.body.headers.nome,
      descricao: req.body.headers.descricao,
    };
    // console.log(req);
    connection.query(
      `INSERT INTO produto(nome,descricao) VALUES (?,?)`,
      [produto.nome, produto.descricao],
      (err, results, fields) => {
        if (err) {
          res.json({
            status: false,
            message: err,
          });
        } else {
          res.json({
            status: true,
            message: results,
          });
        }
      }
    );
  },

  deleteProduct(req, res) {
    const idProduto = req.params.id;

    connection.query(
      "DELETE FROM produto WHERE id_produto=?;",
      [idProduto],
      (err, results, fields) => {
        if (err) {
          res.json({
            status: false,
            message: err,
          });
        } else {
          res.json({
            status: true,
            message: results,
          });
        }
      }
    );
  },
};
