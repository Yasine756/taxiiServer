import  {connexion} from '../db/connexion.js'
import  asyncHandler from 'express-async-handler'

const consultationTaxi = asyncHandler(async (req, res) => {
    const { matricule} = req.query;
    console.log(matricule)

    // Vérifier si le matricule existe dans la table Taxi
    const checkMatriculeQuery = 'SELECT matricule,score,nbd_bénéfice FROM taxi WHERE matricule = ?';
    
    connexion.query(checkMatriculeQuery, [matricule], (err, result) => {
        if (err) {
            console.log(err)
            return res.status(500).json({ message: "Une erreur est survenue lors de la vérification du matricule." });
       
        
        }

        // Vérifier si le matricule existe
        if (result.length === 0) {
            return res.status(400).json(result);
        }else{
            return res.status(200).json(result)
        }

    });
});

export {consultationTaxi}