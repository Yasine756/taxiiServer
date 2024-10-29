import express from 'express';
import { connexion } from '../db/connexion.js'; // Connexion à la base de données

const routerPompiste = express.Router();

// Route POST pour le login
routerPompiste.post('/login', (req, res) => {
    const { prénom, password } = req.body;

    if (!prénom || !password) {
        return res.status(400).json({ message: 'Prénom et mot de passe requis' });
    }

    // Requête SQL pour trouver le pompiste par prénom
    const query = 'SELECT * FROM Pompiste WHERE prénom = ?';

    connexion.query(query, [prénom], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Erreur de serveur' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const pompiste = results[0];

        // Comparaison des mots de passe (directe dans cet exemple, à améliorer avec bcrypt)
        if (password === pompiste.password) {
            return res.status(200).json({ message: 'Connexion réussie', pompiste });
        } else {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
    });
});

// Export du routeur
export default routerPompiste;
