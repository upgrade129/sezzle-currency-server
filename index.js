var express = require('express');
var app = express();
var cors = require('cors');
const fetch  = require('node-fetch');


app.use(cors());

app.use(express.json());

app.get('/rates', (req, res) => {
    fetch('https://api.openrates.io/latest')
    .then(res => res.json())
    .then(json => res.send(json))

    .catch((err)=> res.send(err));
 
})

app.post('/base', (req, res) => {
    var fromcur = req.body.fromCurrency;
    var tocur = req.body.toCurrency;
    console.log(fromcur,tocur);
    fetch(`https://api.openrates.io/latest?base=${
        fromcur}`)
    .then(res => res.json())
    .then(json => res.send(json))
    
    .catch((err)=> res.send(err));
 
})



var PORT = process.env.PORT || 4200;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server is listening on PORT", PORT);
}); 