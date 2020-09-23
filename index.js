const abutils = require("@braussjoss/test");

exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World!V3' || abutils.printMsg();
  res.status(200).send(message);
};
