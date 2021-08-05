const chestBackSymptoms = require('./body-location-symptoms/back-chest');
const abdomenPelvisButtocksSymptoms = require('./body-location-symptoms/abdomen-pelvis_buttocks');
const armShoulderSymptoms = require('./body-location-symptoms/arms-shoulders');
const headThroatNeckSymptoms = require('./body-location-symptoms/head-throat-neck');
const legSymptoms = require('./body-location-symptoms/legs');
const skinJointsSymptoms = require('./body-location-symptoms/skin-joints-general')

///////////////// body locations

//body location///////
const abdomen_pelvis_buttocks = {
  Abdomen: 36,
  "Buttocks & rectum": 40,
  "Genitals & groin": 38,
  "Hips & hip join": 39,
  Pelvis: 37,
};

const arms_shoulder = {
  "Arms general": 48,
  Finger: 30,
  "Forearm & wrist": 28,
  "Hand & wrist": 29,
  "Upper arm & shoulder": 26,
};
const chest_back = {
  Back: 33,
  Chest: 31,
  "Lateral chest": 32,
};
const head_throat_neck = {
  "Face & eyes": 23,
  "Forehead & head in general": 22,
  "Hair & scalp": 21,
  "Mouth & jaw": 25,
  "Nose, ears throat & neck": 24,
};
const legs = {
  Foot: 44,
  "Legs general": 49,
  "Lower leg & ankle": 43,
  "Thigh & knee": 41,
  Toes: 45,
};
const skin_joints_general = {
  "General, joints & other": 47,
  Skin: 36,
};
///
const bodyLocations = {
  "Abdomen, pelvis & buttocks": [16, abdomen_pelvis_buttocks],
  "Arms & shoulder": [7, arms_shoulder],
  "Chest & back": [15, chest_back],
  "Head, throat & neck": [6, head_throat_neck],
  Legs: [10,legs],
  "Skin, joints & general": [17,skin_joints_general],
};
//console.log("body location: ", bodyLocations['Abdomen, pelvis & buttocks']);
///////////////// body object
const body = {
  16: {
    36: abdomenPelvisButtocksSymptoms.abdomen,
    40: abdomenPelvisButtocksSymptoms.buttocks_rectum,
    38: abdomenPelvisButtocksSymptoms.genitals_groin,
    39: abdomenPelvisButtocksSymptoms.hips,
    37: abdomenPelvisButtocksSymptoms.pelvis
  },
  7: {
    48: armShoulderSymptoms.arms,
    30: armShoulderSymptoms.finger,
    28: armShoulderSymptoms.forearm_wrist,
    29: armShoulderSymptoms.hand_wrist,
    26: armShoulderSymptoms.upperArm_shoulder
  },
  15: {
    33: chestBackSymptoms.backSymptoms,
    31: chestBackSymptoms.chestSymptoms,
    32: chestBackSymptoms.lateralChestSymptoms
  },
  6: {
    23: headThroatNeckSymptoms.faceEyes,
    22: headThroatNeckSymptoms.head,
    21: headThroatNeckSymptoms.hairScalp,
    25: headThroatNeckSymptoms.mouthJaw,
    24: headThroatNeckSymptoms.noseEarThroatNeck
  },
  10: {
    44: legSymptoms.foot,
    49: legSymptoms.legsGeneral,
    43: legSymptoms.lowerLegAnkle,
    41: legSymptoms.thighKnee,
    45: legSymptoms.toes
  },
  17: {
    47: skinJointsSymptoms.generalJoints,
    46: skinJointsSymptoms.skin
  },
};
// 16 abdomen
console.log(body[16][36]['Nausea']);