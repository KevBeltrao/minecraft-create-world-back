import { Request, Response, NextFunction } from 'express';
import { getExamplesByB } from '../repositories/examplesRepository';

export const list = (req: Request, res: Response, next: NextFunction): void => {
  const { b: bValue } = req.query;

  const examples = getExamplesByB(bValue === undefined ? bValue : +bValue);

  res.locals.data = examples;
  return next();
};
