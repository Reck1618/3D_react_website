import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();
const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : [];

app.use(cors({
    origin: (origin, callback) => {
      // Check if the request's origin is in the allowed origins
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  }));

app.use(express.json({limit: '50mb'}));
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Hello World!'});
});

app.listen(8080, () => console.log('Server listening on port 8080'))
