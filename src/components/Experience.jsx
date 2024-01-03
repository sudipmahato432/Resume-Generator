import React from "react";

function Experience({ data, step, setData, setStep }) {
  let experiencesNo = ["1st", "2nd", "3rd"];
  let ExperienceSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    let positions = [
      JSONform.position0.trim(),
      JSONform.position1.trim(),
      JSONform.position2.trim(),
    ];
    positions = positions.filter((item) => item !== "");
    let companies = [JSONform.company0.trim(), JSONform.company1.trim(), JSONform.company2.trim()];
    companies = companies.filter((item) => item !== "");
    let yearOfJoining = [
      JSONform.yearOfJoining0,
      JSONform.yearOfJoining1,
      JSONform.yearOfJoining2,
    ];
    yearOfJoining = yearOfJoining.filter((item) => item !== "");
    let yearOfLeaving = [
      JSONform.yearOfLeaving0,
      JSONform.yearOfLeaving1,
      JSONform.yearOfLeaving2,
    ];
    yearOfLeaving = yearOfLeaving.filter((item) => item !== "");
    let tasks = [JSONform.tasks0.trim(), JSONform.tasks1.trim(), JSONform.tasks2.trim()];
    tasks = tasks.filter((item) => item !== "");
    let experience = {
      positions,
      companies,
      yearOfJoining,
      yearOfLeaving,
      tasks,
    };
    console.log(experience);
    setData({ ...data, experience });
    setStep(step + 1);
  };

  return (
    <div className="Experience">
      <h2 style={{ marginBottom: "1rem" }}>Experience</h2>
      <form id="Experience" onSubmit={ExperienceSubmit}>
        {experiencesNo.map((experience, index) => (
          <section key={index}>
            <h3
              style={{
                marginBottom: "1rem",
                opacity: ".45",
                fontSize: "1.5rem",
                fontWeight: "300",
              }}
            >
              {experience} Experience
            </h3>
            <div className="form-group">
              <label htmlFor={`position${index}`}>Title/Position</label>
              <input
                name={`position${index}`}
                id={`position${index}`}
                placeholder="Enter your Position in the company, e.g. Software Engineer, Web Developer, etc."
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={`company${index}`}>Company</label>
              <input
                name={`company${index}`}
                id={`company${index}`}
                placeholder="Enter the name of the company you worked for"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={`yearOfJoining${index}`}>Year of Joining</label>
              <input
                type="number"
                name={`yearOfJoining${index}`}
                id={`yearOfJoining${index}`}
                placeholder="Enter the year you joined the company"
                min="1900"
                max="2025"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={`yearOfLeaving${index}`}>Year of Leaving</label>
              <input
                type="text"
                name={`yearOfLeaving${index}`}
                id={`yearOfLeaving${index}`}
                placeholder="Enter the year you left the company"
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor={`tasks${index}`}>Achievements/Tasks</label>
              <textarea
                name={`tasks${index}`}
                id={`tasks${index}`}
                cols="30"
                rows="10"
                placeholder="Enter the achievements/tasks you performed in the company, seperated by commas"
              ></textarea>
            </div>
          </section>
        ))}
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

export default Experience;
