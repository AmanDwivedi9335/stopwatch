window.onload = function () {
    // Initialize variables
    var seconds = 00; 
    var tens = 00; 
    // Get DOM elements for displaying time and buttons
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    // Start button event listener
    buttonStart.onclick = function() {
      // Stop any previously running timer
      clearInterval(Interval);
      // Start a new timer that increments every 10ms
      Interval = setInterval(startTimer, 10);
    }
    
    // Stop button event listener
    buttonStop.onclick = function() {
      // Stop the running timer
      clearInterval(Interval);
    }
  
    // Reset button event listener
    buttonReset.onclick = function() {
      // Stop the running timer
      clearInterval(Interval);
      // Reset timer values to 0
      tens = "00";
      seconds = "00";
      // Update the DOM elements to display the new values
      appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    }
    
    // Timer function that increments the time values
    function startTimer () {
      tens++; // Increment the millisecond counter
      
      // If the millisecond counter is less than 10, display a leading zero
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      // If the millisecond counter is greater than 9, display the value without a leading zero
      if (tens > 9){
        appendTens.innerHTML = tens;
      } 
      
      // If the millisecond counter is greater than 99, increment the second counter and reset the millisecond counter
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      // If the second counter is greater than 9, display the value without a leading zero
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    }
  }