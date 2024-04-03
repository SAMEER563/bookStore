import express from 'express';
import { getBooks } from '../controller/book.controller';

const router = express.Router();

router.get('/', getBooks);

export default router;