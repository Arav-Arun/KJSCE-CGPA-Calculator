// ========== COMPLETE UPDATED DATA-CONFIG.JS FILE ==========

// Subject data for Semester 1 (common for all branches - Batch 2025-2029)
const semester1Subjects = [
  {
    id: 1,
    name: "Applied Mathematics – I (Theory)",
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
    name: "Applied Mathematics – I (Tutorial)",
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

// Semester 3 subjects for Computer Engineering - Batch 2024-2028
const semester3Subjects_COMP_2024 = [
  {
    id: 301,
    name: "Integral Transforms and Vector Calculus (Theory)",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 311,
    name: "Integral Transforms and Vector Calculus (Tutorial)",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 302,
    name: "Data Structures",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 303,
    name: "Object Oriented Programming Methodology",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 304,
    name: "Computer Organization & Architecture",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 305,
    name: "Discrete Mathematics (Theory)",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 312,
    name: "Discrete Mathematics (Tutorial)",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 306,
    name: "Indian Knowledge System",
    credits: 2,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 307,
    name: "Digital Design Laboratory",
    credits: 2,
    fields: [{ name: "lab", label: "Lab/TUT CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 308,
    name: "Data Structures Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 309,
    name: "Object Oriented Programming Methodology Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 310,
    name: "Computer Organization & Architecture Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
];

// Semester 3 subjects for Robotics and AI - Batch 2024-2028
const semester3Subjects_RAI_2024 = [
  {
    id: 301,
    name: "Calculus, Transforms and Optimization (Theory)",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 311,
    name: "Calculus, Transforms and Optimization (Tutorial)",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 302,
    name: "Strength of Materials",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 303,
    name: "Data Structures and Algorithms",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 304,
    name: "Hydraulic and Pneumatic Systems",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 305,
    name: "Manufacturing Processes",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 306,
    name: "Indian Knowledge System",
    credits: 2,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 307,
    name: "Modelling and Simulation Laboratory",
    credits: 2,
    fields: [{ name: "lab", label: "Lab/TUT CA", max: 75 }],
    defaultHighest: 75,
  },
  {
    id: 308,
    name: "Strength of Materials Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 309,
    name: "Data Structures and Algorithms Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 310,
    name: "Hydraulic and Pneumatic Systems Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 312,
    name: "Manufacturing Processes Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
];

// Get subjects for a branch, semester, and batch
function getSubjects(branchId, semesterId, batchId) {
  // Batch 2025-2029
  if (batchId === "2025-2029") {
    if (semesterId === 1) {
      return semester1Subjects;
    }
  }

  // Batch 2024-2028
  if (batchId === "2024-2028") {
    if (semesterId === 3) {
      if (branchId === "comp") {
        return semester3Subjects_COMP_2024;
      } else if (branchId === "rai") {
        return semester3Subjects_RAI_2024;
      } else {
        // Data not available for other branches yet
        return null;
      }
    }
  }

  // Data not available for other semesters/batches yet
  return null;
}
