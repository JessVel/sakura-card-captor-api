const cardModel = require("../models/card");

exports.getCards = async (req, res) => {
  try {
    const cards = await cardModel.find();
    res.json(cards);
    console.log(cards);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.getCard = async (req, res) => {
  try {
    {
      const card = await cardModel.findById(req.params.id);
      res.json(card);
      console.log(card);
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.createCard = async (req, res) => {
  try {
    const card = new cardModel(req.body);
    card.save();
    res.json({ card });
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
};

exports.editCard = async (req, res) =>{
  try{

  }catch(error){
    console.log(error);
    res.status(400).json({ msg: "Hubo un error" });
  }
}