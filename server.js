const express = require('express');

let app = express();

let port = process.env.PORT || 8080;

app.get('/', (req, res) => res.send("Hello World"));

//posso trocar "function()" por "()=>"
app.listen(port,() => {
    console.log("Server running on port " + port)
});