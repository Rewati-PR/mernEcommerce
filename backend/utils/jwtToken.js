// Create Token and saving in cookie

const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();
    const cookie = process.env.COOKIE_EXPIRE || 1;
    
    // options for cookie
    const options = {
      expires: new Date(
        Date.now() + cookie * 24 * 60 * 60 * 1000
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