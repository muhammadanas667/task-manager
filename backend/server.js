require ('dotenv'). config()
const express = require('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const taskRoutes = require('./routes/tasks')

const app = express()
const port = process.env.PORT || 5000    //".env.port || 5000 " means use env.port, or default to 5000 if not found.
mongoose.connect(process.env.MONGO_URI).then(()=> console.log("MongoDB is connected"))
.catch((err)=> console.log("MongoDB is not connected", err))

app.use(express.json())
app.use(cors())
app.use('/api/tasks', taskRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})