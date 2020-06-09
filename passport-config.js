const LocalStrategy = require('passport-local').Strategy;


function init(passport){
    const authenticateUser =(username,password,done) =>{
        const user = getUserByUsername(password)
        if(user == null){
            return
        }
    }
    passport.use(new LocalStrategy({usernameField:"username"}),
    authenticateUser)
    passport.serializeUser((user,done)=>{

    })
    passport.deserializeUser((id,done)=>{

    })
}