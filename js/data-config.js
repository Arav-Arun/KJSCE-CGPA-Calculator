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

// Semester 2 subjects for ALL branches - Batch 2025-2029
// Common subjects for all branches
const semester2CommonSubjects = [
  {
    id: 201,
    name: "Applied Mathematics – II (Theory)",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 211,
    name: "Applied Mathematics – II (Tutorial)",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 203,
    name: "Digital Logic Design",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 204,
    name: "Environmental Science",
    credits: 2,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 205,
    name: "Object-Oriented Programming Methodology",
    credits: 3,
    fields: [
      { name: "ca", label: "Continuous Assessment (CA)", max: 50 },
      { name: "practical", label: "Practical / OR Exam", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 206,
    name: "Presentation and Communication Skills",
    credits: 2,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 207,
    name: "Applied Science Laboratory - II",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 209,
    name: "Digital Logic Design Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 210,
    name: "Maker Space Laboratory – II",
    credits: 1,
    fields: [
      { name: "lab", label: "Lab CA", max: 50 },
      { name: "project", label: "Project Evaluation", max: 50 },
    ],
    defaultHighest: 100,
  },
];

// Branch-specific subject for Computer & Allied Programs
const semester2Subject_ComputerAllied = {
  id: 202,
  name: "Applied Science for Computer & Allied Programs",
  credits: 3,
  fields: [
    { name: "ia", label: "Internal Assessment (IA)", max: 20 },
    { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
    { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
  ],
  defaultHighest: 100,
};

// Branch-specific subject for Electronics & Allied Programs
const semester2Subject_ElectronicsAllied = {
  id: 202,
  name: "Applied Science for Electronics & Allied Programs",
  credits: 3,
  fields: [
    { name: "ia", label: "Internal Assessment (IA)", max: 20 },
    { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
    { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
  ],
  defaultHighest: 100,
};

// Branch-specific subjects for Mechanical & RAI Programs
const semester2Subjects_MechRAI = [
  {
    id: 202,
    name: "Engineering Mechanics",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "mse", label: "Mid-Semester Exam (MSE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 208,
    name: "Engineering Mechanics Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
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

// Semester 4 subjects for Computer Engineering - Batch 2024-2028
const semester4Subjects_COMP_2024 = [
  {
    id: 401,
    name: "Probability, Statistics and Optimization Techniques (Theory)",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 411,
    name: "Probability, Statistics and Optimization Techniques (Tutorial)",
    credits: 1,
    fields: [{ name: "tutorial", label: "Tutorial/LAB CA", max: 25 }],
    defaultHighest: 25,
  },
  {
    id: 402,
    name: "Analysis of Algorithms",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 403,
    name: "Relational Database Management Systems",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 404,
    name: "Operating Systems",
    credits: 3,
    fields: [
      { name: "ia", label: "Internal Assessment (IA)", max: 20 },
      { name: "ise", label: "In-Semester Exam (ISE)", max: 30 },
      { name: "ese", label: "End-Semester Exam (ESE)", max: 50 },
    ],
    defaultHighest: 100,
  },
  {
    id: 405,
    name: "Open Elective (Generic)",
    credits: 3,
    fields: [{ name: "ca", label: "Continuous Assessment (CA)", max: 100 }],
    defaultHighest: 100,
    hasOptions: true,
    options: [
      { value: "216U06R401", label: "Ancient Indian Iconography" },
      { value: "216U06R402", label: "French Culture and Civilization" },
      { value: "216U06R403", label: "German Culture and Society" },
      { value: "216U06R404", label: "Indian Cinema: History and Appreciation" },
      { value: "216U06R405", label: "Indian Civilization" },
      { value: "216U06R406", label: "Literature of Resistance" },
      { value: "216U06R407", label: "Marathi Kavita" },
      { value: "216U06R408", label: "Maritime Seafaring and Shipbuilding" },
      { value: "216U06R409", label: "Mountains, People and Cultures" },
      { value: "216U06R410", label: "Philosophy of Science" },
      {
        value: "216U06R411",
        label: "The Non-Human Species Depicted in Literature",
      },
      { value: "216U06R412", label: "World Civilizations" },
      { value: "216U06R413", label: "Physics and Philosophy" },
    ],
  },
  {
    id: 406,
    name: "Competitive Programming Laboratory",
    credits: 2,
    fields: [{ name: "lab", label: "Lab/TUT CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 407,
    name: "Analysis of Algorithms Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 408,
    name: "Relational Database Management Systems Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 409,
    name: "Operating Systems Laboratory",
    credits: 1,
    fields: [{ name: "lab", label: "Lab CA", max: 50 }],
    defaultHighest: 50,
  },
  {
    id: 410,
    name: "Web Programming Laboratory",
    credits: 3,
    fields: [{ name: "lab", label: "Lab/TUT CA", max: 75 }],
    defaultHighest: 75,
  },
];

// Get subjects for a branch, semester, and batch
function getSubjects(branchId, semesterId, batchId) {
  // Batch 2025-2029
  if (batchId === "2025-2029") {
    if (semesterId === 1) {
      return semester1Subjects;
    }

    // Semester 2 - Branch-specific logic
    if (semesterId === 2) {
      // Define branch groups
      const computerAlliedBranches = ["aids", "comp", "cce", "csbs", "it"];
      const electronicsAlliedBranches = ["ece", "extc", "vlsi"];
      const mechRAIBranches = ["mech", "rai"];

      // Computer & Allied Programs
      if (computerAlliedBranches.includes(branchId)) {
        return [...semester2CommonSubjects, semester2Subject_ComputerAllied];
      }

      // Electronics & Allied Programs
      if (electronicsAlliedBranches.includes(branchId)) {
        return [...semester2CommonSubjects, semester2Subject_ElectronicsAllied];
      }

      // Mechanical & RAI Programs
      if (mechRAIBranches.includes(branchId)) {
        return [...semester2CommonSubjects, ...semester2Subjects_MechRAI];
      }

      // If branch not found in any group, return null
      return null;
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
    // Semester 4 for Computer Engineering
    if (semesterId === 4) {
      if (branchId === "comp") {
        return semester4Subjects_COMP_2024;
      } else {
        // Data not available for other branches yet
        return null;
      }
    }
  }

  // Data not available for other semesters/batches yet
  return null;
}
