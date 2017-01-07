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