
import { useFormik } from "formik";
import * as Yup from "yup";

const useProductDetails = () => {
  const formik = useFormik({
    initialValues: {
      forms: [
        {
          quantity: "",
          amount: "",
          selectedCurrency: "",
          selectedProduct: ""
        }
      ]
    },
    validationSchema: Yup.object({
      forms: Yup.array().of(
        Yup.object().shape({
          quantity: Yup.string().required("Quantity required"),
          amount: Yup.string()
            .required("Amount required")
            .matches(/^\d+(\.\d{1,2})?$/, "Invalid amount format (e.g., 10.99)"),
          selectedCurrency: Yup.string().required("Currency required"),
          selectedProduct: Yup.string().required("Product required")
        })
      )
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const currencies = ["USD", "EUR", "GBP"];
  const products = ["Product A", "Product B", "Product C"];

  const addForm = () => {
    formik.values.forms.push({
      quantity: "",
      amount: "",
      selectedCurrency: "",
      selectedProduct: ""
    });
    formik.setFieldValue("forms", formik.values.forms);
  };

  const removeForm = (index) => {
    formik.values.forms.splice(index, 1);
    formik.setFieldValue("forms", formik.values.forms);
  };

  return {
    formik,
    currencies,
    products,
    addForm,
    removeForm
  };
};

export default useProductDetails;
