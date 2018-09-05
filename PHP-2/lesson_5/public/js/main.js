$(document).ready(function () {
  $('#buyme').on('click', function () {
    var id_good = $(this).attr("class").substr(5);

    $.ajax({
      url: "/order/add/",
      type: "POST",
      data: {
        id_good: id_good,
        quantity: 1
      },
      error: function (error) {
        alert("Что-то пошло не так...");
        console.log(error);
      },
      success: function (answer) {
        alert("Товар добавлен в корзину!");
      },
      dataType: "json"
    })
  });
});
