import mysql from 'mysql'

export const connexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Taxi'    
})
//script pour creer la base de données 
// connexion.connect((err)=>{
//         if(err){
//             console.log('conexion échouée avec la base de données'+err);
//             return;
//         }
//         connexion.query('create database Taxi',async(err,result)=>{
//             if(err){
//                 console.log('requete n a pas executé '+err);
//                 return;
//             }
//             console.log('requete bien executé'+result);
//         })
// })


connexion.connect((err)=>{
    if(err){
        console.log('cannot connected with databse '+err);
        return;
    }
    
    console.log('connexion succefully with database ');
})