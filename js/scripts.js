$(document).ready(function() {
  $('#start').click(function(e) {
    e.preventDefault();
    start();
  });

  function start(){
    var timeInit = performance.now();
    var rot = $('#rot').val();
    var type = $('#type').val();
    var keyString = $('#key').val();
    var message = $('#input').val();

    var messageLength = message.length;
    console.log(messageLength);
    var bigKey;
    var keyLength = 0;
    var endLoop = false;
    if(keyString.length > 0){
      while(!endLoop){
        bigKey = bigKey+keyString;
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
