var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  if (request.method === 'GET') // request went through
   {
    if (request.url === '/listings')
    {
      response.writeHead(200, {'Content-Type': 'Application/JSON'});
      response.write(JSON.stringify(listingData));
      response.end();
    }
    else //check if wrong url
    {
      response.writeHead(404);
      response.end('Bad gateway error');
    }

   }
   else //response failed
   {
      response.writeHead(404);
      response.end('Bad gateway error');
   }
};

fs.readFile('listings.json', 'utf8', function(err, data) {
  /*
    This callback function should save the data in the listingData variable, 
    then start the server. 

    HINT: Check out this resource on fs.readFile
    //https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback

    HINT: Read up on JSON parsing Node.js
   */

    //Check for errors
  

   //Save the sate in the listingData variable already defined
  

  //Creates the server
  
  //Start the server
    //parse json data
    listingData = JSON.parse(data);
    //Make server and call request handler function
    http.createServer(requestHandler).listen(8080);

    //Listening server
    console.log("Server is listening : http://localhost:" + port + "/listings");

});
