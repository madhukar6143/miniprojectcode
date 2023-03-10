const exp=require("express")
const UserApi=exp.Router();
const asyncHandler=require("express-async-handler")
const mc=require("mongodb").MongoClient
const bcryptjs=require("bcryptjs")
const jsw=require("jsonwebtoken")
UserApi.use(exp.json())
const dataBaseUrl = "mongodb+srv://madhu:madhu@clusterbackend.szevd.mongodb.net/myfirstdb?retryWrites=true&w=majority"
let dataBaseO;

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


//user login
UserApi.post("/login", asyncHandler(async (req, res) => {

    //get user credetials
    let credentials = req.body;
    //search user by username
    let user = await dataBaseObj.collection("mycollection").findOne({ email: credentials.email })
    //if user not found
    if (user === null) {
        res.send({ message: "invalid email" })
    }
    else {
        //compare the password
        let result = await bcryptjs.compare(credentials.password, user.password)
        //if not matched
        if (result === false) {
            res.send({ message: "Invalid password" })
        }
        else {
            //create a token
            let signedToken = jsw.sign({ username: credentials.username }, "abcdefghijklmnopqurstuwxyzqwerty", { expiresIn: 120 })
            //send token to client
            res.send({ message: "login success", token: signedToken, username: credentials.username, userObj: user })
        }

    }

}))

module.exports=UserApi;
