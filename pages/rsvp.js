import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import ChatWidget from "../components/ChatWidget";

export default function rsvp() {
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h2">
              RSVP to the Wedding with Wilson Below.
            </Typography>
            <Typography align="center">
              If you have any issues please email renee.devivo at gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
              <ChatWidget fullScreenMode={true}></ChatWidget>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
