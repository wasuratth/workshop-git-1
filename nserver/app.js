const express = require('express')
const app = express()
const {intercepter} = require('./middleware/logMiddleware'); 
 

app.use(intercepter)
app.use(express.json());
app.use(express.static('./public/')) ; 
 
 
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

app.use('/api/user', userRoute)
app.use('/api/post', postRoute)
 
app.listen(3000)