//creating mini express app
const exp=require("express")
const adminExpapp=exp.Router();

//exporting this studentExpressapp
module.exports=adminExpapp;

//body parsing
adminExpapp.use(exp.json());

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
       console.log("connected to db with adminapi");
   }
})


adminExpapp.post('/register',(req,res)=>
{   // console.log(req.body);
    dbo.collection('admin').insertOne(req.body,(err,rslt)=>
    {
        if(err)
        {
            console.log("err in jobform",err)
        }
        else
        {
            res.send({message:"JobForm posted sucessfully"})
        }
    })
})



adminExpapp.get('/readAll',(req,res)=>
{
    dbo.collection('company').find().toArray((err,stdforms)=>
    {
         if(err)
         {
             console.log('err in read',err);
         }
         else if(stdforms.length==0)
         {
             res.send({message:'stdforms array is empty'})
         }
         else
         {
            res.send({message:stdforms})
         }
    })
})