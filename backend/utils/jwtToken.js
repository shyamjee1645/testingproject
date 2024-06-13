// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();

  // options for cookie
  const expirationTime = parseInt(process.env.COOKIE_EXPIRE) || 7;
  console.log(new Date(
    Date.now() + expirationTime * 24 * 60 * 60 * 1000
  ));
  const options = {
    expires: new Date(
      Date.now() + expirationTime * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;