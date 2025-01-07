const express = require('express');
const connection = require('./config/db');
const UserRouter = require('./routes/UserRoute');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use('/user', UserRouter)

app.get('/', (req,res)=>{
    console.log('hello')
    res.send('hello')
})


app.listen(PORT,async()=>{
    try {
        await connection
        // console.log(connection)
        console.log(`App is running on port ${PORT}. DB is also connected.`)
    } catch (error) {
        console.log(error)
    }
})