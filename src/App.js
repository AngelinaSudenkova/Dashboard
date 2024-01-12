import "./styles.css";
import { ColorModeContext, useMode } from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Dashboard from "./scenes/Dashboard";
import Topbar from "./global/Topbar";
import Login from "./scenes/login";
import { fakeAuthProvider } from "./auth/auth";
import Jakosc_sprzedazy from "./scenes/jakosc_sprzedazy";
import ZamowieniaStrona from "./scenes/Zamowienia";

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
                <Route path="jakosc_sprzedazy" element={<Jakosc_sprzedazy />} />
                <Route path="zamowienia" element={<ZamowieniaStrona/>}/>
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
