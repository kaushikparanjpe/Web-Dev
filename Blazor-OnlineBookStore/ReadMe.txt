There are 3 modules 
Blazor Server, Blazor Client and Blazor Shared

To just see if the application is running or no, you can open the sln file in visual studio and run the server and you will be directed to the login page.


(DATABASE CONNECTION TO MSSQL MANDATORY TO CHECK THE FULL APPLICATION)
But to check if the entire application is working, then 

1) Changes you need to make are in DatabaseContext.cs,  Startup.cs
optionsBuilder.UseSqlServer("Server= @YourServerName ;Database=@YourDatabaseName;" +
                            "user id=@YourUserId;password=@YourPassword;Trusted_Connection=True;" +
                            "MultipleActiveResultSets=true");

2) You need to make a database in MSSQl and run the following script to create tables

============================

CREATE TABLE Orders 
(User varchar(255) NOT NULL,
	
Product varchar(255) NOT NULL,
	
Quantity int NOT NULL,
	
OrderId BIGINT NOT NULL,

Price decimal NOT NULL,
     
PRIMARY KEY (OrderId)
)
OrderStatus varchar(255),
);



CREATE TABLE Users 
(UserId varchar(100) NOT NULL,
	
Password varchar(255) NOT NULL,
Role varchar(255) NOT NULL,
     
PRIMARY KEY (UserId)
);



CREATE TABLE Products 
(Id BIGINT NOT NULL,
	
Price decimal NOT NULL,

Category varchar(255) NOT NULL,

Name varchar(255) NOT NULL,

Image varchar(1000) NOT NULL,
     
PRIMARY KEY (Id)
);

Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(98687978987, 25, 'books', 'Something in the Water', 'https://images.penguinrandomhouse.com/cover/9780525509356?height=350&alt=cover_coming_soon.jpg')



Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(7686787665, 25, 'books', 'Drums of Autumn (Starz Tie-in Edition)', 'https://images.penguinrandomhouse.com/cover/9780525618737?height=350&alt=cover_coming_soon.jpg')

Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(7686990000, 25, 'books', 'Eleanor Oliphant Is Completely Fine', 'https://images.penguinrandomhouse.com/cover/9780735220690?height=350&alt=cover_coming_soon.jpg')



Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(7905490000, 35, 'books', 'Bathed in Prayer', 'http://images.randomhouse.com/cover/9780525537564?height=350&alt=no_cover_penguin.jpg')



Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(1290880000, 25, 'books', 'Something in the water', 'https://images.penguinrandomhouse.com/cover/9781524797188?height=350&alt=cover_coming_soon.jpg')



Insert into [webdev].[dbo].[Products] (Id, Price, Category, Name, Image)

VALUES(7905490000, 35, 'books', 'Tom Clancy Oath of Office', 'http://images.randomhouse.com/cover/9780735215955?height=350&alt=no_cover_penguin.jpg')

Insert into [webdev].[dbo].[Users] (UserId, Password, 
Role)
VALUES('admin','admin','admin')
================================


One you set these things up, you can give username as admin and password also as admin to login as admin. And you can login aas a new User using Signup.
