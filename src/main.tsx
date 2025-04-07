import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { AuthorizedPage } from "./pages/AuthorizedPage";
import { ValidatePage } from "./pages/ValidatePage";
import { OTR25 } from "./pages/OTR25";

import "./styles/index.scss";

export default function HomePage() {
  return (
    <header>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/logosmall.png"
          alt="Logo"
          style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "30%" }}
        />
        <span
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            background: "linear-gradient(to right, #E0312D, #FC7D1A)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          osu!türkiye
        </span>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/OTR25" style={{color: "green"}}>OTR25</Link>

      </nav>
    </header>
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
    </Routes>
  </BrowserRouter>
);
