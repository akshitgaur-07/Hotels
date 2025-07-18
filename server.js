// ******************* ARROW FUNCTIONS ******************************************

// var add = (a,b) => a + b;

// let result = add(15, 7);
// console.log(result)





// ****************** CORE MODULES *************************************************

// var fs = require('fs');
// var os = require('os');

// let user = os.userInfo();
// console.log(user);

// fs.appendFile('greeting.txt', "Hi " + user.username + "!\n", () => console.log("File is created."))


// console.log(os);
// console.log(fs);





// ************************* IMPORT A FILE **********************************************

// var notes = require('./notes.js');
// console.log("Server file is loaded");

// console.log(notes.age);

// let result = notes.addNumber(23, 30);
// console.log(result);






// ************************* LOWDASH PACKAGE **********************************************

// var _ = require('lodash');

// const arr = ['person', 'person', 1, 1, 2, 2, '2', "akshit"];

// let filter = _.uniq(arr);
// console.log(filter);





// ************************** JSON TO OBJECT AND OBJECT TO JSON ******************************

// const jsonString = '{ "name" : "Akshit", "age" : "22", "City" : "Dhampur" }'
// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject.name);


// const object = {
//   name : "Akshit",
//   age : 22,
//   city : "Dhampur"
// }
// const jsonStringified = JSON.stringify(object);
// console.log(jsonStringified);



// ********************** SERVER CREATION *****************************************

const express = require('express');
const app = express();

const db = require('./db');

const bodyparser = require('body-parser');
app.use(bodyparser.json()); // it stores in req.body


app.get('/', (req, res) => {
    res.send("Hello Sir, Welcome to our hotel.");
});


//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

//Use the routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);



app.listen(3000, () => {
    console.log('Listening on port 3000');
});