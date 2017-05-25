
$(document).ready(function() {
  $("form#wordPlay").submit(function(event) {
    var words = $("input#words").val();

    var wordArray = words.split(" ");

    var newArray = [];

    wordArray.forEach(function(word) {
      if (word.length > 3) {
        newArray.push(word);
      }
    });

    $("#yourSentence").text(newArray.reverse().join());

    event.preventDefault();
  });
});
