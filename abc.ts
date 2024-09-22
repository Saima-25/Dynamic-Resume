
interface Resume {
  name: string;
  fatherName: string;
  gender: string;
  cnic: number;
  nationality: string;
  address: string;
  education: string[];
  workExperience: string[];
  skills: string;
}

let resume: Resume = {
  name: "",
  fatherName: "",
  gender: "",
  cnic: 0,
  nationality: "",
  address: "",
  education: [],
  workExperience: [],
  skills: "",
};

const form = document.getElementById("resume-form-id") as HTMLFormElement;

const generateResumeButton = document.querySelector("button") as HTMLButtonElement;

generateResumeButton.addEventListener("click", generateResume);

const educationRow = document.getElementById("educationRow1") as HTMLTableRowElement;
const workExperienceRow = document.getElementById("workExperienceRow1") as HTMLTableRowElement;

let educationIndex = 1;
let workExperienceIndex = 1;

// Add event listeners to add more education and work experience rows
educationRow.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addEducationRow();
  }
});

workExperienceRow.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addWorkExperienceRow();
  }
});

function addEducationRow() {
  const newRow = document.createElement("tr");
  newRow.id = `educationRow${educationIndex + 1}`;
  newRow.innerHTML = `<td><input type="text" id="educationDegree${educationIndex + 1}" /></td>`;
  educationRow.parentNode.appendChild(newRow);
  educationIndex++;
}

function addWorkExperienceRow() {
  const newRow = document.createElement("tr");
  newRow.id = `workExperienceRow${workExperienceIndex + 1}`;
  newRow.innerHTML = `<td><input type="text" id="workExperienceCompany${workExperienceIndex + 1}" /></td>`;
  workExperienceRow.parentNode.appendChild(newRow);
  workExperienceIndex++;
}

function generateResume() {
  // Remove previous resume
  const previousResume = document.getElementById("resume");
  if (previousResume) {
    previousResume.remove();
  }

  // Get form values
  resume.name = (document.getElementById("Sname") as HTMLInputElement).value;
  resume.fatherName = (document.getElementById("LName") as HTMLInputElement).value;
  resume.gender = (document.querySelector("input[name='Gender']:checked") as HTMLInputElement).value;
  resume.cnic = parseInt((document.getElementById("numeric") as HTMLInputElement).value);
  resume.nationality = (document.getElementById("roman") as HTMLInputElement).value;
  resume.address = (document.getElementById("address") as HTMLInputElement).value;

  // Get education and work experience values
  resume.education = [];
  resume.workExperience = [];

  for (let i = 1; i <= educationIndex; i++) {
    const educationInput = document.getElementById(`educationDegree${i}`) as HTMLInputElement;
    resume.education.push(educationInput.value);
  }

  for (let i = 1; i <= workExperienceIndex; i++) {
    const workExperienceInput = document.getElementById(`workExperienceCompany${i}`) as HTMLInputElement;
    resume.workExperience.push(workExperienceInput.value);
  }

  resume.skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate resume
  const resumeDiv = document.createElement("div");
  resumeDiv.id = "resume";

  const resumeHtml = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${resume.name}</p>
    <p><strong>Father Name:</strong> ${resume.fatherName}</p>
    <p><strong>Gender:</strong> ${resume.gender}</p>
    <p><strong>CNIC:</strong> ${resume.cnic}</p>
    <p><strong>Nationality:</strong> ${resume.nationality}</p>
    <p><strong>Address:</strong> ${resume.address}</p>
    <h3>Education:</h3>
    <ul>
      ${resume.education.map((education) => `<li>${education}</li>`).join("")}
    </ul>
    <h3>Work Experience:</h3>
    <ul>
      ${resume.workExperience.map((workExperience) => `<li>${workExperience}</li>`).join("")}
    </ul>
    <h3>Skills:</h3>
    <ul>
      <li>${resume.skills}</li>
    </ul>
  `;

  resumeDiv.innerHTML = resumeHtml;

  // Append resume to body
  document.body.appendChild(resumeDiv);
}
