function outcome(food, sport, dob) {
  let sentence = "I see you were born on " + dob + ". Also looks like you woudn't mind to take some " + food + ", but it doesn't matter, because you like " + sport + "!";
  $(".alert").text(sentence);
  $("form").hide();
  $(".output").show();
}


$(document).ready(function() {
  $("form").submit(function(event) {
    let food = $("#food").val();
    let sport = $("input:radio[name=sport]:checked").val();
    let dob = $("#born").val()
    outcome(food, sport, dob);
    event.preventDefault();
  });
});