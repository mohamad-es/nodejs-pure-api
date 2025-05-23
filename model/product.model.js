const products = require("../data.json");

async function find() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

async function list() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

const ProductModel = {
  find,
  list,
};

module.exports = ProductModel;
