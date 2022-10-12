import 'dotenv/config';
import 'express-async-errors';

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello, world'));

export default app;
