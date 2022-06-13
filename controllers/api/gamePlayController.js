const { User } = require("../../models");
const { Roomgame } = require("../../models");

exports.createRoom = (req, res) => {
    const userid = req.user.id;
    const userPlayer = User.findOne({
        where : { id: userid }
    })
    const roomPlayer = Roomgame.create({
          roomName: req.body.roomName,
        })
            .then(roomName => {
                res.status(201).json(roomName)
            }) .catch(err => {
                res.status(422).json("Tidak bisa membuat room")
            })
      }

exports.joinRoom = async (req, res) => {
    const room = req.body.id; 
    const roomPlayers = await Roomgame.findOne({
        where: { id: room },
      });

}