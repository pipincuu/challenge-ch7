const router = require("express").Router();
const restrict = require ('../middlewares/restrict')
const authApi = require("../controllers/api/authController");
const gameApi = require("../controllers/api/gamePlayController");

//auth api route
//register
router.post('/v1/auth/register', authApi.register);

//login
router.post('/v1/auth/login', authApi.login);

router.get('/v1/auth/whoami', restrict, authApi.whoami);

//games
router.post('/v1/games/create-room', restrict, gameApi.createRoom);
router.post('/v1/games/join-room/:id', restrict, gameApi.joinRoom);
router.post('/v1/games/play-game', restrict, gameApi.playGame);

module.exports = router;
