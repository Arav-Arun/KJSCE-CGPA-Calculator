// KJSSE CGPA Calculator
// Main script for handling UI, calculations, and state.
// Author: Arav Arun | Version: 2.0

// --- Global State ---

// Store current selections
let selectedBranch = null;
let selectedSemester = null;
let selectedBatch = null;
let currentSubjects = [];
let gradePoints = {};

// Load saved state on page load
document.addEventListener("DOMContentLoaded", function () {
  loadState();
});

// --- Constants ---

const branchNames = {
  aids: "Artificial Intelligence & Data Science",
  comp: "Computer Engineering",
  cce: "Computer & Communication Engineering",
  csbs: "Computer Science & Business Systems",
  ece: "Electronics & Computer Engineering",
  extc: "Electronics & Telecommunication Engineering",
  vlsi: "Electronics Engineering (VLSI Design & Technology)",
  it: "Information Technology",
  mech: "Mechanical Engineering",
  rai: "Robotics & Artificial Intelligence",
};

// --- UI Interaction ---

// Validate selection and switch to calculator screen
function proceedToCalculator() {
  const batchDropdown = document.getElementById("batchSelect");
  const branchDropdown = document.getElementById("branchSelect");
  const semesterDropdown = document.getElementById("semesterSelect");

  const batchId = batchDropdown.value;
  const branchId = branchDropdown.value;
  const semesterId = parseInt(semesterDropdown.value);

  // Check if batch is selected
  if (batchId === "") {
    showError("Please select a batch");
    return;
  }

  // Check if branch is selected
  if (branchId === "") {
    showError("Please select a branch");
    return;
  }

  // Check if semester is selected
  if (semesterId === 0 || isNaN(semesterId)) {
    showError("Please select a semester");
    return;
  }

  // Check if examination and credits data is available for given combination
  const subjects = getSubjects(branchId, semesterId, batchId);
  if (subjects === null) {
    showError("Data for the selected combination is not available yet");
    return;
  }

  // Save selections
  selectedBatch = batchId;
  selectedBranch = branchId;
  selectedSemester = semesterId;
  currentSubjects = subjects;
  gradePoints = {};

  // Hide selection screen and show calculator screen
  document.getElementById("selectionScreen").style.display = "none";
  document.getElementById("calculatorScreen").style.display = "block";
  document.getElementById("cgpaCalculatorScreen").style.display = "none";

  // Remove main-card class for calculator view
  document.getElementById("app-container").classList.remove("main-card");
  document.body.classList.remove("body-centered");

  // Update breadcrumb text
  const breadcrumbText = document.getElementById("breadcrumbText");
  breadcrumbText.textContent =
    "Batch " +
    batchId +
    " | " +
    branchNames[branchId] +
    " | Semester " +
    semesterId;

  // Create subject cards
  createSubjectCards();

  // Save state immediately
  saveState();

  // Add listeners to new inputs
  addAutoSaveListeners();
}

// Switch to Overall CGPA Calculator view
function proceedToCGPACalculator() {
  // Hide other screens and show CGPA calculator screen
  document.getElementById("selectionScreen").style.display = "none";
  document.getElementById("calculatorScreen").style.display = "none";
  document.getElementById("cgpaCalculatorScreen").style.display = "block";

  // Remove main-card class for calculator view
  document.getElementById("app-container").classList.remove("main-card");
  document.body.classList.remove("body-centered");

  // Reset CGPA output
  document.getElementById("cgpaOutputSection").innerHTML =
    '<div class="placeholder-text"><h3>Your overall CGPA will appear here</h3></div>';
}

// Show temporary error message
function showError(message) {
  const errorDiv = document.getElementById("selectionError");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Hide after 5 seconds
  setTimeout(function () {
    errorDiv.style.display = "none";
  }, 5000);
}

// --- DOM Generation ---

// Render all subject cards to the grid
function createSubjectCards() {
  const grid = document.getElementById("subjectsGrid");
  grid.innerHTML = ""; // Clear existing cards

  // Loop through each subject and create a card
  let subjectIndex = 0;
  while (subjectIndex < currentSubjects.length) {
    const subject = currentSubjects[subjectIndex];
    const subjectCard = createOneSubjectCard(subject);
    grid.innerHTML = grid.innerHTML + subjectCard;
    subjectIndex = subjectIndex + 1;
  }
}

