const Users = require('../models/User')
// Membre :
// - loginUser()
const loginUser = (req, res) => {
    const email = req.body.email;
    const password = req.body.mot_de_passe;
    Users.findOne({ 'email': email, 'mot_de_passe': password })
        .then(user => {
            if (!user) {
                // L'utilisateur n'a pas été trouvé
                return res.status(404).json({ notFound: 'Utilisateur non trouvé' });
            }
            res.status(200).json(user)
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: 'Erreur de serveur' });
        });
}

// - registerUser()
const registerUser = (req, res) => {
    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const telephone = req.body.telephone;
    const mot_de_passe = req.body.mot_de_passe;
    const roles = req.body.roles;

    const newUser = new Users({
        nom,
        prenom,
        telephone,
        email,
        mot_de_passe,
        roles,
    })
    newUser.save()
        .then(user => {
            res.status(200).json({ message: 'utilisateur enregistré!' })
            console.log(user)
        })
        .catch(err => {
            console.error(err);
            res.status(400).json({ error: 'Erreur client' });
        });
}
// - getBasket()
// - addProductToHisBasket()

// // Bonus
// - putUser()
// - deleteUser()

//admin :
// - postProducts()
// - putProducts()
// - deleteProducts()
module.exports = { loginUser, registerUser };