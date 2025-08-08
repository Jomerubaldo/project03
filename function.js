function myFunctionClock() {
  // Called current date
  const now = new Date();

  // Getting values
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  //Logics
  // If hours is less than 10 → put a 0 in front
  // Same for minutes and seconds
  // If it’s already 10 or more, just leave it
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  // Store all value in variable
  const showClock = `${hours}: ${minutes}: ${seconds}`;

  // Get DOM and display it in ID
  document.querySelector('#clock').innerHTML = showClock;
}

// Invoke the function
myFunctionClock();

// Every 1 second counting
setInterval(myFunctionClock, 1000);
