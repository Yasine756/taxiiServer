import express from 'express'
const routerTaxi = express.Router()
import {addTaxi,getTaxis} from '../controllers/AddTaxiController.js'
import {chercherTaxi,remplireTaxi} from '../controllers/remplissageController.js'
import {consultationTaxi} from '../controllers/consultation.js'
import  AllTaxis from '../Controllers/AllTaxis.js'
import DeleteTaxi from '../Controllers/deleteTaxi.js'
import OneTaxi from '../Controllers/GetTaxi.js'
import SearchTaxi from '../Controllers/searchTaxi.js'
import ModifierTaxi from '../Controllers/modifierTaxi.js'
import NouveauxTaxis from '../Controllers/nouveauTaxi.js'
import { getHistoriqueTaxi } from '../Controllers/historiquetaxi.js'

// ----- route pour ajouter taxi ---------
routerTaxi.post('/addTaxi', addTaxi)
routerTaxi.get('/', getTaxis)
routerTaxi.get('/remplissage', chercherTaxi)
routerTaxi.post('/remplissage', remplireTaxi)
routerTaxi.get('/consultation', consultationTaxi)
routerTaxi.get('/infoTaxi/:matricule', SearchTaxi)
routerTaxi.get('/nouveauTaxi', NouveauxTaxis)
routerTaxi.put('/modifierTaxi',ModifierTaxi)


// ----- route pour ajouter taxi ---------
routerTaxi.post('/addTaxi', addTaxi)
routerTaxi.get('/getTaxis',AllTaxis)
routerTaxi.get('/getTaxi/:id_taxi', OneTaxi);
routerTaxi.get('/SearcheTaxi/:matricule', SearchTaxi);
routerTaxi.get('/historiqueTaxi/:matricule', getHistoriqueTaxi);
routerTaxi.delete('/deleteTaxi/:id',DeleteTaxi);

export default routerTaxi
