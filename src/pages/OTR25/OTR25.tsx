import { OTR25Header } from "../../assets/otr25Header";
import { TwitchStream } from "../../assets/twitchStream";
import "../../styles/otr25.scss";

export function OTR25() {
  return (
    <div>
    <OTR25Header bgColor="black" />
    <div className="container">
      <div className="side-frame">
        <div className="line-logo"></div>
          <TwitchStream channel="osutrlive" />
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
          <div className="title-container">
            <h1 style={{marginTop: "100px"}}>Görevli Kayıtları</h1>
            <br/>
          </div>
          <div className="flex-container" style={{ justifyContent: "center", alignContent: "center",}}>
            <iframe style={{width: "60%", height: "1200px", border: "0", borderRadius: "20px"}} src="https://docs.google.com/forms/d/e/1FAIpQLSeHhtRXQvqGlR8ODsvSQZtZH3XUgMucoeLi9ToMOkNbAcfAUA/viewform"></iframe>    
          </div>
        </div>
      </div>
    </div>
  );
}