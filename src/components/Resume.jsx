import "./Resume.css";
import React, { useRef } from "react";
import ReactToPrint from "react-to-print";

function Resume({ data, step, setStep }) {
  let reader = new FileReader();
  reader.readAsDataURL(data.userImage);
  reader.onload = () => {
    document.querySelector(".user-image").src = reader.result;
  };
  let languages = data.languages.split(",");
  let interests = data.interests.split(",");
  let skills = data.skills.split(",");
  const componentRef = useRef();
  return (
    <div className="resume">
      <h3>Resume</h3>
      <div className="resume-wrapper" ref={componentRef}>
        <div className="resume-container">
          <div className="top">
            <div className="imgBox">
              <div className="box">
                <img alt="" className="user-image" draggable="false" />
              </div>
            </div>
            <div className="profileText">
              <h3>
                {data.FName.trim()} {data.LName.trim()}
                <br />
                <span>{data.applyFor.trim()}</span>
              </h3>
            </div>
          </div>
          <div className="contentBox">
            <div className="leftSide">
              <h3>Contact Info</h3>
              <ul>
                <li>
                  <span className="icon">
                    <ion-icon name="call-outline"></ion-icon>
                  </span>
                  <span className="text">
                    {data.country_code} {data.phone}
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="mail-outline"></ion-icon>
                  </span>
                  <span className="text">
                    <a
                      href={`mailto:${data.email}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.email}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="earth-outline"></ion-icon>
                  </span>
                  <span className="text">
                    <a
                      style={{ lineHeight: "1.5" }}
                      href={`https://${data.website}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.website}
                    </a>
                  </span>
                </li>
                <li>
                  <span className="icon">
                    <ion-icon name="location-outline"></ion-icon>
                  </span>
                  <span className="text" style={{ textTransform: "uppercase" }}>
                    {data.city.trim()}, {data.country.trim()}
                  </span>
                </li>
              </ul>
              <h3>Education</h3>
              <ul className="education">
                {data.education.institutes.map((institute, index) => {
                  return (
                    <li key={index}>
                      <h5>
                        {data.education.yearOfStart[index]} -{" "}
                        {data.education.yearsOfPassing[index]}
                      </h5>
                      <h4>{data.education.studyPrograms[index]}</h4>
                      <h6>{institute}</h6>
                    </li>
                  );
                })}
              </ul>
              <h3>Language</h3>
              <ul className="language">
                {languages.map((language, index) => {
                  language = language.split("-");
                  return (
                    <li key={index}>
                      <span className="text">{language[0].trim()}</span>
                      <span className="percent">
                        <div style={{ width: `${language[1]}%` }}></div>
                      </span>
                    </li>
                  );
                })}
              </ul>
              <h3>Interest</h3>
              <ul className="interest">
                {interests.map((interest, index) => {
                  return (
                    <li key={index}>
                      <span className="icon">
                        <ion-icon name="heart"></ion-icon>
                      </span>
                      {interest.trim()}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="rightSide">
              <div className="about">
                <h3>Profile</h3>
                <p>{data.aboutSelf.trim()}</p>
              </div>
              <div className="about">
                <h3>Experience</h3>
                {data.experience.companies.map((company, index) => (
                  <div className="box" key={index}>
                    <div className="year-company">
                      <h5>
                        {data.experience.yearOfJoining[index]} -{" "}
                        {data.experience.yearOfLeaving[index]}
                      </h5>
                      <h5>{company}</h5>
                    </div>
                    <div className="text">
                      <h4>{data.experience.positions[index]}</h4>
                      <p>{data.experience.tasks[index].split(",")}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="about skills">
                <h3>Professional Skillls</h3>
                {skills.map((skill, index) => {
                  skill = skill.trim().split("-");
                  console.log(skill);
                  return (
                    <div className="box" key={index}>
                      <h4>{skill[0]}</h4>
                      <span className="percent">
                        <div style={{ width: `${skill[1]}%` }}></div>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button
          type="button"
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Previous
        </button>
        <ReactToPrint
          trigger={() => <button type="button">Print this out!</button>}
          content={() => componentRef.current}
          documentTitle="Resume made by Subid"
        />
      </div>
    </div>
  );
}

export default Resume;
