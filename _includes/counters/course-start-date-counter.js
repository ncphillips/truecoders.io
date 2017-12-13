// Set the date we're counting down to
var dateString = '{{ include.start_date | date: "%b %e, %Y %k:%M:%S" }}';
var countDownDate = new Date(dateString).getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="hero-subtitle"
  var heroSubtitle = document.getElementById("hero-subtitle");
  heroSubtitle.style.opacity = 0;
  var existing = heroSubtitle.innerHTML.split("<br><br>")[0];

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
  } else {
    existing += "<br><br>This course starts in " + days + " days and " + hours + " hours";
  }

  heroSubtitle.innerHTML = existing;
  heroSubtitle.style.opacity = 1;

}, 1000);