$(document).ready(() => {
  $(".add-to-cart").on("click", addToCart);
  $(".delete-btn").on("click", deleteProduct);
  $(".confirm-order-btn").on("click", updateOrderConfirm);
});

function addToCart() {
  var id = $(this).data("id");
  console.log("this", this);
  var quantity = 1;
  $.ajax({
    url: "/cart",
    type: "POST",
    data: {
      id,
      quantity,
    },
    success: function (result) {
      $("#cart-badge").html(result.totalQuantity);
    },
  });
}
function updateCart(id, quantity) {
  if (quantity == 0) {
    removeCartItem(id);
  } else {
    updateCartItem(id, quantity);
  }
}
function removeCartItem(id) {
  $.ajax({
    url: "/cart",
    type: "DELETE",
    data: {
      id,
    },
    success: function (result) {
      $("#cart-badge").html(result.totalQuantity);
      $("#totalPrice").html(result.totalPrice);
      $(`#item${id}`).remove();
    },
  });
}
function updateCartItem(id, quantity) {
  $.ajax({
    url: "/cart",
    type: "PUT",
    data: {
      id,
      quantity,
    },
    success: function (result) {
      console.log("result", result);
      $("#cart-badge").html(result.totalQuantity);
      $("#totalPrice").html(result.totalPrice);
      $(`#price${id}`).html(result.items.price);
    },
  });
}
$(".dec-btn").click(function () {
  var siblings = $(this).siblings("input");
  var id = $(this).data("id");
  if (parseInt(siblings.val(), 10) >= 1) {
    siblings.val(parseInt(siblings.val(), 10) - 1);
    var quantity = parseInt(siblings.val(), 10);
    updateCart(id, quantity);
  }
});

$(".inc-btn").click(function () {
  var siblings = $(this).siblings("input");
  var id = $(this).data("id");
  siblings.val(parseInt(siblings.val(), 10) + 1);
  var quantity = parseInt(siblings.val(), 10);
  updateCart(id, quantity);
});
$(".clear").click(function () {
  var id = $(this).data("id");
  updateCart(id, 0);
});
function deleteProduct() {
  var id = $(this).data("id");
  $.ajax({
    url: "/admin/delete-product",
    type: "DELETE",
    data: {
      id,
    },
    success: function (result) {
      $(`#product${id}`).remove();
    },
  });
}
function updateOrderConfirm() {
  var id = $(this).data("id");
  console.log(this);
  $.ajax({
    url: "/admin/update-confirm-order",
    type: "PUT",
    data: {
      id,
    },
    success: function (result) {
      console.log("result", result);
      $(`#status${id}`).html(result.StatusOrder.status);
      $(`#status${id}`).attr("class", result.StatusOrder.status);
      $(`#btn-show-${id}`).remove();
    },
  });
}
