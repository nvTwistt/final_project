const backSymptoms = {
  "Pain radiating to the leg": [103, false],
  "Back pain": [104, false],
  "Limited mobility of the back": [167, false],
  "Pain radiating to the arm": [251, false],
  "Curvature of the spine": [260, false],
  "Lower-back pain": [263, false],
  "Back deformity": [998, false],
};
const chestSymptoms = { Cough: [ 15, false ],
  'Chest pain': [ 17, true ],
  'Shortness of breath': [ 29, true ],
  Wheezing: [ 30, false ],
  'Chest tightness': [ 31, true ],
  Palpitations: [ 37, false ],
  Nausea: [ 44, false ],
  Heartburn: [ 45, false ],
  Sputum: [ 64, false ],
  'Night cough': [ 133, false ],
  'Fast, deepened breathing': [ 153, false ],
  'Bloody cough': [ 233, true ],
  'Breathing-related pains': [ 250, false ],
  'Lump in the breast': [ 261, false ],
  'Heart murmur': [ 985, false ],
  'Irregular heartbeat': [ 986, true ] }
const lateralChestSymptoms = { 'Side pain': [ 183, false ],
'Swollen glands in the armpit': [ 248, false ] }
module.exports = { backSymptoms, chestSymptoms, lateralChestSymptoms};
