import { OTR25Header } from "../../assets/otr25Header";

export function OTR25players() {
    return (
      <div className="container">
        <OTR25Header bgColor="black" />
        <div className="content">
          <h1>OTR25 Oyuncuları</h1>
          <p>Bu sayfada OTR25 turnuvasına katılan oyuncuların listesi bulunmaktadır.</p>
          {/* Add your player list or other content here */}
        </div>
      </div>
    );
}