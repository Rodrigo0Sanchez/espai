// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const app= express();

var cors = require('cors'); //HTTP access control (CORS) for cross origin requests

app.use(cors()); //Setup cors

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api response
//app.get('/api', (req, res) => {
  //res.send('api works');
//});

app.get('/api', (req, res) => {
  var jsonData = {"results": ["Important 1 ","Thing 2",]};
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});

app.get('/api/products', (req, res) => {
    var jsonData = {
        "products":[{
        "_id": {
            "$oid": "5968dd23fc13ae04d9000001"
        },
        "product_name": "sildenafil citrate",
        "supplier": "Wisozk Inc",
        "quantity": 261,
        "unit_cost": "$10.47"
        }, {
        "_id": {
            "$oid": "5968dd23fc13ae04d9000002"
        },
        "product_name": "Mountain Juniperus ashei",
        "supplier": "Keebler-Hilpert",
        "quantity": 292,
        "unit_cost": "$8.74"
        }, {
        "_id": {
            "$oid": "5968dd23fc13ae04d9000003"
        },
        "product_name": "Dextromathorphan HBr",
        "supplier": "Schmitt-Weissnat",
        "quantity": 211,
        "unit_cost": "$20.53"
        }]
    }
    ;
  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(jsonData));
});


app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/about',function(req,res){
 res.sendFile(path.join(__dirname,'about.html')); //__dirname : Ritorna la cartella del progetto
});

app.get('/sitemap',function(req,res){
 res.sendFile(path.join(__dirname,'sitemap.html')); //__dirname : Ritorna la cartella del progetto
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Listen on provided port, on all network interfaces.
 */
app.listen(port,  () => {console.log('Example app listening on port 3000!');});
