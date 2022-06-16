const { History } = require("../../models");
const { Roomplay } = require("../../models");

exports.index = async (req, res) => {
    const histories = await History.findAll({
      include: ["Roomplay"]
    }); 

    res.render("pages/history/index", {
      title: "Log History",
      histories,
    })
}