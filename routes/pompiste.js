import express from 'express'
const  routerPop =express.Router()
import {getAllPompiste,addPompiste,updatePomiste,deletePompiste} from '../controllers/CRUDPompiste.js'

routerPop.get('/',getAllPompiste)
routerPop.post('/addPompiste',addPompiste)
routerPop.put('/updatePompiste/:id',updatePomiste)
routerPop.delete('/deletePompiste/:id',deletePompiste)
export default routerPop