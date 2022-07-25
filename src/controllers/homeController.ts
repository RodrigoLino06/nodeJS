import { Request,Response } from "express";

export const home =((req:Request,res:Response) =>{

    let age:number = 18
    let showage:boolean = false

    if(age >=18){
        showage = true
    }

    res.render('pages/home',{
        user:'uwu',
        showage,
       
    })

})