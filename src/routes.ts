import { Router } from 'express';

const router = Router();

router.get('/', (req, res, next) => {
  res.locals.data = 'Hello, world';
  return next();
});

export default router;
