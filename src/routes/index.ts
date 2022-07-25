import  { Router, Request, Response, query} from 'express'
import { request } from 'http'
import * as homeController from '../controllers/homeController'
import * as infoController from '../controllers/infoController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',homeController.home)
router.get('/contato',infoController.contato)
router.get('/sobre',infoController.sobre)
router.get('/nome',userController.nome)
router.get('/form',userController.form)
router.get('/idade',userController.idade)
router.post('/idade-resultado',userController.idadeResultado)
router.get('/login',userController.login)
router.post('/bemvindo',userController.bemVindo)

export default router