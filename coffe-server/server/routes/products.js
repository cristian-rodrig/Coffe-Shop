const express = require("express");
const router = express.Router();

var { connection } = require("../db/mysql");

router.get("/products", (req, res) => {
  const query = "CALL getMainProducts()";
  (async () => {
    try {
      let result = await executeQuery(query);
      res.json(result);
    } catch (e) {
      console.log(`Error consultando los productos principales: ${e}`);
      res.status(400).send({ error: e });
    }
  })();
});

/**
 * Ejecutar query en MySQL.
 * @param {string} query Query que se ejecutará en MySQL.
 */
function executeQuery(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, rows, fields) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(rows[0]);
    });
  });
}

module.exports = router;