// --- Print Functions ---

function printResult() {
  // Set Print Title
  document.getElementById("printTitleSGPA").textContent =
    "KJSSE Semester " + selectedSemester + " SGPA Report";

  // Set Student Details
  document.getElementById("printBatch").textContent = selectedBatch;
  document.getElementById("printBranch").textContent =
    branchNames[selectedBranch];
  document.getElementById("printSemester").textContent = selectedSemester;

  const tbody = document.getElementById("printTableBody");
  tbody.innerHTML = "";

  let totalCreditPoints = 0;
  let totalCredits = 0;

  let i = 0;
  while (i < currentSubjects.length) {
    const subject = currentSubjects[i];
    let gp = gradePoints[subject.id];
    if (gp === undefined) gp = 0;
    const creditPoints = gp * subject.credits;

    totalCreditPoints += creditPoints;
    totalCredits += subject.credits;

    // Get marks breakdown string
    let marksBreakdown = [];
    let totalMarks = 0;
    let highestTotal = 0;

    let j = 0;
    while (j < subject.fields.length) {
      const field = subject.fields[j];
      const inputId = "s" + subject.id + "-" + field.name;
      const val = document.getElementById(inputId).value;
      marksBreakdown.push(field.label.split(" (")[0] + ": " + val);
      totalMarks += parseFloat(val) || 0;
      j++;
    }

    // Get highest marks
    const highestInput = document.getElementById("s" + subject.id + "-highest");
    let highest = parseFloat(highestInput.value);
    if (isNaN(highest) || highest === 0) {
      highest = subject.defaultHighest;
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${subject.name}</td>
      <td>${marksBreakdown.join(", ")}</td>
      <td>${totalMarks.toFixed(0)} / ${highest}</td>
      <td>${subject.credits}</td>
      <td>${gp}</td>
      <td>${creditPoints.toFixed(0)}</td>
    `;
    tbody.appendChild(tr);
    i++;
  }

  // Calculate SGPA
  const sgpa = totalCredits > 0 ? totalCreditPoints / totalCredits : 0;

  // Footer
  const tfoot = document.getElementById("printTableFooter");
  tfoot.innerHTML = `
    <tr>
      <td colspan="3" style="text-align: right;">Total:</td>
      <td>${totalCredits}</td>
      <td>SGPA: ${sgpa.toFixed(2)}</td>
      <td>${totalCreditPoints.toFixed(0)}</td>
    </tr>
  `;

  const printArea = document.getElementById("printAreaSGPA");
  printArea.classList.add("printable");
  // Delay print to ensure DOM updates are rendered
  setTimeout(() => {
    window.print();
    // Remove class after print dialog closes (or a reasonable timeout)
    // Note: On mobile, print might be async, so we can't perfectly detect close.
    // But keeping it printable for a moment is fine.
    setTimeout(() => {
      printArea.classList.remove("printable");
    }, 500);
  }, 100);
}

function printOverallResult() {
  const tbody = document.getElementById("printOverallTableBody");
  tbody.innerHTML = "";

  let totalCreditPoints = 0;
  let totalCredits = 0;
  let semestersEntered = 0;

  let sem = 1;
  while (sem <= 8) {
    const sgpaInput = document.getElementById("sgpa" + sem);
    const creditsInput = document.getElementById("credits" + sem);

    const sgpaValue = parseFloat(sgpaInput.value);
    const creditsValue = parseFloat(creditsInput.value);

    if (
      !isNaN(sgpaValue) &&
      !isNaN(creditsValue) &&
      sgpaValue > 0 &&
      creditsValue > 0
    ) {
      const creditPoints = sgpaValue * creditsValue;
      totalCreditPoints += creditPoints;
      totalCredits += creditsValue;
      semestersEntered++;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>Semester ${sem}</td>
        <td>${sgpaValue.toFixed(2)}</td>
      `;
      tbody.appendChild(tr);
    }
    sem++;
  }

  if (semestersEntered === 0) {
    alert("Please calculate the CGPA first!");
    return;
  }

  const cgpa = totalCreditPoints / totalCredits;

  // Footer
  const tfoot = document.getElementById("printOverallTableFooter");
  tfoot.innerHTML = `
    <tr>
      <td style="text-align: right; font-weight: bold;">Final CGPA:</td>
      <td style="font-weight: bold;">${cgpa.toFixed(2)}</td>
    </tr>
  `;

  const printArea = document.getElementById("printAreaOverall");
  printArea.classList.add("printable");
  // Delay print to ensure DOM updates are rendered
  setTimeout(() => {
    window.print();
    setTimeout(() => {
      printArea.classList.remove("printable");
    }, 500);
  }, 100);
}
