import React from "react";
import "./../../styles/DataForm.css";

function GeneralForm(prop) {
  const setGeneral = prop.setGeneral;
  const general = prop.general;

  const handleChange = (index) => (e) => {
    const { name, value } = e.target;
    let newArr = [...general];
    newArr[index][name] = value;
    setGeneral(newArr);
  };

  return (
    <div>
      <h3>General Information:</h3>
      <div>
        {general.map((general, index) => {
          return (
            <FormObject
              id={general.id}
              firstName={general.firstName}
              lastName={general.lastName}
              email={general.email}
              phoneNumber={general.phoneNumber}
              handleChange={handleChange}
              arrayIndex={index}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

function FormObject(prop) {
  const formObjects = [
    {
      label: "First Name:",
      type: "text",
      name: "firstName",
      value: prop.firstName,
    },
    {
      label: "Last Name:",
      type: "text",
      name: "lastName",
      value: prop.lastName,
    },
    {
      label: "Email:",
      type: "textarea",
      name: "email",
      value: prop.email,
    },
    {
      label: "Phone Number:",
      type: "tel",
      name: "phoneNumber",
      value: prop.phoneNumber,
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

export default GeneralForm;
