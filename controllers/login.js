// bcrypt to hash and match passwords
const bcrypt = require("bcryptjs");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

// Importing User modal
const User = require("../models/users");

// Make this variable as environment variable
// so it dont get stored in my reposerories
const JWTsecret = "PaIssAT FinCHAfin AchArya";

const createJWTToken = (id) => {
  return jwt.sign({ id }, JWTsecret, { expiresIn: 24 * 60 * 60 * 7 });
};

// Handling the login route
exports.postLogin = async (req, res, next) => {
  // Parsing the user data from form
  const userEmail = req.body.email;
  const password = req.body.password;

  // Validate the input if user email exists
  try {
    const user = await User.findOne({ email: userEmail });

    // Checking if the email exists
    if (!user) {
      res.status(201).json({
        msg: "The email does'nt exist, Please Create an account if you are new here.",
      });
      return;
    } else {
      // check the user password -- password !== user.password
      if (await bcrypt.compare(password, user.password)) {
        // Generating jwt token for user
        const token = createJWTToken(user._id);
        
        // adding jwt in cookie
        res.cookie('jwt', token, {httpOnly : true, maxAge : 1000 * 24 * 60 * 60 * 7 });

        const userDetails = {
          name: user.name,
          email: user.email,
          _id: user._id
        };
        console.log("sending user details", userDetails);
        
        // Sending response if everything goes OK
        res.status(200).json(userDetails);
        return;
      } else {
        // Password didn't match
        res
          .status(201)
          .json({ msg: "Wrong Password, Please try again", email: userEmail });
      }
    }
  } catch (err) {
    // return an error if anything goes wrong
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

exports.postSignup = async (req, res, next) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // Validate the user input if all the inputs follows required specification
  // Use Validate Login Function
  //
  //    To be done once we complete validation at frontend
  //

  // Checking For email duplicaition
  try {
    const existingUser = await User.findOne({ email: userEmail });
    // If email allready exists
    if (existingUser) {
      res.json({
        msg: "The email is allready used please try a different one",
        usedEmail: userEmail,
      });
      return;
    }
  } catch (err) {
    res.status(400).json({ msg: err.message });
    console.log("email checking error");
  }

  let hashedpwd = userPassword;

  try {
    hashedpwd = await bcrypt.hash(userPassword, 10);
  } catch (err) {
    res.status(400).json({ message: err.message });
    return;
  }

  const newUser = {
    name: userName,
    email: userEmail,
    password: hashedpwd,
    phone: "",
    bio: "",
    imageUrl: "",
    following: [],
    followers: [],
  };

  // Create the user in the database
  const user = new User(newUser);

  try {
    // Saving the user to database
    const newUser = await user.save();
    // Generating jwt token for user
    const token = createJWTToken(user._id);
    
    // adding jwt in cookie
    res.cookie('jwt', token, {maxAge : 1000 * 24 * 60 * 60 * 7 });

    res.status(201).json(newUser);
  } catch (err) {
    // console.log(err)
    console.log("creating user error");
    res.status(400).json({ message: err.message });
  }
};

// Function to valudate userdata while SIGNUP
// retutns true if  all the parameters passes the test
// else return the string that is invalid
// function validateLogin() {}
