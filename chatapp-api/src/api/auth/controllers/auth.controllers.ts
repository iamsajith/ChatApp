import { Service } from "typedi";
import { Request, Response } from "express";
import { AuthService } from "../services/auth.services";


@Service()
export class AuthController{
 constructor(private authService:AuthService){}
 AuthHandler =async (req:Request,res:Response) => {
  try {
   console.log("Success")
   const response = await this.authService.SaveUser(req);
   return res.status(201).json({
    status:201,
    message:"New User is Created",
    data:response
   })

   
  } catch (error:any) {
   return res.status(201).json({
    status:201,
    error:"Error",
    message:error.message
   })
   
  }
  
 }
}



