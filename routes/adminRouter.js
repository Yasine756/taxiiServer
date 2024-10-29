import express from 'express'; 
import { connexion } from '../db/connexion.js'; // Connexion à la base de données

const routerAdmin = express.Router();

// Route POST pour le login
routerAdmin.post('/login', (req, res) => {
    const { prénom, password } = req.body;

    if (!prénom || !password) {
        return res.status(400).json({ message: 'Prénom et mot de passe requis' });
    }

    const query = 'SELECT * FROM Admin WHERE prénom = ?';

    connexion.query(query, [prénom], (err, results) => {
        if (err) {
            console.error(err); // Log de l'erreur côté serveur pour le débogage
            return res.status(500).json({ message: 'Erreur de serveur interne' });
        }

        if (results.length === 0) {
            return res.status(401).json({ message: 'Utilisateur non trouvé' });
        }

        const admin = results[0];

        if (password === admin.password) {
            return res.status(200).json({ message: 'Connexion réussie', admin });
        } else {
            return res.status(401).json({ message: 'Mot de passe incorrect' });
        }
    });
});


// Export du routeur
export default routerAdmin;
