/*

Can Santa save Christmas?

Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own. 
But he has only 24 hours left. Can he do it?
Your job is to determine if Santa can distribute all the presents in 24 hours. 

Your Task:

You will get an array as input with time durations as string in the following format: 
"hh:mm:ss"

Return true or false whether he can do it or not. 

*/

function determineTime(durations){
 var count = durations.length;


 //if there is no time return;
 if(count <= 0){return true;};
 
   var hh=0, mm=0, ss=0; 


  for (var i = 0; i < count; i++){
  
    var time = durations[i];
    
    var digits = time.split(":");
    
      hh = hh + parseInt(digits[0]);
      mm = mm + parseInt(digits[1]);
      ss = ss + parseInt(digits[2]);
      
  }

  //increment up maxed out digits
  
      if(ss > 60){
        mm += 1;
        
        ss = 60 - ss;
      }

      if(mm > 60){
        hh += 1;
        
        mm = 60 - mm;
      }

      //anything over 24 returns false

      if(hh > 24){return false;};
      
      return true;
}