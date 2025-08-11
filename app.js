require('dotenv').config()


const express = require("express"); 
const app = express(); // Create an instance of the express app
const cookieParser = require("cookie-parser"); 
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000; 
const db = require('./db/conn')
const cors = require('cors')

const userRouter = require('./router/user-router')
const jobRouter = require('./router/job-router')
const authRouter = require('./router/auth-router')

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.get("/" , (req,res)=>{
    res.send("Hello World");
})

app.use('/api/user', userRouter)
app.use('/api/job', jobRouter)
app.use('/api/auth', authRouter)


db().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
})


