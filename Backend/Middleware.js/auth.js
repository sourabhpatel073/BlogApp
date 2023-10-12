const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decode = jwt.verify(token.split(" ")[1], "masai");
      if (decode) {
        console.log(decode)
        req.body.author_ID=decode.authorID
        req.body.author=decode.authore
        console.log(req.body)
        next();
      }
    } catch (err) {
      res.status(400).send({"err":err});
    }
  }
};
module.exports = { auth };
