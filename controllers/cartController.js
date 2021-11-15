"use strict";
module.exports = function Cart(oldCart) {
  this.items = oldCart.items || {};
  this.totalQuantity = oldCart.totalQuantity || 0;
  this.totalPrice = oldCart.totalPrice || 0;

  this.getTotalQuantity = () => {
    let quantity = 0;
    for (let id in this.items) {
      quantity += parseInt(this.items[id].quantity);
    }
    return quantity;
  };
  this.getTotalPrice = () => {
    let price = 0;
    for (let id in this.items) {
      price += parseFloat(this.items[id].price);
    }
    price = parseFloat(price);
    return price;
  };
  this.add = (item, id, quantity) => {
    let storedItem = this.items[id];
    if (!storedItem) {
      this.items[id] = { item: item, quantity: 0, price: 0 };
      storedItem = this.items[id];
    }
    storedItem.item.price = parseFloat(storedItem.item.price);
    storedItem.quantity += parseInt(quantity);
    storedItem.price = parseFloat(storedItem.item.price * storedItem.quantity);
    this.totalQuantity = this.getTotalQuantity();
    this.totalPrice = this.getTotalPrice();
    return this.getCartItem(id);
  };
  this.remove = (id) => {
    let storedItem = this.items[id];
    if (storedItem) {
      delete this.items[id];
      this.totalQuantity = this.getTotalQuantity();
      this.totalPrice = this.getTotalPrice();
    }
  };
  this.update = (id, quantity) => {
    let storedItem = this.items[id];
    if (storedItem && quantity >= 1) {
      storedItem.quantity = quantity;
      storedItem.price = parseFloat(
        storedItem.item.price * storedItem.quantity
      );
      this.totalQuantity = this.getTotalQuantity();
      this.totalPrice = this.getTotalPrice();
    }
    return this.getCartItem(id);
  };
  this.empty = () => {
    this.items = {};
    this.totalPrice = 0;
    this.totalQuantity = 0;
  };
  this.generateArray = () => {
    let arr = [];
    for (let id in this.items) {
      this.items[id].item.price = parseFloat(this.items[id].item.price);
      this.items[id].price = parseFloat(this.items[id].price);
      arr.push(this.items[id]);
    }
    return arr;
  };
  this.getCart = function () {
    var cart = {
      items: this.generateArray(),
      totalQuantity: this.totalQuantity,
      totalPrice: this.totalPrice,
    };
    return cart;
  };
  this.getCartItem = (id) => {
    let cartItem = {
      items: this.items[id],
      totalQuantity: this.totalQuantity,
      totalPrice: this.totalPrice,
    };
    return cartItem;
  };
};
