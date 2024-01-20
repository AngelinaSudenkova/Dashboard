import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import global_en from "./translations/en/global.json";
import global_pl from "./translations/pl/global.json";
import i18next from 'i18next';
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: {escapeValue: true},
  lng: "pl",
  resources: {
    en: {
      global: global_en,
    },
    pl: {
      global: global_pl,
    },
  },
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </I18nextProvider>
  </StrictMode>
);
