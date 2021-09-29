import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
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
                  Success!
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <br />
          <h1>Thank you for your submission!</h1>
          <p>You will receive an email with further instructions.</p>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
