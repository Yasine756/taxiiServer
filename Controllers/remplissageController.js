import { connexion } from '../db/connexion.js';
import asyncHandler from 'express-async-handler';

// Trouver un taxi par son matricule
const chercherTaxi = asyncHandler(async (req, res) => {
    const { matricule } = req.body; // Assuming the matricule is sent in the request body

    // Use prepared statements to prevent SQL injection
    const queryTaxi = "SELECT * FROM taxi WHERE matricule = ?";
    
    connexion.query(queryTaxi, [matricule], (err, resultat) => {
        if (err) {
            // Handle query error
            return res.status(500).json({ message: "Erreur lors de la recherche du taxi." });
        }

        if (resultat.length === 0) {
            return res.status(404).json({ message: "Taxi non trouvé." }); // Return 404 if no taxi found
        }

        res.status(200).json(resultat); // Return the taxi details
    });
});

// Remplir un taxi
const remplireTaxi = asyncHandler(async (req, res) => {
    const { matricule, prix, remplir_par } = req.body; // Added remplir_par for clarity

    // Vérifier si le matricule existe dans la table Taxi
    const checkMatriculeQuery = 'SELECT matricule FROM Taxi WHERE matricule = ?';
    
    connexion.query(checkMatriculeQuery, [matricule], (err, result) => {
        if (err) {
            return res.status(500).json({ message: "Une erreur est survenue lors de la vérification du matricule." });
        }

        // Vérifier si le matricule existe
        if (result.length === 0) {
            return res.status(400).json({ message: "Le matricule n'existe pas. L'insertion est interdite." });
        }

        // Le matricule existe, procéder à l'insertion dans la table Remplissage
        const insertRemplissageQuery = 'INSERT INTO Remplissage (matricule, prix, remplir_par) VALUES (?, ?, ?)';
        
        connexion.query(insertRemplissageQuery, [matricule, prix, remplir_par], (err, resultat) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Une erreur est survenue lors de l'insertion." });
            }
            res.status(201).json({ message: "Le prix a été ajouté avec succès !" });
        });
    });
});

export { chercherTaxi, remplireTaxi };
