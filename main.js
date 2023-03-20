// An alternative library providing synchronous queries for sqlite database
const db = require('better-sqlite3')('database2.db');

`SELECT Id, PostalAddress FROM Customers WHERE Id=(SELECT CustomerId FROM Orders WHERE name="pending")`

let row;
row = db.prepare('SELECT * FROM users WHERE name=?').get("Sharon Cummings");
console.log(row);

row = db.prepare('SELECT * FROM records WHERE value=?').get("PJK23DXK1WF");
console.log(row);


