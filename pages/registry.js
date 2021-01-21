import { Container, Grid, Typography } from "@material-ui/core";
import Image from "next/image";
import React from "react";

export default function registry() {
  return (
    <div style={{ paddingTop: 15 }}>
      <Container maxWidth="md">
        <Grid
          align="center"
          alignItems="center"
          justify="center"
          container
          spacing={3}
        >
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              Registry
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="center" variant="body2">
              Your presence at our wedding is the greatest gift itself. However,
              if you feel so inclined, we are registered at Amazon and Crate &
              Barrel.
            </Typography>
          </Grid>
          <Grid item sm={12} md={6}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.amazon.com/wedding/david-groechel-renee-devivo--may-2021/registry/3IWLPZ9AQ8IL7"
            >
              <Image src="/Amazon-Logo.png" height={250} width={375} />
            </a>
          </Grid>
          <Grid item sm={12} md={6}>
            <a
              href="https://www.crateandbarrel.com/gift-registry/renee-devivo-and-david-groechel/r6204637"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/cb.jpg" height={250} width={289} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
