import { OTR25Header } from "../../assets/otr25Header";
import { TwitchStream } from "../../assets/twitchStream";
import "../../styles/otr25.scss";

export function OTR25() {
  return (
    <div>
    <OTR25Header bgColor="black" />
    <div className="container">
      <div style={{backgroundImage: "url(/Side_Frame_Pattern.png)", backgroundSize: "100%"}}>
        <div style={{backgroundImage: "url(/Glow_Full_Crop.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: "-1700px"}}>
          <div className="image-container">
            <img style={{height: "140px", margin: "100px"}} src="../public/otr25_logo_lines.png" alt="" />
            <div className="shifted-rectangle">
            </div>
          </div>
          <div className="title-container">
            <h1>osu!türkiye Open 2025</h1>
            <br/>
            <p>
              2023 yılında büyük ilgi gören <span className="accent">osu!türkiye Open</span>, daha rekabetçi ve heyecan dolu bir formatla geri dönüyor!
            </p>
            <p>
              Bu sene rekabete daha çok heyecan katmak için yeni bir <span className="accent">"oyuncu çalma"</span> sistemi bulunuyor.
            </p>
            <p>
              Türkiye’nin en iyi osu! oyuncularını kıyasıya mücadele ederken izlemek için hazır olun!
            </p>
          </div>
          <TwitchStream channel="osutrlive" />
        </div>
      </div>
    </div>
    </div>
  );
}