// Create HTML for a single subject card
function createOneSubjectCard(subject) {
  let html = "";

  // 1. Card Header
  html = html + '<div class="subject-card">';
  html = html + "<h3>" + subject.name + "</h3>";

  // 2. Elective Dropdown (if applicable)
  if (subject.hasOptions && subject.options) {
    html = html + '<div class="input-group">';
    html = html + "<label>Select Elective Course</label>";
    html =
      html +
      '<select id="s' +
      subject.id +
      '-elective" class="elective-dropdown">';
    html = html + '<option value="">-- Choose Your Elective --</option>';

    let optionIndex = 0;
    while (optionIndex < subject.options.length) {
      const option = subject.options[optionIndex];
      html =
        html +
        '<option value="' +
        option.value +
        '">' +
        option.label +
        "</option>";
      optionIndex = optionIndex + 1;
    }

    html = html + "</select>";
    html = html + "</div>";
  }

  // 3. Mark Input Fields
  let fieldIndex = 0;
  while (fieldIndex < subject.fields.length) {
    const field = subject.fields[fieldIndex];

    html = html + '<div class="input-group">';
    html =
      html + "<label>" + field.label + " (out of " + field.max + ")</label>";
    html = html + '<input type="number" ';
    html = html + 'id="s' + subject.id + "-" + field.name + '" ';
    html = html + 'min="0" max="' + field.max + '" step="1" ';
    html = html + 'placeholder="Enter marks" ';

    // Add event listener for prediction
    html = html + 'oninput="updatePrediction(' + subject.id + ')" ';

    html = html + ">";

    // Add prediction text container below ESE input
    if (field.name === "ese") {
      html =
        html +
        '<div id="prediction-' +
        subject.id +
        '" class="prediction-text"></div>';
    }

    html = html + "</div>";

    fieldIndex = fieldIndex + 1;
  }

  // 4. Highest Marks Field
  html = html + '<div class="input-group">';
  html =
    html +
    "<label>Highest Total Marks (Out of " +
    subject.defaultHighest +
    ")</label>";
  html = html + '<input type="number" ';
  html = html + 'id="s' + subject.id + '-highest" ';
  html = html + 'min="0" max="' + subject.defaultHighest + '" step="1" ';
  html =
    html +
    'placeholder="Leave blank to assume ' +
    subject.defaultHighest +
    '" oninput="updatePrediction(' +
    subject.id +
    ')">';
  html = html + "</div>";

  // Add calculate button
  html = html + '<button class="calculate-subject-button" ';
  html = html + 'onclick="calculateSubject(' + subject.id + ')">';
  html = html + "Calculate Subject Pointer</button>";

  // Add result div
  html =
    html + '<div class="subject-result" id="result' + subject.id + '"></div>';
  html = html + "</div>";

  return html;
}

// --- Calculation Logic ---

// Convert percentage to 10-point scale
function getGradePoint(percentage) {
  if (percentage >= 80) {
    return 10;
  }
  if (percentage >= 70) {
    return 9;
  }
  if (percentage >= 60) {
    return 8;
  }
  if (percentage >= 55) {
    return 7;
  }
  if (percentage >= 50) {
    return 6;
  }
  if (percentage >= 45) {
    return 5;
  }
  if (percentage >= 40) {
    return 4;
  }
  return 0;
}

