module.exports = function(app){
    app.get("/", function (request, response) {
      response.sendFile(__dirname + '/views/index.html');
    });

    

}