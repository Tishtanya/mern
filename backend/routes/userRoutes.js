import express from 'express';
const router = express.Router();
import {
	authUser,
	registerUser,
	getUserProfile,
	logoutUser,
	updatehUserProfile,
} from '../controllers/userController.js';

router.post('/', registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updatehUserProfile);

export default router;
