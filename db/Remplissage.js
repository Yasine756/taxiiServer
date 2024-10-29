import { connexion } from "./connexion.js";
// const request = 
// `create table Remplissage(
//     id_remplissage int primary key auto_increment,
//    matricule varchar(250) ,
//     prix varchar(250)  not null,  
//     remplir_par varchar(50) not null,  
//     date_remplisage TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//     )`;
// connexion.query(request,async(err,result)=>{
//     if(err){
//         console.log('erreur lors de la création du la table '+err);
//         return;
//     }
//     console.log('la table a été crée'+await result);
// });



const triggerIncremnterscore = `
CREATE TRIGGER increment_score_after_remplissage
AFTER INSERT ON Remplissage
FOR EACH ROW
BEGIN
    UPDATE Taxi
    SET score = score + 1
    WHERE matricule= NEW.matricule;
END;
 `
connexion.query(triggerIncremnterscore, async (err, result) => {
    if (err) {
        console.log( err);
        return;
    }
    console.log('le trigger à été créer' + await result);
});

// const dropTriggerQuery = `
// DROP TRIGGER IF EXISTS increment_score_after_remplissage;
// `;

// connexion.query(dropTriggerQuery, async (err, result) => {
//     if (err) {
//         console.log('Erreur lors de la suppression du trigger : ' + err);
//         return;
//     }
//     console.log('Le trigger a été supprimé avec succès.');
// });

