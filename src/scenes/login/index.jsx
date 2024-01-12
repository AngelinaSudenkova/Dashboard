import { Box, Button, Typography, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { Grid, Paper, TextField } from "@mui/material";
import { useContext } from "react";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { useState } from "react";
import { fakeAuthProvider } from "../../auth/auth";
import { Navigate, useNavigate } from "react-router";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    // Do something with the username and password, e.g., send to a server
    console.log("Username:", username);
    console.log("Password:", password);

    fakeAuthProvider.signIn(username, password, (status) => {
      console.log(status);
      if (status === "success") {
        navigate("/dashboard");
        console.log(status);
      } else console.log(status);
    });
  };

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const textFieldStyle = {
    margin: "10px 0",
  };

  return (
    <Grid
    container
    style={{
      height: '100vh',  
      width: '200vh',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <AccountCircleRoundedIcon fontSize="large" />
          <div> </div>
          <TextField
            placeholder="Username"
            fullWidth
            required
            sx={textFieldStyle}
            value={username}
            onChange={handleUsernameChange}
          />
          <TextField
            placeholder="Password"
            type="password"
            fullWidth
            required
            sx={textFieldStyle}
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            color="neutral"
            variant="contained"
            size="medium"
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Grid>
      </Paper>
      </Grid>
  );
};
export default Login;
