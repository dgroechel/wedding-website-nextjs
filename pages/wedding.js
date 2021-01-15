import React, { useState } from "react";
import {
  Card,
  Container,
  Typography,
  Grid,
  CardContent,
} from "@material-ui/core";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

export default function wedding() {
  const [selected, setSelected] = useState({});
  const center = {
    lat: 32.17889,
    lng: -80.743057,
  };
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  const weddingLocations = [
    {
      name: "Holy Family Catholic Church",
      location: {
        lat: 32.15043,
        lng: -80.76001,
      },
    },
    {
      name: "Costal Discovery Museum - Honey Horn Plantation",
      location: {
        lat: 32.2117,
        lng: -80.74405,
      },
    },
    {
      name: "Sea Pines - Harbor Town",
      location: {
        lat: 32.13906,
        lng: -80.81255,
      },
    },
    {
      name: "Palmetto Dunes",
      location: {
        lat: 32.17809,
        lng: -90.72645,
      },
    },
  ];

  const onSelect = (item) => {
    setSelected(item);
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
                      >
                        {weddingLocations.map((location) => (
                          <Marker
                            key={location.name}
                            position={location.location}
                            onClick={() => onSelect(location)}
                          />
                        ))}
                        {selected.location && (
                          <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                          >
                            <Typography>{selected.name}</Typography>
                          </InfoWindow>
                        )}
                      </GoogleMap>
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
