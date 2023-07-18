const router = {
  GET: {},
  POST: {},
};

exports.get = (url, action) => {
  router["GET"][url] = action;
};

exports.post = (url, action) => {
  router["POST"][url] = action;
};

exports.handle = (req, res) => {
  if (router[req.method][req.url]) {
    router[req.method][req.url](req, res);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("Route does not exists");
  }
};
