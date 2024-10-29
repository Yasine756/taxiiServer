import asyncHandler from "express-async-handler"
import { connexion } from "../db/connexion.js"


// la route pour les taxis qui sont presque gagnier
const getAllPrsqueGanier = asyncHandler(async (req, res) => {
    const requetSql = `select nom,prénom,matricule,score from taxi where score between  25 and  29
                       order by score DESC`
    await connexion.query(requetSql, function async(err, result) {
        if (err) throw err;
        res.status(200).json(result)
    })
})

// la route pour les taxis ils ont 30 bon
const getAllTaxisWith30Bon = asyncHandler(async (req, res) => {
    const requetSql = `select id_taxi, nom, prénom, matricule, score from taxi where score>= 30`;
    await connexion.query(requetSql, function async(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
});

// la route pour récompensé les taxis (icrementer le nbr_bénéfice par 1 et reset nbr_bon par calcule de nbr_bon - 30)
const recompenserTaxis = asyncHandler(async (req, res) => {
    const {id} = req.params
    const requetSql = "UPDATE Taxi SET score = score - 30,nbd_bénéfice= nbd_bénéfice + 1 WHERE id_taxi=? and score>=30";
    await connexion.query(requetSql,[id], function async(err, result) {
        if (err) throw err;
        res.status(200).json({ message: "Taxis rewarded successfully" });
    });
});

// la route pour les dix meilleures taxis a partir du prix de remplissage(par order croissante)
const dixMeilleuresTaxis = asyncHandler(async (req, res) => {
    const {anneeSelectione} = req.params
    const requetSql = `select prenom , t.nom ,t.matricule,T.telephone,r.prix from taxi t
                       join remplissage r ON t.id_taxi = r.id_taxi
                       where YEAR(r.date_remplisage)=?
                       order by prix DESC limit 10`;
    await connexion.query(requetSql,[anneeSelectione], function async(err, result) {
        if (err) throw err;
        res.status(200).json(result);
    });
});
export { getAllPrsqueGanier,getAllTaxisWith30Bon ,recompenserTaxis,dixMeilleuresTaxis}