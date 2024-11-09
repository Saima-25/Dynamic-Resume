interface ResumeData {
    name: string;
    fatherName: string;
    gender: string;
    education: string;
    workExperience: string;
    skills: string;
  }
  
  // Function to generate resume
  function generateResume(data: ResumeData): string {
    return `
  **${data.name}**
  **Father Name:** ${data.fatherName}
  **Gender:** ${data.gender}
  
  **Education:** ${data.education}
  **Work Experience:** ${data.workExperience}
  **Skills:** ${data.skills}
  `;
  }
  
  // Resume data
  const resumeData: ResumeData = {
    name: "John Doe",
    fatherName: "Jane Doe",
    gender: "Male",
    education: "Bachelor of Science",
    workExperience: "Software Engineer at ABC Corporation",
    skills: "JavaScript, TypeScript, HTML, CSS"
  };
  
  // Generate resume
  const resume = generateResume(resumeData);
  
  // Print resume
  console.log(resume);
  