//install nd importing express
const exp=require("express");
//calling the exp()
const app=exp();

//assigning port number
app.listen(3200,()=>{console.log('server is running on 3200')})

app.use(exp.json());

//import path module
const path=require('path');

//connecting FE &&  BE
app.use(exp.static(path.join(__dirname,'./dist/LFS')));

//importing mongodb
const mc=require("mongodb").MongoClient
 
var dbo;
//connecting to db
var dburl="mongodb://manoj:manoj@cluster0-shard-00-00-8bixr.mongodb.net:27017,cluster0-shard-00-01-8bixr.mongodb.net:27017,cluster0-shard-00-02-8bixr.mongodb.net:27017/<dbname>?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
mc.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true},(err,clientobj)=>
{
   if(err)
   {
       console.log("err in db connecting",err);
   }
   else
   {
       //connect to db
        dbo=clientobj.db("company");
       console.log("connected to db");
   }
})


//importing api's
const studentApp= require('./APIS/studentapi');
const adminApp=require('./APIS/adminapi');

//forward to specific path based on path
app.use('/student',studentApp);
app.use('/admin',adminApp);


