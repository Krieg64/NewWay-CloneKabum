const express = require('express')
const app = express()
const flash = require('connect-flash')
const mongoose = require('mongoose')
const routes = require('./src/routes/routes')
var  cors =  require('cors')
const session =require('express-session')
const path = require('path')

app.use(session({
    secret: "back_secret",
    resave: true,
    saveUninitialized: true
}))


// app.use(flash())

app.use((req, res, next) => {
    
    next()
})

app.use(cors())

app.use(express.urlencoded({extend: true}))
app.use(express.json())

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27018/bank_prodution', { useNewUrlParser: true }).then(() => {
    console.log("Conectado ao mongo")
}).catch((err) => {
    console.log("Houve um erro" + err)
})

app.use('/', routes)
app.use('/files', express.static(path.resolve(__dirname,"src" ,"uploads")));


app.listen(8004, () => {
    console.log('server is running')
})