"use client";

import React from "react";
import useProductDetails from "./useProductDetails";

const App = () => {
  const { formik, currencies, products, addForm, removeForm } =
    useProductDetails();

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h5>ProductDetais</h5>
        {formik.values.forms.map((form, index) => (
          <div key={index}>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="text"
                placeholder="Quantity"
                name={`forms[${index}].quantity`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forms[index].quantity}
                style={{ width: "500px", marginRight: "10px", height: "5vh" }}
              />
              {formik.touched.forms &&
                formik.touched.forms[index] &&
                formik.touched.forms[index].quantity &&
                formik.errors.forms &&
                formik.errors.forms[index] && (
                  <div>{formik.errors.forms[index].quantity}</div>
                )}

              <input
                type="text"
                placeholder="amount"
                name={`forms[${index}].amount`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forms[index].amount}
                style={{ width: "500px", marginRight: "10px", height: "5vh" }}
              />
              {formik.touched.forms &&
                formik.touched.forms[index] &&
                formik.touched.forms[index].amount &&
                formik.errors.forms &&
                formik.errors.forms[index] && (
                  <div>{formik.errors.forms[index].amount}</div>
                )}
              <select
                name={`forms[${index}].selectedCurrency`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forms[index].selectedCurrency}
                style={{ width: "500px", marginRight: "10px", height: "5vh" }}
              >
                <option value="">Select Currency</option>
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              {formik.touched.forms &&
                formik.touched.forms[index] &&
                formik.touched.forms[index].selectedCurrency &&
                formik.errors.forms &&
                formik.errors.forms[index] && (
                  <div>{formik.errors.forms[index].selectedCurrency}</div>
                )}

              <select
                name={`forms[${index}].selectedProduct`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.forms[index].selectedProduct}
                style={{ width: "500px", marginRight: "10px", height: "5vh" }}
              >
                <option value="">Select Product</option>
                {products.map((product) => (
                  <option key={product} value={product}>
                    {product}
                  </option>
                ))}
              </select>
              {formik.touched.forms &&
                formik.touched.forms[index] &&
                formik.touched.forms[index].selectedProduct &&
                formik.errors.forms &&
                formik.errors.forms[index] && (
                  <div>{formik.errors.forms[index].selectedProduct}</div>
                )}
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
