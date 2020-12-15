
const express = require('express')
const cache = require('./cache');
const Lists = require('./lists');
const app = express()
const fs = require('fs');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');

// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});


//app.set('view engine', 'ejs')
//app.use(express.static('public'))

/**
 * action: MENU_UP, MENU_DOWN,SELECT
 * list_type: welding_plan, pipe #, increment units, etc....
 * index: the 
 */


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


const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8081",
    methods: ["GET", "POST"]
  }
});


io.on('connection', socket => {
    console.log("New user connected")
});

var sendMsg = (msgType , data) => {
  io.emit(msgType, data)
}
