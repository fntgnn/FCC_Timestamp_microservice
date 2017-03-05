//Main starting point
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const moment = require('moment');

app.use(express.static('public'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/:resource', function(req, res){
    var data = req.params.resource;
    var unix;
    var natural;
    
    if(moment(data).isValid() || moment(data, 'Unix').isValid()){
       unix = moment(data).format('X');
       natural = moment(data).format("LL");
     }
    else{
      unix = natural = null;
    }
  res.send({ unix,natural });
  
    
})




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
