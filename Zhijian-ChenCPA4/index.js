const http = require("http");
const port = 3000;
const statusCodes = require("http-status-codes");
const fs = require("fs");
const router = require("./router");
const htmlType = { "content-type": "text/html" };
const textType = { "content-type": "text/plaintext" };

const server = http.createServer(router.handle).listen(port);

router.get("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/index.html", res);
});
router.post("/", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("POsted");
});

router.get("/About.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/About.html", res);
});

router.get("/index.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/index.html", res);
});

router.get("/Events.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/Events.html", res);
});

router.get("/Jobs.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/Jobs.html", res);
});

router.get("/Login.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/Login.html", res);
});

router.get("/Contact.html", (req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  customReadFile("./views/Contact.html", res);
});

router.get("/style.css", (req, res) => {
  res.writeHead(200, { "content-type": "text/css" });
  customReadFile("./public/css/style.css", res);
});

router.get("/BrandeisLogo.png", (req, res) => {
  res.writeHead(200, { "content-type": "text/css" });
  customReadFile("./BrandeisLogo.png", res);
});

const customReadFile = (path, res) => {
  if (fs.existsSync(path)) {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        sendErrorResponse(res);
        return;
      }
      res.end(data);
    });
  } else {
    sendErrorResponse(res);
  }
};

sendErrorResponse = (res) => {
  res.writeHead(404, { "content-type": "text/html" });
  res.write("File not found");
  res.end();
};
console.log(`The server has stated and is listening on port number:${port}`);
