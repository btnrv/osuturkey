import { OTR25Header } from "../../assets/otr25Header";
import "../../styles/otr25.scss";

export function OTR25players() {
    return (
      <div className="container">
        <OTR25Header bgColor="black" />
        <div className="content">
          <h1>OTR25 Oyuncuları</h1>
          <p>Bu sayfada OTR25 turnuvasına katılan oyuncuların listesi bulunmaktadır.</p>
          <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSrR2Y85uojYx0C5xSiaWrnljONEUGHbDEWhezSEo2hPMEDtqY6ys2u2ixfNI9sWYNUKFDXo4mGhNoZ/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false"></iframe>
        </div>
      </div>
    );
}