function days() {
  var todayRaw = new Date();
  var todayYY = todayRaw.getFullYear();
  var todayMM = todayRaw.getMonth();
  var todayDD = todayRaw.getDate();
  var today = new Date(todayYY, todayMM, todayDD);
  var video = new Date(2021, 09, 06); 

  var difference = Math.round((today - video)/(1000*60*60*24));
    
  alert("Dias sem kayak: " + difference);  

