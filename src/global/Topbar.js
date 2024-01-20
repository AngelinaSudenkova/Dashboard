import { Box, IconButton, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext } from "../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Button from "@mui/material/Button";
import { fakeAuthProvider } from "../auth/auth";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
  const [language, setLanguage] = useState("pl");

  const handleLogout = () => {
    fakeAuthProvider.signOut(() => {
      navigate("/login");
    });
  };

  const toggleLanguage = () => {
    setLanguage((curr) => (curr === "en" ? "pl" : "en"));
    i18n.changeLanguage(language);
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" paddingLeft="10px">
        <h1>{t("topbar.title")}</h1>
      </Box>
      <Box display="flex">
        <IconButton>
          <AccountCircleRoundedIcon />
        </IconButton>
        <IconButton onClick={() => toggleLanguage()}>
          <LanguageOutlinedIcon />
        </IconButton>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <Box m={2}>
          <Button
            className="logoutButton"
            color="neutral"
            variant="contained"
            size="small"
            onClick={handleLogout}
          >
            {t("topbar.logout")}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
