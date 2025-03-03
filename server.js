const mongoose=require('mongoose');
const express=require('express');

const app=express();
app.use(express.json());
const Port=3009;

app.get('/',(req,res)=>{
    res.send("hello");
})
app.listen(Port,()=>{
    console.log(`http:localhost:${Port}`);
    
})