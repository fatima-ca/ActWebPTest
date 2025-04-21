import express from 'express';
import DataHttpHandler from '../handlers/data';

const router = express.Router();

const dataHttpHandler = new DataHttpHandler();

router.get('/AllData', dataHttpHandler.getData);

export default router;