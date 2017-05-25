
$(document).ready(function() {
  $("form#wordPlay").submit(function(event) {
    var words = $("input#words").val();

    var wordArray = words.split(" ");

    var newArray = wordArray.filter(function(word) {
      return (word.length > 3)
    });

    $("#yourSentence").text(newArray.reverse().join());

    event.preventDefault();
  });
});
