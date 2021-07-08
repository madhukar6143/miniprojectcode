const exp=require("express")
const UserApi=exp.Router();
const asyncHandler=require("express-async-handler")
const mc=require("mongodb").MongoClient
const bcryptjs=require("bcryptjs")
const jsw=require("jsonwebtoken")
UserApi.use(exp.json())
const dataBaseUrl = process.env.DATABASEURL
let dataBaseObj;

//connecting data base
mc.connect(dataBaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>
{
    if(err)
    {
        console.log("err in mongodb connection",err)
    }
    else
    {
        dataBaseObj=client.db("myfirstdb")
        console.log("connected to database")
    }

})



//to get users 

UserApi.get("/getusers",asyncHandler(async(req,res)=>{
  let userList= await dataBaseObj.collection("mycollection").find().toArray()
    res.send({message:userList})
}))


//to get users with username
UserApi.get("/getusers/:username",asyncHandler(async(req,res)=>
{
    let un=req.params.username
   let userObj= await dataBaseObj.collection("mycollection").findOne({username:un})
    if(userObj==null)
    res.send({message:"user not existed"})
    else
    res.send({message:userObj})
}))

// to create users
 UserApi.post("/createuser",asyncHandler(async(req,res)=>
 {
    let newUser=req.body;
    let user =await dataBaseObj.collection("mycollection").findOne({email:newUser.email})
    if(user!==null)
    {
        console.log("already exist")
        res.send({message:"user already existed"})
    }
    else
    {
        let hashedpassword =await bcryptjs.hash(newUser.password,6)
        newUser.password=hashedpassword;
        await dataBaseObj.collection("mycollection").insertOne(newUser)
        res.send({message:"user created"})
    }
}
))



module.exports=UserApi;