$(document).ready(function() {
  $("form").submit(function(event) {
    let food = $("#food").val();
    $(".output").text(food);
    $(".output").show();
    event.preventDefault();
  })
});