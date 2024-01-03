import React, { useState, useEffect } from "react";
import NotFound from "./NotFound";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Interest from "../components/Interest";
import Resume from "../components/Resume";

function Home() {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);
  // useEffect(() => {
  //   if (
  //     localStorage.getItem("data") !== null &&
  //     localStorage.getItem("step") !== null &&
  //     step === 1
  //   ) {
  //     setData(JSON.parse(localStorage.getItem("data")));
  //     setStep(JSON.parse(localStorage.getItem("step")));
  //     console.log("Data loaded from local storage");
  //   } else {
  //     localStorage.setItem("data", JSON.stringify(data));
  //     localStorage.setItem("step", JSON.stringify(step));
  //     console.log("Data saved to local storage");
  //   }
  // }, [data, step]);
  
  // useEffect(() => {
  //   console.log(data);
  // }, [data, step]);
  let forms = () => {
    switch (step) {
      case 1:
        return (
          <PersonalDetails
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 2:
        return (
          <Education
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 3:
        return (
          <Skills data={data} step={step} setData={setData} setStep={setStep} />
        );
      case 4:
        return (
          <Experience
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 5:
        return (
          <Interest
            data={data}
            step={step}
            setData={setData}
            setStep={setStep}
          />
        );
      case 6:
        return <Resume data={data} step={step} setStep={setStep} />;
      default:
        return <NotFound />;
    }
  };
  return (
    <div className="container home">
      <h2 style={{ marginBottom: "1rem" }}>Create Your Resume</h2>
      {forms()}
    </div>
  );
}

export default Home;
