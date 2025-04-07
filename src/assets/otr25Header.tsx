import { Link, useLocation } from "react-router-dom";

interface MainHeaderProps {
    bgColor: string;
}

export function OTR25Header({ bgColor }: MainHeaderProps) {
    const location = useLocation();
    return (
    <header style={{backgroundColor: bgColor}}>
      <div style={{ display: "flex", alignItems: "center" }}>
            <img
                src="/logosmall.png"
                alt="Logo"
                style={{ width: "55px", height: "55px", marginRight: "10px", borderRadius: "50%", margin: "5px" }}
            />
            <span
                style={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    padding: "0px 8px",
                    background: "linear-gradient(to right, #0077FF, #4949B6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
            osu!türkiye 2025
        </span>
        </div>

        <div style={{ alignItems: "left", display: "flex", gap: "30px", marginLeft: "20px", fontSize: "18px" }}>
            <Link to="/" style={{ color: "white", fontWeight: "normal" }}>Ana Sayfa</Link>
            <Link
                to="https://docs.google.com/spreadsheets/d/1aIveR439mkI0bxa2g0nUU1nWu9Q2qLKt4ktyOctVYnk/edit?gid=1534856340#gid=1534856340"
                target="_blank"
                rel="noopener noreferrer"
                style={{color: "#FF2491"}}
            >
                Main Sheet
            </Link>
            <Link
                to="https://www.twitch.tv/osutrlive"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#8956FB" }}
            >
                Twitch
            </Link>
            <Link
                to="https://challonge.com/tr/osuturkiye2023"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FF8C00" }}
            >
                Challonge
            </Link>
            <Link to="/OTR25/players" style={{ color: location.pathname === "/OTR25/players" ? "white" : "#ccc", fontWeight: location.pathname === "/OTR25/players" ? "bold" : "normal" }}>Oyuncular</Link>
            <Link to="/OTR25/matches" style={{ color: location.pathname === "/OTR25/matches" ? "white" : "#ccc",  fontWeight: location.pathname === "/OTR25/matches" ? "bold" : "normal" }}>Maçlar</Link>
            
        </div>
    </header>
    );
}