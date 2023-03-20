const path = require("path");
const fs = require('fs');

const ReadLines = require('n-readlines');
`
Import the common passwords from the text files into the database
`

// An alternative library providing synchronous queries for sqlite database
const db = require('better-sqlite3')('database2.db');

let file;
let readLines;
let line;
let processed;


file = '/Users/g1/BU/projects/dnw/users.csv';
readLines = new ReadLines(file);
processed = 0;

while ((line = readLines.next())) {
  processed += 1;
  if (processed == 1) continue;  // skip header
  let text = line.toString('utf-8');
  console.log(text);
  let parts = text.split(",")
  db.prepare(
    `INSERT INTO users (name,email,password) VALUES (?, ?, ?);`)
  .run(parts[0], parts[1], parts[2]);

}

/////////////////////////////////////
file = '/Users/g1/BU/projects/dnw/records.csv';
readLines = new ReadLines(file);
processed = 0;

while ((line = readLines.next())) {
  processed += 1;
  if (processed == 1) continue;  // skip header
  let text = line.toString('utf-8');
  // console.log(text);
  if (text == "" || text == "\n") continue;
  let parts = text.split(",");

  db.prepare(
    `INSERT INTO records (value,user_id) VALUES (?, ?);`)
  .run(parts[0], parts[1]);

}

