/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import {
  FormControlLabel,
  Grid,
  Typography,
  Radio,
  Button,
} from "@material-ui/core";
import { RadioGroup, TextField } from "formik-material-ui";
import { Field, useFormikContext } from "formik";
import { Transition } from "react-transition-group";

export default function Step2({ nextStep, setNo }) {
  const [inProp, setInProp] = useState(false);
  const { values } = useFormikContext();
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
    if (values.guestAttending === "No") {
     setNo()
    } else{
      nextStep();
    }
    
  };
  return (
    <div style={{ width: "100%" }}>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Grid item xs={12}>
              <Typography align="center">
                Hello {values.guestName} Will You be attending the wedding?
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field name="guestAttending" component={RadioGroup}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="Yes"
                      control={<Radio disabled={false} />}
                      label="Yes"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <FormControlLabel
                      value="No"
                      control={<Radio disabled={false} />}
                      label="No"
                    />
                  </Grid>
                </Grid>
              </Field>
            </Grid>
            {values.guestAttending === "No" ? null : (
              <Grid item xs={12}>
                <Typography align="center">
                  How many guests will be attending?
                </Typography>
                <Field
                  type="number"
                  name="guestNumber"
                  component={TextField}
                  variant="outlined"
                />
              </Grid>
            )}
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