// Calculate pointer for a single subject
function calculateSubject(subjectId) {
  // Finding the subject
  let subject = null;
  let i = 0;
  while (i < currentSubjects.length) {
    if (currentSubjects[i].id === subjectId) {
      subject = currentSubjects[i];
      break;
    }
    i = i + 1;
  }

  const resultDiv = document.getElementById("result" + subjectId);

  // Get all field values and calculate total
  let total = 0;
  let allFilled = true;

  let fieldIndex = 0;
  while (fieldIndex < subject.fields.length) {
    const field = subject.fields[fieldIndex];
    const inputId = "s" + subjectId + "-" + field.name;
    const inputElement = document.getElementById(inputId);
    const value = inputElement.value;

    // Check if field is filled
    if (value === "") {
      allFilled = false;
      break;
    }

    const numValue = parseFloat(value);

    // Check if valid number is entered
    if (isNaN(numValue)) {
      allFilled = false;
      break;
    }

    // Check if within range
    if (numValue < 0 || numValue > field.max) {
      allFilled = false;
      break;
    }

    total = total + numValue;
    fieldIndex = fieldIndex + 1;
  }

  // Warning message if not all fields are filled correctly
  if (allFilled === false) {
    resultDiv.innerHTML =
      "<strong style='color: #ff6b6b;'>Fill all fields correctly !</strong>";
    resultDiv.style.display = "block";
    gradePoints[subjectId] = 0;
    return;
  }

  // Fetch highest marks
  const highestInput = document.getElementById("s" + subjectId + "-highest");
  let highest = parseFloat(highestInput.value);
  if (isNaN(highest) || highest === 0) {
    highest = subject.defaultHighest;
  }

  // Validate highest marks doesn't exceed default maximum
  if (highest > subject.defaultHighest) {
    resultDiv.innerHTML =
      "<strong style='color: #ff6b6b;'>Highest marks cannot exceed " +
      subject.defaultHighest +
      " !</strong>";
    resultDiv.style.display = "block";
    gradePoints[subjectId] = 0;
    return;
  }

  // Calculate percentage
  const percentage = (total / highest) * 100;

  // Get grade point
  const gradePoint = getGradePoint(percentage);

  // Save grade point
  gradePoints[subjectId] = gradePoint;

  // Show result
  let resultHTML = "";
  resultHTML =
    resultHTML +
    "<strong>Total Marks:</strong> " +
    total.toFixed(2) +
    "/" +
    highest.toFixed(2) +
    "<br>";
  resultHTML =
    resultHTML +
    "<strong>Percentage:</strong> " +
    percentage.toFixed(2) +
    "%<br>";
  resultHTML = resultHTML + "<strong>Subject Pointer:</strong> " + gradePoint;

  resultDiv.innerHTML = resultHTML;
  resultDiv.style.display = "block";
}

// Verify if all fields have valid inputs
function checkAllSubjectsFilled() {
  let subjectIndex = 0;
  while (subjectIndex < currentSubjects.length) {
    const subject = currentSubjects[subjectIndex];

    let fieldIndex = 0;
    while (fieldIndex < subject.fields.length) {
      const field = subject.fields[fieldIndex];
      const inputId = "s" + subject.id + "-" + field.name;
      const inputElement = document.getElementById(inputId);
      const value = inputElement.value;

      if (value === "" || isNaN(parseFloat(value))) {
        return false;
      }

      fieldIndex = fieldIndex + 1;
    }

    subjectIndex = subjectIndex + 1;
  }
  return true;
}

