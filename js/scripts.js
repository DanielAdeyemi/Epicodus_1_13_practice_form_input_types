$(document).ready(function() {
  $("form").submit(function(event) {
    let food = $("#food").val();
    $(".alert").text(food);
    $(".output").show();
    event.preventDefault();
  });
});