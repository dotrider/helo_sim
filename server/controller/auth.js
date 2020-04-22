const bcrypt = require('bcryptjs');

module.exports = {

    register: async (req, res) => {
        const db = req.app.get('db');
        const {username, password, profile_pic} = req.body;
        // console.log('register', req.body)

        const [foundUser] = await db.auth.check_user(username);

        if(foundUser){
            return res.status(409).send('username already exist')
        }
        
        const salt = bcrypt.genSaltSync(12);
        const hash = bcrypt.hashSync(password, salt);

        const [newUser] = await db.auth.create_user([username, hash, profile_pic]) 
        req.session.user = newUser;
        res.status(201).send(req.session.user)

    },

    login: async (req, res) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        // console.log('login', req.body)

        const [foundUser] = await db.auth.check_user(username);
        if(!foundUser){
            return res.statu(404).send('Username or Password does not exist');
        }

        const authorized = await bcrypt.compareSync(password, foundUser.password);

        if(authorized){
            delete foundUser.password
            req.session.user = foundUser
            res.status(202).send(req.session.user)
        }else{
            res.status(404).send('Username or Password does not exist');
        }
    

    },

    logOut: (req, res) => {
        req.session.destroy();
        res.sendStatus(200);
    },
}