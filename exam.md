For the same shirt company you are writing a routine to process customer orders with Status set as “pending”.
For each pending order you need to retrieve the customer’s postal address along with the order id. 
Which of the following commands would successfully do this ?


THIS ONE ---> SELECT Id, PostalAddress FROM Customers WHERE Id=(SELECT CustomerId FROM Orders WHERE Status=”pending”)


SELECT Id, PostalAddress FROM Customers WHERE CustomerId=(SELECT Id FROM Orders WHERE Status=”pending”)


SELECT Orders.Id, PostalAddress FROM Orders JOIN Customers ON Orders.CustomerId=Customers.Id WHERE Status=”pending”


SELECT Orders.Id, Customers.PostalAddress FROM OrderItems JOIN Orders ON Orders.Id=OrderItems.Id WHERE Status=”pending”


SELECT Id, PostalAddress FROM Orders JOIN Customers ON Orders.Id=Customers.Id WHERE Status=”pending”


Which one of the following correctly describes 3 tier web application architecture? 

[presentation, application, data tiers](video://1.301 Three-tier web application architecture.mp4 69)

---------------------------------------- 
Which of the following are benefits of applying the SoC (Separation of Concerns) principle of programming?
a.

YES Allows for easier debugging

Overall, while the SoC principle does not guarantee easier debugging, it can provide a foundation for building systems that are easier to debug than more complex distributed architectures.

YES Improved portability (ie. moving from a single to distributed server architecture)

YES Helps achieve a DRY (Don’t Repeat Yourself) codebase


YES Improves testability


NO Keeps user data secure

NO Improves server side performance

----------------------------------------------------


In which of these circumstances is it advisable to use a POST request ?
a.

[] Retrieving data from the server with some non-sensitive data from the client
[x] Sending data to the server to update or create a database record
[] Retrieving data from the server without providing data from the client
[x] Retrieving data from the server with sensitive data from the client
[] Retrieving data from the server which also triggers changes to the database (eg. a click counter)

-  POST requests are typically used for submitting data to be processed by the server,

----------------------------------------------------

StockId INT NOT NULL AUTO INCREMENT
Style CHAR(8) NOT NULL
Size ENUM ('xs', 's', 'm', 'l', 'xl')
StoreLocation VARCHAR(255) DEFAULT “London”
Remaining INT DEFAULT 0


INSERT INTO Shirts VALUES (“Hawaiian”, “xs”,10);

[x] INSERT INTO Shirts (Style, Size) VALUES (“Hawaiian”, “xs”);

INSERT INTO Shirts VALUES (255, “Hawaiian”, “xs”, “Helsinki”, 10);
- integer on auto increment will fail

CREATE ROW IN Shirts (255, “Hawaiian”, “xs”, “Helsinki”, 10);
- no create
 
INSERT INTO Shirts (Style, Size, Created) VALUES (“Hawaiian”, “xs”, 10);
- no created column

- INSERT INTO Shirts VALUES (“Hawaiian”, “xs”,10);


------------------------------------------------------

To cope with a sudden surge in demand, the same retailer wants to move all of the Hawaiian Small Shirts that are in their London branch to their Helsinki branch.
Which of the following commands would successfully do this ?

MOVE Shirts VALUES(“Helsinki”) WHERE StoreLocation=”London” AND  Style=”Hawaiian” AND Size=”s”
UPDATE Shirts SET StoreLocation VALUES(“Helsinki”) WHERE StoreLocation=”London”,  Style=”Hawaiian”, Size=”s”
SELECT * FROM Shirts SET StoreLocation=”Helsinki”
UPDATE Shirts (StoreLocation) VALUES(“Helsinki”) WHERE StoreLocation=”London” Style=”Hawaiian” Size=”s”
UPDATE Shirts SET StoreLocation=”Helsinki” WHERE StoreLocation=”London” AND Style=”Hawaiian” AND Size=”s”


------------------------------------------------------

NO res.send(“home-page”, {user: “simon”, messages: [{message: “hi”, sender: “jo”}], isLoggedIn: true});

res.render(“home-page”, {user: {username: “simon”, iconPath: “/images/simon.png”}, messages: {message: “hi”, sender: “jo”}, isLoggedIn: true}, ‘views/menu-bar.ejs’);

res.render(“home-page”, {user: {username: “simon”, iconPath: “/images/simon.png”}, messages: {message: “hi”, sender: “jo”}, isLoggedIn: true});

res.sendFile(“home-page.ejs”);

res.render(“home-page”, {user: {username: “simon”, iconPath: “/images/simon.png”}, messages: simonsMessages, isLoggedIn: true});