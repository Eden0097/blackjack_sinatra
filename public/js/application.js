$(document).ready(function() {
  $("form#hit_form input").click(function() {
    alerts("player hits");
    return false;
  });
});
