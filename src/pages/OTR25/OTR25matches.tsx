import { OTR25Header } from "../../assets/otr25Header";
import "../../styles/otr25.scss";

export function OTR25matches() {
    return (
      <div className="container">
        <OTR25Header bgColor="black" />
        <div className="content">
          <h1>OTR25 Maçları</h1>
          <p>Bu sayfada OTR25 turnuvasına katılan maçların listesi bulunmaktadır.</p>
          {/* Add your match list or other content here */}
        </div>
      </div>
    );
}