import React from "react";
import "./../../styles/DataForm.css";
import uniqid from "uniqid";

function ExperienceForm(prop) {
  const setExperience = prop.setExperience;
  const experience = prop.experience;

  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    let newArr = [...experience];
    newArr[index][name] = value;
    setExperience(newArr);
  };

  function handleAddClick(e) {
    setExperience((prevExperience) => [
      ...prevExperience,
      {
        id: uniqid(),
        companyName: "",
        jobTitle: "",
        roleDescription: "",
        roleStarted: "",
        roleEnded: "",
      },
    ]);
    e.preventDefault();
  }

  return (
    <div>
      <h3>Experience:</h3>
      <div>
        {experience.map((experience, index) => {
          return (
            <FormObject
              id={experience.id}
              companyName={experience.companyName}
              jobTitle={experience.jobTitle}
              roleDescription={experience.roleDescription}
              roleStarted={experience.roleStarted}
              roleEnded={experience.roleEnded}
              handleChange={handleChange}
              arrayIndex={index}
              key={index}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handleAddClick}>Add Experience</button>
      </div>
    </div>
  );
}

function FormObject(prop) {
  const formObjects = [
    {
      label: "Company Name:",
      type: "text",
      name: "companyName",
      value: prop.companyName,
    },
    {
      label: "Job Title:",
      type: "text",
      name: "jobTitle",
      value: prop.jobTitle,
    },
    {
      label: "Role Description:",
      type: "textarea",
      name: "roleDescription",
      value: prop.roleDescription,
    },
    {
      label: "Job Started:",
      type: "month",
      name: "roleStarted",
      value: prop.roleStarted,
    },
    {
      label: "Job Ended:",
      type: "month",
      name: "roleEnded",
      value: prop.roleEnded,
    },
  ];
  return (
    <div id={prop.id}>
      {formObjects.map((field, i) => {
        return (
          <label key={i}>
            {field.label}
            <input
              type={field.type}
              name={field.name}
              value={field.value}
              onChange={prop.handleChange(prop.arrayIndex)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default ExperienceForm;
