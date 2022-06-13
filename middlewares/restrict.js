const passport = require("../lib/passport");

module.exports = passport.authenticate("jwt", {
    session:false,
}) 
//     local: (req, res, next) => {
//         if (req.isAuthenticated()) return next();
    
//         res.redirect("/login");
// },