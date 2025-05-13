const { asyncHandler } = require("../utils/asynHandler");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { User } = require("../models/user.model");

const generateAccessToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    console.log(user);

    const accessToken = user.generateAccessToken();
    console.log(accessToken);

    return { accessToken };
  } catch (error) {
    throw new ApiError(
      500,
      "Something went wrong while generating referesh and access token"
    );
  }
};

exports.userRegister = asyncHandler(async (req, res) => {
  const { username, email, fullname, password } = req.body;

  if (
    [username, email, fullname, password].some(
      (fields) => fields?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const existedUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  const user = await User.create({
    username: username.toLowerCase(),
    email,
    fullname,
    password,
  });

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

exports.userLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!(email)) {
    throw new ApiError(400, "Email or username are required");
  }

  const user = await User.findOne({
    email 
  });

  if (!user) {
    throw new ApiError(401, "Invalid email or username");
  }

  const isPasswordValid = user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid password");
  }
  console.log(user);
  
  const token = user.generateAccessToken();
  console.log(token);
  

  const options = {
    httpOnly: true,
    secure: true,
  };

  const loggedIn = await User.findOne(user._id).select(
    "-password -refreshToken"
  );

  return res
    .status(200)
    .cookie("accessToken", token, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedIn,
          token,
        },
        "user loggedin successfully"
      )
    );
});

exports.userLogout = asyncHandler(async (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(201, {}, "user logged out"));
});
