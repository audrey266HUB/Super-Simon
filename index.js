var colors = ["#vert","#rouge","#jaune","#bleu"];
var userClick = [];
var classVariable = [];
var rounds = 0;
var runTime = 20;

var error = false;
var strict = false;

$(document).ready(function(){

$(".buttons").click(function(){
    error = false;
    rounds = 0;
    rounds++;
    classVariable = []
    userClick = [];
    simonSequence();
});


$(".buttons").click(function(){
 id = $(this).attr('id');
  
  $(this).toggleClass(".buttons").animate({opacity:0.23});
  if($(this).is('#rouge')){
    var myAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
                myAudio.play();
                
  }else if($(this).is('#bleu')){
    myAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
                myAudio.play();
                        
  }else if($(this).is('#jaune')){
     myAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
                myAudio.play();
            
  }else if($(this).is('#vert')){
     myAudio = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');
                myAudio.play();
                
  }
  setTimeout(function(){
  $(".grass").animate({opacity: 1});
}, 100);
  
  userSequence();
});

$(".StrictMode").click(function(){
   rounds = 0;
   rounds++;
   userClick = [];
   classVariable = [];
   strict = true;
   simonSequence();
});

});



