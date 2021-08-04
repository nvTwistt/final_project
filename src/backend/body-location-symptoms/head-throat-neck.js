const faceEyes = {
  Blackhead: [24, false],
  "Eye redness": [33, false],
  "Blackening of vision": [57, true],
  "Visual field loss": [66, true],
  "Vision impairment": [68, false],
  "Sensitivity to glare": [69, false],
  "Impaired light-dark adaptation": [70, false],
  "Double vision": [71, false],
  Halo: [72, false],
  "Itching eyes": [73, false],
  "Burning eyes": [75, false],
  "Feeling of foreign body in the eye": [76, false],
  "Blurred vision": [77, false],
  "Yellowish discoloration of the white part of the eye": [106, false],
  "Problems with the sense of touch in the face": [129, false],
  "Oversensitivity to light": [137, false],
  "Vision impairment for near objects": [166, false],
  "Cheek swelling": [170, false],
  "Bleeding in the conjunctiva of the eye": [176, false],
  "Eyelid swelling": [208, false],
  "Eyelids sticking together": [209, false],
  "Loss of eye lashes": [210, false],
  Tears: [211, false],
  "Vision impairment for far objects": [213, false],
  "Face pain": [219, false],
  "Eye blinking": [242, false],
  Tic: [243, false],
  "Drooping eyelid": [244, false],
  "Facial paralysis": [246, false],
  "Protrusion of the eyes": [258, false],
  "Double vision, acute-onset": [270, false],
  "Dry eyes": [273, false],
  "Pain when chewing": [286, false],
  "Eye pain": [287, true],
  "Burning nose": [288, false],
  "Facial swelling": [970, false],
};
const head = { Headache: [ 9, false ],
  Fever: [ 11, false ],
  Tiredness: [ 16, false ],
  Drowsiness: [ 43, true ],
  Nausea: [ 44, false ],
  Sleeplessness: [ 52, false ],
  'Difficulty to concentrate': [ 53, false ],
  'Blackening of vision': [ 57, true ],
  'Mood swings': [ 85, false ],
  Nervousness: [ 114, false ],
  'Impaired balance': [ 120, false ],
  Forgetfulness: [ 125, false ],
  'Difficulty in finding words': [ 126, false ],
  'Disorientation regarding time or place': [ 128, true ],
  'Unconsciousness, short': [ 144, true ],
  Dizziness: [ 207, true ],
  'Memory gap': [ 235, false ],
  Anxiety: [ 238, false ],
  'Sleepiness with spontaneous falling asleep': [ 241, true ],
  'Eye blinking': [ 242, false ],
  Tic: [ 243, false ],
  'Drooping eyelid': [ 244, false ],
  'Facial swelling': [ 970, false ],
  Aggressiveness: [ 974, false ],
  Sadness: [ 975, false ],
  Hallucination: [ 976, false ],
  'Feeling faint': [ 982, false ],
  'Absence of a pulse': [ 984, true ],
  'Trouble understanding speech': [ 988, true ],
  'Difficulty to learn': [ 1007, false ],
  'Feeling ill': [ 1014, false ] }

const hairScalp = { 'Hair loss': [ 152, false ],
'Bold area among hair on the head': [ 239, false ],
'Flaking skin on the head': [ 245, false ],
'Itching on head': [ 247, false ],
'Scalp redness': [ 269, false ] };

