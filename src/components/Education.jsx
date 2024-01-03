import "./Education.css";
import React from "react";

function Education({ data, step, setData, setStep }) {
  let degree = ["10th", "12th", "Graduation", "Post Graduation"];
  let educationSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    let institutes = [
      JSONform.institute3.toLowerCase().trim(),
      JSONform.institute2.toLowerCase().trim(),
      JSONform.institute1.toLowerCase().trim(),
      JSONform.institute0.toLowerCase().trim(),
    ];
    institutes = institutes.filter((item) => item !== "");
    let yearOfStart = [
      JSONform.yearOfStart3,
      JSONform.yearOfStart2,
      JSONform.yearOfStart1,
      JSONform.yearOfStart0,
    ];
    yearOfStart = yearOfStart.filter((item) => item !== "");
    let yearsOfPassing = [
      JSONform.yearOfPassing3,
      JSONform.yearOfPassing2,
      JSONform.yearOfPassing1,
      JSONform.yearOfPassing0,
    ];
    yearsOfPassing = yearsOfPassing.filter((item) => item !== "");
    let studyPrograms = [
      JSONform.studyProgram3.toLowerCase().trim(),
      JSONform.studyProgram2.toLowerCase().trim(),
      JSONform.studyProgram1.toLowerCase().trim(),
      JSONform.studyProgram0.toLowerCase().trim(),
    ];
    studyPrograms = studyPrograms.filter((item) => item !== "");
    let education = {
      studyPrograms,
      institutes,
      yearOfStart,
      yearsOfPassing,
    };
    console.log(education);
    setData({ ...data, education });
    setStep(step + 1);
  };
  return (
    <div className="education">
      <h2 style={{ marginBottom: "1rem" }}>Education</h2>
      <form id="education" onSubmit={educationSubmit}>
        {degree.map((item, index) => {
          return (
            <section key={index}>
              <h3
                style={{
                  marginBottom: "1rem",
                  opacity: ".45",
                  fontSize: "1.5rem",
                  fontWeight: "300",
                }}
              >
                {item} <i style={{ opacity: ".5" }}>(if any)</i>
              </h3>
              <div className="form-group">
                <label htmlFor={`studyProgram${index}`}>Study Program</label>
                <input
                  type="text"
                  placeholder="Enter the study program, e.g. B.Tech in Computer Science, etc."
                  name={`studyProgram${index}`}
                  id={`studyProgram${index}`}
                  title="Enter the study program, e.g. B.Tech in Computer Science, etc."
                />
              </div>
              <div className="form-group">
                <label htmlFor={`institute${index}`}>
                  Institute/Place of Education
                </label>
                <input
                  type="text"
                  placeholder="Enter your institute name"
                  name={`institute${index}`}
                  id={`institute${index}`}
                  pattern="[A-Za-z ]{3,}"
                  title="Please enter at least 3 characters"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`yearOfStart${index}`}>Year of Start</label>
                <input
                  type="number"
                  placeholder="Enter year of start"
                  name={`yearOfStart${index}`}
                  id={`yearOfStart${index}`}
                  min="1900"
                  max="2025"
                />
              </div>
              <div className="form-group">
                <label htmlFor={`yearOfPassing${index}`}>Year of Passing</label>
                <input
                  type="text"
                  placeholder="Enter year of passing"
                  name={`yearOfPassing${index}`}
                  id={`yearOfPassing${index}`}
                />
              </div>
            </section>
          );
        })}
        <div className="buttons">
          <button
            type="button"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            Previous
          </button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Education;
