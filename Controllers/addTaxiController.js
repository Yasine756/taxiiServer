import { connexion } from '../db/connexion.js';
import asyncHandler from 'express-async-handler';
import ValidateAjouteTaxi from '../joi/validation.js';

// get all taxis
const getTaxis = asyncHandler(async (req, res) => {
  const queryTaxi = "SELECT * FROM Taxi";
  await connexion.query(queryTaxi, function (err, resultat) {
    if (err) throw err;
    res.status(200).json(resultat);
  });
});

// Ajouter un Taxi 
const addTaxi = asyncHandler(async (req, res) => {
  const { nom, prenom, telephone, matricule, inscrit_par } = req.body;

  // const { error } = ValidateAjouteTaxi(req.body);
  // if (error) {
  //   res.status(400).json({ message: error.details[0].message });
  // }

  const queryTaxi = 'INSERT INTO Taxi(nom, prénom, telephone, matricule, inscrit_par) VALUES (?, ?, ?, ?, ?)';

  await connexion.query(queryTaxi, [nom, prenom, telephone, matricule, inscrit_par], function (err, resultat) {
    if (err) throw err;
    res.status(201).json({ message: "Le Taxi a été créé avec succès!" });
  });
});

export { getTaxis, addTaxi };
