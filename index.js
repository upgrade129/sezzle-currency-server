var express = require('express');
var app = express();
var cors = require('cors');
const fetch  = require('node-fetch');


app.use(cors());

app.use(express.json());

app.get('/rates', (req, res) => {
    fetch('https://free.currconv.com/api/v7/currencies?apiKey=4b72a471c99674009688')
    .then(res => res.json())
    .then(json => res.send(json))

    .catch((err)=> res.send(err));
 
})

app.post('/base', (req, res) => {
    var fromcur = req.body.fromCurrency;
    var tocur = req.body.toCurrency;
    var fromId = req.body.fromId;
    var toId = req.body.toId;

    console.log(fromId,toId);
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://free.currconv.com/api/v7/convert?apiKey=4b72a471c99674009688&q=${fromId}_${toId}&compact=y`, requestOptions)
        .then(response => response.text())
        .then(result => res.send(result))
        .catch(error => console.log('error', error));
})



var PORT = process.env.PORT || 4200;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server is listening on PORT", PORT);
}); 