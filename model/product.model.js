const products = require("../data.json");

async function find(id) {
  return new Promise((resolve, reject) => {
    resolve(products.products.find((item) => item.id == id));
  });
}

async function list() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

async function create(product) {
  return new Promise((resolve, reject) => {
    products.products.push(product);
    resolve();
  });
}

const ProductModel = {
  find,
  list,
};

module.exports = ProductModel;
