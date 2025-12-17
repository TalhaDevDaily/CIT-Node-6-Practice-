const userSchema = require("../models/userSchema");
const { isValidEmail } = require("../utils/validations");

const signup = async function (req, res) {
  const { username, email, password } = req.body;

  if (!username)
    return res.status(400).send({
      message: "Username is required for in order to proceed",
    });
  if (!email)
    return res.status(400).send({
      message: "Email is required for in order to proceed",
    });

  if (!isValidEmail(email))
    return res.status(400).send("Please enter a valid email");

  if (!password)
    return res.status(400).send({
      message: "Password is required for in order to proceed",
    });

  const existingUser = await userSchema.findOne({ email });
  if (existingUser)
    return res.status(400).send("A user with this email already exists");

  const user = new userSchema({
    username,
    email,
    password,
  });

  user.save();

  res.status(201).send({ message: "Registeration successful" });
};

const signin = async function (req, res) {
  res.send("Sign In");
};

module.exports = { signup, signin };
