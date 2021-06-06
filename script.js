var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
// if we click on start/reset button 
document.getElementById("start_reset").onclick = function () {
    //    if we are palying
    if(playing == true){
            // reload page
        location.reload();//reloading our page
    }
    //  if we are not playing
    else{
        // set score to 0
        score = 0;
        //changing mode to playing
        playing = true;
        document.getElementById("scorevalue").innerHTML = score;
        // show countdown box
        show("time_remaining");
        
        // reduce time by 1 sec 
        timeremaining = 60;
        document.getElementById("time_remaining_value").innerHTML=timeremaining;
        startCountDown();

        //generate Q&A

        generateQA();


        //hide game over box
        hide("game_over");

        // change button to reset
        document.getElementById("start_reset").innerHTML = "Reset Game";
    }

}
//clicking on the answer box
for(var i = 1;i<5;i++){
document.getElementById("box"+i).onclick = function(){
   //check we are playing
   if (playing==true) {
       //yes
       if (this.innerHTML == correctAnswer) {
           //correct answer

           //increase score by 1
           score++;
           document.getElementById("scorevalue").innerHTML = score;

           //correct box
           hide("wrong");
           show("correct");
           setTimeout(function(){
               hide("correct");
           },1000);
           //generate new question
           generateQA();
       }else{
           //wrong answer
           hide("correct");
           show("wrong");
           hide("time_remaining"); 
           setTimeout(function(){
               hide("wrong");
           },1000);
       }
   }
}
}
//functions 

//start Counter

function startCountDown(){
    action = setInterval(function(){
    timeremaining -= 1;
    document.getElementById("time_remaining_value").innerHTML=timeremaining;
    if (timeremaining == 0) {
        //game over
        stopCountDown();
        show("game_over");
        document.getElementById("game_over").innerHTML = "<p>Game Over!</p><p>Your score is "+score+".</p>";
        hide("time_remaining");
        hide("correct");
        hide("wrong");
        playing = false;
        document.getElementById("start_reset").innerHTML="Start Game";
    }
    },1000);
}

//stop counter

function stopCountDown(){
    clearInterval(action);
}

//hide element

function hide(Id){
    document.getElementById(Id).style.display = "none";
}
    

//show element

function show(Id){
    document.getElementById(Id).style.display = "block";
}

function generateQA(){
    var x = 1 + Math.round(19*Math.random());
    var y = 1 + Math.round(19*Math.random());
     correctAnswer = x*y;
     document.getElementById("question").innerHTML = x +"x"+ y;
     var correctPosition = 1 + Math.round(3*Math.random());
     //one box fill with correctAnswer
     document.getElementById("box"+correctPosition).innerHTML = correctAnswer;

     //other boxes fills using loop
     var answers = [correctAnswer];
     for (let i = 1; i < 5; i++){
         if(i != correctPosition){
             var wrongAnswer;
             do{
                wrongAnswer =(1 + Math.round(19*Math.random()))*(1 + Math.round(19*Math.random()));
               }while(answers.indexOf(wrongAnswer)>-1)
             document.getElementById("box"+i).innerHTML = wrongAnswer;
             answers.push(wrongAnswer);
         }
         
        
     }
}
            
            
            
                //   times left?
                    //   yes --> continue
                    // no-->game over
            
            // generate new Q&A
// if we click on answer box
    //  if we are playing
        // correct?
            // yes
                // increase score
                // show correct box for 1 Sec
                // generate new Q&A
            // no
                // show try again box for 1 sec


