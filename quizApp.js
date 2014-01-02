//$(document).ready(function(){

    var questionArray = [
        { 
            question:"Which state is this Crater-lake located?", 
            options:['Oregon', 'South Dakota', 'California', 'Texas'], 
            pic: "crater-lake_OR.jpg", 
            correct:0
        },
        {
            question:"Which state is this Denali Park located?", 
            options:['Alaska', 'South Dakota', 'California', 'Texas'],
            pic: "denali-park_AL.jpg",
            correct:0
        },
        {
            question:"Which state is this Olympic Park located?", 
            options:['Ohio', 'South Dakota', 'California', 'Washington'],
            pic: "olympic-park_WA.jpg",
            correct:3
        },
        {
            question:"Which state is this Redwood Park located?", 
            options:['Ohio', 'South Dakota', 'California', 'Texas'],
            pic: "redwood-park_CA.jpg",
            correct:2
        },
        {
            question:"Which state is this Zion Park located?",
            options:['Ohio', 'Utah', 'California', 'Texas'],
            pic: "zion-park-Utah.jpg",
            correct:1
        }
    ];

   var num = 0;
   var createQuestion;
   var score = 0;
   var submitCount = 0;
   var userArray = [-1,-1,-1,-1,-1];
   var submitAnswer, goToNext;
 


    createQuestion = function(num) {
        $("#message").empty();
        $("#leftDiv").empty();
        submitCount = 0;
        $("#leftDiv").append('<img src = "'+ questionArray[num].pic +'" />');
        $("#question-display-id").append('<h2>'+ questionArray[num].question + '</h2>');
        for (var i=0;i<4;i++) {
                $("#option-div").append('<label><input type= "radio" name = "choice" value = "' + i + '"/>'+ [i+1] + '.  ' + questionArray[num].options[i]+ "</label><br>");
        }; 
        if(userArray[num] != -1){
            $('input[value = "' + userArray[num] + '"]').attr('checked', 'checked');
        }
        //if("#nav .question-navi").val() == num) {
            
        }
    };

    submitAnswer = function() {
        if(submitCount == 0) {
            if($('input[name = "choice"]:checked').length != 0) {
                if ($('input[name = "choice"]:checked').val() == questionArray[num].correct) {
                    score = score + 1;
                    $("#message").text("Correct!");
                    $("#score-id").text("Score : " + score + " / 5");
                } else {
                    $("#message").text("Incorrect. The answer is : " + (questionArray[num].correct + 1));
                    $("#score-id").text("Score : " + score + " / 5");
                }
                userArray[num] = $('input[name = "choice"]:checked').val();
                submitCount = submitCount +1;
            } else {
            $("#message").text("Select an option.");
            submitCount = 0;
            }
        } else {
            $("#message").text("Click 'Next' to go to next question.");
        }
    };

    goToNext = function() {
        if($('input[name = "choice"]:checked').length != 0) {
            $("#question-display-id").empty();
            $("#option-div").empty();
            if(num < questionArray.length -1) {
                num=num+1;
                createQuestion(num);
            } else {
                $("#twin-div-id").empty();
                $("#twin-div-id").append("<br><br>Your score is " + score + " / 5.");
                $("#twin-div-id").append('<br><br><input type = "button"  id = "try-again" value = "Try Again">');
                $("#next-button").prop('disabled', 'true');

            }
        } else {
            $("#message").text("Select an option and Submit.");
        }
    };

    $("#submit-id").click (function(){ 
        submitAnswer();
    }); 

    $("#next-button").click(function() {
        goToNext();
    });

    $("#pre-button").click(function() {
        $("#message").empty();
        $("#question-display-id").empty();
        $("#option-div").empty();
        if(num > 0) {
            num = num - 1;
            createQuestion(num);
        } else { 
            $("#pre-button").prop('disabled', 'true');
            location.reload();
        }
    });

    $("#twin-div-id").on('click', '#try-again', function() {
      location.reload(true);
    });
    $("#option-div").dblclick(function() {
        submitAnswer();
        goToNext();
    });

// $("#twin-div-id").keydown(function(event){
     //   event.keycode === 13;

    // });
    
    createQuestion(num);

//});