// Calculate and display Overall SGPA
function calculateOverallSGPA() {
  // Check if all subjects have marks, if not show warning
  if (checkAllSubjectsFilled() === false) {
    const outputSection = document.getElementById("outputSection");
    outputSection.innerHTML = '<div class="placeholder-text">';
    outputSection.innerHTML =
      outputSection.innerHTML +
      '<h3 style="color: #ff6b6b;">Please enter marks for all subjects !</h3>';
    outputSection.innerHTML = outputSection.innerHTML + "</div>";
    outputSection.scrollIntoView({ behavior: "smooth" });
    return;
  }

  // Calculate grade points for all subjects
  let i = 0;
  while (i < currentSubjects.length) {
    calculateSubject(currentSubjects[i].id);
    i = i + 1;
  }

  // Calculate total credit points and credits
  let totalCreditPoints = 0;
  let totalCredits = 0;

  let subjectIndex = 0;
  while (subjectIndex < currentSubjects.length) {
    const subject = currentSubjects[subjectIndex];
    let gp = gradePoints[subject.id];
    if (gp === undefined) {
      gp = 0;
    }
    totalCreditPoints = totalCreditPoints + gp * subject.credits;
    totalCredits = totalCredits + subject.credits;
    subjectIndex = subjectIndex + 1;
  }

  // Calculate SGPA
  const sgpa = totalCreditPoints / totalCredits;

  // Output HTML
  let output = "";
  output = output + '<div class="sgpa-display">';
  output = output + '<div class="label">Overall SGPA:</div>';
  output = output + '<div class="value">' + sgpa.toFixed(2) + "</div>";
  output = output + "</div>";

  output = output + '<h4 class="breakdown-title">Subject Breakdown:</h4>';
  output = output + '<div class="table-responsive">';
  output = output + '<table class="breakdown-table">';
  output = output + "<thead><tr>";
  output = output + "<th>Subject</th>";
  output = output + "<th>Grade Point</th>";
  output = output + "<th>Credits</th>";
  output = output + "<th>Credit Points</th>";
  output = output + "</tr></thead>";
  output = output + "<tbody>";

  // Add each subject's breakdown
  let j = 0;
  while (j < currentSubjects.length) {
    const subject = currentSubjects[j];
    let gp = gradePoints[subject.id];
    if (gp === undefined) {
      gp = 0;
    }
    const creditPoints = gp * subject.credits;

    let displayName = subject.name;
    // Check if it's an elective and get the specific selected name
    if (subject.hasOptions) {
      const electiveSelect = document.getElementById(
        "s" + subject.id + "-elective"
      );
      if (electiveSelect && electiveSelect.value) {
        const selectedOption = subject.options.find(
          (opt) => opt.value === electiveSelect.value
        );
        if (selectedOption) {
          displayName = selectedOption.label;
        }
      }
    }

    output = output + "<tr>";
    output = output + "<td>" + displayName + "</td>";
    output = output + "<td>" + gp + "</td>";
    output = output + "<td>" + subject.credits + "</td>";
    output = output + "<td>" + creditPoints.toFixed(2) + "</td>";
    output = output + "</tr>";

    j = j + 1;
  }

  output = output + "</tbody></table></div>";

  // Add summary
  output = output + '<div class="summary-box">';
  output =
    output +
    "<strong>Total Credit Points:</strong> " +
    totalCreditPoints.toFixed(2) +
    " | ";
  output = output + "<strong>Total Credits:</strong> " + totalCredits + " | ";
  output = output + "<strong>SGPA:</strong> " + sgpa.toFixed(2);
  output = output + "</div>";

  // Display output
  document.getElementById("outputSection").innerHTML = output;
  document.getElementById("printContainer").style.display = "block";
  document
    .getElementById("outputSection")
    .scrollIntoView({ behavior: "smooth" });

  // Trigger celebration if SGPA is excellent
  if (sgpa >= 9.0) {
    triggerConfetti();
  }
}

