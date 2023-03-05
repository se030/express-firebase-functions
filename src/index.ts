import { initializeApp } from 'firebase-admin/app';
import env from './config';

initializeApp({
  serviceAccountId: env.SERVICE_ACCOUNT_ID,
});

import * as cors from 'cors';
import * as express from 'express';
import * as functions from 'firebase-functions';

// import authRouter from './apis/auth';
// import domainRouter from './apis/domain';

const app = express();
app.use(express.json());

app.use(cors());

// app.use('/auth', authRouter);
// app.use('/domain', domainRouter);

app.get('/', (_, res) => res.send('Api server running'));

exports.api = functions
  .runWith({ secrets: ['SERVICE_ACCOUNT_KEY'] })
  .https.onRequest(app);
