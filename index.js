const nextISSTimesForMyLocation = require('./iss');

const printPassTimes = function(flyOver) {
  for (const pass of flyOver) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, flyOver) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printPassTimes(flyOver);
});