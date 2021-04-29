var express = require('express');
var app = express();
var cors = require('cors');


app.use(cors());

app.use(express.json());

app.post('/del',(req,res) =>{
    var name = req.body.name;
    console.log(name);
    fs.unlink(name, (err) => {
        if (err){
            console.log(err);
            res.send("error in deletion");
        } 
            
        console.log('deleted');
        res.send("deleted");
      });
})

app.post('/', (req, res) => {
  
})


var PORT = process.env.PORT || 4200;
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server is listening on PORT", PORT);
}); 