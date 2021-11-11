"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
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

*/
// get locations
app.get('/locations', function (req, res) {
    // const q = functioncall()
    res.send("locations from express and ts");
});
// get Comments
app.get('/Comments', function (req, res) {
    // const q = functioncall()
    res.send("Comments from express and ts");
});
//get images
app.get('/images', function (req, res) {
    // const q = functioncall()
    res.send("Images from express and ts");
});
// post register
app.post('/getLocations', function (req, res) {
    res.send('Hello World!');
});
// post log in
app.post('/getLocations', function (req, res) {
    res.send('Hello World!');
});
var port = 3000;
app.listen(port, function () { return console.log("Listening on PORT " + port); });
/**
// GET
function getLocations(coordinates : Coordinates , radius : number) : Array<LocationInfo>{};

function getComments(idLocation : Id, page : number) : Array<Comment>{};

function getImages(idLocation : Id) : Array<Image>{};


// POST

function register(name : Name, email : Email, password : Password) : boolean{};

function login(email : Email, password : Password) : authToken{};*/
