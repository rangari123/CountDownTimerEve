/\*
// Calculate the target date for the next New Year's Day
const currentYear = new Date().getFullYear();
const nextYear = currentYear + 1;
const targetDate = new Date(`01-01-${nextYear}`);

// Get the current date
const currentDate = new Date();

// Calculate the total seconds remaining
const totalSeconds = (targetDate - currentDate) / 1000;

// Calculate days, hours, minutes, and seconds
const days = Math.floor(totalSeconds / 3600 / 24);
const hours = Math.floor((totalSeconds % (3600 \* 24)) / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = Math.floor(totalSeconds) % 60;

console.log(`Days: ${days}`);
console.log(`Hours: ${hours}`);
console.log(`Minutes: ${minutes}`);
console.log(`Seconds: ${seconds}`);
\*/

# Calculate the number of days remaining

const daysRemaining = Math.floor(timeDifference / (1000 _ 60 _ 60 \* 24));

1000 milliseconds in 1 second.
60 seconds in 1 minute.
60 minutes in 1 hour.
24 hours in 1 day.

# Calculate the number of hours remaining after subtracting complete days

const hoursRemaining = Math.floor((timeDifference % (1000 _ 60 _ 60 _ 24)) / (1000 _ 60 \* 60));

# Calculate the number of minutes remaining after subtracting complete hours

const minutesRemaining = Math.floor((timeDifference % (1000 _ 60 _ 60)) / (1000 \* 60));

# Calculate the number of seconds remaining after subtracting complete minutes

const secondsRemaining = Math.floor((timeDifference % (1000 \* 60)) / 1000);
