import { connexion } from "./connexion.js";
const request = `create table Taxi(
    id_taxi int primary key auto_increment,
    nom varchar(250),
    prenom varchar(250),
    telephone varchar(255),
    matricule varchar(255) unique not null,
    nbr_bon int,
    nbr_benefice int,
    date_inscription datetime DEFAULT CURRENT_TIMESTAMP,
    inscrit_par varchar(255)
)`;

connexion.query(request, async (err, result) => {
    if (err) {
        console.log('Erreur lors de la création de la table : ' + err);
        return;
    }
    console.log('La table a été créée ' + await result);
});


