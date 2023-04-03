import express from "express";

const chineseArray = ['传/傳',"磨","宿","见/見","败"]

const dir = 'hello'

const PORT = 3200 
const app = express()
app.get('/',(req,res)=>{
  res.send('I am index')
})

app.get('/'+dir,(req,res)=>{
    //res.send(chineseArray[Math.floor(Math.random()*chineseArray.length)])
    res.send('Hello!')

})

app.listen(PORT,()=>{
  console.log(`Listening on http://localhost:${PORT}/${dir}...`)
})