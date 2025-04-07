import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { AuthorizedPage } from "./pages/AuthorizedPage";
import { ValidatePage } from "./pages/ValidatePage";
import { OTR25 } from "./pages/OTR25/OTR25";
import { OTR25players } from "./pages/OTR25/OTR25players";
import { OTR25matches } from "./pages/OTR25/OTR25matches";
import { MainHeader } from "./assets/mainHeader";
import "./styles/index.scss";

export default function HomePage() {
  return (
    <MainHeader bgColor="#310000"/>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/authorize" element={<AuthorizationPage />} />
      <Route path="/validate" element={<ValidatePage />} />
      <Route path="/authorized" element={<AuthorizedPage />} />
      <Route path="/OTR25" element={<OTR25 />} />
      <Route path="/OTR25/players" element={<OTR25players />} />
      <Route path="/OTR25/matches" element={<OTR25matches />} />
    </Routes>
  </BrowserRouter>
);
