import { Request, Response } from 'express';

const responseHandler = (req: Request, res: Response): Response => {
  const { data, status } = res.locals;

  return res.status(status ?? 200).json({ data });
};

export default responseHandler;
