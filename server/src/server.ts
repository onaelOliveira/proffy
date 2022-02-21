// server.ts
import "./services/tracer"; // must come before importing any instrumented module.

import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

// não esquecer de tirar o comentário para a produção
// app.use(cors()); 
app.use(express.json());
app.use(routes);

app.listen(3333);
