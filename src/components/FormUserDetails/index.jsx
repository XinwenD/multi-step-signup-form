import React, { Component } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import { green, purple } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    const theme = createTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: green[500],
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
                <Typography variant="h6" color="inherit" component="div">
                  Enter User Details
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <TextField
            placeholder="Enter Your First Name"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <TextField
            placeholder="Enter Your Last Name"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <TextField
            placeholder="Enter Your Email"
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            margin="normal"
            sx={{ width: "60%" }}
          />
          <br />
          <br />
          <Button color="primary" variant="contained" onClick={this.continue}>
            Continue
          </Button>
        </React.Fragment>
      </ThemeProvider>
    );
  }
}
