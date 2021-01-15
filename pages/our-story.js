import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
const useStyles = makeStyles({
  card: {
    height: "100%",
  },
  blurb: {
    fontFamily: "Raleway",
  },
  heading: {
    padding: "1.5rem",
  },
});

export default function OurStory() {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="lg">
        <Typography className={classes.heading} variant="h2" align="center">
          Our Story
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid item md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="David Groechel & Renee Devivo"
                >
                  {" "}
                  <Image
                    src="/DAVE.jpg"
                    alt="David Groechel"
                    layout="responsive"
                    height={550}
                    width={500}
                  />
                </CardMedia>
                <CardContent>
                  <Typography align="center" gutterBottom variant="h5" component="h2">
                    His Side
                  </Typography>
                  <Typography
                  align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.blurb}
                  >
                    We met back in high school and Renee was the shy girl in my
                    sophomore year math class. We continued to be friends and
                    hangout throughout the rest of High School and I almost
                    asked her to prom my senior year but decided against it. The
                    summer before we left for college I randomly said “I’m going
                    to marry Renee one day” in my head - I thought I was insane
                    as I was 18 and headed off to Michigan State for my first
                    year of college. We kept in touch throughout the summers
                    when we came home for college. Then in the summer of 2016,
                    Mark Gardner invited us out to the Post in Plymouth, MI.
                    After that night out we continued to hangout that summer
                    going on dates and dancing on the rooftop of Woodies to
                    Justin Beiber. We ended the summer watching Michael Phelps
                    swim in his last Olympics before Renee moved to Boston for
                    her Master's degree. I was very hesitant to do long distance
                    and stopped texting Renee until October of 2016 when I
                    missed her too much. I said "Hey I'm coming this weekend or
                    this weekend - which one works?" I went and visited that
                    December and continued to do so until May of 2018 when I
                    moved to Boston. This was one of the best decisions I ever
                    made as we got enagaged a year and a half later. Luckily for
                    me, what I said when I was 18 is coming true{" "}
                    <span role="img" aria-label="Smile Emoji">
                      😊
                    </span>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={6}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  title="David Groechel & Renee Devivo"
                >
                  {" "}
                  <Image
                    src="/RENEE.jpg"
                    alt="Renee DeVivo"
                    layout="responsive"
                    height={550}
                    width={500}
                  />
                </CardMedia>
                <CardContent>
                  <Typography align="center" gutterBottom variant="h5" component="h2">
                    Her Side
                  </Typography>
                  <Typography
                  align="center"
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.blurb}
                  >
                    Even back in high school, I had my eye on David. He was the
                    “new” kid back in 9th grade and his good looks, sense of
                    humor, and ambition did not go unnoticed. Plus, his
                    nicknames were “Weatherman” and “Puffy” so he was difficult
                    to miss! In high school, we were lucky enough to solidify a
                    great group of friends that we still maintain today. Summers
                    during college were always special when we could all catch
                    up back in Novi, but it was not until the summer of 2016 –
                    when I had just moved back home from Pittsburgh and was
                    about to start graduate school in Boston – when it really
                    became something “more.” I knew I was moving soon so I tried
                    my hardest to play it “cool,” but by the time August rolled
                    around I knew I wanted this “summer fling” to last much
                    longer than my time at home. I moved to Boston and hoped I
                    would hear from David -- texting was never his strong suit
                    (I mean it took the guy about 5 years of friendship to save
                    my number) so I could not help but be slightly worried.
                    Luckily, one fateful day in October, he reached out and
                    asked if he could visit to which I said of course! The next
                    year and a half were filled with many special long weekends
                    and when May 2018 rolled around, David selflessly and
                    confidently made the decision to move to Boston. Looking
                    back on it all, I don’t think there was ever one finite
                    moment where I knew David was “the one,” but rather a
                    conglomeration of moments that have led us to where we are
                    now. From the first night I saw him again in Plymouth back
                    in June 2016, to our first date in Royal Oak when we were
                    attacked by flies and had to move inside mid-meal, to that
                    first visit in Boston when I took him to a dive bar and
                    forgot my wallet at home, to numerous family dinners with
                    both our parents and David’s siblings, and all the normal
                    Monday-Friday nights at home in-between, these past few
                    years with David have been the happiest of my life and I
                    could not be more excited to see what an entire lifetime
                    more of memories together will bring.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
