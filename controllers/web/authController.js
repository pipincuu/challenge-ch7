const { Superadmin } = require("../../models");
const passport = require("../../lib/passport");


module.exports = {
    register: async (req, res, next) => {
        try{
        // panggil static method register yg sudah dibuat
        await Superadmin.register(req.body);
        res.redirect("/login");
        } catch(err) {
            next(err);
        }
    },

    login: passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login",
        failureFlash: true,
    }),

    // whoami:(req, res) => {
    //     res.render("pages/admin/profile", req.user.dataValues, {
    //         title: "Superadmin login"
    //     });
    // },

};