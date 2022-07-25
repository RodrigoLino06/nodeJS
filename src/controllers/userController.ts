import { Request, Response } from "express"

export const nome = ((req:Request,res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })

})

export const form = ((req:Request,res:Response) =>{

    let nome1: string = req.query.nome1 as string
    let idade = req.query.idade
    let telefone = req.query.telefone
    let endereco: string = req.query.endereco as string

    let mostraMensagem: Boolean = false

    res.render('pages/form',{
        nome1, 
        idade, 
        telefone, 
        endereco,
        mostraMensagem
    })

})

export const idade = ((req:Request,res:Response) =>{

    res.render('pages/idade')

})

export const idadeResultado = ((req:Request,res:Response) =>{

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual: number = new Date().getFullYear()
        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }


    res.render('pages/idade',{
        idade,
        mostrarIdade
    })

})

export const login = ((req:Request,res:Response) =>{

    res.render('pages/login')

})

export const bemVindo = ((req:Request,res:Response) =>{

    let mostraMensagem: boolean = false
    let email: string = req.body.email as string
    let senha: string = req.body.senha as string

    if(req.body.email){
        let email: string = req.body.email as string
        let senha: string = req.body.senha as string
        mostraMensagem = true
    }

    res.render('pages/login',{
    email,
    senha,
    mostraMensagem})

})


