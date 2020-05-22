const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/model");
const { isValid } = require("../users/services");

router.post("/register", (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const rounds = process.env.BCRYPT_ROUNDS || 8;

    // hash the password
    const hash = bcrypt.hashSync(credentials.password, rounds);

    credentials.password = hash;

    // save the user to the database
    Users.add(credentials)
      .then((user) => {
        res.status(201).json({ data: user });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } else {
    res.status(400).json({
      message:
        "please provide username and password and the password shoud be alphanumeric",
    });
  }
});

router.post("/login", (req, res) => {
  // implement login
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    role: user.role,
  };
  const secret = secrets.jwtSecret;

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, secret, options);
}
module.exports = router;
