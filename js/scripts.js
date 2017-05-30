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
    var message = $('#input').val();

    var messageLength = message.length;
    console.log(messageLength);

    bigKey = key + key + key + key + key + key;
    console.log(bigKey);

    var timeEnd = performance.now();
    console.log("It took: "+timeEnd - timeInit);
  }
});
