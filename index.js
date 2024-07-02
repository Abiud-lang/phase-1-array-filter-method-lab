// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(drivers, name) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase() })
  }

  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase() })
  }


function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }