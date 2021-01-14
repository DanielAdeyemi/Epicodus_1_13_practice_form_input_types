$(document).ready(function() {
  $("form").submit(function(event) {
    let food = $("#food").val();
    let sport = $("input:radio[name=sport]:checked").val();
    $(".alert").text(sport);
    $(".output").show();
    event.preventDefault();
  });
});