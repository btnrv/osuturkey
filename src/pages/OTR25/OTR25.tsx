import { OTR25Header } from "../../assets/otr25Header";
import "../../styles/otr25.scss";

export function OTR25() {
  return (
    <div>
      <OTR25Header bgColor="black" />
      <div className="container">
      <div style={{backgroundImage: "url(/Side_Frame_Pattern.png)", backgroundSize: "100%"}}>
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
        <div className="content">
          <section>
            <h2>Kayıt</h2>
            <ul>
              <li>Turnuvaya sadece profilinde Türk bayrağı olan oyuncular kayıt olabilir.</li>
              <li>Herhangi bir sıralama sınırı yoktur.</li>
              <li>Bu turnuva bir draft turnuvasıdır.</li>
              <li>Yayıncılar ve yorumcular dışında herhangi bir görevlinin oyuncu olarak katılması yasaktır. Aynı şekilde elenen oyuncuların sonradan görevli ekibine katılımı yayıncılık ve yorumculuk dışında mümkün olmayacaktır.</li>
              <li>Bütün oyuncular osu! turnuva komisyonunun incelemesine tabiidir. Bu badge alacak turnuvalar için zorunlu bir süreçtir. Turnuva düzenleyicilerinin bu süreçte hiçbir etkisi bulunmamaktadır.</li>
              <li>Oyuncuların Discord sunucusunda bulunması gerekmektedir.</li>
            </ul>
          </section>

          <section>
            <h2>Genel Bilgiler / Prosedürler</h2>
            <ul>
              <li>Bütün zamanlar Türkiye saati (UTC+3) ile gösterilecektir.</li>
              <li>Turnuva çift elemeli bir turnuvadır.</li>
              <li>Turnuva boyunca gerek Discord sunucusunda gerek oyun sohbetinde uygunsuz veya sportmen olmayan davranışlara müsaade edilmeyecektir. Bu gibi davranışları alan oyuncular ve takımları turnuvadan diskalifiye edilebilir. Aynı şekilde osu!'nun koymuş olduğu kurallar da bu kapsama dahildir.</li>
              <li>İlk 30 saniye dışında abort istekleri kabul edilmeyecektir. Abort isteklerinin kötüye kullanımı halinde kabul edilmemesi maç hakemlerinin inisiyatifindedir.</li>
              <li>Maç zamanlarının bir sonraki haftanın harita havuzu gösteriminden 2 saat öncesinden ileri bir tarihe sarkmaması gerekmektedir.</li>
            </ul>
          </section>
        </div>

      </div>
      </div>
    </div>
  );
}