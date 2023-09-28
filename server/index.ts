import * as mongoose from 'mongoose';
import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import WebSocket, { WebSocketServer } from 'ws'
import router from './src/router'
import { Messages } from "./src/models/messages";
import expressWs from 'express-ws'

// config()

// const app = express()
// const PORT = process.env.PORT || 3001

// app.use(express.json());
// app.use(cors());

const wss = new WebSocketServer({
  port: 5000
}, () => console.log('Server started on 5000'))

wss.on('connection', async function connection(ws) {
  await mongoose.connect(process.env.DB_URL)

  ws.on('message', async function (message) {
    message = JSON.parse(message)

    switch(message.event) {
      case 'message':
        const testId = '1234'
      
        const msgModel = await Messages.findOne({ testId }, 'messages')
        msgModel?.messages.push(message)

        broadcastMessage(message)
        break;
      case 'connection':
        broadcastMessage(message)
        break;
    }
  })
})

async function broadcastMessage(message) {
  wss.clients.forEach(client => {
    client.send(JSON.stringify(message))
  })
}

// app.use('/api', router);

// const start = async () => {
//   try {
//     if (process.env.DB_URL === undefined) {
//       throw new Error('Couldnt get database url')
//     }

//     await mongoose.connect(process.env.DB_URL)
    
//     app.listen(PORT, () => {
//       console.log(`Listening on port http://localhost:${PORT}...`);
//     });
//   } catch (e) {
//     console.log(e);
//   }
// }

// start()
