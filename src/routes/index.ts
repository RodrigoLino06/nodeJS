import  { Router, Request, Response, query} from 'express'

const router = Router()


router.get('/',(req:Request,res:Response) =>{
    let idade: number = 15
    let exibirIdade: boolean = false

    if(idade >= 18){
        exibirIdade = true
    }


    res.render('pages/home',{
        nome:'Vinicius',
        exibirIdade,
        movies:[
            {title:'Cinderela Bahiana', year: 1998},
            {title: 'Rubber',year: 2010},
            {title: 'Tainá', year:2010}
        ]
    })
})



router.get('/contato',(req:Request,res:Response) =>{
    res.render('pages/contato')
})


router.get('/sobre',(req:Request, res:Response) =>{
    res.render('pages/sobre')
})


//criar uma rota chamada "NOME"

router.get('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string

    res.render('pages/nome',{
        nome
    })
})

router.get('/form',(req:Request, res:Response) =>{

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

router.get('/idade', (req:Request, res:Response) =>{
    res.render('pages/idade')
})

router.post('/idade-resultado', (req:Request, res:Response) =>{

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

router.get('/login', (req:Request, res:Response) =>{
    res.render('pages/login')
})

router.post('/bemvindo', (req:Request, res:Response) =>{
    
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

export default router