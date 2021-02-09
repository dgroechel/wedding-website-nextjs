import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import { Field, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import { Transition } from "react-transition-group";
import Confetti from "react-confetti";
import YesDialog from "./YesDialog";

export default function Step5() {
  const { submitForm, values } = useFormikContext();
  const [inProp, setInProp] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

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

  const handleSubmit = () => {
    setInProp(false);
    submitForm();
    setTimeout(() => setDialogOpen(true), 450);
  };

  return (
    <div>
      <Transition in={inProp} timeout={duration}>
        {(state) => (
          <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
            <Grid item xs={12}>
              <Typography align="center">
                Any comments you want to leave for Renee or David?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                component={TextField}
                fullWidth
                variant="outlined"
                name="guestComments"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <div style={{ padding: 15 }}>
                <Button
                  onClick={() => handleSubmit()}
                  variant="contained"
                  fullWidth
                >
                  Submit RSVP
                </Button>
              </div>
            </Grid>
          </div>
        )}
      </Transition>
      {values.guestAttending === "Yes" ? (
        <>
          <YesDialog dialogOpen={dialogOpen} />
        </>
      ) : null}
      {values.guestAttending === "Yes" && dialogOpen ? (
        <Confetti width={3000} height={3000} />
      ) : null}
      {values.guestAttending === "No" && dialogOpen ? (
        <Typography align="center">
          {" "}
          We&apos;re sorry you aren&apos;t able to attend and look forawrd to
          seeing you soon!
        </Typography>
      ) : null}
    </div>
  );
}
