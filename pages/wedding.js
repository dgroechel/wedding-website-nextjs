import React from "react";
import {
  Card,
  Container,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function wedding() {
  const center = {
    lat: 32.17889,
    lng: -80.743057,
  };
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  return (
    <div>
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h2" align="center">
                      The Wedding
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4">Friday, May 7th</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      4:30 PM: Rehersal Dinner in Sea Pines
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="h4">Saturday, May 8th</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      {" "}
                      2:00 PM: Wedding Ceremony @ Holy Family Catholic Church
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      {" "}
                      4:30 PM: Cocktail hour @ Honey Horn Plantation
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">6:00 PM: Dinner </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">
                      10:00PM: End of reception (to save the turtles!).
                      After-party dependent on COVID
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <LoadScript googleMapsApiKey="AIzaSyB2zqq0ZLR8heeATrr-cqgEaqTPvKaezIs">
                      <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={12}
                      ></GoogleMap>
                    </LoadScript>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