// Calculate and display Overall CGPA
function calculateCGPA() {
  let totalCreditPoints = 0;
  let totalCredits = 0;
  let semestersEntered = 0;

  // Loop through all 8 semesters
  let sem = 1;
  while (sem <= 8) {
    const sgpaInput = document.getElementById("sgpa" + sem);
    const creditsInput = document.getElementById("credits" + sem);

    const sgpaValue = parseFloat(sgpaInput.value);
    const creditsValue = parseFloat(creditsInput.value);

    // If both SGPA and credits are entered for this semester
    if (
      !isNaN(sgpaValue) &&
      !isNaN(creditsValue) &&
      sgpaValue > 0 &&
      creditsValue > 0
    ) {
      // Validate SGPA is between 0 and 10
      if (sgpaValue > 10) {
        const outputSection = document.getElementById("cgpaOutputSection");
        outputSection.innerHTML = '<div class="placeholder-text">';
        outputSection.innerHTML =
          outputSection.innerHTML +
          '<h3 style="color: #ff6b6b;">SGPA for Semester ' +
          sem +
          " cannot exceed 10!</h3>";
        outputSection.innerHTML = outputSection.innerHTML + "</div>";
        return;
      }

      totalCreditPoints = totalCreditPoints + sgpaValue * creditsValue;
      totalCredits = totalCredits + creditsValue;
      semestersEntered = semestersEntered + 1;
    }

    sem = sem + 1;
  }

  // Check if at least one semester is entered
  if (semestersEntered === 0) {
    const outputSection = document.getElementById("cgpaOutputSection");
    outputSection.innerHTML = '<div class="placeholder-text">';
    outputSection.innerHTML =
      outputSection.innerHTML +
      '<h3 style="color: #ff6b6b;">Please enter data for at least one semester!</h3>';
    outputSection.innerHTML = outputSection.innerHTML + "</div>";
    return;
  }

  // Calculate CGPA
  const cgpa = totalCreditPoints / totalCredits;

  // Build output HTML
  let output = "";
  output = output + '<div class="sgpa-display">';
  output = output + '<div class="label">Overall CGPA:</div>';
  output = output + '<div class="value">' + cgpa.toFixed(2) + "</div>";
  output = output + "</div>";

  output = output + '<h4 class="breakdown-title">Semester Breakdown:</h4>';
  output = output + '<div class="table-responsive">';
  output = output + '<table class="breakdown-table">';
  output = output + "<thead><tr>";
  output = output + "<th>Semester</th>";
  output = output + "<th>SGPA</th>";
  output = output + "<th>Credits</th>";
  output = output + "<th>Credit Points</th>";
  output = output + "</tr></thead>";
  output = output + "<tbody>";

  // Add each semester's breakdown
  let s = 1;
  while (s <= 8) {
    const sgpaInput = document.getElementById("sgpa" + s);
    const creditsInput = document.getElementById("credits" + s);

    const sgpaValue = parseFloat(sgpaInput.value);
    const creditsValue = parseFloat(creditsInput.value);

    if (
      !isNaN(sgpaValue) &&
      !isNaN(creditsValue) &&
      sgpaValue > 0 &&
      creditsValue > 0
    ) {
      const creditPoints = sgpaValue * creditsValue;

      output = output + "<tr>";
      output = output + "<td>Semester " + s + "</td>";
      output = output + "<td>" + sgpaValue.toFixed(2) + "</td>";
      output = output + "<td>" + creditsValue + "</td>";
      output = output + "<td>" + creditPoints.toFixed(2) + "</td>";
      output = output + "</tr>";
    }

    s = s + 1;
  }

  output = output + "</tbody></table></div>";

  // Add summary
  output = output + '<div class="summary-box">';
  output =
    output +
    "<strong>Total Credit Points:</strong> " +
    totalCreditPoints.toFixed(2) +
    " | ";
  output = output + "<strong>Total Credits:</strong> " + totalCredits + " | ";
  output =
    output + "<strong>Semesters Included:</strong> " + semestersEntered + " | ";
  output = output + "<strong>CGPA:</strong> " + cgpa.toFixed(2);
  output = output + "</div>";

  // Add print button dynamically
  output =
    output +
    '<div class="print-container"><button class="print-button" onclick="printOverallResult()">Print Result</button></div>';

  // Display output
  document.getElementById("cgpaOutputSection").innerHTML = output;
  // document.getElementById("printOverallContainer").style.display = "block"; // Removed static container logic
  document
    .getElementById("cgpaOutputSection")
    .scrollIntoView({ behavior: "smooth" });

  // Trigger celebration if CGPA is excellent
  if (cgpa >= 9.0) {
    triggerConfetti();
  }
}

// --- Helper Functions ---

// Reset everything and go back to home screen
function changeSelection() {
  // Reset everything
  selectedBatch = null;
  selectedBranch = null;
  selectedSemester = null;
  currentSubjects = [];
  gradePoints = {};

  // Clear calculator
  document.getElementById("subjectsGrid").innerHTML = "";
  document.getElementById("outputSection").innerHTML =
    '<div class="placeholder-text"><h3>Your overall SGPA will appear here</h3></div>';

  // Clear CGPA calculator
  let sem = 1;
  while (sem <= 8) {
    document.getElementById("sgpa" + sem).value = "";
    document.getElementById("credits" + sem).value = "";
    sem = sem + 1;
  }
  document.getElementById("cgpaOutputSection").innerHTML =
    '<div class="placeholder-text"><h3>Your overall CGPA will appear here</h3></div>';

  // Reset dropdowns
  document.getElementById("batchSelect").value = "";
  document.getElementById("branchSelect").value = "";
  document.getElementById("semesterSelect").value = "";

  // Show selection screen, hide calculators
  document.getElementById("selectionScreen").style.display = "flex";
  document.getElementById("calculatorScreen").style.display = "none";
  document.getElementById("cgpaCalculatorScreen").style.display = "none";

  // Add main-card class for selection view
  document.getElementById("app-container").classList.add("main-card");
  document.body.classList.add("body-centered");
}

