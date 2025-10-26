// Subject data for Semester 1 (common for all branches)
const semester1Subjects = [
  {
    id: 1,
    name: "Applied Mathematics – I Theory",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 2,
    name: "Applied Mathematics – I Tutorial",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 3,
    name: "Engineering Physics",
    credits: 2,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 4,
    name: "Engineering Chemistry",
    credits: 2,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 5,
    name: "Basic Electrical Engineering",
    credits: 2,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 6,
    name: "Engineering Drawing",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 7,
    name: "Biology for Engineers",
    credits: 2,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 8,
    name: "Structured Programming Methodology",
    credits: 3,
    fields: [
      { name: "lab", label: "Lab / Tutorial CA", max: 50 },
      { name: "practical", label: "Practical / Project / OR Exam", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 9,
    name: "Applied Science Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab Marks", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 10,
    name: "Basic Electrical Engineering Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab Marks", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 11,
    name: "Engineering Drawing Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab Marks", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 12,
    name: "Maker Space Laboratory – I",
    credits: 1,
    fields: [{ name: "lab", label: "Lab Marks", max: 50 }],
    defaultHighest: 50,
  },
];

// I will add data for future semesters and branches as and when details are available.
// Example: const semester2Subjects = [...];

// Get subjects for a branch and semester
function getSubjects(branchId, semesterId) {
  // Semester 1 is common for all branches
  if (semesterId === 1) {
    return semester1Subjects;
  }

  // I will add other semester data here when available.
  //For ex :  if (semesterId === 2) return semester2Subjects;
  // if (semesterId === 3) return semester3Subjects;

  return null; // Data not available
}
