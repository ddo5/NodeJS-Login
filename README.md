# NodeJS-Login
This repo is for practice using NodeJS to create user login and hashing passwords.

The sole purpose of this is to demonstrate the usage of NodeJS and bcrypt, in effort to store Usernames and Passwords.

### NOTE ###
This should NOT be used in real world applications. Credentials can be accessed if hacked into. Yes, the passwords are hashed but it is possible to dycrpt them.

Proper use would include storing the users in a database of some sort.

To get started, here is an outline of a general set up.

Create Project folder 

#Init project
npm init -y (setting up environment, 'y' gives all default values for ) #Init package . json

#Install packages used for express server 
npm i express bcrypt (express is the server, bcrypt will be where we do password hashing and security)

# Install nodemon to allow restart of server without crashing the site 
npm i --save-dev nodemon (this is a dev dependency, used for development)

#create a script to start server using nodemon
# GO-TO --> package.json --> "scripts"
# add devStart --> equal to nodemon server.js

#create server.js file
#set up express here 
const express = require('express') # constant for express module
const app = express() # app for express

app.listen(3000) # listening on port 3000 (localhost) for server

# test run to make sure it is working 
npm run devStart (should do nothing but start the server) (ROUTES NOT YET SET UP)

# Create user variable for storage 
const users =  []
###NOTE###
In real world applications, you want to store this in a database
######

# Create a route 
# for getting all of our users
app.get('/users', (req,res) =>{
    res.json(users)
}) 
###NOTE###
In real world applications, you DO NOT want to set up a route that exposes user information 
######

#create request.rest file for REST requests
# in VS Code, install extension REST Client for making request directly in the IDE

# In requests.rest
GET http://localhost:3000/users
# should return an empty array of users , until added
