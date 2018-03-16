const dbValues = {
  "Arms": 61,
  "Glutes": 1,
  "Legs": 1
}


export const generateColorMap = (dbValues) => {
  const INTENSITY_MAP = {
    0: 'black',
    1: 'yellow',
    2: 'orange',
    3: 'red'
  };
  const MAX_INTENSITY = Math.max.apply(null, Object.keys(INTENSITY_MAP));
  
  return Object.entries(dbValues)
    .reduce(( muscleUseMap, [groupName, useLvl] ) => {
      muscleUseMap[groupName] = (useLvl <= MAX_INTENSITY) ? INTENSITY_MAP[useLvl] : INTENSITY_MAP[MAX_INTENSITY];
      return muscleUseMap;
    }, {});
}

console.log(generateColorMap(dbValues));
// { Arms: 'red', Glutes: 'yellow', Legs: 'yellow' }

