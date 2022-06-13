const { Superadmin } = require("../../models");

    exports.index = (req, res) => {
    res.render("pages/admin/login", { title: "Login Super Admin"});
    }

    exports.create = (req, res) => {
        res.render("pages/admin/create", { title: "Create User Admin"});
    }

    exports.show = async (req, res) => {
        const superadmin = await Superadmin.findAll({});
        res.render("pages/admin/index", {
            title: "Data Superadmin",
            superadmin,
        });
    }
