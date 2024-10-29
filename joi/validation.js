import joi from 'joi'

//--------- pour ajouter un taxi --------

function ValidateAjouteTaxi(obj) {
  const schema = joi.object({
    nom: joi.string().trim(),
    prenom: joi.string().trim(),
    telephone: joi.string().pattern(/^0\d{9}$/).trim().required(),
    matricule: joi.string()
      .pattern(/^\d{5}-[\u0600-\u06FF]-\d{2}$/)
      .message('Le matricule doit suivre le format 12345-أ-67, avec des tirets et une lettre arabe.')
      .trim().required(),
  });
  return schema.validate(obj);
}

// pour remplir un taxi

function ValidateRemplireTaxi(obj) {
  const schema = joi.object({
    matricule: joi.string().pattern(/^\d{5}-[\u0600-\u06FF]-\d{2}$/)
      .message('Le matricule doit suivre le format 12345-أ-67, avec des tirets et une lettre arabe.')
      .required().trim().required(),
  });
  return schema.validate(obj);
}
export default { ValidateAjouteTaxi, ValidateRemplireTaxi }
