import React from "react";
import "./../../styles/DataForm.css";

function DisplayCV(prop) {
  function handleEdit(e) {
    console.log("edit form");
    prop.setSubmitted(false);
    e.preventDefault();
  }

  function DisplayGeneral(data) {
    return (
      <div>
        <h1>General</h1>
        <h2>
          {data.data[0].firstName} {data.data[0].lastName}
        </h2>
        <h3>
          {data.data[0].email} {data.data[0].phoneNumber}
        </h3>
      </div>
    );
  }

  function DisplayEducation(data) {
    console.log(data);

    return (
      <div>
        <h1>Education</h1>
        {data.data.map((education, i) => {
          return (
            <div key={i}>
              <h2>{education.schoolName}</h2>
              <h3>{education.degree}</h3>
              <h4>
                {education.startDate} - {education.endDate}
              </h4>
            </div>
          );
        })}
      </div>
    );
  }

  function DisplayExperience(data) {
    console.log(data);

    return (
      <div>
        <h1>Experience</h1>
        {data.data.map((experience, i) => {
          return (
            <div key={i}>
              <h2>{experience.companyName}</h2>
              <h3>{experience.jobTitle}</h3>
              <h4>
                {experience.roleStarted} - {experience.roleEnded}
              </h4>
              <h5>{experience.roleDescription}</h5>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleEdit}>
        <DisplayGeneral data={prop.general} />
        <DisplayEducation data={prop.education} />
        <DisplayExperience data={prop.experience} />
        <input type="submit" value="Edit Info" />
      </form>
    </div>
  );
}

export default DisplayCV;
