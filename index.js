const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

const  con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'home_central'
});

con.connect(err => {
   if (err) {
       return err;
   }
});


app.use(cors());


// return the outside temp
app.get('/outside-temp', (req, res) => {
    let  selectTemp = 'Select * from outdoor_temperatures order by id desc limit 1';
    con.query(selectTemp, (err, result) => {
        if (err) {
	    res.send(err);
        } else {
	    res.json({
	    	data: result
	    });
        }
    });
});

// return the water level
app.get('/water-level', (req, res) => {
    let  selectTemp = 'Select * from water_pressures order by id desc limit 1';
    con.query(selectTemp, (err, result) => {
        if (err) {
	    res.send(err);
        } else {
	    res.json({
	    	data: result
	    });
        }
    });

});



app.listen(4000, () => {
    console.log('Listening on 4000');
});
