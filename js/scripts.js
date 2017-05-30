$(document).ready(function() {
  $('#start').click(function(e) {
    e.preventDefault();
    start();
  });

  function start(){
    var rot = $('#rot').val();
    var type = $('#type').val();
    var key = $('#key').val();
    var input = $('#input').val();

    console.log(rot);
    console.log(type);
    console.log(key);
    console.log(input);
  }
}
