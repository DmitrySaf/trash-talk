import * as mongoose from 'mongoose';
import express from 'express'
import { WebSocketServer } from "ws";
import { config } from 'dotenv'
import cors from 'cors'
import router from './src/router'
import SocketController from "./src/controllers/socket-controller";

config()

const app = express();
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
    
    const server = app.listen(PORT, () => {
      console.log(`Listening on port http://localhost:${PORT}...`);
    });
    const wss = new WebSocketServer({
      server
    })
    wss.on('connection', (ws) => SocketController.connection(wss, ws))
  } catch (e) {
    console.log(e);
  }
}

start()
