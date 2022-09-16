import { Request } from "express";
import { Service } from "typedi";
import Users,{ AuthDocument } from "../../../model/auth.model";
import { sendMail } from "../../../services/send-email.service";

@Service()
export class AuthService{
 constructor(private auth:AuthDocument){}
SaveUser = async (req:Request)=>{
 const randomPin = Math.floor(100000 + Math.random() * 900000);
  const user = req.body
  const Userdoc =new Users({
 username:user.data.username,
 password:randomPin,
 email:user.data.email,
 image:user.image
  })
 await Userdoc.save()
 sendMail(user.data.email,randomPin,"Account Created",`${randomPin}`)
}

}
