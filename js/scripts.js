$(document).ready(function() {
  $("form").submit(function(event) {
    let food = $("#food").val();
    let sport = $("input:radio[name=sport]:checked").val();
    let dob = $("#born").val()
    $(".alert").text(dob);
    $(".output").show();
    event.preventDefault();
  });
});