$(document).ready(function() {
  $("#regular").click(function() {
    $("#walrus-showing").toggle();
  });
  $("#fade").click(function() {
    $("#walrus-showing").fadeToggle();
  });
  $("#slide").click(function() {
    $("#walrus-showing").slideToggle();
  });
});