/**
 * Opens the formula explanation modal.
 */
function openFormulaModal() {
  const modal = document.getElementById("formulaModal");
  modal.classList.add("show");
}

/**
 * Closes the formula explanation modal.
 */
function closeFormulaModal() {
  const modal = document.getElementById("formulaModal");
  modal.classList.remove("show");
}

/**
 * Closes the modal if the user clicks the backdrop (outside the modal content).
 * @param {Event} event - The click event.
 */
function closeModalOnClickOutside(event) {
  if (event.target.id === "formulaModal") {
    closeFormulaModal();
  }
}

// Update "Marks Needed in ESE" prediction
function updatePrediction(subjectId) {
  // Find the subject
  let subject = null;
  let i = 0;
  while (i < currentSubjects.length) {
    if (currentSubjects[i].id === subjectId) {
      subject = currentSubjects[i];
      break;
    }
    i = i + 1;
  }

  if (!subject) return;

  // Check if subject has ESE
  let hasESE = false;
  let eseMax = 0;
  let j = 0;
  while (j < subject.fields.length) {
    if (subject.fields[j].name === "ese") {
      hasESE = true;
      eseMax = subject.fields[j].max;
      break;
    }
    j++;
  }

  if (!hasESE) return;

  const predictionDiv = document.getElementById("prediction-" + subjectId);
  const eseInput = document.getElementById("s" + subjectId + "-ese");

  // If ESE marks are entered, hide prediction
  if (eseInput.value !== "") {
    predictionDiv.innerHTML = "";
    return;
  }

  // Calculate current total from other fields (IA, MSE, etc.)
  let currentTotal = 0;
  let k = 0;
  while (k < subject.fields.length) {
    const field = subject.fields[k];
    if (field.name !== "ese") {
      const inputId = "s" + subjectId + "-" + field.name;
      const val = parseFloat(document.getElementById(inputId).value);
      if (!isNaN(val)) {
        currentTotal += val;
      }
    }
    k++;
  }

  // Get highest marks (default or custom)
  const highestInput = document.getElementById("s" + subjectId + "-highest");
  let highest = parseFloat(highestInput.value);
  if (isNaN(highest) || highest === 0) {
    highest = subject.defaultHighest;
  }

  // Calculate required totals
  const requiredFor10 = 0.8 * highest; // 80% for 10 pointer
  const requiredFor9 = 0.7 * highest; // 70% for 9 pointer

  // Calculate required ESE
  const needFor10 = Math.ceil(requiredFor10 - currentTotal);
  const needFor9 = Math.ceil(requiredFor9 - currentTotal);

  let predictionHTML = "";

  if (needFor10 <= eseMax) {
    if (needFor10 <= 0) {
      predictionHTML +=
        "<span class='predict-success'>Already secured 10 Pointer!</span>";
    } else {
      predictionHTML +=
        "Need <strong>" +
        needFor10 +
        "</strong>/" +
        eseMax +
        " in ESE for 10 Pt";
    }
  } else {
    predictionHTML += "<span class='predict-fail'>10 Pt not possible</span>";
  }

  predictionHTML += " | ";

  if (needFor9 <= eseMax) {
    if (needFor9 <= 0) {
      predictionHTML +=
        "<span class='predict-success'>Already secured 9 Pointer!</span>";
    } else {
      predictionHTML +=
        "Need <strong>" + needFor9 + "</strong>/" + eseMax + " in ESE for 9 Pt";
    }
  } else {
    predictionHTML += "<span class='predict-fail'>9 Pt not possible</span>";
  }

  predictionDiv.innerHTML = predictionHTML;
}

// Fire confetti animation!
function triggerConfetti() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    );
  }, 250);
}

// --- State Management ---

