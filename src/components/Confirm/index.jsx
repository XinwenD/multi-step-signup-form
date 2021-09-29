import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    const theme = createTheme({
      palette: {
        primary: {
          light: "#ba68c8",
          main: "#ab47bc",
          dark: "#9c27b0",
          contrastText: "#fff",
        },
        secondary: {
          light: "#fff",
          main: "#fff",
          dark: "#fff",
          contrastText: "#000",
        },
      },
    });
    // console.log(theme);
    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense" sx={{ textAlign: "center" }}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{ fontWeight: "medium" }}
                  variant="h6"
                  color="inherit"
                  component="div"
                >
                  Confirm User Data
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Email" secondary={email} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="City" secondary={city} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary="Biography" secondary={bio} />
              </ListItemButton>
            </ListItem>
          </List>
          <Button color="primary" variant="contained" onClick={this.continue}>
            Confirm &amp; Continue
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
