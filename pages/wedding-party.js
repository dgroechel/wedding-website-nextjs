import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import PartyCard from "../components/PartyCard";

export default function WeddingParty() {
  const weddingPartyData = [
    {
      name: "Danny Groechel",
      img: "/DAN.png",
      title: "Best Man",
      blurb:
        " David’s youngest brother has graciously cleared his basketball schedule to be here as co-best man for our wedding. When he’s not shooting hoops, Danny can be found whipping his car through the streets of Novi, MI and dancing like Kyrie. If you’re impressed with his dance moves, catch him making his way through the VI in his 2011 Honda Accord!!",
    },
    {
        name: "Liz Engelsen",
        img: "/LIZ.JPG",
        title: "Maid of Honor",
        blurb: "One of Renee’s high school best friends. Liz has a fun, exuberant personality you can’t help but love. She too has known David and Renee since the beginning of it all and even shared a couple of seasons with Dave on the swim team and with Renee playing basketball. Nowadays, pediatric occupational therapy is her speciality, but spoiling her puppy, Nomi, is a close second."
    },
    {
        name: 'Mark Gardner',
        img: '/MARK.JPG', 
        title: 'Best Man',
        blurb: '… where to begin?! Mark has been a mutual friend of David and Renee since the early years of high school. Renee thought Mark was a troublemaker in middle school, but David quickly got a glimpse of the real Mark and became best friends with him in high school … even if it was because they liked the same girl (hint hint: it was not Renee…!)',
    },
    {
        name: 'Laura Cossaboom',
        img: '/LAURA.jpg',
        title: 'Maid of Honor',
        blurb: 'Another of Renee’s high school besties, fellow b-ballers, and one of David’s all-time favorite people to quote. Whether it is her passion for late night pizza (8 Corner Jets is preferred), her caring “Nurse Laura” nature, or her ability to make you laugh til you cry, she will always be a one-of-a-kind-type of gal.'
    },
    {
        name: 'Tommy Groechel',
        img: '/TOMMY.JPG',
        title: 'Groomsman',
        blurb: 'One of David’s younger brothers. We asked him what picture he wanted us to use for this blurb … and he told us to google it. We found his GitHub account and a University of Southern California Computer Science Student Profile and knew we had the right guy. That’s about sums up Tommy for you.'
    },
    {
        name: 'Christine Goglia',
        img: '/CHRISTINE.JPG',
        title: 'Bridesmaid',
        blurb: 'One of Renee’s College of Wooster besties and one of few people David entrusted not to spill the proposal plan. Christine and Renee met in 2010 and since then, it’s been a friendship built for a lifetime. Originally a Bostonian, Christine now lives in New York City but you can always count on Christine to meet up for a fun, spontaneous weekend trip!'
    },
    {
        name: 'Mikey Groechel',
        img: '/MIKEY.JPG',
        title: 'Groomsman',
        blurb: 'The third brother of the Groechel siblings. MAJOR dad vibes (see Christmas photo above). Proud dog dad and future mayor of Farmington Hills, MI. Mike is a recent graduate of Indiana University and now works for Amazon in the midst of navigating the early stages of fatherhood for his fur daughter, Kona.'
    },
    {
        name: 'Katie Groechel',
        img: '/KATIE.png',
        title: 'Bridesmaid',
        blurb: 'David’s “younger sister.” There may be 27 months between them, but we all know what Groechel really runs this line. Whether she’s helping Renee convince Dave rolled up pants are not acceptable for his own wedding ceremony or studiously working towards a Nursing Anesthetist degree in Chicago, you can always count on Katie.'
    },
    {
        name: 'Sarah Groechel',
        img: '/SARAH.jpeg',
        title: 'Bridesmaid',
        blurb: 'David’s youngest sister. Sarah brings a lot of “spunk” and laughter to the Groechel fam. From designing one of a kind outfits (see above for reference) to all of our wedding decor (thanks, Sarah), this IU gal makes everyone’s day brighter with her charisma and great sense of humor.'
    }
  ];
  return (
    <div>
      <Container maxWidth="lg">
          <div style={{paddingBottom: 15}} />
        <Grid alignItems="center" justify="center" container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2" align="center">
              The Wedding Party
            </Typography>
          </Grid>
          {weddingPartyData.map((member) => (
            <Grid item md={6}>
              <PartyCard
                img={member.img}
                title={member.title}
                blurb={member.blurb}
                name={member.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
