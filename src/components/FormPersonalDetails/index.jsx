import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
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
              <Toolbar variant="dense">
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  sx={{ textAlign: "center", fontWeight: "medium" }}
                  variant="h6"
                  color="inherit"
                  component="div"
                >
                  Enter Personal Details
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <TextField
            placeholder="Enter Your Occupation"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <TextField
            placeholder="Enter Your City"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <TextField
            placeholder="Enter Your Bio"
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
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
