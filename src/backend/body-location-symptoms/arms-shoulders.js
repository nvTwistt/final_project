const arms = {
  "Pain in the limbs": [12, false],
  "Joint pain": [27, false],
  Cramps: [94, false],
  "Muscle stiffness": [119, false],
  Paralysis: [140, false],
  "Pain in the bones": [155, false],
  "Bone fracture": [156, false],
  "Muscular weakness in the arm": [168, false],
  "Muscle pain": [177, false],
  "Joint swelling": [193, false],
  "Joint effusion": [194, false],
  Immobilization: [197, false],
  "Joint instability": [198, false],
  "Muscular atrophy of the arm": [202, false],
  "Numbness in the arm": [221, false],
  "Joint redness": [230, false],
  "Swollen glands in the armpit": [248, false],
  "Pain radiating to the arm": [251, false],
  "Arm swelling": [971, false],
  "Weakness or numbness on right or left side of body": [972, true],
  Agitation: [981, false],
  "Muscle weakness": [987, false],
  "Arm pain": [1009, false],
};
const finger = {
  "Changes in the nails": [91, false],
  "Limited mobility of the fingers": [178, false],
  Tingling: [201, false],
  "Blue colored skin": [991, true],
  "Finger deformity": [995, false],
  "Finger swelling": [1012, false],
  "Finger pain": [1013, false],
}
const forearm_wrist = {
  "Hand pain": [186, false],
  "Arm swelling": [971, false],
  "Elbow pain": [1011, false],
}
const hand_wrist = {
  "Tremor at rest": [115, false],
  "Tremor on movement": [132, false],
  "Hand swelling": [148, false],
  "Hand pain": [186, false],
  "Numbness of the hands": [200, false],
  Tingling: [201, false],
  "Discoloration of nails": [216, false],
  "Involuntary movements": [257, false],
  "Cold hands": [978, false],
  "Brittleness of nails": [979, false],
  Agitation: [981, false],
  "Absence of a pulse": [984, true],
}
const upperArm_shoulder = { "Arm swelling": [971, false] }

module.exports = {
  arms, finger, forearm_wrist, hand_wrist, upperArm_shoulder
}