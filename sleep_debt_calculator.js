// Create a function that returns any given night's number of hours of rest using if/else or switch
// **Refactored without the above function
// Get the total sleep hours you actually slept
const getActualSleepHours = () => 8 + 6 + 7 + 4 + 5 + 9 + 11;

// Get the ideal sleep hours that you prefer
const getIdealSleepHours = idealHours => idealHours * 7;


// Calculate the sleep debt, if any.
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  // Pass it an argument where 8 is the ideal hours per night
  const idealSleepHours = getIdealSleepHours(8);
  // If actual sleep equals ideal sleep, log to the console that the user got the perfect amount of sleep.
  if(actualSleepHours === idealSleepHours){
    console.log('You are sleeping great!');
  }
  // If the actual sleep is greater than the ideal sleep, log to the console that the user got more sleep than needed.
  else if(actualSleepHours > idealSleepHours){
    console.log('There is such a thing as too much sleep...')
    console.log('Sleep bank: ' + (actualSleepHours - idealSleepHours));
  }
  // If the actual sleep is less than the ideal sleep, log to the console that the user should get some rest.
  else if(actualSleepHours < idealSleepHours){
    console.log('Get some rest good buddy - You need it!');
    console.log('Sleep bank: ' + (actualSleepHours - idealSleepHours));
  }else {
    console.log('Error. Something went wrong.');
  }
}
calculateSleepDebt();