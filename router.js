const moment = require('moment');

module.exports = function(app){
    app.get("/", function (request, response) {
      response.sendFile(__dirname + '/views/index.html');
    });

    app.get('/:resource', function(req, res){
      var data = req.params.resource;
      var unix;
      var natural;
      if(moment(data).isValid()){
        console.log("valido data");
         unix = moment(data).format('X');
         natural = moment(data).format("LL");
       }
      else if(moment.unix(data).isValid()){
        console.log("valido unix");
          unix = data;
          natural = moment.unix(data).format("LL");
      }
      else{
        console.log("non valido");
        unix = natural = null;
      }
      /*if(unix === 'Invalid date')
        unix = null;
      if(natural === 'Invalid date')
        natural = null;*/
    res.send({ unix,natural });
  
})

}
