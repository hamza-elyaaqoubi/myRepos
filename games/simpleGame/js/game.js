$(document).ready(function () {
   $('#start').click(function () {
       $(this).fadeOut('fast');
       generateLetters();
       startTimer();
   });

    var timerStart = 50;
    startTimer = function () {
        setTimeout(startTimer, 1000);
        $('#countDown').html(timerStart);
        timerStart--;
        if(timerStart < 0) {
            $('#countDown').html(0);
        }
    };

    generateLetters = function () {
        var foundedLetter = "",
            possibilities = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            position,
            top, left;

        position = Math.floor(Math.random() * possibilities.length);
        foundedLetter += possibilities.substring(position, position + 1);
        top = Math.floor(Math.random() * 400);
        left = Math.floor(Math.random() * 800);

        $('#letter').append('<span class="letters" style="top:'+ top + 'px;left:'+ left +'px">'+ foundedLetter +'</span>');
        setTimeout(generateLetters, 1000);
    };
});