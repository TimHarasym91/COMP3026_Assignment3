$(document).ready(function() {
  $('#start').click(function(e) {
    e.preventDefault();
    start();
  });

  function start(){
    var timeInit = performance.now();
    var rot = $('#rot').val();
    var type = $('#type').val();
    var key = $('#key').val();
    var input = $('#input').val();

    var messageLength = input.length();
    console.log(messageLength);

    var timeEnd = performance.now();
    console.log("It took: "+timeEnd - timeInit);
  }
});
