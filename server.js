var http = require("http")
var server = http.createServer(function(req,res){
    //IP address, language and operating system for my browser.
    console.log(req)
    var ip_address = req.headers.ipaddress;
    var language = req.headers.language;
    var os = req.headers.operating;
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