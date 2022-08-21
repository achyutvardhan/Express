// installing package local 
// npm i <packagename>

//installing package globally
// npm install -g <packagename>
 
// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]
// const newItems = _.flattenDeep(items)
// console.log(newItems)
// console.log('hello people')


//..................................Express

// const express = require ('express')
// const app =  express()


// app.get('/',(req,res)=>{
//     console.log('user hit the resource')
//     res.status(200).send('hello world')
// })

// app.get(('/about'),(req,res)=>{
//     res.status(200).send("i am achyut vardhan")
// })

// app.all(('*'),(req,res)=>{
//    res.status(404).send('fuck off')
// })


// app.listen((5000),()=>{
//     console.log('server is listening on port 5000....')
// })

const express = require('express')
const path = require('path')
const app = express()
// var bodyParser = require('body-parser')


//----------------------------------------------------
// we have to create separate routes for separate pages

// app.get(('/'),(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })
//--------------------------------------------------

//body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())

//or

app.use(express.json());
app.use(express.urlencoded({ extended : false}))

//----------------------------------------------------
// set static folder
app.use(express.static(path.join(__dirname,'public')))


// getting Members
app.use('/api/members',require('./routes/api/members'))

app.listen(5000,()=>{
    console.log('listening to port 5000...')
})