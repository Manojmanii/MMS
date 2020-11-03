//creating mini express app
const exp=require("express");
const studentExpapp=exp.Router();
const multer=require('multer');

//exporting this studentExpressapp
module.exports=studentExpapp;
//body parsing
studentExpapp.use(exp.json());

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
       console.log("connected to db with studentapi");
   }
})

//multers disk storage settings
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'Files')
//     },
//     filename: function (req, file, cb) {
//         var datetimestamp = Date.now();
//         cb(null, `${new Date().getTime()}_${file.originalname}`)
//     }
// });


// upload middleware
// const upload = multer({ storage: storage });

// studentExpapp.post("/savefile", upload.single('File'), (req, res) => {
//     //console.log(req.file)
//     dbo.collection("company").insertOne(req.files, (err, data) => {
//         //console.log(data);
//         if(err)
//         {
//             console.log(err);
//         }
//         else{
//         res.send({"message": "Attendence Sheet uploaded successfully" });
//     }
//     });
// });



// const storage = multer.diskStorage(
//     {
//         destination:function(req,file,cb) 
//         {
//             cb(null,'./APIS/stdfiles');
//         },
//         filename:function(req,file,cb)
//         {
//             cb(null,file.originalname)
//         }
//     })

//     const upload=multer({storage});

//     studentExpapp.post('/savefile',upload.single("image"),(req,res)=>
//     {
//         dbo.collection("company").insertOne(req.body,(err,rslt)=>
//         {
//           if(err)
//           {
//               console.log("err in inserting",err)
//           }
//           else
//           {
//              res.send({message:"data inserted sucessfully"})
//           }
//     })
// })
    
    


//post request handler just for checking
studentExpapp.post('/register',(req,res)=>
 {    console.log("data is",req.body);
dbo.collection("company").insertOne(req.body,(err,rslt)=>
{
  if(err)
  {
      console.log("err in inserting",err)
  }
  else
  {
     res.send({message:"data inserted sucessfully"})
  }
})
})

//Get request handler from admin collection to apply here page
studentExpapp.get('/readAll',(req,res)=>
{
    dbo.collection('admin').find().toArray((err,jobarray)=>
    {
         if(err)
         {
             console.log('err in read',err);
         }
         else if(jobarray.length==0)
         {
             res.send({message:'job array is empty'})
         }
         else
         {
            res.send({message:jobarray})
         }
    })
})

//post request from student after filling student application form
studentExpapp.post('/registrationform',(req,res)=>
{    console.log(req.body)
    dbo.collection("company").insertOne(req.body,(err,rst)=>
    {
        if(err)
        {
           console.log("err in inserting std form");
        }
        else
        {
            res.send({message:'Application registered sucessfully'});
        }
    })
})

    


