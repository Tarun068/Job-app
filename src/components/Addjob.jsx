import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./addjob.css";
import { useNavigate } from "react-router-dom";

const Addjob = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object({
    title: Yup.string().required("Job title is required"),
    type: Yup.string().required("Job type is required"),
    Description: Yup.string().required("Job description is required"),
    location: Yup.string().required("Job location is required"),
    salary: Yup.string().required("Salary is required"),
    companyName: Yup.string().required("Company name is required"),
    companyDescription: Yup.string().required(
      "Company description is required"
    ),
    email: Yup.string()
      .email("Invalid email format")
      .required("Company email is required"),
    number: Yup.string()
      .matches(/^[0-9]{10}$/, "Number must be 10 digits")
      .required("Company number is required"),
  });

  return (
    <div className="add-job-from">
      <Formik
        initialValues={{
          title: "",
          type: "",
          Description: "",
          location: "",
          salary: "",
          companyName: "",
          companyDescription: "",
          email: "",
          number: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await axios.post(
              "https://job-app-beryl.vercel.app/add-job",
              values
            );
            navigate("/jobs");
            resetForm();
          } catch (error) {
            console.error("Error submitting job:", error);
            alert("Failed to add job. ❌");
          }
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="job-form">
            <div className="formData">
              <label htmlFor="title">Job Title</label>
              <Field id="title" name="title" placeholder="Enter job title" />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div className="formData">
              <label htmlFor="type">Job Type</label>
              <Field
                id="type"
                name="type"
                placeholder="Full-Time / Part-Time"
              />
              <ErrorMessage name="type" component="div" className="error" />
            </div>

            <div className="formData">
              <label htmlFor="Description">Job Description</label>
              <Field
                id="Description"
                name="Description"
                placeholder="Enter job description"
              />
              <ErrorMessage
                name="Description"
                component="div"
                className="error"
              />
            </div>

            <div className="formData">
              <label htmlFor="location">Job Location</label>
              <Field
                id="location"
                name="location"
                placeholder="Enter job location"
              />
              <ErrorMessage name="location" component="div" className="error" />
            </div>

            <div className="formData">
              <label htmlFor="salary">Salary</label>
              <Field id="salary" name="salary" placeholder="Enter salary" />
              <ErrorMessage name="salary" component="div" className="error" />
            </div>

            <div className="formData">
              <label htmlFor="companyName">Company Name</label>
              <Field
                id="companyName"
                name="companyName"
                placeholder="Enter company name"
              />
              <ErrorMessage
                name="companyName"
                component="div"
                className="error"
              />
            </div>

            <div className="formData">
              <label htmlFor="companyDescription">Company Description</label>
              <Field
                id="companyDescription"
                name="companyDescription"
                placeholder="Enter company description"
              />
              <ErrorMessage
                name="companyDescription"
                component="div"
                className="error"
              />
            </div>

            <div className="formData">
              <label htmlFor="email">Company Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter company email"
              />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="formData">
              <label htmlFor="number">Company Number</label>
              <Field
                id="number"
                name="number"
                placeholder="Enter company number"
              />
              <ErrorMessage name="number" component="div" className="error" />
            </div>

            <button
              className="submit-btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Addjob;
