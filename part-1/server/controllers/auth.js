const bcrypt = require('bcryptjs');
const users = [];

module.exports = {
    login: (req, res) => {
      console.log('Logging In User');
      console.log(req.body);
      const { username, password } = req.body;

      for (let i = 0; i < users.length; i++) {
        const existingPassword = bcrypt.compareSync(password, users[i].passwordHash);
        if (users[i].username === username && existingPassword) {
          const user = users[i]; 
          delete user.passwordHash;
          res.status(200).send(user);
          console.log(user);
        }
      }
      // res.status(400).send("User not found.");
    },

    register: (req, res) => {
        console.log('Registering User');
        const { username, password, email, firstName, lastName, } = req.body;


        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const newUser = { username, passwordHash, email, firstName, lastName };

        console.log(newUser);
        users.push(newUser);
        res.status(200).send(newUser);        
        
        // console.log(req.body);
        // users.push(req.body);
        // res.status(200).send(req.body);
    }
}