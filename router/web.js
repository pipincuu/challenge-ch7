const router = require("express").Router();
const pagesController = require("../controllers/web/pagesController");
const usersController = require("../controllers/web/usersController");
const profilesController = require("../controllers/web/profilesController");
const adminController = require("../controllers/web/adminController");
const authController = require("../controllers/web/authController");
// const restrict = require("../middlewares/restrict");

// router user page
router.get("/", pagesController.home);
router.get("/users", usersController.index);
router.get("/users/create", usersController.create);
router.post("/users", usersController.store);
router.get("/users/:id/edit", usersController.edit);
router.put("/users/:id", usersController.update);
router.delete("/users/:id", usersController.destroy);

//router profile page
router.get("/profiles", profilesController.index);
router.get("/profiles/create", profilesController.create);
router.post("/profiles", profilesController.store);
router.get("/profiles/:id", profilesController.show);
router.get("/profiles/:id/edit", profilesController.edit);
router.put("/profiles/:id", profilesController.update);
router.delete("/profiles/:id", profilesController.destroy);


//router super admin
router.get("/login", adminController.index);
router.get("/admin", adminController.show);
router.get("/admin/create", adminController.create);
router.post("/admin", authController.register);
router.post("/login", authController.login);
// router.get("/whoami", restrict, authController.whoami);



module.exports = router;