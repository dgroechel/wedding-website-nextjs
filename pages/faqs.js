import {
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Are you still having the wedding with COVID?",
      answer:
        "Oh man, COVID. Wouldn’t it be great if it was just over already? We are very excited to celebrate with all of you, so we will be closely monitoring the situation in the next few weeks in hopes that we can continue with our wedding and reception as scheduled. With that said, we will be as mindful as possible of your health and safety and will take whatever precautions possible to make you feel comfortable :) If you aren't comfortable attending - we totaly understand! We look forward to celebrating with you when you feel safe",
    },
    {
      question: "Are children invited?",
      answer:
        "We love you and your kids, but this will be an adult only event. Thank you!",
    },
    {
      question: "What’s the attire?",
      answer:
        "The typical outdoor wedding apparel -- suits and ties, dresses -- basically dressy casual. The weather in HHI is typically pretty warm during the day in May (think mid 70-low 80) but does cool off a bit at night. The ceremony will be in the church and the reception will be outdoors under a covered, open-air pavilion. Dave says rolled up pants are okay!",
    },
    {
      question: "Are Ubers/Lyfts easily available?",
      answer:
        "Unfortunately, Uber and Lyft can be hard to come by on the island. Not impossible but wait times can be long so having an alternative transportation plan isn’t a bad idea! We'll have more info on this posted soon",
    },
    {
      question: "Should I fly into Savannah or Hilton Head?",
      answer:
        "If you can fly into the island airport, that is probably the preferred/easier option. The island is quite small and easy to navigate. However, the Savannah airport is certainly larger (more flights) and Savannah is a great city so if you’re looking to explore, it is a fun option and you can easily rent a car to drive to the island (~50 miles).",
    },
    {
      question: "Why does the reception end so early?",
      answer:
        "Hilton Head is very committed to protecting wildlife and particularly saving turtles! Therefore, the island has strict ordinances about what time all events must end/bright lights must be off so that the young Loggerhead hatchlings are able to make it to the ocean! Dependent on COVID we will be planning an after party",
    },
    {
      question: "Should I rent a car?",
      answer:
        "Up to you! This all somewhat depends on how long you’re planning to stay, how much you’re looking to explore, and where you are staying. Both Savannah and Hilton Head have many rental car options. Renting bikes is also a fun option since the island has many great bike paths and you can easily ride on the beach!",
    },
  ];
  return (
    <div style={{paddingTop: 20}}>
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography align="center" variant="h2">
                  FAQ's
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <div style={{padding: 8}}>
                      <Typography variant="h5">{faq.question}</Typography>
                    </div>
                    <div style={{padding: 15}}>
                      <Typography variant="body2">{faq.answer}</Typography>
                    </div>
                  </div>
                ))}
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">
                  What’d we miss? Feel free to text or call Renee (248) 417-9644
                  or David (248) 921-0043 with any other questions!
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
