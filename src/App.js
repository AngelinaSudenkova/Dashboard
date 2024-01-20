import "./styles.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Topbar from "./global/Topbar";
import Login from "./scenes/login";
import { fakeAuthProvider } from "./auth/auth";
import ZamowieniaStrona from "./scenes/Zamowienia";
import PoradyStrona from "./scenes/porady_sprzedazowe";
import JakoscStrona from "./scenes/jakosc_sprzedazy";
import OpinieStrona from "./scenes/opinie_kupujacych";
import WykresStrona from "./scenes/wykres_sprzedazy";
import RankingStrona from "./scenes/ranking_ofert";

export default function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Topbar />
                    <ProtectedPath>
                      <Outlet />
                    </ProtectedPath>
                  </>
                }
              >
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="topbar" element={<Topbar />} />
                <Route path="jakosc" element={<JakoscStrona />} />
                <Route path="zamowienia" element={<ZamowieniaStrona/>}/>
                <Route path="porady" element={<PoradyStrona/>}/>
                <Route path="opinie" element={<OpinieStrona/>}/>
                <Route path="wykres" element={<WykresStrona/>}/>
                <Route path="ranking" element={<RankingStrona/>}/>
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

function ProtectedPath({ children }) {
  let location = useLocation();
  return fakeAuthProvider.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location.pathname }} />
  );
}

export function Layout() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}
