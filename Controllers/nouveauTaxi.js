import { connexion } from "../db/connexion.js";
import moment from "moment"; // Assurez-vous d'installer moment.js

export default function NouveauxTaxis(req, res) {
    // Définir les dates de début et de fin pour hier
    const debutHier = moment().subtract(1, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'); // Début d'hier
    const finHier = moment().subtract(1, 'days').endOf('day').format('YYYY-MM-DD HH:mm:ss'); // Fin d'hier

    // Effectuer la requête pour récupérer les taxis inscrits hier
    connexion.query(
        "SELECT * FROM Taxi WHERE date_inscription BETWEEN '2024-10-21 00:00:00' AND '2024-10-21 23:59:59'",
        (err, results) => {
            if (err) {
                return res.status(500).json({ error: 'Erreur de la base de données: ' + err });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Aucun taxi trouvé' });
            }
            res.json(results);  // Envoyer toutes les informations des nouveaux taxis au client
        }
    );
}
