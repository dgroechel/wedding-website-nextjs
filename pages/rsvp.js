import { Container, Grid, Typography } from "@material-ui/core";
import React, { useState } from "react";
import RSVPForm from "../components/rsvpForm/RSVPForm";

export default function rsvp() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setTimeout(() =>setStep(step + 1), 850);
  };

  const setNo = () => {
    setStep(4);
  };
  return (
    <div style={{ paddingTop: 15 }}>
      <Container maxWidth="md">
        <Grid
          align="center"
          alignItems="center"
          justify="center"
          container
          spacing={4}
        >
          <Grid item xs={12}>
            <Typography align="center" variant="h1">
              RSVP
            </Typography>
            <Typography variant="h6" align="center">
              If you have any questions please email renee.devivo at gmail.com or visit the FAQ Page.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <RSVPForm
              nextStep={nextStep}
              setNo={setNo}
              step={step}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
