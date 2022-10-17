import { Router } from 'express';
import * as examplesController from './controllers/examplesController';

const router = Router();

router.get('/', (req, res, next) => {
  res.locals.data = 'Hello, world';
  return next();
});

router.get('/examples', examplesController.list);

export default router;
