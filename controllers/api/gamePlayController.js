const { User } = require("../../models");
const { Roomplay } = require("../../models");

exports.createRoom = (req, res) => {
    const roomPlayer = Roomplay.create({
          roomName: req.body.roomName,
        })
            .then(roomName => {
                res.status(201).json(roomName)
            }) .catch(err => {
                res.status(422).json("Tidak bisa membuat room")
            })
      }

exports.joinRoom = async (req, res) => {
    const room = req.params.id; 
    const roomPlayers = await Roomplay.findOne({
        where: { id: room },
      });

      const userId = req.user.id;

      let responseMessage = ""
      if (!roomPlayers) {
        responseMessage = "Room tidak ditemukan";
      } else {
        responseMessage = "Room berhasil ditemukan";
        if (roomPlayers.player1 == null) {
            Roomplay.update({
                player1: userId
            },
            {
              where: {
                id: room,
              },
            })
            res.json ({
                 "message": responseMessage
              })
              return true;    
        } else if (roomPlayers.player2 == null) {
            Roomplay.update({
                player2: userId
            },
            {
              where: {
                id: room,
              },
            })
            res.json ({
                 "message": responseMessage
              })
              return true; 
        } else { 
            responseMessage = "Room sudah penuh!";
            res.json ({
                 "message": responseMessage
              })
              return true;  
        }
      };

    //   res.json ({
    //     "roomPlayers": roomPlayers, 
    //      "message": responseMessage
    //   })
}