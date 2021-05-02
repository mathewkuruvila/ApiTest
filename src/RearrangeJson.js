// const sourceJSONString = '[{"name":"Small Night In","bands":[{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"}]},{"name":"Mathai party","bands":[{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"}]},{"name":"Trainerella","bands":[{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"}]},{"name":"Twisted Tour","bands":[{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281"},{"name":"Summon","recordLabel":"Outerscope"}]},{"bands":[{"name":"Critter Girls","recordLabel":"ACR"},{"name":"Propeller","recordLabel":"Pacific Records"}]}]';
 const sourceJSONString = '[{"name":"LOL-palooza","bands":[{"name":"Werewolf Weekday","recordLabel":"XS Recordings"},{"name":"Winter Primates","recordLabel":""},{"name":"Jill Black","recordLabel":"Fourth Woman Records"},{"name":"Frank Jupiter","recordLabel":"Pacific Records"}]},{"name":"Small Night In","bands":[{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"}]},{"name":"Trainerella","bands":[{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"Manish Ditch","recordLabel":"ACR"}]},{"name":"Twisted Tour","bands":[{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Summon","recordLabel":"Outerscope"},{"name":"Squint-281"}]},{"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}]';

const sourceJSON = JSON.parse(sourceJSONString);

 reArrangeJson(sourceJSON)

 //Marner Sis. Recording": {"bands": {"Green Mild Cold Capsicum": ["Small Night In","Mathai party"],"Wild Antelope": ["Small Night In","Mathai party"],"Auditones": ["Twisted Tour"]}}

 /**
  * Create a new json structure based on initial one without any keys.
  * Get all "recordLabel" and sort it.
  * Iterate through "recordLabel" sorted array and add key "recordLabel" to it.
  * Get all bandLabel for that "recordLabel", sort it.
  * Iterate through bandLabel sorted array and add keys "bandLabel" and "festivals" to it. 
  * 
  * 
  * @param {*} sourceJSON 
  * @returns 
  */
 function reArrangeJson(sourceJSON) {

const preOutput = {};

let i, j;
for (i = 0; i < sourceJSON.length; i++) {
  const festivalDetails = sourceJSON[i];
  const festivalName = festivalDetails.name;

  for (j = 0; j < festivalDetails.bands.length; j++) {
    const recordLabel = festivalDetails.bands[j].recordLabel;
    const bandName = festivalDetails.bands[j].name;



    if (!preOutput[recordLabel]) {
      preOutput[recordLabel] = { bands: {} };
    }

    if (!preOutput[recordLabel].bands[bandName]) {
      preOutput[recordLabel].bands[bandName] = [];
    }

    if (festivalName) {
      preOutput[recordLabel].bands[bandName].push(festivalName);
    }
  }
}

let beforeSort = JSON.stringify(preOutput);
console.log(JSON.stringify(preOutput, null, 2));

const preOutputkeys = Object.keys(preOutput);
preOutputkeys.sort();

beforeSort = JSON.stringify(preOutput);

const outputJSON = [];
for (i = 0; i < preOutputkeys.length; i++) {
  const bands = preOutput[preOutputkeys[i]].bands;
  const recordDetails = {};

  
  if (preOutputkeys[i] !== 'undefined' /* && preOutputkeys[i] !== ''*/) {
    recordDetails.recordLabel = preOutputkeys[i];
  }

  const bandKeyList = Object.keys(bands);
  bandKeyList.sort();

  recordDetails.bands = [];
  for (j = 0; j < bandKeyList.length; j++) {
    const bandLabel = bandKeyList[j];
    const festivals = bands[bandLabel];

    recordDetails.bands.push({
      bandLabel: bandLabel,
      festivals: festivals.sort(),
    });
  }

  outputJSON.push(recordDetails);
}

console.log(sourceJSON);
// console.log(JSON.stringify(outputJSON, null, 2));

let jsonStr = JSON.stringify(outputJSON);

return jsonStr;

}

export { reArrangeJson };