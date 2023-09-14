import * as mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import router from './src/router'

config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    if (process.env.DB_URL === undefined) {
      throw new Error('Couldnt get database url')
    }

    await mongoose.connect(process.env.DB_URL)
    
    app.listen(PORT, () => {
      console.log(`Listening on port http://localhost:${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

start()
