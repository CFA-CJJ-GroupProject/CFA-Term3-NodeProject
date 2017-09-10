# CFA-Term3-NodeProject
Term 3 MERN stack project.<br>
A transport company job logging application.

# Live Application
***
> As the back-end and the front-end are deployed as two separate applications, it may take a few seconds for the back-end to wake up when trying to access the website for the first time after a period of time.

> https://allneedstransport.netlify.com/

> A user can only be created by the administrator. User: admin,  password: guest

> Each kind of user will have different permissions and different home screens depending on their permissions.


# Table of Contents

* [Project brief](#project-brief)
* [Stacks Used](#stacks-used)
* [Problem](#client-problem)
* [Solution](#solution)
* [User Stories](#user-stories)
* [Design And Solution](#wireframes)


## Project Brief
***
#### Our task is to: 
* Design, build, deploy and present an application built for a real world client.
* Meet with the business owner or organisation manager to find out what challenges they face.
* Solve their presented problem with an application your group will build.

[Table of Contents](#table-of-contents)

## Client Problem 
***
> Our client, a logistics transport company currently does not have any sort of digital infrastructure, therefore all records and history of transactions are all recorded on paper. As a result, keeping an accurate history of freight pickups and delivieries is a significant problem for them, their current paper system is inaccurate as well as time and labour intensive. 


## Solution 
*** 
> We designed and developed a full stack web application catered specifically for our clients needs. There are three different ki9nds of users, a customer, a driver and an administrator. Each user type has their own specific permissions, e.g a customer can not see a drivers job list. A customer will have their own unique login, created by the administrator that they can use to log on and create new jobs for pickup and delivery. A driver can only see their jobs list, which is assigned to them by the administrator. 
The administrator has access to all functionality of the application and is responsible for assigned jobs and creating unique logins for both drivers and customers.
[Table of Contents](#table-of-contents)

## Wireframes
*** 
![trello](/lib/wire1.png)
![trello](/lib/wire2.png)
![trello](/lib/wire3.png)
![trello](/lib/login.png)
[Table of Contents](#table-of-contents)

## Trello Board
*** 
> We made heavy use of a trello board to keep track progress and outstanding tasks to be completed.
![trello](/lib/trello.png)
[Table of Contents](#table-of-contents)


## User Stories 
***
#### Client 
***
1. As a client, I want to order a pick-up of freight to be transported.
2. As a client, I want to organise a delivery for freight.
3. As a client, I would like to have an overview of all active jobs.
4. As a client, I would like access to complete history of all jobs, previous, current and future.
5. As a client, I would like to be able to view the status of orders.
6. As a client, I need to be able to alter job information, before the pick-up window starts.
7. As a client, I need to be able to add extra jobs to my previous jobs.
8. As a client, I need the ability to search through history with specific queries.


#### Driver 
***
1. As a driver, I would like a list of all my jobs for the day.
2. As a driver, I would like to be able to mark a job as complete, for my own use.
3. As a driver, I would like to click on an address and be directed there.


#### Admin/Clerk 
*** 
1. As an admin, I need to have access to all areas and aspects of the application.
2. As an admin, I must be the only user with permissions to add new users.
3. As an admin, I must be the only user with the ability to remove users.
4. As an admin I must be the only user to alocate jobs to drivers.
5. As an admin, I must be the only user to alter jobs during the pick up window


[Table of Contents](#table-of-contents)

## Stacks Used 
***
* MongoDB: noSQL database for flexibility.
* ExpressJs: back-end API.
* ReactJs: Component based design, front end development.
* NodeJs: Server-side application development.

[Table of Contents](#table-of-contents)

## Backend, Serverside
***
> Our back-end application is using node, express and mongo to store data. All the logic of the application is done in the back-end. 

> Dependencies Used: <br>
   *  axios<br>
   *  jwt-decode<br>
   *  react<br>
   *  react-collapsible<br>
   *  react-dom<br>
   *  react-router<br>
   *  react-router-dom<br>
   *  react-scripts<br>

## Front-end Display
***
> Our front-end uses react, strictly as a view to display data generated via the back-end. 

> Dependencies Used:<br>

  * body-parser<br>
  * dotenv<br>
  * express<br>
  * jsonwebtoken<br>
  * cors<br>
  * mongoose<br>
  * passport<br>
  * passport-jwt<br>
  * passport-local<br>
  * passport-local-mongoose<br>
  * nodemon<br>














