import { Link, useLocation } from "react-router-dom";

interface MainHeaderProps {
    bgColor: string;
}

export function MainHeader({ bgColor }: MainHeaderProps) {
    const location = useLocation();
    return (
    <header style={{backgroundColor: bgColor}}>
      <div style={{ display: "flex", alignItems: "center" }}>
            <img
                src="/logosmall.png"
                alt="Logo"
                style={{ width: "55px", height: "55px", marginRight: "10px", borderRadius: "50%", margin: "5px"  }}
            />
            <span
                style={{
                    fontWeight: "bold",
                    fontSize: "28px",
                    padding: "0px 8px",
                    background: "linear-gradient(to right, #E0312D, #FC7D1A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
            osu!türkiye
        </span>
        </div>

        <div style={{ alignItems: "left", display: "flex", gap: "20px", marginLeft: "20px", fontSize: "18px" }}>
            <Link to="/" style={{ color: "white", fontWeight: location.pathname === "/" ? "bold" : "normal" }}>Ana Sayfa</Link>
            <Link to="/OTR25" style={{ background: "linear-gradient(to right, #0077FF, #4949B6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent", 
                    fontWeight: "bold"}}>
                        OTR25
            </Link>
        </div>
    </header>
    );
}