import { connexion } from "../db/connexion.js";
import AsyncHandler from "express-async-handler";
// get all pompistes
const getAllPompiste =async(req,res)=>{
    const allPompistesQuery = 'select * from Pompiste'
    await connexion.query(allPompistesQuery,async function(err,result){
      if(err) throw err;
      res.status(200).json(result)
    })
}

// ajouter pompiste 
const addPompiste = async(req,res)=>{
    const {nom,prénom,password}=req.body
    const ajoutPompQuery = 'insert into Pompiste (nom,prénom,password) values (?,?,?)'
    await connexion.query(ajoutPompQuery,[nom,prénom,password],async function(err,result){
        if(err) throw err 
        res.status(201).json({message:'Le pompiste à été ajouter avec succés'})
    })
}

// modifier un pompiste 
const updatePomiste =async(req,res)=>{
    const id = req.params.id
    const updatedPompiste = req.body
    let query = "UPDATE Pompiste SET ";
    let values = [];
    let updates = [];
  
    const fields = [
      "nom",
      "prénom",
      "password"
    ];
  
    for (const field of fields) {
      if (updatedPompiste[field]) {
          updates.push(`${field}=?`);
          values.push(updatedPompiste[field]);
      }
    }
  
    
    query += updates.join(", ") + " WHERE id=?";
    values.push(id);
  
  connexion.query(query, values, async (err, result) => {
    if (err) {
        return res.status(400).json({ message: err });
    }
    res.status(201).json({message:"le pompiste a été modifié avec succès !"});
})
}

// supprimé un pompiste 
const deletePompiste = AsyncHandler(async(req,res)=>{
  const {id} = req.params
  const deleteQuery = "delete from Pompiste where id=?"
  connexion.query(deleteQuery,[id],async(err,result)=>{
    if(err) throw err;
    res.status(200).json({message:'Le pompiste à été supprimé avec succés'})
  })
})
export {getAllPompiste,addPompiste,updatePomiste,deletePompiste}