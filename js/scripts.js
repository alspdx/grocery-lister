$(document).ready(function() {
  var listItems = [];


  $("form#grocery-list").submit(function(event) {
    event.preventDefault();
    var newItem = $("#grocery-input").val().toUpperCase();
    var listOutput = [];
    listItems.push(newItem);
    listItems.sort();
    $("li").remove();
    listItems.forEach(function(listItem) {
      listOutput += "<li>" + listItem + "</li>";
    });
    $("#list-output").append(listOutput);
  });
});
