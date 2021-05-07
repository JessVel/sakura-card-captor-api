const cardModel = require("../models/card");

exports.getCards = async (req, res) => {
  try {
    const DEFAULT_PAGE = 1, DEFAULT_PAGE_SIZE = 60;

    let {page = DEFAULT_PAGE, pageSize = DEFAULT_PAGE_SIZE} = req.query;
    page = +page; pageSize = +pageSize;

    if(!page || !pageSize)
      throw new Error("Invalid page or pageSize format")
    
    const cards = await cardModel.find();

    pageSize = (pageSize > DEFAULT_PAGE_SIZE)? DEFAULT_PAGE_SIZE: pageSize;
    const start = (page - 1) * pageSize;
    const end = (start + pageSize > cards.length)? cards.length: start + pageSize;

    const data = cards.slice(start, end);

    res.json({
      data: data, 
      page: page, 
      pageSize: pageSize,
      count: data.length,
      totalCount: cards.length
    });

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