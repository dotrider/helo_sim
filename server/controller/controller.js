
module.exports = {

    addPost: (req, res) => {
        const db = req.app.get('db');
        const {title, img, content} = req.body;
        const {user_id} = req.session.user;
        // console.log('addPost', req.body, user_id)

        db.add_post([title, img, content, user_id]).then(post => {
            res.status(200).json(post)
        })
    },

    getSearch: (req, res) => {
        // const db = req.app.get('db');
        // let {search} = req.query;
        // let sea = `%${search}%`
        // console.log('HITTTTTTTTTT', req.query)
        // db.search_post({sea}).then(post => {
        // res.status(200).send(post);
        // })
        
    
    },

    getPost: (req, res) => {
        const db = req.app.get('db');

        if(req.params.id){
            db.get_post(req.params.id).then(post => {
                res.status(200).json(post);
            })
        }else {
        db.get_all_post().then(post => {
            res.status(200).json(post)
        })
    }}
}