import express from 'express';
import { getAllPosts, createPost } from '../controllers/communityController.js';

const router = express.Router();

router.get('/', getAllPosts);
router.post('/', createPost);

export default router;
