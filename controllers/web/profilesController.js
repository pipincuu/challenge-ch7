const { User } = require("../../models");
const { Profile } = require("../../models");

exports.index = async (req, res) => {
    const profiles = await Profile.findAll({
      order: [["firstName", "ASC"]],
      include: ["User"]
    }); 

    res.render("pages/profiles/index", {
      title: "Daftar Profile",
      profiles,
    })
}

exports.create = async (req, res) => {
    const users = await User.findAll({
        order: [["username", "ASC"]],
      })
        res.render("pages/profiles/create", {
            title: "Create Profiles",
            users,
        })
}

exports.store = async (req, res) => {
  // Database tidak dapat menerima string kosong dalam memasukkan date
  // Jadi harus dilakukan pengecekan untuk konversi string kosong jadi null
  let birthOfDate;
  if (!req.body.birthOfDate) {
    birthOfDate = null;
  } else {
    birthOfDate = req.body.birthOfDate;
  }

  const profile = await Profile.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthOfDate: req.body.birthOfDate,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    userId: req.body.userId,
  });
    res.redirect("/profiles");
}

exports.show = async (req, res) => {
  const profile = await Profile.findOne({
    where: { id: req.params.id },
    include: ["User"],
  });
    res.render("pages/profiles/show", {
      title: "Detail Profile",
      profile,
    });
}

exports.edit = async (req, res) => {
  const profile = await Profile.findOne({
    where: { id: req.params.id },
  });

  const users = await User.findAll({
    order: [["username", "ASC"]],
  });

  res.render("pages/profiles/edit", {
    title: "Update Profile",
    profile,
    users,
  });
}

exports.update = async (req, res) => {
    // Database tidak dapat menerima string kosong dalam memasukkan date
    // Jadi harus dilakukan pengecekan untuk konversi string kosong jadi null
    let birthOfDate;
    if (!req.body.birthOfDate) {
    birthOfDate = null;
    } else {
    birthOfDate = req.body.birthOfDate;
    }
  
    const profiles = await Profile.update({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    birthOfDate: req.body.birthOfDate,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    address: req.body.address,
    userId: req.body.userId,
    },
    {
      where: { id: req.params.id,
    },
  });
    res.redirect("/profiles");
}

exports.destroy = async (req, res) => {
  const profiles = Profile.destroy({
    where: {
      id: req.params.id,
    },
  });
    res.redirect("/profiles");
}



