import { Link, useLocation } from "react-router-dom";
import "../styles/glitch.scss";

interface MainHeaderProps {
    bgColor: string;
}

export function OTR25Header({ bgColor }: MainHeaderProps) {
    const location = useLocation();
    return (
        <header style={{ backgroundColor: bgColor, height: "70px", padding: 0, paddingLeft: "10px"}}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    src="/otr25_logo_text.png"
                    alt="Logo"
                    style={{
                        height: "38px",
                        padding: "10px",
                    }}
                />
                <span
                    style={{
                        fontWeight: "bold",
                        fontSize: "28px",
                        padding: "0px 8px",
                        background: "linear-gradient(to right, #0077FF, #FF2491)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    osu!türkiye Open 2025
                </span>
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "stretch",
                    justifyContent: "flex-start",
                    marginLeft: "20px",
                    fontSize: "18px",
                    height: "100%",
                }}
            >
                {[
                    { text: "Ana Sayfa", to: "/", color: "white" },
                    {
                        text: "Main Sheet",
                        to: "https://docs.google.com/spreadsheets/d/1aIveR439mkI0bxa2g0nUU1nWu9Q2qLKt4ktyOctVYnk/edit?gid=1534856340#gid=1534856340",
                        color: "#fff",
                        external: true,
                    },
                    {
                        text: "twitch",
                        to: "https://www.twitch.tv/osutrlive",
                        color: "#8956FB",
                        external: true,
                    },
                    {
                        text: "challonge",
                        to: "https://challonge.com/tr/osuturkiye2023",
                        color: "#FF8C00",
                        external: true,
                    },
                    {
                        text: "oyuncular",
                        to: "/OTR25/players",
                        color: location.pathname === "/OTR25/players" ? "white" : "#ccc",
                        weight: location.pathname === "/OTR25/players" ? "bold" : "normal",
                    },
                    {
                        text: "maçlar",
                        to: "/OTR25/matches",
                        color: location.pathname === "/OTR25/matches" ? "white" : "#ccc",
                        weight: location.pathname === "/OTR25/matches" ? "bold" : "normal",
                    },
                ].map(({ text, to, color, weight, external }) => (
                    <div key={text} className="glitch" data-text={text}>
                        <Link
                            to={to}
                            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            style={{
                                color,
                                fontWeight: weight || "normal",
                                height: "100%",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {text.charAt(0).toUpperCase() + text.slice(1)}
                        </Link>
                    </div>
                ))}
            </div>
        </header>
    );
}
