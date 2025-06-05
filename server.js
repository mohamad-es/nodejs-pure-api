const app = require("http");
const products = require("./data.json");
const fs = require("fs");
const { ProductController } = require("./controllers/product.controller");

const checkFile = fs.existsSync("text.txt");
if (checkFile) {
  fs.unlink("text.txt", (err) => {
    console.log(err);
  });
} else {
  console.log("file not found");
}

fs.mkdir("jadid.js/nodets", { recursive: true }, (err, file) => {
  if (err) console.log(err);
  else console.log(file);
});

fs.readdir("jadid.js", { recursive: true }, (err, file) => {
  if (err) console.log(err);
  else console.log(file);
});

const server = app.createServer((req, res) => {
  if (req.url == "/api/products" && req.method == "GET") {
    ProductController.list(req, res);
  } else if (req.url.split("/")[3].match(/^[0-9]/) && req.method == "GET") {
    ProductController.find(req, res);
  } else {
    res.writeHead(404, { "content-type": "text/plain" });
    res.write("route not found");
    res.end();
  }
});

server.listen(3000, () => console.log("Server run on port 3000"));
