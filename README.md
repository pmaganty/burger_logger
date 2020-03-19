## Project: Burger Logger
## Author: Pranitha Maganty
### Description: Allows user to add and devour burgers in a fun GUI
### Github Repo Link: https://github.com/pmaganty/burger_logger
### Heroku Link: https://immense-bastion-87369.herokuapp.com/index

#### Preliminary to-do:
+ Enter "npm i" to grab all dependency libraries
+ Run .sql files from /db folder in sql server and change settings to access that server in config/connection.js file (if you want to run from terminal rather than through Heroku link)

#### How to run and play:
+ Run the server.js file using "node server.js" inside the same directory hierarchy that it exists OR simply go to Heroku link provided
+ Enter burger of choice into test box and hit submit - burger with devour button will populat on left side
+ Click "devour" button next to burger to move to right side to indicate burger has been eaten

#### File Contents:
+ server.js: contains info to connect to server
+ package.json: contains all dependencies required for application to run
+ config/
    - connection.js: contains info for connecting to sql server
    - orm.js: contains get / post / put functions for back end
+ controllers/
    - burgers_controller.js: controlls whether request will be a get / post / put and handles accordingly
+ db/
    - schema.sql: contains sql code to generate main table of burger data
    - seeds.sql: contains initial entries into burger table
+ models/
    - burger.js: takes get / put / post request from user and routes accordingly to orm
+ public/assets:
    - css/burger_style.css: contains styling for front end
    - img/burger.png: contains image of burger for front end
    - js/burger.js: contains javascript for frontend to communicate with backend
+ views/
    - layouts/main.handlebars: main handle bar html page
    - index.handlebars: contains body of html for front end in handlebar format