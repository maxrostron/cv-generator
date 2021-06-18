import React from "react";
import GeneralForm from "./general";
import EducationForm from "./education";
import ExperienceForm from "./experience";
import "./../../styles/DataForm.css";

function DataForm(prop) {
  function handleSubmit(e) {
    console.log("form submmited");
    prop.setSubmitted(true);
    e.preventDefault();
  }

  return (
    <div id="dataForm">
      <div className="form-header">
        <h1>CV Generator</h1>
        <h2>Complete the form below to create your CV!</h2>
        <hr />
      </div>
      <form className="form-body" onSubmit={handleSubmit}>
        <GeneralForm general={prop.general} setGeneral={prop.setGeneral} />
        <EducationForm
          education={prop.education}
          setEducation={prop.setEducation}
        />
        <ExperienceForm
          experience={prop.experience}
          setExperience={prop.setExperience}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default DataForm;
