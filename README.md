# stopwatch
In this repo we will  make stopwatch with Start, Stop and reset button.

The HTML markup defines a container element with a heading, and three buttons, along with two elements that are used to display the stopwatch time.

The CSS file (stopwatch.css) contains styling rules for the HTML elements in the markup.

The JavaScript code initializes the necessary variables and DOM elements, and then defines three event listeners for the three buttons that are used to control the stopwatch.

The 'Start' button event listener starts the stopwatch timer by setting an interval that runs every 10ms using the setInterval() function.

The 'Stop' button event listener stops the timer by clearing the interval set by the 'Start' button event listener using the clearInterval() function.

The 'Reset' button event listener stops the timer and resets the stopwatch time to 00:00 by clearing the interval, resetting the 'seconds' and 'tens' variables to 0, and updating the DOM elements to display the new values.

The function 'startTimer' increments the 'tens' counter and updates the DOM elements to display the new value. It also increments the 'seconds' counter if the 'tens' counter reaches 100 (1 second) and resets the 'tens' counter to 0. The function also handles leading zeros for values less than 10 to keep a consistent display format for the stopwatch.

Overall, this code provides a basic functionality for a stopwatch, allowing the user to start, stop, and reset the timer, and displaying the elapsed time in seconds and milliseconds.
