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
    var alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    var encryptedMessage = ' ';
    var messageLength = message.length;
    var bigKey = keyString;
    var keyLength = 0;
    var endLoop = false;
    if(keyString.length > 0){
      while(!endLoop){
        bigKey = bigKey + keyString;
        keyLength = bigKey.length;
        if(keyLength >= messageLength){
          endLoop = true;
        }
      }
    }
    var newIndex;
    var trimmedKey = bigKey.substring(0, messageLength);

    // ENCRYPTION BEGINS
    var distanceFromA;
    var letterDistance;
    for(var i=0;i<trimmedKey.length;i++){
      for(var x=0; x<alphabet.length;x++) {
        if(alphabet[x] == message[i]){
          letterDistance = x;
        }
        if (alphabet[x] == trimmedKey[i]){
          distanceFromA = x;
        }
      }
      if(type == 'encrypt'){
        newIndex = letterDistance+distanceFromA;
        if(rot=='rot1'){
          newIndex = newIndex+1;
        }
        if(newIndex >= 26){
          newIndex = newIndex % 26;
        }
      }
      if(type == 'decrypt'){
        newIndex = letterDistance-distanceFromA;
        if(rot=='rot1'){
          newIndex = newIndex-1;
        }
        if(newIndex < 0 ){
          newIndex = 26 - Math.abs(newIndex);
        }
      }

      encryptedMessage = encryptedMessage + alphabet[newIndex];
    }
    $('#results').text(encryptedMessage);

    var timeEnd = performance.now();
    var totalTime = timeEnd - timeInit;
    totalTime = totalTime.toPrecision(4);
    $('#time').text(totalTime+" milliseconds");
  }
});
