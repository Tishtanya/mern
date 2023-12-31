import asyncHandler from 'express-async-handler';

//@desc    Auth   user/set token
//route    POST   /api/users/auth
//@access  Public
const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ mesage: 'Auth User' });
});

//@desc    Register a new user
//route    POST   /api/users
//@access  Public
const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ mesage: 'Register User' });
});

//@desc    Logout user
//route    POST   /api/users
//@access  Public
const logoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ mesage: 'Logout User' });
});

//@desc    Get user profile
//route    GET   /api/users/profile
//@access  Private
const getUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ mesage: 'User Profile' });
});

//@desc    Update user profile
//route    PUT   /api/users/profile
//@access  Private
const updatehUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ mesage: 'Update User Profile' });
});

export {
	authUser,
	registerUser,
	getUserProfile,
	logoutUser,
	updatehUserProfile,
};
