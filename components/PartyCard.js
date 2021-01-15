import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";
import Image from "next/image";
import React from "react";

export default function PartyCard({ img, name, title, blurb }) {
  return (
    <div>
      <Card style={{maxWidth: 500}}>
        <CardMedia>
          <Image
          layout="responsive"
            src={img}
            alt={name}
            height={275}
            width={500}
          />
        </CardMedia>
        <CardContent>
          <Typography align="center" gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography align="center" gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            align="center"
            variant="body2"
            color="textSecondary"
            component="p"
            // className={classes.blurb}
          >
            {blurb}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
