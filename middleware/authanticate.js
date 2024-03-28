import jwt from "jsonwebtoken";
import User from "../models/userschema.js";
const secretKey=process.env.KEY;;

const athenticate = async(req,res,next)=>{
    try {
        console.log(  "gammu ");
        console.log(req + "gammu ");
        const token = req.cookies.bazar;
       console.log(token + "gammu ");
        const verifytoken = jwt.verify(token,secretKey);
        console.log(verifytoken + "gammu ");

        const rootuser= await User.findOne({_id:verifytoken._id,"tokens.token":token})
        console.log(rootuser);
        if(!rootuser){
            throw new Error("user not found");
        }
        req.token=token;
        req.rootuser=rootuser;
        req.userID=rootuser._id;
        next();

    } catch (error) {
        res.status(401).send("unautherized:no token provide")
        console.log(error);

    }
}


export default athenticate;
