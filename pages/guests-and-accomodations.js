import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import PlaceCard from "../components/PlaceCard";

export default function GuestsAndAccomodations() {
  const placesToStay = [
    {
      name: "Sea Pines",
      image: "/harborTown.jpg",
      alt: "Harbor Town Yacht Basin",
      desc:
        "David's favorite place to stay. Located across 5,000 acres, Sea Pines Resort offers an array of family and individual activities including natural beaches, championship golf, tennis, biking trails and so much more. Stay around Harbor Town to enjoy nightly entertainment and beautiful walks around Calibogue Sound.",
      link: "https://www.seapines.com/vacation-rentals/",
    },
    {
      name: "Palmetto Dunes",
      image: "/palmettoDunes.jpg",
      alt: "Palmetto Dunes Resort",
      desc:
        "Renee's family has vacationed at the Palmetto Dunes Resort for many years. It consists of over 3 miles of beautiful beaches and 3 signature golf courses --- all interconnected by easy to navigate bike paths. Great dining and entertainment options exist across the way in Shelter Cove and there are many beautiful homes to rent and hotels in the area. Discount Code: 21WEDDINGS",
      link:
        "https://rentals.palmettodunes.com/hilton-head-vacation-rentals#q=*%3A*",
    },
    {
      name: "The Westin",
      image: "/theWestin.jpg",
      alt: "The Westin Hilton Head",
      desc:
        "Situated within the Port Royal Plantation on the Atlantic Ocean, the recently renovated four-diamond resort offers discerning travelers an upscale oceanfront escape along the scenic Lowcountry coast of South Carolina. Please mention you are part of the the DeVivo-Groechel Wedding Block.",
      link: "https://book.passkey.com/e/50149379",
    },
  ];
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          
          <Grid item xs={12}>
          <div style={{ paddingBottom: 30 }} />
            <Typography align="center" variant="h2">
              Reccomended Places To Stay
            </Typography>
          </Grid>

          {placesToStay.map((place) => (
            <Grid item xs={12}>
              <PlaceCard
                key={place}
                name={place.name}
                image={place.image}
                desc={place.desc}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <Typography align="center" variant="h2">
              Other Places to Stay or Book
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <Button fullWidth variant="contained" color="primary">
                  AirBnb
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button fullWidth variant="contained" color="primary">
                  VRBO
                </Button>
              </Grid>
              <Grid item xs={12} md={4}>
                <Button fullWidth variant="contained" color="primary">
                  The Disney Resort
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
