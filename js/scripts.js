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

    var endLoop = false;
    if(key.length > 0){
      while(!endLoop){
        bigKey = bigKey.concat(key);
        keyLength = bigKey.length;
        if(keyLength >= messageLength){
          endLoop = true;
        }
      }
    }

    var trimmedKey = bigKey.substring(0, messageLength);
    console.log(trimmedKey);

    var timeEnd = performance.now();
    var totalTime = timeEnd - timeInit;
    console.log("It took: "+ totalTime);
  }
});
