const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization) {
    const secret = process.env.JWT_SECRET || "tis a secret";
    jwt.verify(authorization, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "shall not pass!" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({
      message:
        " your not logged in and pre you got to be to have access to this privelage",
    });
  }
};
