const sourceJSONString = '[{"name":"Small Night In","bands":[{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"}]},{"name":"Mathai party","bands":[{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"},{"name":"Yanke East","recordLabel":"MEDIOCRE Music"}]},{"name":"Trainerella","bands":[{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"Manish Ditch","recordLabel":"ACR"},{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"}]},{"name":"Twisted Tour","bands":[{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Squint-281"},{"name":"Summon","recordLabel":"Outerscope"}]},{"bands":[{"name":"Critter Girls","recordLabel":"ACR"},{"name":"Propeller","recordLabel":"Pacific Records"}]}]';
//  const sourceJSONString = '[{"name":"LOL-palooza","bands":[{"name":"Werewolf Weekday","recordLabel":"XS Recordings"},{"name":"Winter Primates","recordLabel":""},{"name":"Jill Black","recordLabel":"Fourth Woman Records"},{"name":"Frank Jupiter","recordLabel":"Pacific Records"}]},{"name":"Small Night In","bands":[{"name":"Yanke East","recordLabel":"MEDIOCRE Music"},{"name":"Squint-281","recordLabel":"Outerscope"},{"name":"The Black Dashes","recordLabel":"Fourth Woman Records"},{"name":"Green Mild Cold Capsicum","recordLabel":"Marner Sis. Recording"},{"name":"Wild Antelope","recordLabel":"Marner Sis. Recording"}]},{"name":"Trainerella","bands":[{"name":"Wild Antelope","recordLabel":"Still Bottom Records"},{"name":"YOUKRANE","recordLabel":"Anti Records"},{"name":"Adrian Venti","recordLabel":"Monocracy Records"},{"name":"Manish Ditch","recordLabel":"ACR"}]},{"name":"Twisted Tour","bands":[{"name":"Auditones","recordLabel":"Marner Sis. Recording"},{"name":"Summon","recordLabel":"Outerscope"},{"name":"Squint-281"}]},{"bands":[{"name":"Propeller","recordLabel":"Pacific Records"},{"name":"Critter Girls","recordLabel":"ACR"}]}]';

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
  const bands = sourceJSON[i].bands;
  const festivalName = sourceJSON[i].name;

  let jsonStr = JSON.stringify(preOutput);
  
  for (let j = 0; j < bands.length; j++) {
    const band = bands[j];

    const recordLabel = band.recordLabel;
    const bandName = band.name;

    if(bandName == 'Summon')
    {
      console.log(bandName);
    }

    if(!preOutput[recordLabel])
      preOutput[recordLabel] = {};

    let festivals = [];
    if(festivalName)
      festivals.push(festivalName)
    // if(preOutput[recordLabel] && preOutput[recordLabel].bands && preOutput[recordLabel].bands[bandName])

    if(preOutput[recordLabel] && preOutput[recordLabel].bands)
    {
      if(preOutput[recordLabel].bands[bandName])
        preOutput[recordLabel].bands[bandName].festivals.push(festivalName);
      else {
        preOutput[recordLabel].bands[bandName] = {
          bandLabel: bandName,
          festivals: festivals.sort()
        };
      }
    }
    else{
      preOutput[recordLabel].bands= {};
      preOutput[recordLabel].bands[bandName] = {
        bandLabel: bandName,
        festivals: festivals.sort()
      };
    }

    
  }   
  
}

console.log(preOutput);

let jsonStr = JSON.stringify(preOutput);

}

// export { reArrangeJson };