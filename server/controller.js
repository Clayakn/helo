const numOfSaltRounds = 12;
const bcrypt = require('bcrypt');

module.exports = {
    register: (req, res) => {
        const { username, password } = req.body 
        bcrypt.hash(password, numOfSaltRounds).then(hashedPassword => {
        req.app.get('db').create_user([username, hashedPassword, `https://robohash.org/${username}`])
        .then(newUser => {
            console.log(newUser)
            req.session.user = { username };
            res.json({
                username: newUser[0].username,
                profile: newUser[0].profile_pic,
                userId: newUser[0].id  
            })
            }).catch(error => {
                console.log('Endpoint error with createUser', error)
                res.status(500).json({message: 'Error on the server'})
        })   
        })
    },
    login: (req, res) => {
        const { username, password } = req.body 
        req.app.get('db').read_user([username]).then(users => {
            if (users.length) {
                bcrypt.compare(password, users[0].password).then(passwordsMatched => {
                  if (passwordsMatched) {
                    req.session.user = { username: users[0].username };
                    res.json({
                        username: users[0].username,
                        profile: users[0].profile_pic,
                        userId: users[0].id  
                    });
                  } else {
                    res.status(403).json({ message: 'Wrong password' })
                  }
                })
              } else {
                res.status(403).json({ message: "That user is not registered" })
              }
        })
    },
    readAllPosts: (req, res) => {
        const { userposts, search } = req.query
        const { userid } = req.params
        if (userposts && search) {
            req.app.get('db').read_posts_search_user([search])
            .then(posts => {
                console.log('posts1',posts)
                res.status(200).json(posts)})
            .catch(error => {
                console.log('Endpoint Error on readAll U S', error)
                res.status(500).json({message: 'Error on the server'})
            })
        }
        else if (!userposts && !search) {
            req.app.get('db').read_posts_nosearch_nouser([userid])
            .then(posts => {
                console.log('posts2',posts)
                res.status(200).json(posts)})
            .catch(error => {
                console.log('Endpoint Error on readAll NoU NoS', error)
                res.status(500).json({message: 'Error on the server'})
            })
        }
        else if (!userposts && search) {
            req.app.get('db').read_posts_search_nouser([userid, search])
            .then(posts => {
                console.log('posts3',posts)
                res.status(200).json(posts)})
            .catch(error => {
                console.log('Endpoint Error on readAll NoU S', error)
                res.status(500).json({message: 'Error on the server'})
            })
        }
            
        else if (userposts && !search) {
            req.app.get('db').read_posts_nosearch_user()
            .then(posts => {
                console.log('posts4',posts)
                res.status(200).json(posts)})
            .catch(error => {
                console.log('Endpoint Error on readAll U NoS', error)
                res.status(500).json({message: 'Error on the server'})
            })
        }
    },
}
 