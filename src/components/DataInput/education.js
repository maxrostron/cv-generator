import React from "react";
import "./../../styles/DataForm.css";
import uniqid from "uniqid";

function EducationForm(prop) {
  const setEducation = prop.setEducation;
  const education = prop.education;

  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    let newArr = [...education];
    newArr[index][name] = value;
    setEducation(newArr);
  };

  function handleAddClick(e) {
    setEducation((prevEducation) => [
      ...prevEducation,
      {
        id: uniqid(),
        schoolName: "",
        degree: "",
        startDate: "",
        endDate: "",
      },
    ]);
    e.preventDefault();
  }

  console.log(education);

  return (
    <div>
      <h3>Education:</h3>
      <div>
        {education.map((experience, index) => {
          return (
            <FormObject
              id={experience.id}
              schoolName={experience.schoolName}
              degree={experience.degree}
              startDate={experience.startDate}
              endDate={experience.endDate}
              handleChange={handleChange}
              arrayIndex={index}
              key={index}
            />
          );
        })}
      </div>
      <div>
        <button onClick={handleAddClick}>Add School</button>
      </div>
    </div>
  );
}

function FormObject(prop) {
  const formObjects = [
    {
      label: "School Name:",
      type: "text",
      name: "schoolName",
      value: prop.schoolName,
    },
    {
      label: "Degree:",
      type: "text",
      name: "degree",
      value: prop.degree,
    },
    {
      label: "Course Started:",
      type: "month",
      name: "startDate",
      value: prop.startDate,
    },
    {
      label: "Course Completed:",
      type: "month",
      name: "endDate",
      value: prop.endDate,
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

export default EducationForm;
