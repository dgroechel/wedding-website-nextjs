import { Card, Typography, CardContent } from "@material-ui/core";
import React from "react";

export default function HomeCard() {
  return (
    <div style={{ position: "absolute", bottom: 25, left: 25 }}>
      <Card style={{borderRadius: 16, boxShadow: '0 8px 16px 0 #BDC9D7'}}>
        <CardContent>
          <Typography variant="h2" align="center">
            David Groechel 
            & 
            Renée DeVivo
          </Typography>
          <Typography variant="h4" align="center">May 8th, 2021</Typography>
          <Typography variant="h4"  align="center">Hilton Head Island</Typography>
        </CardContent>
      </Card>
    </div>
  );
}
