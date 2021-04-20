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
      question: "What about COVID-19?",
      answer:
        "The Town of Hilton Head is still observing a mask mandate in commercial public establishments. Holy Family Catholic Church is still adhering to 50% occupancy (that we will be well under) to allow for proper social distancing and masks are required. The ceremony will last for about an hour. The reception will be entirely outdoors under a pavilion. Catering staff will be masked and all staff will be following standard COVID safety protocols.",
    },
    {
      question: "Is there transportation from the reception?",
      answer: `With everyone staying in different parts of the island, we are unable to provide transportation. Ubers may not be the best plan for getting home at the end of the night so it may be wise to arrange for transportation ahead of time. We have talked with transportation companies within the area that can help get you home safely. Additionally, you are welcome to leave a car at Honey Horn. 

      Diamond Transportation 
      (843) 247 - 2156
      https://hiltonheadrides.com.com

      Yellow Transportation Hilton Head Island 
      (843) 686 - 6666 
      https://www.yellowtransportationhhi.com`,
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
        "Unfortunately, Uber and Lyft can be hard to come by on the island particularly at night. Not impossible but wait times can be long so having an alternative transportation plan isn’t a bad idea!."
    },
    {
      question: "Should I fly into Savannah or Hilton Head?",
      answer:
        "If you can fly into the island airport, that is probably the preferred/easier option. The island is quite small and easy to navigate. However, the Savannah airport is certainly larger (more flights) and Savannah is a great city so if you’re looking to explore, it is a fun option and you can easily rent a car to drive to the island (~50 miles).",
    },
    {
      question: "Why does the reception end so early?",
      answer:
        "Hilton Head is very committed to protecting wildlife and particularly saving turtles! Therefore, the island has strict ordinances about what time all events must end/bright lights must be off so that the young Loggerhead hatchlings are able to make it to the ocean! Dependent on COVID, we will be planning an after party",
    },
    {
      question: "Should I rent a car?",
      answer:
        "Up to you! This all somewhat depends on how long you’re planning to stay, how much you’re looking to explore, and where you are staying. Both Savannah and Hilton Head have many rental car options. Renting bikes is also a fun option since the island has many great bike paths and you can easily ride on the beach!",
    },
    {
      question: "Is there parking at the ceremony/reception? ",
      answer:
        "Yes, there will be free parking available at both locations. You are welcome to leave your car overnight at Honey Horn if that helps but they request that cars be picked up in the morning by 11 am on Sunday May 9th (when the museum reopens for business).",
    },
    {
      question: "Any recommendations for things to do in between the ceremony and cocktail hour/reception?",
      answer:
       "The ceremony should last about an hour. Afterwards, if you’re looking for something to do before the cocktail hour begins at 4:30, a fun idea might be to wander around the Coligny Beach Park and Shopping area, which is fairly close to the church. It’s right by the beach and has lots of cute shops and restaurants. Another idea is to head over to the Coastal Discovery Museum early (reception venue) and explore the grounds/museum. To see more about the CDM, visit https://www.coastaldiscovery.org/.",
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
                  FAQ&apos;s
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <div style={{padding: 8}}>
                      <Typography variant="h5">{faq.question}</Typography>
                    </div>
                    <div style={{padding: 15}}>
                      <Typography  style={{whiteSpace: 'pre-line'}} variant="body2">{faq.answer}</Typography>
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
