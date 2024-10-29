import { connexion } from "../db/connexion.js";



export default function DeleteTaxi(req, res){
   
        const taxiId = req.params.id;
        const sqlQuery = 'DELETE FROM Taxi WHERE id_Taxi = ?';
    
        connexion.query(sqlQuery, [taxiId], (err, result) => {
            if (err) throw err;
            res.send('Taxi supprimé avec succès');
        });
  
}