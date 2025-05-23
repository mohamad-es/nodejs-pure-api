const ProductModel = require("../model/product.model");

async function find(req, res) {
  try {
    const id = req.url.split("/")[3];
    const product = await ProductModel.find(id);

    if (product) {
      res.writeHead(200, { "content-type": "application/json" });
      res.write(JSON.stringify(product));
      res.end();
    } else {
      res.writeHead(404, { "content-type": "application/json" });
      res.write(
        JSON.stringify({
          message: "Product not found",
        })
      );
      res.end();
    }
  } catch (error) {}
}

async function list(req, res) {
  try {
    const product = await ProductModel.list();
    res.writeHead(200, { "content-type": "application/json" });
    res.write(JSON.stringify(product));
    res.end();
  } catch (error) {}
}

const ProductController = {
  list,
  find,
};

module.exports = { ProductController };
