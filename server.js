// making constants for required modules 
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

// allow the app to use json 
app.use(express.json())

// local variable for stored users (NOT IDEAL)
const users =  []

// get function to retrieve the users array, containing stored users
app.get('/users', (req, res) =>{
    res.json(users)
})

// Post will make a new users, it also hashes passwords with 'salt' for 
// security puporses
app.post('/users', async (req, res) => {
    try{
        const salt =  await bcrypt.genSalt()
        const hashedPassword =  await bcrypt.hash(req.body.password , salt)
        //console.log(salt)
        //console.log(hashedPassword)

        const user = {name: req.body.name, password: hashedPassword}
        users.push(user)
        res.status(201).send()
    }
    catch{
        res.status(500).send()
    }
})

// This function is used for generating login actions.
// We will check the hashed password to verify that an EXISTING user is logging
// in with the correct password. If incorrect, it will send a Not Allowed message
// to the console
app.post('/users/login', async (req, res) =>{
    const user = users.find(user => user.name == req.body.name)
    if (user == null)
    {
        return res.status(400).send("Cannot find user")
    }
    try{
         if(await bcrypt.compare(req.body.password, user.password))
         {
             res.send('Success')
         }
         else
         {
            res.send('Not Allowed') 
         }
    }
    catch{
        res.status(500).send()
    }
})

app.listen(3000)