// Save current state to LocalStorage
function saveState() {
  const state = {
    batch: selectedBatch,
    branch: selectedBranch,
    semester: selectedSemester,
    marks: {},
    cgpa: {},
  };

  // Save marks for current subjects
  if (currentSubjects && currentSubjects.length > 0) {
    let i = 0;
    while (i < currentSubjects.length) {
      const subject = currentSubjects[i];
      const subjectMarks = {};

      // Save elective selection if applicable
      if (subject.hasOptions) {
        const electiveSelect = document.getElementById(
          "s" + subject.id + "-elective"
        );
        if (electiveSelect) {
          subjectMarks.elective = electiveSelect.value;
        }
      }

      // Save field values
      let j = 0;
      while (j < subject.fields.length) {
        const field = subject.fields[j];
        const inputId = "s" + subject.id + "-" + field.name;
        const inputElement = document.getElementById(inputId);
        if (inputElement) {
          subjectMarks[field.name] = inputElement.value;
        }
        j++;
      }

      // Save highest marks override
      const highestInput = document.getElementById(
        "s" + subject.id + "-highest"
      );
      if (highestInput) {
        subjectMarks.highest = highestInput.value;
      }

      state.marks[subject.id] = subjectMarks;
      i++;
    }
  }

  // Save CGPA calculation inputs
  let s = 1;
  while (s <= 8) {
    const sgpaInput = document.getElementById("sgpa" + s);
    const creditsInput = document.getElementById("credits" + s);
    if (sgpaInput && creditsInput) {
      state.cgpa[s] = {
        sgpa: sgpaInput.value,
        credits: creditsInput.value,
      };
    }
    s++;
  }

  localStorage.setItem("cgpaCalcState", JSON.stringify(state));
}

// Attach listeners to all inputs for auto-saving
function addAutoSaveListeners() {
  const inputs = document.querySelectorAll("input, select");
  inputs.forEach((input) => {
    input.addEventListener("input", saveState);
    input.addEventListener("change", saveState);
  });
}

// Load saved state from LocalStorage
function loadState() {
  const savedState = localStorage.getItem("cgpaCalcState");
  if (!savedState) return;

  const state = JSON.parse(savedState);

  // Restore CGPA inputs
  if (state.cgpa) {
    for (let s = 1; s <= 8; s++) {
      if (state.cgpa[s]) {
        const sgpaInput = document.getElementById("sgpa" + s);
        const creditsInput = document.getElementById("credits" + s);
        if (sgpaInput && creditsInput) {
          sgpaInput.value = state.cgpa[s].sgpa || "";
          creditsInput.value = state.cgpa[s].credits || "";
        }
      }
    }
  }

  // Restore Sessional selection if exists
  if (state.batch && state.branch && state.semester) {
    const batchSelect = document.getElementById("batchSelect");
    const branchSelect = document.getElementById("branchSelect");
    const semesterSelect = document.getElementById("semesterSelect");

    if (batchSelect && branchSelect && semesterSelect) {
      batchSelect.value = state.batch;
      branchSelect.value = state.branch;
      semesterSelect.value = state.semester;

      // Only auto-proceed if all values are valid
      if (state.batch && state.branch && state.semester) {
        // Wait for potential async ops or simply allow UI to update
        setTimeout(() => {
          proceedToCalculator();

          // After creating cards, fill in the marks
          setTimeout(() => {
            if (state.marks) {
              Object.keys(state.marks).forEach((subjectId) => {
                const marks = state.marks[subjectId];
                if (marks) {
                  // Restore elective
                  if (marks.elective) {
                    const electiveSelect = document.getElementById(
                      "s" + subjectId + "-elective"
                    );
                    if (electiveSelect) {
                      electiveSelect.value = marks.elective;
                    }
                  }

                  // Restore highest marks
                  if (marks.highest) {
                    const highestInput = document.getElementById(
                      "s" + subjectId + "-highest"
                    );
                    if (highestInput) {
                      highestInput.value = marks.highest;
                    }
                  }

                  // Restore mark fields
                  Object.keys(marks).forEach((key) => {
                    if (key !== "elective" && key !== "highest") {
                      const inputElement = document.getElementById(
                        "s" + subjectId + "-" + key
                      );
                      if (inputElement) {
                        inputElement.value = marks[key];
                        // Trigger prediction update
                        updatePrediction(parseInt(subjectId));
                      }
                    }
                  });
                }
              });
            }
          }, 100);
        }, 100);
      }
    }
  }

  // Add listeners to globally available CGPA inputs
  addAutoSaveListeners();
}
