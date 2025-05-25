import { Link, useLocation } from "react-router-dom";
import "../styles/glitch.scss";

interface MainHeaderProps {
    bgColor: string;
}

export function OTR25Header({ bgColor }: MainHeaderProps) {
    const location = useLocation();
    return (
        <header style={{ backgroundColor: bgColor, height: "70px", padding: 0, paddingLeft: "10px"}}>
            <div className="text-logo"></div>
        </header>
    );
}
