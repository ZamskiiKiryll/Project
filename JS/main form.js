$(document).ready(function () {
  $("#form").on("submit", function (e) {
    if (Valid()) {
      e.preventDefault();
    }
    function Valid() {
      $(".error", ".err").remove();

      var first_name = $("#first_name").val();
      var last_name = $("#last_name").val();
      var email = $("#email").val();
      var password = $("#password").val();
      var select = $("#selectHeroes").val();
      var message = $("#textMes").val();

      if (first_name.length < 1) {
        var tr_name = true;
        $("#first_name")
          .after('<span class="error">Поле не заполнено</span>')
          .addClass("err");
      }
      $("#first_name").toggleClass("error", "err", tr_name);
      if (last_name.length < 1) {
        var tr_last_name = true;
        $("#last_name")
          .after('<span class="error">Поле не заполнено</span>')
          .addClass("err");
      }
      $("#last_name").toggleClass("error", "err", tr_last_name);
      if (password.length < 10) {
        var tr_pass = true;
        $("#password")
          .after(
            '<span class="error">Пароль доложен содержать не менее 10 символов</span>'
          )
          .addClass("err");
      }
      $("#password").toggleClass("error", "err", tr_pass);
      if (message.length < 1) {
        var tr_mess = true;
        $("#textMes")
          .after('<span class="error">Поле не заполнено</span>')
          .addClass("err");
      }
      $("#textMes").toggleClass("error", "err", tr_mess);
      if (select === "") {
        var tr_sel = true;
        $("#selectHeroes")
          .after('<span class="error">Выберите героя</span>')
          .addClass("err");
      }
      $("#selectHeroes").toggleClass("error", "err", tr_sel);
      return tr_name || tr_last_name || tr_pass || tr_mess || tr_sel;
    }
  });
});
