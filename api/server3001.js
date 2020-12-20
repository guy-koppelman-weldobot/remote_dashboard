
const express = require('express')
const cache = require('./cache');
const Lists = require('./lists');
const app = express()
const fs = require('fs');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const path = require('path');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(express.static(path.join(__dirname, '../my-app/dist3001')));

app.get('/loadXml', async(req, res) => {
  let result;

  let xml = await fs.promises.readFile('C:/Guy/Code/AROW/run_dir/workplan.wpln');
    parser.parseString(xml,(data,err)=>{
      res.json(data);
    });
  });



  app.post('/cycledata', async(req,res)=>{
        var data = req.body;
        var jsonStr = JSON.stringify(data);
        sendMsg('GET_DATA', jsonStr)
  });
  const port = 3001;
  const server = app.listen(process.env.PORT || port, () => {
      console.log(`server is running on port ${port}`)
  });

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../my-app/dist3001/index.html'));
  });

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});


io.on('connection', socket => {
    console.log("New user connected")
});

var sendMsg = (msgType , data) => {
  console.log(`Data received from server on port ${port}`);
  io.emit(msgType, data)
}
