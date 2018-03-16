const dbValues = {
  "Arms": 61,
  "Glutes": 1,
  "Legs": 1
}

const keys = {
  0: 'black',
  1: 'yellow',
  2: 'orange',
  3: 'red' // greater than 3
}




export const generateColorMap = (dbValues) => {
  const keys = {
    0: 'black',
    1: 'rgb(240, 240, 72)',
    2: 'orange',
    3: 'red' // greater than 3
  }
  let returnObj = {};
  for (let muscleGroup in dbValues) {
    let muscleE = dbValues[muscleGroup];
    if (muscleE > 3 ) {
      muscleE = 3;
    }
    if (muscleE in keys) {
      returnObj[muscleGroup] = keys[muscleE]
    }
  }
  return returnObj
}

// generateColorMap(dbValues, keys)
// { Arms: 'red', Glutes: 'yellow', Legs: 'yellow' }

