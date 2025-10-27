// Store current selections
let selectedBranch = null;
let selectedSemester = null;
let currentSubjects = []; // Store subjects for current selection
let gradePoints = {}; // Store calculated grade points

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

// When user clicks "Proceed to Calculator"
function proceedToCalculator() {
  const branchDropdown = document.getElementById("branchSelect");
  const semesterDropdown = document.getElementById("semesterSelect");

  const branchId = branchDropdown.value;
  const semesterId = parseInt(semesterDropdown.value);

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

  // Check is examination and credits data is available for given semester
  const subjects = getSubjects(branchId, semesterId);
  if (subjects === null) {
    showError("Data for the selected semester is not available yet");
    return;
  }

  // Save selections
  selectedBranch = branchId;
  selectedSemester = semesterId;
  currentSubjects = subjects;
  gradePoints = {};

  // Hide selection screen and show calculator screen
  document.getElementById("selectionScreen").style.display = "none";
  document.getElementById("calculatorScreen").style.display = "block";

  // Update BackNav to selection screen breadcrumb text
  const breadcrumbText = document.getElementById("breadcrumbText");
  breadcrumbText.textContent =
    branchNames[branchId] + " - Semester " + semesterId;

  // Create subject cards
  createSubjectCards();
}

// Show error message on selection screen
function showError(message) {
  const errorDiv = document.getElementById("selectionError");
  errorDiv.textContent = message;
  errorDiv.style.display = "block";

  // Hide after 5 seconds
  setTimeout(function () {
    errorDiv.style.display = "none";
  }, 5000);
}

// Create all subject cards
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

// Creating HTML for one subject card
function createOneSubjectCard(subject) {
  let html = "";

  // Card header
  html = html + '<div class="subject-card">';
  html = html + "<h3>" + subject.name + "</h3>";

  // Adding input fields for each component
  let fieldIndex = 0;
  while (fieldIndex < subject.fields.length) {
    const field = subject.fields[fieldIndex];

    html = html + '<div class="input-group">';
    html =
      html + "<label>" + field.label + " (out of " + field.max + ")</label>";
    html = html + '<input type="number" ';
    html = html + 'id="s' + subject.id + "-" + field.name + '" ';
    html = html + 'min="0" max="' + field.max + '" step="1" ';
    html = html + 'placeholder="Enter marks">';
    html = html + "</div>";

    fieldIndex = fieldIndex + 1;
  }

  // Add highest marks field
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
    '">';
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

//percentage to grade point conversion
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

// Calculate grade point for one subject
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

// Check if all subjects marks have been entered
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

// Calculate overall SGPA
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
    const gp = gradePoints[subject.id];
    if (gp === undefined) {
      gp = 0;
    }
    totalCreditPoints = totalCreditPoints + gp * subject.credits;
    totalCredits = totalCredits + subject.credits;
    subjectIndex = subjectIndex + 1;
  }

  // Calculate SGPA
  const sgpa = totalCreditPoints / totalCredits;

  //output HTML
  let output = "";
  output = output + '<div class="sgpa-display">';
  output = output + '<div class="label">Overall SGPA:</div>';
  output = output + '<div class="value">' + sgpa.toFixed(2) + "</div>";
  output = output + "</div>";

  output = output + '<h4 class="breakdown-title">Subject Breakdown:</h4>';
  output = output + '<ul class="breakdown-list">';

  // Add each subject's breakdown
  let j = 0;
  while (j < currentSubjects.length) {
    const subject = currentSubjects[j];
    let gp = gradePoints[subject.id];
    if (gp === undefined) {
      gp = 0;
    }
    const creditPoints = gp * subject.credits;

    output = output + "<li>";
    output = output + "<strong>" + subject.name + "</strong><br>";
    output = output + "Grade Point: " + gp + " × Credits: " + subject.credits;
    output = output + " = " + creditPoints.toFixed(2) + " points";
    output = output + "</li>";

    j = j + 1;
  }

  output = output + "</ul>";

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

  //Display output
  document.getElementById("outputSection").innerHTML = output;
  document
    .getElementById("outputSection")
    .scrollIntoView({ behavior: "smooth" });
}

// Back to selection screen
function changeSelection() {
  // Reset everything
  selectedBranch = null;
  selectedSemester = null;
  currentSubjects = [];
  gradePoints = {};

  // Clear calculator
  document.getElementById("subjectsGrid").innerHTML = "";
  document.getElementById("outputSection").innerHTML =
    '<div class="placeholder-text"><h3>Your overall SGPA will appear here</h3></div>';

  // Reset dropdowns
  document.getElementById("branchSelect").value = "";
  document.getElementById("semesterSelect").value = "";

  // Show selection screen, hide calculator
  document.getElementById("selectionScreen").style.display = "flex";
  document.getElementById("calculatorScreen").style.display = "none";
}

// Open formula modal
function openFormulaModal() {
  const modal = document.getElementById("formulaModal");
  modal.classList.add("show");
}

// Close formula modal
function closeFormulaModal() {
  const modal = document.getElementById("formulaModal");
  modal.classList.remove("show");
}

// Close modal when clicking outside
function closeModalOnClickOutside(event) {
  if (event.target.id === "formulaModal") {
    closeFormulaModal();
  }
}
