/* eslint-disable react/prop-types */
import { Container, Grid } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import React from "react";
import FormIndex from ".";
import axios from "axios";

export default function RSVPForm({ step, nextStep, prevStep, setNo }) {
  async function submitRSVP(values) {
    const url = "https://api.loveonhhisland.com/submit-rsvp";
    await axios.post(url, values);
  }
  const validationSchema = Yup.object().shape({
    guestEmail: Yup.string()
      .email("Hmmm that doesn't look like an email")
      .required("Required"),
    guestNumber: Yup.number().required("Your guest number is required"),
  });
  return (
    <div>
      <Container maxWidth="sm">
        <Formik
          validationSchema={validationSchema}
          initialValues={{
            guestEmail: "",
            guestId: "",
            guestAttending: "Yes",
            guestNumber: "",
            guestFoodAllergies: "",
            guestComments: "",
            guestName: "",
            guestTable: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            submitRSVP(values);
            setSubmitting(false);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <Grid
                alignContent="center"
                alignItems="center"
                justify="center"
                container
                spacing={1}
              >
                <FormIndex
                  nextStep={nextStep}
                  prevStep={prevStep}
                  step={step}
                  setFieldValue={setFieldValue}
                  setNo={setNo}
                />
              </Grid>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
}
