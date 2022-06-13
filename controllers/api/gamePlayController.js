const { User } = require("../../models");
const { Roomgame } = require("../../models");

exports.createRoom = async (req, res) => {
    // const userPlayer = await User.findOne({
    //     where: { id: req.params.username}
    // })
    const roomPlayer = Roomgame.create({
    roomName: req.body.roomName,
        })

        try {
            res.status(201).json(roomPlayer)
        } catch (err) {
            res.status(422).json("Tidak bisa membuat game room");
        }
    };