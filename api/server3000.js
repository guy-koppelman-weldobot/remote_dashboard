
const express = require('express')
const cache = require('./cache');
const Lists = require('./lists');
const app = express()
const fs = require('fs');
const xml2js = require('xml2js');
const bodyParser = require('body-parser');
const path = require('path');

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




// app.get('/:action/:list_type', (req, res)=> {
    
//     var list_type = Lists[req.params.list_type].arr;
//     const Current = {index: Lists[req.params.list_type].current_index};
//     //const current = Lists[req.params.list_type].current_index;
//     var list_length = list_type.length; // the last index


//     if(req.params.action == "MENU_UP" && (Current.index+1) < list_length){
//       let data = {list_type: req.params.list_type, index: Current.index+1};
//       Lists[req.params.list_type].current_index++;
//       sendMsg(req.params.action,data);
//     }
//       if(req.params.action == "MENU_DOWN" && (Current.index-1) >= 0){
//         let data = {list_type: req.params.list_type, index: Current.index-1};
//         Lists[req.params.list_type].current_index--;
//       sendMsg(req.params.action,data);
//       }
//       res.status(200).end();
// });



app.use(express.static(path.join(__dirname, '../my-app/dist3000')));

app.get('/loadXml', async(req, res) => {
  let result;

  let xml = await fs.promises.readFile('C:/Guy/Code/AROW/run_dir/workplan.wpln');
    parser.parseString(xml,(data,err)=>{
      res.json(data);
    });
  });

  app.get('/lists/list/:name', async (req, res) => {  

    //C:\Guy\Code\AROW\run_dir\TPLists\CCW
    var path = 'C:/Guy/Code/AROW/run_dir/TPLists/CCW' + '/Passes.json';
    let data = await fs.promises.readFile(path,'utf-8')
        res.json(data);
    });

  app.post('/cycledata', async(req,res)=>{
        var data = req.body;
        var jsonStr = JSON.stringify(data);
        sendMsg('GET_DATA', jsonStr)
  });

  const port = 3000;
  const server = app.listen(process.env.PORT || port, () => {
      console.log(`server is running on port ${port}`)
  });

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../my-app/dist3000/index.html'));
  });

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});


io.on('connection', socket => {
    console.log("New user connected")
});

io.on('MENU_UP', data => {
  console.log(data);
})

var sendMsg = (msgType , data) => {
  console.log(`Data received from server on port ${port}`);
  io.emit(msgType, data)
}
