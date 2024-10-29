import { connexion } from "../db/connexion.js"; // Assurez-vous que le chemin est correct

export default function AllTaxis(req, res) {
    const sql = "SELECT * FROM taxi";
    connexion.query(sql, (err, result) => {
        if (err) {
            console.error('Erreur lors de la requête SQL:', err);
            return res.status(500).send('Erreur lors de l\'accès aux données des taxis');
        }
        res.status(200).send(result);
        console.table(result)
    });
}
