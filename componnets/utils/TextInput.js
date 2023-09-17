import React, { useState } from "react";
import { Form } from "react-bootstrap";
const TextInput = ({
  label,
  placeholder,
  value,
  type,
  name,
  id,
  required,
  errorMsg,
  hasError,
  handleChange,
  handleBlur,
  ...props
}) => {
    console.log({errorMsg});
    const [enteredInput, setEnteredInput] = useState(value);
    const handleInputChange = (e) => {
      setEnteredInput(e.target.value);
      handleChange(e.target.value);
    };
  return (
    <Form.Group className="mb-3 form-item" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type ? type : "text"}
        name={name ? name : id}
        id={id}
        value={value}
        placeholder={placeholder ? placeholder : " "}
        onChange={(e) => handleInputChange(e)}
        onBlur={handleBlur}
        {...props}
      />
      {errorMsg&&<span>{errorMsg}</span>}
    </Form.Group>
  );
};

export default TextInput;
