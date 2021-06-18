import React, { useState } from "react";
import uniqid from "uniqid";
import DisplayCV from "./CVDisplay/cv";
import DataForm from "./DataInput/form";

function Overview() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <ToggleDisplay submitted={submitted} setSubmitted={setSubmitted} />
    </div>
  );
}

function ToggleDisplay(prop) {
  const [education, setEducation] = useState([
    {
      id: uniqid(),
      schoolName: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: uniqid(),
      companyName: "",
      jobTitle: "",
      roleDescription: "",
      roleStarted: "",
      roleEnded: "",
    },
  ]);

  const [general, setGeneral] = useState([
    {
      id: uniqid(),
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
    },
  ]);

  const isSubmitted = prop.submitted;

  if (isSubmitted) {
    return (
      <DisplayCV
        general={general}
        setGeneral={setGeneral}
        experience={experience}
        setExperience={setExperience}
        education={education}
        setEducation={setEducation}
        submitted={prop.submitted}
        setSubmitted={prop.setSubmitted}
      />
    );
  }
  return (
    <DataForm
      general={general}
      setGeneral={setGeneral}
      experience={experience}
      setExperience={setExperience}
      education={education}
      setEducation={setEducation}
      submitted={prop.submitted}
      setSubmitted={prop.setSubmitted}
    />
  );
}

export default Overview;
