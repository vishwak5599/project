const express = require('express');
const mysql = require('mysql');
const app = express();
const Joi = require('joi');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'abcxyz@123K',
  database: 'practice'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database');
    return;
  }
  console.log('Connected to MySQL database');
});


const userSchema = Joi.object({
    driver_id: Joi.number().integer().min(1).max(100).required(),
    driver_name: Joi.string().required(),
    google_coordinates: Joi.string().required()
   
  });


app.post('/data', (req, res) => {
    const { error, value } = userSchema.validate(req.body);
  
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
  
    const { driver_id, driver_name,  google_coordinates } = value;
  
    
   // const sql = `INSERT INTO data ( name, location) VALUES ( '${name}', '${location}')`;

    const sql = `UPDATE datatable
    SET driver_name = '${driver_name}', google_coordinates = '${google_coordinates}'
     WHERE driver_id = '${driver_id}';`
  
    
    connection.query(sql, (err, results, fields) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal server error');
        return;
      }
  
     
      res.status(201).send('Google coordinates  updated successfully to sql ');
    });
  });

app.get('/', (req, res) => {
  connection.query('SELECT * FROM datatable', (error, results, fields) => {
    if (error) throw error;
    res.send(results);
  });
});



app.listen(4000, () => {
  console.log('Server listening on port 4000');
});