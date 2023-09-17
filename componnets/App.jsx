"use client";

import React from "react";
import useProductDetails from "./useProductDetails";
import SelectInput from "./utils/SelectInput";
import TextInput from "./utils/TextInput";
const App = () => {
  const { formik, currencies, products, addForm, removeForm } =
    useProductDetails();

  const extractSelectedValue = (selectedObject) => {
    return selectedObject ? selectedObject.value : null;
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h5>Product Details</h5>
        {formik.values.forms.map((form, index) => (
          <div key={index}>
            <div style={{ marginBottom: "10px" }}>
              <SelectInput
                label="Currency"
                name={`forms[${index}].selectedCurrency`}
                value={
                  formik.values.forms[index].selectedCurrency
                    ? {
                        value: formik.values.forms[index].selectedCurrency,
                        label: formik.values.forms[index].selectedCurrency,
                      }
                    : null
                }
               
                options={currencies.map((currency) => ({
                  value: currency,
                  label: currency,
                }))}
                onChange={(selectedValue) =>
                  formik.setFieldValue(
                    `forms[${index}].selectedCurrency`,
                    extractSelectedValue(selectedValue)
                  )
                }
                onBlur={() => {
                  formik.setFieldTouched(`forms[${index}].selectedCurrency`, true);
                }}
                errorMsg={
                  formik.touched.forms &&
                  formik.touched.forms[index] &&
                  formik.touched.forms[index].selectedCurrency &&
                  formik.errors.forms &&
                  formik.errors.forms[index]
                    ? formik.errors.forms[index].selectedCurrency
                    : null
                }
              />

              <SelectInput
                label="Product"
                name={`forms[${index}].selectedProduct`}
                value={
                  formik.values.forms[index].selectedProduct
                    ? {
                        value: formik.values.forms[index].selectedProduct,
                        label: formik.values.forms[index].selectedProduct,
                      }
                    : null
                }
                options={products.map((product) => ({
                  value: product,
                  label: product,
                }))}
                onChange={(selectedValue) =>
                  formik.setFieldValue(
                    `forms[${index}].selectedProduct`,
                    extractSelectedValue(selectedValue)
                  )
                }
                onBlur={() => {
                  formik.setFieldTouched(`forms[${index}].selectedProduct`, true);
                }}
                errorMsg={
                  formik.touched.forms &&
                  formik.touched.forms[index] &&
                  formik.touched.forms[index].selectedProduct &&
                  formik.errors.forms &&
                  formik.errors.forms[index]
                    ? formik.errors.forms[index].selectedProduct
                    : null
                }
              />

              <TextInput
                label="Quantity"
                name={`forms[${index}].quantity`}
                handleChange={(value) =>
                  formik.setFieldValue(`forms[${index}].quantity`, value)
                }
                value={formik.values.forms[index].quantity}
                placeholder="Quantity"
                handleBlur={formik.handleBlur}
                errorMsg={
                  formik.touched.forms &&
                  formik.touched.forms[index] &&
                  formik.touched.forms[index].quantity &&
                  formik.errors.forms &&
                  formik.errors.forms[index]
                    ? formik.errors.forms[index].quantity
                    : null
                }
              />

              <TextInput
                label="Amount"
                name={`forms[${index}].amount`}
                handleChange={(value) =>
                  formik.setFieldValue(`forms[${index}].amount`, value)
                }
                value={formik.values.forms[index].amount}
                placeholder="Amount"
                handleBlur={formik.handleBlur}
                errorMsg={
                  formik.touched.forms &&
                  formik.touched.forms[index] &&
                  formik.touched.forms[index].amount &&
                  formik.errors.forms &&
                  formik.errors.forms[index]
                    ? formik.errors.forms[index].amount
                    : null
                }
              />

              {index > 0 && (
                <button type="button" onClick={() => removeForm(index)}>
                  Remove Form
                </button>
              )}
            </div>
          </div>
        ))}
        <button type="button" onClick={addForm}>
          Add Form
        </button>

        <div>
          <button type="submit">Form Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
