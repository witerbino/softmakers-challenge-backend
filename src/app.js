import express from 'express';
import routerApp from './router/index.js';

const app = express();

app.use(express.json());
app.use('/api', routerApp);

export default app;