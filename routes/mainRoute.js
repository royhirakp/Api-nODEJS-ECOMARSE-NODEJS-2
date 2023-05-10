const express = require("express");
const route = express.Router();

let arr = [];
route.get("/products", (req, res) => {
  res.status(200).json({
    data: arr,
  });
});

route.get("/products/:id", (req, res) => {
  let id = req.params.id;
  let resdata = arr.find((e) => e.id == id);
  if (!resdata) {
    res.status(400).json({ satatus: "id dosenot exist" });
  } else {
    res.status(200).json({
      data: resdata,
    });
  }
});

route.put("/products/:id", (req, res) => {
  let updatedata = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  };
  let temp = false;
  arr.map((data, indx) => {
    if (data.id == req.params.id) {
      temp = true;
      console.log(data.id, indx, "dataid , index");
      updatedata.id = data.id;
      arr[indx] = updatedata;
      res.json({
        status: "updated ",
      });
      // break;
    }
  });
  if (!temp) {
    res.status(404).json({
      status: "id not found",
    });
  }
});

route.delete("/products/:id", (req, res) => {
  // let temp = false;
  let ind = null;
  arr.map((data, indx) => {
    if (data.id == req.params.id) {
      // temp = true;
      ind = indx;
      arr.splice(indx, 1);
      // break;
    }
  });
  if (ind === null) {
    res.status(404).json({
      status: "id not founded",
    });
  } else {
    arr.slice(ind, 1);
    res.json({
      satatus: "sucessfull deleted",
    });
  }
});

route.post("/products", (req, res) => {
  let { id, name, description, price, category } = req.body;
  price = parseFloat(price);

  let obj = {
    id: req.body.id,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
  };
  arr.push(obj);
  res.status(201).json({
    status: "data created",
  });
});

module.exports = route;
