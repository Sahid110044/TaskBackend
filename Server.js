const express = require('express')
const cors = require('cors')
const TaskRouter = require('./Routes/TaskRouter.js')
const bodyParser = require('body-parser')
require('dotenv').config()
// require('../Models/db.js')
require('./Models/db.js')


const app = express()
const PORT =  process.env.PORT || 3001;

app.use(bodyParser.json())
app.use(cors())
app.use('/', TaskRouter)



// module.exports.handler = serverless(app);
app.listen(PORT, ()=>{
    console.log(`app is running on port:${PORT}`)
})