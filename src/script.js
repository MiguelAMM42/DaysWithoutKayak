
  var todayRaw = new Date();
  var todayYY = todayRaw.getFullYear();
  var todayMM = todayRaw.getMonth();
  var todayDD = todayRaw.getDate();
  var today = new Date(todayYY, todayMM, todayDD);
  var video = new Date(2021, 9, 6); 

  var difference = Math.round((today - video)/(1000*60*60*24));

  // Get the modal
  var modal = document.getElementById("myModal");

  var btn = document.getElementById("daysButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  var days = "Days without a kayak: " + difference;

  console.log(days);

  var par = document.getElementById("daysTxt");
  par.innerHTML = days;

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
    

