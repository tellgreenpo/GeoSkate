import {Email,Name,Password,Id,Image,authToken} from "./Src/Definitions/Types";
import Comment from "./Src/Definitions/Interfaces/Comment";
import Coordinates from "./Src/Definitions/Interfaces/Coordinates";
import LocationInfo from "./Src/Definitions/Interfaces/LocationInfo";
import LocationInfoShort from "./Src/Definitions/Interfaces/LocationInfoShort";
import Express from "express";

const app = Express();

// Tuto de ouf mec
// https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs





// const express = require('express')
// const app = express();

// Pattern matching ID for request instead of creating one for each ID
// req is js object
// Inside header info a propos
// Inside body content of request
/*
Examples use of req

The req.params object captures data based on the parameter specified in the URL.
// GET https://example.com/user/1

app.get('/:userid', (req, res) => {
  console.log(req.params.userid) // "1"
})


To access a URL query string, apply the req.query object to search, filter, and sort through data.
// GET https://example.com/search?keyword=great-white

app.get('/search', (req, res) => {
  console.log(req.query.keyword) // "great-white"
})

n this case, the GET request to the '/search' route
informs Express to match keywords in the search query to https://example.com.
The result from appending the .keyword property to the req.query object logs into the console, "great-white".



The req.body object allows you to access data in a string or JSON object from the client side.
You generally use the req.body object to receive data through POST and PUT requests in the Express server.
// POST https://example.com/login
//
//      {
//        "email": "user@example.com",
//        "password": "helloworld"
//      }

app.post('/login', (req, res) => {
  console.log(req.body.email) // "user@example.com"
  console.log(req.body.password) // "helloworld"
})

*/



// get locations
// https://example.com/searchLocation?keyword=R1
app.get('/searchLocation',(req,res)=>{
  // const q = functioncall()
  res.send("locations from express and ts");
  console.log(req.query.keyword);
});

// get Comments
app.get('/Comments',(req,res)=>{
  // const q = functioncall()
  res.send("Comments from express and ts");
});


//get images
app.get('/images',(req,res)=>{
  // const q = functioncall()
  res.send("Images from express and ts");
});


// post register
app.post('/getLocations',(req,res)=>{
  res.send('Hello World!');
});

// post log in
app.post('/getLocations',(req,res)=>{
  res.send('Hello World!');
});

const port = 3000;

app.listen(port, ()=>console.log(`Listening on PORT ${port}`));


/**
// GET
function getLocations(coordinates : Coordinates , radius : number) : Array<LocationInfo>{};

function getComments(idLocation : Id, page : number) : Array<Comment>{};

function getImages(idLocation : Id) : Array<Image>{};


// POST

function register(name : Name, email : Email, password : Password) : boolean{};

function login(email : Email, password : Password) : authToken{};*/
