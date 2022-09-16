import { Express, Request, Response } from "express";
import { AuthController } from "./api/auth/controllers/auth.controllers";
import Container from "typedi";


const routes = (app:Express)=>{
 const authController = Container.get(AuthController)

 app.post('/register',authController.AuthHandler)

}

export default routes