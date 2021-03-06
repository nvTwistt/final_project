const abdomen = {
  'Abdominal pain': [10, false],
  Nausea: [44, false],
  Heartburn: [45, false],
  'Bloated feeling in the stomach': [48, false],
  Cravings: [49, false],
  Diarrhea: [50, false],
  'Reduced appetite': [54, false],
  'Early satiety': [92, false],
  Vomiting: [101, false],
  'Increased appetite': [131, false],
  'Fast, deepened breathing': [153, false],
  Flatulence: [154, false],
  'Stomach burning': [179, false],
  'Vomiting blood': [181, true],
  'Abdominal guarding': [188, false],
  'Rebound tenderness': [191, false],
  'Bulging abdominal wall': [192, false],
  'Abdominal pain associated with menstruation': [223, false],
  'Bleeding from vagina': [284, false],
  'Distended abdomen': [989, false]
};
const buttocks_rectum = {
  Diarrhea: [50, false],
  "Difficult defecation": [79, false],
  "Hard defecation": [80, false],
  "Incomplete defecation": [81, false],
  "Less than 3 defecations per week": [82, false],
  "Fatty defecation": [83, false],
  "Foul smelling defecation": [84, false],
  "Pain radiating to the leg": [103, false],
  "Black stools": [180, false],
  "Painful defecation": [189, false],
  "Blood in stool": [190, false],
  "Uncontrolled defecation": [265, false],
  "Pain of the anus": [990, false],
  "Itching of the anus": [999, false],
};
const genitals_groin = {
  "Increased urine quantity": [39, false],
  "Frequent urination": [59, false],
  "Burning sensation when urinating": [107, false],
  "Dark urine": [108, false],
  "Painful urination": [109, false],
  "Genital warts": [110, false],
  "Menstruation disorder": [112, false],
  "Missed period": [123, false],
  "Urge to urinate": [160, false],
  "Urination during the night": [161, false],
  "Decreased urine stream": [163, false],
  "Feeling of residual urine": [164, false],
  "Delayed start to urination": [165, false],
  "Purulent discharge from the vagina": [173, false],
  "Swelling in the genital area": [236, false],
  "Swollen glands in the groin": [249, false],
  "Itching or burning in the genital area": [268, false],
  "Bleeding from vagina": [284, false],
  "Absence of a pulse": [984, true],
};
const hips = {
  "Pain radiating to the leg": [103, false],
  "Physical inactivity": [118, false],
  "Pain in the bones": [155, false],
  "Bone fracture": [156, false],
  "Limited mobility of the leg": [195, false],
  "Hip pain": [196, false],
  "Hip deformity": [993, false],
  "Limited mobility of the hip": [1000, false],
  "Difficulty with gait": [1005, false],
  "Leg pain": [1010, false],
};
const pelvis = {
  "Increased urine quantity": [39, false],
  "Frequent urination": [59, false],
  "Burning sensation when urinating": [107, false],
  "Dark urine": [108, false],
  "Painful urination": [109, false],
  "Genital warts": [110, false],
  "Urge to urinate": [160, false],
  "Urination during the night": [161, false],
  "Decreased urine stream": [163, false],
  "Feeling of residual urine": [164, false],
  "Delayed start to urination": [165, false],
  "Swelling in the genital area": [236, false],
  "Itching or burning in the genital area": [268, false],
};
module.exports = { abdomen, buttocks_rectum, genitals_groin, hips, pelvis }