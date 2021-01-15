import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import PeopleIcon from "@material-ui/icons/People";
import MenuIcon from "@material-ui/icons/Menu";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import HomeIcon from "@material-ui/icons/Home";
import WcIcon from "@material-ui/icons/Wc";
import HelpIcon from '@material-ui/icons/Help';
import { Box, IconButton, Typography } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function NavDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = (side) => {
    return (
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(side, false)}
        onKeyDown={toggleDrawer(side, false)}
      >
        <Box>
          <Link href="/">
              <div style={{padding: 10,  display: "inline-block"}}>
            <Image
             
              width={40}
              height={40}
              alt="lighthouse"
              className="logo"
              src="/lightHouse.png"
            />
            </div>
          </Link>
          <Typography style={{ display: "inline-block" }} variant="h4">
            Where to?
          </Typography>
        </Box>

        <List>
          <Link className="link" href="/">
            <ListItem button aria-label="home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/wedding">
            <ListItem button aria-label="wedding">
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText>Wedding</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/our-story">
            <ListItem button aria-label="Our Story">
              <ListItemIcon>
                <WcIcon />
              </ListItemIcon>
              <ListItemText>Our Story</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/guests-and-accomodations">
            <ListItem button aria-label="Guest & Accomodations">
              <ListItemIcon>
                <CardTravelIcon />
              </ListItemIcon>
              <ListItemText>Guest & Accomodations</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/faqs">
            <ListItem button aria-label="FAQ's">
              <ListItemIcon>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText>FAQ's</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/wedding-party">
            <ListItem button aria-label="Wedding Party">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Wedding Party</ListItemText>
            </ListItem>
          </Link>
          <Link className="link" href="/photos">
            <ListItem button aria-label="Photos">
              <ListItemIcon>
                <CameraAltIcon />
              </ListItemIcon>
              <ListItemText>Photos</ListItemText>
            </ListItem>
          </Link>
        </List>
      </div>
    );
  };
  return (
    <div>
      <IconButton onClick={toggleDrawer("left", true)} aria-label="menu button">
        <MenuIcon aria-label="menu button" />
      </IconButton>

      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
