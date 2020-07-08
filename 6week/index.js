const express = require ('express');
const app = express ();
const MongoClient = require ('mongodb').MongoClient;
const assert = require ('assert');
app.use(express.json())
app.use(express.urlencoded());

const url = "mongodb://localhost:27017";
const dbname= "cart";
let db;
MongoClient.connect(url,(err,client)=>{
    assert.equal(null,err)
    // if(err) {
     //   console.log(err)
   // }
    console.log('Connected');
    db=client.db(dbname)
});
app.get('/new',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.post('/new', (req,res)=>{
    let {cooking_time,serves_for,recipe_discreption,recipe_title}=req.body;
    console.log(req.body)
    const collection=db.collection('documents');
    collection.insertOne({cooking_time,serves_for,recipe_discreption,recipe_title},(err,result) =>{
       if(err){
           console.log(err)
           res.json({success: false, message: 'Error encountered'})
       }else
       {
           res.json({sucess:true, message: 'Recipe Added',result})
       }
    })
})
app.listen(8000,()=>console.log("Started"))