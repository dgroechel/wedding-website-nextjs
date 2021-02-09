/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { Field } from "formik";
import { TextField } from "formik-material-ui";
import { Transition } from "react-transition-group";
export default function Step4({ nextStep }) {
  const [inProp, setInProp] = useState(false);
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

  const handleNextStep = () => {
    setInProp(false);
    nextStep();
  };
  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Grid item xs={12}>
              <Typography align="center">
                We are doing our best to make sure everyone feels safe with
                COVID. Is there a group or certain people you feel safer sitting
                with?{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                fullWidth
                variant="outlined"
                name="guestTable"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ padding: 15 }}>
                <Button
                  onClick={() => handleNextStep()}
                  fullWidth
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
