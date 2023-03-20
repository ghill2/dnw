const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');
const port = 3002;

const https = require('https');
const http = require('http');
const fs = require("fs");
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

const db = new sqlite3.Database('./database.db');

app.post('/create_account',function (req, res) {
  // Form data include username and password.
  const {username, password} = req.body;

  // Your code should access the database to store the account data.
  db.run(`INSERT INTO users (username, password) VALUES (?, ?);`,
    [username, password], function (err, row) {

      // Your code should handle the error condition where the database query fails.
      if (err) {
        res.status(500).json({"error": err});
        return;
      }

      // Your code should display a message when an account is successfully created.
      res.status(201).json({"message": "account successfully created"});

  });

});

app.get('/create_account',function (req, res) {
  let title = "some_title";
  res.render("account.ejs", {
    title: title,
  });

});


app.get('/login',function (req, res) {
  let title = "some_title";
  res.render("login.ejs", {
    title: title,
  });
});

app.post('/login',function (req, res) {
  // Form data include username and password.
  const {username, password} = req.body;

  db.get(
    'SELECT * FROM users WHERE username = ?',
    [username],
    function (err, row) {

          // Your code should handle the error condition where the database query fails.
          if (err) {
            res.status(500).json({"error": err});
            return;
          }

          // user is able to log in if and only if both username and password match with
          if (typeof row === 'undefined') {
              res.status(500).json({"error": "user does not match"});
              return;
          }
          // compare collected form data with data already saved in the database
          if (row.password != password) {
              res.status(500).json({"error": "password does not match"});
              return;
          }

          res.status(201).json({"message": "login successful"});

    }
  );
});

module.exports = app;

// Read key and certificate files
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};


const server = https.createServer(options, app);
server.listen(port, () => {
  console.log(`Server running at https://localhost:${port}/`);
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })