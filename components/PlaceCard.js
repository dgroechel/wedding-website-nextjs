import React from "react";
import { Card, Grid, Link, Typography } from "@material-ui/core";
import Image from "next/image";

export default function PlaceCard({ name, image, desc, alt, link }) {
  return (
    <div>
      <Card>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Image
              style={{ objectFit: "contain" }}
              src={image}
              alt={alt}
              layout="responsive"
              height={775}
              width={1200}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div style={{ paddingTop: 15 }} />
                <Typography variant="h4" align="center">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <div style={{ padding: 10 }}>
                  <Typography variant="body2" >{desc}</Typography>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div style={{paddingLeft: 10}}>
                <Link variant="h6" href={link}>Book Now</Link>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
