const app = require("http");
const products = require("./data.json");
const { ProductController } = require("./controllers/product.controller");

const server = app.createServer((req, res) => {
  if (req.url == "/api/products") {
    ProductController.list(req, res);
  } else if (req.url.split("/")[3].match(/^[0-9]/)) {
    ProductController.find(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("route not found");
    res.end();
  }
});

server.listen(3000, () => console.log("Server run on port 3000"));
