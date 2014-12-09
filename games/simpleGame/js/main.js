require.config({
    paths: {
        'jQuery': 'libs/jquery-2.1.1.min',
        'underscore': 'libs/lodash'
    },
    shim: {
        'jQuery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['underscore', 'jQuery'],
    function (_) {
        $('#start').click(function () {
            $(this).fadeOut('fast');
            generateLetters();
            startTimer();
        });

        var score = 0;
        $(document).keydown(function (event) {
            var keyCode = String.fromCharCode(event.which).toLowerCase();

            if (keyCode === " " ) {
                return false;
            }

            $('.letter'+keyCode).animate({"top": "20px", "opacity": 0}, 'fast');
            $('.letter'+keyCode).fadeOut('slow').hide('slow').hide( function (){
                score+=5;
                $("#score span").html(score);
                $(this).remove();
            });

        });

        var timerStart = 5;
        startTimer = function () {
            setTimeout(startTimer, 1000);
            $('#countDown').html(timerStart);
            timerStart--;
            if(timerStart < 0) {
                $('#countDown').html(0);
                alert('Jeu terminé');
                $('#start').fadeIn('fast');
                score = 0;
                timerStart = 5;
            }
        };

        generateLetters = function () {
            var foundedLetter = "",
                possibilities = "abcd",
                position,
                top, left;

            position = Math.floor(Math.random() * possibilities.length);
            foundedLetter += possibilities.substring(position, position + 1);
            top = Math.floor(Math.random() * 400);
            left = Math.floor(Math.random() * 800);

            $('#letter').append('<span class="letters letter'+foundedLetter+'" style="top:'+ top + 'px; left:'+ left +'px; background-color:'+ generateRandomColor() +'">'+ foundedLetter +'</span>');
            setTimeout(generateLetters, 1000);
        };

        function generateRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
    });