/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Field, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import axios from "axios";
import { Button, Grid } from "@material-ui/core";
import { Transition } from "react-transition-group";

export default function Step1({ setFieldValue, nextStep }) {
  const [isSubmitting, setSubmitting] = useState(false);
  const [inProp, setInProp] = useState(false);

  const { values } = useFormikContext();
  async function getGuestId() {
    setSubmitting(true);
    setInProp(false);
    const url = "https://api.loveonhhisland.com/find-guest";
    const body = { email: values.guestEmail };
    try {
      const result = await axios.post(url, body);
      if (result.data.success === true) {
        setFieldValue("guestId", result.data.guestId);
        setFieldValue("guestName", result.data.guestName);
        nextStep()
      } 
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      setInProp(false);
    }
  }

  useEffect(() => {
    setInProp(true);
  }, []);

  const duration = 500;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div style={{ width: "100%" }}>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Grid item xs={12}>
              <Field
                component={TextField}
                name="guestEmail"
                variant="outlined"
                fullWidth
                label="Please Enter your Email the Invitation Was Sent To"
              />
            </Grid>
            <Grid item xs={12}>
              <div style={{ padding: 15 }}>
                <Button
                  disabled={isSubmitting}
                  onClick={() => getGuestId()}
                  variant="contained"
                >
                  Next
                </Button>
              </div>
            </Grid>
          </div>
        )}
      </Transition>
    </div>
  );
}
