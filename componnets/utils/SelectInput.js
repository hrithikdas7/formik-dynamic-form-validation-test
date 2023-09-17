import React from "react";
import Select from "react-select";
import { Form } from "react-bootstrap";

const SelectInput = ({
  label,
  placeholder,
  name,
  className,
  id,
  floatingLabel,
  required,
  selectClass,
  value,
  defaultValue,
  options,
  onChange = () => {},
  clearButton,
  errorMsg,
  isDisabled,
  onBlur, // Pass the onBlur handler from Formik
  ...props
}) => {
  console.log({ errorMsg });
  return (
    <>
      <div className="form-selectBox mb-lg-0 mb-3">
        <Form.Label>{label}</Form.Label>
        <Select
          name={name}
          value={value}
          defaultValue={defaultValue}
          options={options}
          placeholder={placeholder ?? "Select"}
          isClearable={clearButton}
          isDisabled={isDisabled}
          menuPlacement="auto"
          onBlur={() => {
            onBlur(name); // Invoke onBlur with the input name
          }}
          onChange={(e) => {
            onChange(e);
          }}
          {...props}
        />
        {errorMsg && <span>{errorMsg}</span>}
      </div>
    </>
  );
};

export default SelectInput;
