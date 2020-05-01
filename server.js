const express = require ('express')

const app  = express()
const date = 10
console.log(date)
const check = ()=> (date > 8 && date < 17 ) ? true :false

app.use(isOpen = (req,res,next)=>
{
    check() ? next()  : res.send("<h1>Our office is not open now<h1>")
} )

app.use(express.static(__dirname + '/public/'))
   


app.listen(3000,(err)=>{
   if(err) 
   console.log((" server not running "))
   else
   console.log("running well ")
})