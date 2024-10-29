import { connexion } from "../db/connexion.js";


export default function OneTaxi(req, res) {
    const id_taxi = req.params.id_taxi;  // Utiliser req.params pour accéder au paramètre de chemin

    connexion.query('SELECT * FROM Taxi WHERE id_Taxi = ?', [id_taxi], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Erreur de la base de données'+err });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Taxi non trouvé' });
        }
        res.json(results[0]);  // Envoyer les informations du taxi au client
    });
}
