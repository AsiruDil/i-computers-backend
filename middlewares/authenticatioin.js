import jwt from "jsonwebtoken"
import dotenv from "dotenv"

export default function authenticateUser (req,res,next){
        const header = req.header("Authorization")
        if(header != null){
            const token =header.replace("Bearer ","")
            jwt.verify(token,process.env.JWT_SECRET,
                (error,decoded)=>{
                     if(decoded == null){
                        res.json(
                            {  
                                message:"invalid Token Please Login again"
                            }
                        )
                     }else{
                        req.user = decoded
                        next()
                     }
                }
            )

        }else{
            next()
        }
    }