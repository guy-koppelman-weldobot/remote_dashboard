
const express = require('express')
const cache = require('./cache');
const Lists = require('./lists');
const app = express()
const fs = require('fs');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const path = require('path');
const history = require('connect-history-api-fallback');
const CONFIG = require('./config');


app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

const port = CONFIG.common.CW_PORT;
const socket_io_port = CONFIG.common.CW_SOCKET_PORT;

app.use(express.static(path.join(__dirname, `../${CONFIG.CLIENT_FOLDER}/dest-3000`)));
//app.use(history);


  app.post('/cycledata', async(req,res)=>{
        var data = req.body;
        sendMsg('GET_DATA', data)
  });


  app.post('/pushlist', async(req,res)=>{
    var data = req.body;
    sendMsg('NAV', data)
    res.status(200).send('list received');
  });

  
  const server = app.listen(port, () => { /* app.listen(process.env.PORT || 3001 */
      console.log(`server is running on port ${port}`)
  });

  // serving the default vue SPA file 
  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, `../${CONFIG.CLIENT_FOLDER}/dest-3000/index.html`));
  });

  app.post('/dash' ,async (req,res) => {
    var data = req.body;
    io.emit('DASH');
  });

  // register the socket.io 
  const io = require("socket.io")(server, {
    cors: {
      origin: `http://localhost:${port}`,
      methods: ["GET", "POST"]
    }
  });


  io.on('connection', socket => {
      console.log("New user connected")
  });

// Generic method for sending data to the vue front end
  var sendMsg = (msgType , data) => {
    console.log(`Data received from server on port ${port}`);
    io.emit(msgType, data)
  }
