import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import routes from '../routes';
import errorHandler from '../handlers/errorHandler';
import responseHandler from '../handlers/responseHandler';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use(routes);
app.use(errorHandler);
app.use(responseHandler);

export default app;
