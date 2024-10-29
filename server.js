import express from 'express';
import dotenv from 'dotenv';
import routerPompiste from './routes/pompisteRouter.js';
import { connexion } from './db/connexion.js';
import routerTaxi from './routes/taxi.js';
import routerPop from './routes/pompiste.js';
import cors from 'cors';
import routerAdmin from './routes/adminRouter.js';
import adminRoute from './routes/admin.js';



dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
}));

// Routes pour les pompistes
app.use('/pompistes', routerPompiste);
app.use('/pompistes', routerPop);
app.use('/',routerTaxi)

app.use('/taxis', routerTaxi)

app.use('/admin', routerAdmin);
app.use('/admin', adminRoute);


// Utilisez le port défini dans .env ou par défaut 7000
const port = process.env.PORT || 7000; // Remarque : PORT, non "port"

// Démarrer le serveur en écoutant sur le port spécifié
app.listen(port, '0.0.0.0', () => {
  console.log(`Serveur démarré sur le port ${port}`);
});

app.get('/', (req, res) => {
  res.send('bienvenue dans l app')
})