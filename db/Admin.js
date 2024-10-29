import { connexion } from "./connexion.js";
const request = `create table Admin(
    id int primary key auto_increment,
    nom varchar(250) not null,
    prénom varchar(250)  not null,
    password varchar(255))`;
connexion.query(request,async(err,result)=>{
    if(err){
        console.log('erreur lors de la création du la table ');
        return;
    }
    console.log('la table a été crée'+await result);
});
