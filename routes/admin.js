import { getAllPrsqueGanier, getAllTaxisWith30Bon, recompenserTaxis, dixMeilleuresTaxis } from "../controllers/consulterTaxis.js";
import express from "express";
const adminRoute = express.Router()

adminRoute.get('/allPresqueGanier', getAllPrsqueGanier)
adminRoute.get('/bonComplete', getAllTaxisWith30Bon)
adminRoute.put('/recompenserTaxis/:id', recompenserTaxis)
adminRoute.get('/dixMeilleuresTaxis/:anneeSelectione', dixMeilleuresTaxis)
export default adminRoute