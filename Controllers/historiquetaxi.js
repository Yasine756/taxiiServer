import { connexion } from '../db/connexion.js';
import asyncHandler from 'express-async-handler';

// Get historique for a specific taxi based on matricule
const getHistoriqueTaxi = asyncHandler(async (req, res) => {
  const { matricule } = req.params;
  const query = `
    SELECT id_remplissage, matricule, prix, remplir_par, date_remplisage 
    FROM Remplissage 
    WHERE matricule = ?
  `;
  connexion.query(query, [matricule], (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération de l'historique :", err);
      res.status(500).json({ error: "Erreur lors de la récupération de l'historique" });
    } else {
      res.status(200).json(results);
    }
  });
});

export { getHistoriqueTaxi };
