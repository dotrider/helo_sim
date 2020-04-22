
module.exports = {

    addPost: (req, res) => {
        const db = req.app.get('db');
        const {title, img, content} = req.body;
        const {user_id} = req.session.user;
        // console.log('addPost', req.body, user_id)

        db.add_post([title, img, content, user_id]).then(post => {
            res.status(200).json(post)
        })
    }
}