const mouthJaw = [
  {
    "ID": 15,
    "Name": "Cough",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25,
      15,
      31
    ],
    "ProfName": "",
    "Synonyms": [
      "Wet cough",
      "Productive cough"
    ]
  },
  {
    "ID": 35,
    "Name": "Lip swelling",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Angiooedema",
      "Angioedema",
      "Quincke's edema",
      "Swollen lip"
    ]
  },
  {
    "ID": 40,
    "Name": "Increased thirst",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Polydipsia",
      "Chronic thirst"
    ]
  },
  {
    "ID": 49,
    "Name": "Cravings",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25,
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Binge eating"
    ]
  },
  {
    "ID": 54,
    "Name": "Reduced appetite",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25,
      17,
      47,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Loss of appetite",
      "Decreased appetite",
      "Decrease in hunger"
    ]
  },
  {
    "ID": 62,
    "Name": "Formation of blisters on a skin area",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25,
      17,
      46
    ],
    "ProfName": "",
    "Synonyms": [
      "Vesicle",
      "Formation of blisters on a place of the skin",
      "Formation of blisters on an area of the skin",
      "Formation of blisters on an area of skin",
      "Blisters"
    ]
  },
  {
    "ID": 64,
    "Name": "Sputum",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      15,
      6,
      31,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Phlegm"
    ]
  },
  {
    "ID": 93,
    "Name": "Difficulty in swallowing",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Dysphagia",
      "Difficulties in swallowing"
    ]
  },
  {
    "ID": 97,
    "Name": "Mouth ulcers",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": []
  },
  {
    "ID": 98,
    "Name": "Difficulty in speaking",
    "HasRedFlag": true,
    "HealthSymptomLocationIDs": [
      6,
      25,
      24
    ],
    "ProfName": "",
    "Synonyms": [
      "Difficulty speaking",
      "Difficulty talking",
      "Trouble speaking",
      "Trouble talking",
      "Dysarthria",
      "Trouble with speech"
    ]
  },
  {
    "ID": 101,
    "Name": "Vomiting",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25,
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Throwing up"
    ]
  },
  {
    "ID": 122,
    "Name": "Hiccups",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Singultus"
    ]
  },
  {
    "ID": 126,
    "Name": "Difficulty in finding words",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      22,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Word-finding disorder",
      "Anomia",
      "Amnesic aphasia"
    ]
  },
  {
    "ID": 131,
    "Name": "Increased appetite",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25,
      17,
      47,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Increase in hunger"
    ]
  },
  {
    "ID": 133,
    "Name": "Night cough",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25,
      15,
      31
    ],
    "ProfName": "",
    "Synonyms": []
  },
  {
    "ID": 135,
    "Name": "Mouth pain",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Mouth burning",
      "Pain in mouth",
      "Burning in mouth"
    ]
  },
  {
    "ID": 153,
    "Name": "Fast, deepened breathing",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25,
      15,
      31,
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Fast breathing",
      "Hyperventilation"
    ]
  },
  {
    "ID": 181,
    "Name": "Vomiting blood",
    "HasRedFlag": true,
    "HealthSymptomLocationIDs": [
      6,
      25,
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": []
  },
  {
    "ID": 203,
    "Name": "Pain on swallowing",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Painful swallowing"
    ]
  },
  {
    "ID": 204,
    "Name": "Increased salivation",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": []
  },
  {
    "ID": 205,
    "Name": "Lockjaw",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Limited mouth opening",
      "Trismus",
      "Difficulty opening mouth"
    ]
  },
  {
    "ID": 233,
    "Name": "Bloody cough",
    "HasRedFlag": true,
    "HealthSymptomLocationIDs": [
      15,
      31,
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Bloody sputum",
      "Coughing up blood",
      "Hemoptysis"
    ]
  },
  {
    "ID": 243,
    "Name": "Tic",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      22,
      23,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Twitch"
    ]
  },
  {
    "ID": 272,
    "Name": "Dry mouth",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Xerostomia"
    ]
  },
  {
    "ID": 286,
    "Name": "Pain when chewing",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      23,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Jaw claudication"
    ]
  },
  {
    "ID": 970,
    "Name": "Facial swelling",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      23,
      25,
      22
    ],
    "ProfName": "",
    "Synonyms": [
      "Swollen face",
      "Face swelling",
      "Big face"
    ]
  },
  {
    "ID": 973,
    "Name": "Itching in the mouth or throat",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Itch in the mouth or throat",
      "Pruritus"
    ]
  },
  {
    "ID": 977,
    "Name": "Tongue swelling",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Swollen tongue"
    ]
  },
  {
    "ID": 980,
    "Name": "Tongue burning",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": [
      "Burning tongue"
    ]
  },
  {
    "ID": 991,
    "Name": "Blue colored skin",
    "HasRedFlag": true,
    "HealthSymptomLocationIDs": [
      6,
      25,
      7,
      30,
      17,
      46
    ],
    "ProfName": "",
    "Synonyms": [
      "Blue colored lips",
      "Blue colored nails",
      "Blue colored fingertips",
      "Cyanosis",
      "Bluish discoloration of the skin",
      "Bluish skin",
      "Blue skin"
    ]
  },
  {
    "ID": 1008,
    "Name": "Toothache",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      25
    ],
    "ProfName": "",
    "Synonyms": []
  }
];
const noseEarThroatNeck = { 'Sore throat': [ 13, false ],
'Runny nose': [ 14, false ],
Cough: [ 15, false ],
'Stuffy nose': [ 28, false ],
Wheezing: [ 30, false ],
Nosebleed: [ 38, false ],
'Increased thirst': [ 40, false ],
Heartburn: [ 45, false ],
'Burning in the throat': [ 46, false ],
'Ringing in the ear': [ 78, false ],
'Feeling of pressure in the ear': [ 86, false ],
Earache: [ 87, false ],
'Itching in the ear': [ 88, false ],
'Impaired hearing': [ 90, false ],
'Difficulty in swallowing': [ 93, false ],
Sneezing: [ 95, false ],
'Itching in the nose': [ 96, false ],
'Difficulty in speaking': [ 98, true ],
'Sensitivity to noise': [ 102, false ],
Hoarseness: [ 121, false ],
Hiccups: [ 122, false ],
'Night cough': [ 133, false ],
'Neck pain': [ 136, false ],
'Fast, deepened breathing': [ 153, false ],
'Swollen glands in the neck': [ 169, false ],
'Pain on swallowing': [ 203, false ],
'Neck stiffness': [ 234, false ],
'Burning nose': [ 288, false ],
'Absence of a pulse': [ 984, true ],
'Trouble understanding speech': [ 988, true ] }
module.exports = { faceEyes, head, hairScalp, mouthJaw, noseEarThroatNeck};
