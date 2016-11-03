var http = require("http")
var server = http.createServer(function(req,res){
    //IP address, language and operating system for my browser.
    //console.log(req.connection)
    var ip_address = req.headers['x-forwarded-for'];
    var language = req.headers['accept-language'];
    var os = req.headers['user-agent'];
    var output = {
        "ipaddress": ip_address,
        "language": language,
        "software": os
    }
    output = JSON.stringify(output)
    res.end(output)
})


server.listen(process.env.PORT, function(){
    console.log("Server listening on: "+ process.env.PORT);
});