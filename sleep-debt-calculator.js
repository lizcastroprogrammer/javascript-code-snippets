//function to return sleep got each day
const getSleepHours = day => {
    if (day === 'Monday') {
      return 8;
    } else if (day === 'Tuesday') {
      return 6;
    } else if (day === 'Wednesday') {
      return 7;
    } else if (day === 'Thursday') {
      return 7;
    } else if (day === 'Friday') {
      return 8;
    } else if (day === 'Saturday') {
      return 5;
    } else if (day === 'Sunday') {
      return 6;
    }
  }
  
  //console.log(getSleepHours('Wednesday'));
  
  //function to calculate total sleep got the whole week
  const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  
  //function to calculate desired hours of sleep per week
  const getIdealSleepHours = () => {
    const idealHours = 8
    return idealHours * 7;
  }
  
  console.log(getIdealSleepHours());
  console.log(getActualSleepHours());
  
  
  //function to calculate the sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log('Congratulations! You got the perfect amount of sleep.')
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You need ${idealSleepHours - actualSleepHours} more hours of sleep!`);
    } else {
      console.log(`You got ${actualSleepHours - idealSleepHours} more hours of sleep than you need!`);
    }
  };
  
  calculateSleepDebt();