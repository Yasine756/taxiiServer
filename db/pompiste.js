import { connexion } from "./connexion.js";
const request = `create table Pompiste(
    id_pompiste int primary key auto_increment,
    nom varchar(250) ,
    prenom varchar(250),
    password varchar(255))`;
connexion.query(request,async(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('la table a été crée'+await result);
});


