import React from "react";

function Interest({ data, step, setData, setStep }) {
  let interestSubmit = (event) => {
    event.preventDefault();
    let form = new FormData(event.target);
    let JSONform = {};
    for (const key of form.keys()) {
      JSONform[key] = form.get(key);
    }
    setData({ ...data, ...JSONform });
    setStep(step + 1);
  };
  return (
    <div className="interests">
      <h2 style={{ marginBottom: "1rem" }}>Interests</h2>
      <form id="interests" onSubmit={interestSubmit}>
        <div className="form-group">
          <label htmlFor="interests">Interests you have</label>
          <input
            type="text"
            placeholder="Enter your interests, e.g. Reading, etc."
            name="interests"
            id="interests"
            title="Please enter at least 3 characters"
          />
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
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Interest;
