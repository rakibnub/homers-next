import React, { useState } from "react";
import {
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from 'next/link';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "black",
        fontSize: "16px",
    },
    icon:{
        color: "white",
        fontSize: "40px",
    }
}));

import {NavBarItems} from './navbar.component';

function DrawerComponent() {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{
          sx: { width: "230px" },
        }}
      >
        <List>
          {NavBarItems.map(({name, url}, index) => {
            return (
              <>
              <ListItem onClick={() => setOpenDrawer(false)} key={index}>
                <ListItemText>
                  <Link passHref href={url}><a className={classes.link}>{name}</a></Link>
                </ListItemText>
              </ListItem>
              <Divider/>
              </>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
