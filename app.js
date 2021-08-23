



function extResult(question) {
    for (var i = 0, length = question.length; i < length; i++) {
        if (question[i].checked) {

            return question[i].value;
        }
    }
}




function calculateResult (q1,q2,q3,q4,q5,q6,q7,q8,q9,q10){
    let score = 0;
    let quesAns  = {
        question1: extResult (document.getElementsByName(q1)),
        question2: extResult (document.getElementsByName(q2)),
        question3: extResult (document.getElementsByName(q3)),
        question4: extResult (document.getElementsByName(q4)),
        question5: extResult (document.getElementsByName(q5)),
        question6: extResult (document.getElementsByName(q6)),
        question7: extResult (document.getElementsByName(q7)),
        question8: extResult (document.getElementsByName(q8)),
        question9: extResult (document.getElementsByName(q9)),
        question10: extResult (document.getElementsByName(q10))
    };
    if (quesAns.question1 == "313") {
        score++;
    }
    if (quesAns.question2 == "Muharram") {
        score++;
    }
    if (quesAns.question3 == "true") {
        score++;
    }
    if (quesAns.question4 == "false") {
        score++;
    }
    if (quesAns.question5 == "Surah Baqarah") {
        score++;
    }
    if (quesAns.question6 == "114") {
        score++;
    }
    if (quesAns.question7 == "Hazrat Ali(رضی اللہ تعالیٰ عنہ)") {
        score++;
    }
    if (quesAns.question8 == "Only Being Worth Worship") {
        score++;
    }
    if (quesAns.question9 == "Sayings of Hazrat Muhammad (صلى الله عليه وسلم)") {
        score++;
    }
    if (quesAns.question10 == "Both of them") {
        score++;
    }
    

    alert( document.getElementById("result").innerHTML + "your Score is" + score + "/10");
}