"use strict";

const express = require("express");
const cartitems = express.Router();
const cartList = [
  {product:"hat",price:4,quantity:1,id:0},
  {product:"bat",price:5,quantity:1,id:1},
  {product:"cat",price:10,quantity:1,id:2},
  {product:"rat",price:2,quantity:1,id:3}
]

cartitems.get("/cartitems", (req, res) => {
  res.send(cartList);
});
cartitems.post("/cartitems", (req, res) => {
  cartList.push(req.body);
  res.send(cartList);
  console.log(cartList)
});
cartitems.put("/cartitems/:id", (req, res) =>  {
  for(let i = 0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1, req.body);
      res.send(cartList);
      break;
    }
  }
});
cartitems.delete("/cartitems/:id", (req, res) => {
  for(let i = 0; i < cartList.length; i++) {
    if(cartList[i].id == req.params.id) {
      cartList.splice(i, 1);
      res.send(cartList);
      break;
    }
  }
});
module.exports = cartitems;