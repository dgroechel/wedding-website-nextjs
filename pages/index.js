import React from "react";
import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import HomeCard from "../components/HomeCard";

const useStyles = makeStyles((theme) => ({
  bgImg: {
    position: "fixed",
    zIndex: -1,
    height: "100%",
    width: "100%",
  },
  header: {},
}));
export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bgImg}>
        <Image
          src="/Renee-and-David-223.jpg"
          quality={100}
          layout="fill"
          objectFit="cover"
          alt="Renee DeVivo and David Groechel"
        />
      </div>
     <div>
       <HomeCard />
     </div>
    </div>
  );
}
