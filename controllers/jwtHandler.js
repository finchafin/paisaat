const jwt = require('jsonwebtoken');

// Make this variable as environment variable
// so it dont get stored in my reposerories
const JWTsecret = "PaIssAT FinCHAfin AchArya";

exports.authenticateUser = (req, res, next) => {
  const token = req.cookie.jwt;

  // Checking if the token is valid
  if(token){
    jwt.verify(token, JWTsecret, (err, decodedToken) => {
      if(err){
        // Sending a response stating the token is not valid
        // Redirecting user to login again
        res.redirect('/signin');
      } else {
        // user is verified and we can go ahead
        next();
      }
    });
  } else {
    // No jwt token so the user is not logged in
    res.redirect('signin');
  }
};

exports.getUserDetails = (req, res, next) => {
  console.log("Jwt handler");
  console.log(req);
  if( !req.cookie){
    next();
  }
  const token = req.cookie.jwt;
  if(token){
    jwt.verify(token, JWTsecret, (err, decodedToken) => {
      if(err){
        // Sending a response stating the token is not valid
        // Redirecting user to login again
        res.redirect('/signin');
      } else {
        // user is verified and we can go ahead

        let userid = decodedToken.id;
        req.locals.userid = userid;
        next();
      }
    });
  } else {
    // No jwt token so the user is not logged in
    res.redirect('signin');
  }
}