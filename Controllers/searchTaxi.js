import { connexion } from "../db/connexion.js";


export default function SearchTaxi(req, res) {
    const matricule = req.params.matricule;  // Récupérer le matricule à partir de l'URL

    connexion.query('SELECT * FROM Taxi WHERE matricule = ?', [matricule], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de la base de données' + err });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Taxi non trouvé' });
        }
        res.json(results[0]);  // Envoyer les informations du taxi au client
    });
}
