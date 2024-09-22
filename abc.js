var resume = {
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
var form = document.getElementById("resume-form-id");
var generateResumeButton = document.querySelector("button");
generateResumeButton.addEventListener("click", generateResume);
var educationRow = document.getElementById("educationRow1");
var workExperienceRow = document.getElementById("workExperienceRow1");
var educationIndex = 1;
var workExperienceIndex = 1;
// Add event listeners to add more education and work experience rows
educationRow.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addEducationRow();
    }
});
workExperienceRow.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        addWorkExperienceRow();
    }
});
function addEducationRow() {
    var newRow = document.createElement("tr");
    newRow.id = "educationRow".concat(educationIndex + 1);
    newRow.innerHTML = "<td><input type=\"text\" id=\"educationDegree".concat(educationIndex + 1, "\" /></td>");
    educationRow.parentNode.appendChild(newRow);
    educationIndex++;
}
function addWorkExperienceRow() {
    var newRow = document.createElement("tr");
    newRow.id = "workExperienceRow".concat(workExperienceIndex + 1);
    newRow.innerHTML = "<td><input type=\"text\" id=\"workExperienceCompany".concat(workExperienceIndex + 1, "\" /></td>");
    workExperienceRow.parentNode.appendChild(newRow);
    workExperienceIndex++;
}
function generateResume() {
    // Remove previous resume
    var previousResume = document.getElementById("resume");
    if (previousResume) {
        previousResume.remove();
    }
    // Get form values
    resume.name = document.getElementById("Sname").value;
    resume.fatherName = document.getElementById("LName").value;
    resume.gender = document.querySelector("input[name='Gender']:checked").value;
    resume.cnic = parseInt(document.getElementById("numeric").value);
    resume.nationality = document.getElementById("roman").value;
    resume.address = document.getElementById("address").value;
    // Get education and work experience values
    resume.education = [];
    resume.workExperience = [];
    for (var i = 1; i <= educationIndex; i++) {
        var educationInput = document.getElementById("educationDegree".concat(i));
        resume.education.push(educationInput.value);
    }
    for (var i = 1; i <= workExperienceIndex; i++) {
        var workExperienceInput = document.getElementById("workExperienceCompany".concat(i));
        resume.workExperience.push(workExperienceInput.value);
    }
    resume.skills = document.getElementById("skills").value;
    // Generate resume
    var resumeDiv = document.createElement("div");
    resumeDiv.id = "resume";
    var resumeHtml = "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(resume.name, "</p>\n    <p><strong>Father Name:</strong> ").concat(resume.fatherName, "</p>\n    <p><strong>Gender:</strong> ").concat(resume.gender, "</p>\n    <p><strong>CNIC:</strong> ").concat(resume.cnic, "</p>\n    <p><strong>Nationality:</strong> ").concat(resume.nationality, "</p>\n    <p><strong>Address:</strong> ").concat(resume.address, "</p>\n    <h3>Education:</h3>\n    <ul>\n      ").concat(resume.education.map(function (education) { return "<li>".concat(education, "</li>"); }).join(""), "\n    </ul>\n    <h3>Work Experience:</h3>\n    <ul>\n      ").concat(resume.workExperience.map(function (workExperience) { return "<li>".concat(workExperience, "</li>"); }).join(""), "\n    </ul>\n    <h3>Skills:</h3>\n    <ul>\n      <li>").concat(resume.skills, "</li>\n    </ul>\n  ");
    resumeDiv.innerHTML = resumeHtml;
    // Append resume to body
    document.body.appendChild(resumeDiv);
}
