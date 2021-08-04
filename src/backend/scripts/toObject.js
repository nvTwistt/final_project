const symptoms = 
[
  {
    "ID": 10,
    "Name": "Abdominal pain",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      " Stomach ache"
    ]
  },
  {
    "ID": 44,
    "Name": "Nausea",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      22,
      15,
      31,
      16,
      36,
      17,
      47
    ],
    "ProfName": "",
    "Synonyms": []
  },
  {
    "ID": 45,
    "Name": "Heartburn",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      6,
      24,
      15,
      31,
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Pyrosis"
    ]
  },
  {
    "ID": 48,
    "Name": "Bloated feeling in the stomach",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Feeling full"
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
    "ID": 50,
    "Name": "Diarrhea",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36,
      40
    ],
    "ProfName": "",
    "Synonyms": [
      "Diarrhoea",
      "Loose stool",
      "Watery stool"
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
    "ID": 92,
    "Name": "Early satiety",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": []
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
    "ID": 154,
    "Name": "Flatulence",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Wind"
    ]
  },
  {
    "ID": 179,
    "Name": "Stomach burning",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Burning abdominal pain",
      "Burning stomach ache"
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
    "ID": 188,
    "Name": "Abdominal guarding",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Hard belly",
      "Tension of abdominal wall muscles"
    ]
  },
  {
    "ID": 191,
    "Name": "Rebound tenderness",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "Blumberg sign",
    "Synonyms": [
      "Blumberg sign"
    ]
  },
  {
    "ID": 192,
    "Name": "Bulging abdominal wall",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Abdomen deformity",
      "Stomach deformity",
      "Stomach bump"
    ]
  },
  {
    "ID": 223,
    "Name": "Abdominal pain associated with menstruation",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Painful menstruation"
    ]
  },
  {
    "ID": 284,
    "Name": "Bleeding from vagina",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36,
      38
    ],
    "ProfName": "",
    "Synonyms": [
      "Vaginal bleeding"
    ]
  },
  {
    "ID": 989,
    "Name": "Distended abdomen",
    "HasRedFlag": false,
    "HealthSymptomLocationIDs": [
      16,
      36
    ],
    "ProfName": "",
    "Synonyms": [
      "Distended stomach",
      "Abdominal distension",
      "Stomach bloating"
    ]
  }
]
////////
//object format
////////
result = {}
for (let i of symptoms) {
  let id = i.ID;
  let symptom = i.Name;
  let flag = i.HasRedFlag;
  //console.log(id, symptom, flag)
  result[symptom] = [id, flag]
}
console.log(result);
