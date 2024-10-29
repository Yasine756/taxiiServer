import { connexion } from "../db/connexion.js";

export default function ModifierTaxi(req, res) {
   
    const { nom, prénom, matricule, telephone, taxiId } = req.body; // Assurez-vous que taxiId est inclus dans le corps de la requête

    // Construire la requête SQL avec des valeurs sécurisées
    const sqlQuery = `
        UPDATE taxi 
        SET nom = ?, prénom = ?, matricule = ?, telephone = ? 
        WHERE id_Taxi = ?`;

    // Exécuter la requête SQL
    connexion.query(sqlQuery, [nom, prénom, matricule, telephone, taxiId], (err, result) => {
        if (err) {
            console.error(err); // Afficher l'erreur dans la console pour le débogage
            return res.status(500).send({ message: 'Erreur lors de la modification du taxi' }); // Envoyer un message d'erreur
        }

        // Vérifier si une ligne a été modifiée
        if (result.affectedRows === 0) {
            return res.status(404).send({ message: 'Taxi non trouvé' }); // Taxi non trouvé
        }

        res.send({ message: 'Taxi modifié avec succès' });
    });
}
