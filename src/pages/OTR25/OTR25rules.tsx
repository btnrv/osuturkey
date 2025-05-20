import { OTR25Header } from "../../assets/otr25Header";
import "../../styles/otr25.scss";

export function OTR25rules() {
  return (
    <div>
      <OTR25Header bgColor="black" />
      <div className="container">
        <div style={{backgroundImage: "url(/Side_Frame_Pattern.png)", backgroundSize: "100%"}}>
          <div style={{backgroundImage: "url(/Glow_Full_Crop.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionY: "-1700px"}}>
            <div className="title-container">
              <h1 style={{marginTop: "1.2em"}}>OTR25 Kuralları</h1>
              <br/>
              <p>
                2023 yılında büyük yankı uyandıran <span className="accent">osu!türkiye Open</span>, bu sefer daha çekişmeli ve adrenalin dolu bir formatla karşınızda!
              </p>
              <p>
                Bu yıl rekabeti doruk noktasına çıkarmak için yepyeni bir <span className="accent">"oyuncu çalma"</span> sistemi devreye alındı.
              </p>
              <p>
                Formatı ve turnuva kurallarını aşağıda bulabilirsiniz.
              </p>
            </div>
            <div className="content">
              <div className="window" style={{marginTop: "60px"}}>
                <ul>
                {'\u003C'}osu!türkiye / KAYITLAR.txt{'\u003E'}
                  <li style={{marginTop: "1.2em"}}>Turnuvaya sadece profilinde Türk bayrağı olan oyuncular kayıt olabilir.</li>
                  <li>Herhangi bir sıralama sınırı yoktur.</li>
                  <li>Bu turnuva bir draft turnuvasıdır.</li>
                  <li>Yayıncılar ve yorumcular dışında herhangi bir görevlinin oyuncu olarak katılması yasaktır. Aynı şekilde elenen oyuncuların sonradan görevli ekibine katılımı yayıncılık ve yorumculuk dışında mümkün olmayacaktır.</li>
                  <li>Bütün oyuncular osu! turnuva komisyonunun incelemesine tabiidir. Bu badge alacak turnuvalar için zorunlu bir süreçtir. Turnuva düzenleyicilerinin bu süreçte hiçbir etkisi bulunmamaktadır.</li>
                  <li>Oyuncuların Discord sunucusunda bulunması gerekmektedir.</li>
                </ul>
              </div>
            </div>
        </div>

        <div className="content">
          <div className="window">
            <ul>
            {'\u003C'}osu!türkiye / GENEL_BILGILER.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Turnuvaya sadece profilinde Türk bayrağı olan oyuncular kayıt olabilir.</li>
              <li>Bütün zamanlar Türkiye saati (UTC+3) ile gösterilecektir.</li>
              <li>Turnuva boyunca gerek Discord sunucusunda gerek oyun sohbetinde uygunsuz veya sportmen olmayan davranışlara müsaade edilmeyecektir. Bu gibi davranışları alan oyuncular ve takımları turnuvadan diskalifiye edilebilir. Aynı şekilde osu!'nun koymuş olduğu kurallar da bu kapsama dahildir.</li>
              <li>İlk 30 saniye dışında abort istekleri Kabul edilmeyecektir. Abort isteklerinin kötüye kullanımı halinde Kabul edilmemesi maç hakemlerinin insiyatifindedir.</li>
              <li>Maç zamanlarının bir sonraki haftanın harita havuzu gösteriminden 2 saat öncesinden ileri bir tarihe sarkmaması gerekmektedir.</li>
            </ul>
          </div>
          <div className="window">
            <ul>
            {'\u003C'}osu!türkiye / ON_ELEMELER.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Qualifier lobileri HeadToHead, ScoreV2 ve NF ile oynanacaktır.</li>
              <li>Oyuncuların her haritada skor yapması zorunludur. Herhangi bir haritada skoru olmayan oyuncular diskalifiye edilecektir. (Girip hiç oynamayıp 0 puan çıkarmak bile bir skor sayılır.)</li>
              <li>Haritalar arası oyuncuların sahip olacağı süre 45 saniyedir. Oyuncuların lobiden önce haritaları indirmiş olmaları beklenmektedir.</li>
              <li>Lobiye 5 dakikadan fazla geç kalan oyuncular, hakemin insiyatifine göre kaçırılan haritaları lobi sonunda oynayabilir. Hakem bunu kabul etmediğinde oyuncuların başka bir lobiye kaydolmaları beklenmektedir.</li>
              <li>Haritalar sırasıyla NM1'den başlayıp DT3'e kadar gidecektir. Rastgele bir sıralama yapılmayacaktır.</li>
              <li>Sıralamada klasikleşmiş Z-Sum yöntemi kullanılacaktır.</li>
              <li>Qualifier sonunda ilk 80'de olan oyuncular turnuvada ilerlemeye hak kazanacaklar.</li>
            </ul>
          </div>
          <div className="window">
            <ul>
            {'\u003C'}osu!türkiye / DRAFT_SURECI.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Draft {'<tarih>'} tarihinde canlı yayında yapılacaktır. Kaptanların Discord sunucusunda yayın açık şekilde hazır olarak beklemeleri gerekmektedir. </li>
              <li>Qualifier sonucunda göre oyuncular 3 kümeye ayrılır: İlk 16 oyuncu (1-16) 1., sonraki 32 oyuncu (17-48) 2., sonraki (49-80) 3. küme olarak atanır.</li>
              <li>1. küme oyuncular takım kaptanı olurlar. Takımlarını dizerken yapacağı seçimler tamamen onlara aittir. Eğer müsait değillerse turnuvada oyuncu veya görevli olmayan başka birini onların yerine oyuncu seçmek için görevlendirebilirler. Bu durumun önceden turnuva yetkililerine bildirilmesi gerekir.</li>
              <li>Lobiye 5 dakikadan fazla geç kalan oyuncular, hakemin insiyatifine göre kaçırılan haritaları lobi sonunda oynayabilir. Hakem bunu kabul etmediğinde oyuncuların başka bir lobiye kaydolmaları beklenmektedir.</li>
              <li>Oluşan takımlar, Son 16 Turu maçlarından 48 saat öncesine kadar isimlendirilebilir. Bu isimler hakaret veya müstehcen içerikli olmamalıdır. Seçilen isimler kalıcıdır, sonradan değiştirilemez.</li>
              <li>Oyuncu seçimleri 4 periyotta, çift yönde yapılacaktır:
                <ul>
                  <li>1. takımdan 16. takıma 3. küme oyuncular seçilir.</li>
                  <li>16. takımdan 1. takıma 2. küme oyuncular seçilir.</li>
                  <li>1. takımdan 16. takıma 2. küme oyuncular seçilir.</li>
                  <li>16. takımdan 1. takıma 3. küme oyuncular seçilir.</li>
                </ul>              
              </li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - DINAMIKLER_VE_CALMAK.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Her maç sonunda kazanan takım, kaybeden takımdan belirli kurallar çerçevesinde istediği oyuncuyu çalabilir. Çalınacak oyuncu havuz gösterimine kadar bildirilmek zorundadır. Bu kurallar şunlardır:</li>
              <li>Galipler Fikstürü içinde 1. küme oyuncuları çalınamaz.</li>
              <li>Bir takımda ikiden fazla 1. küme oyuncusu bulunamaz.</li>
              <li>Turnuva devamındaki karşılaşma değişimlerine göre oyuncu sayısını gözetlemek kaptanın sorumluluğundadır. İki adet 3. küme oyuncusunun çıkması gereken haftada takımda bir adet 3. küme oyuncunun bulunması tamamen kaptanın suçu olacaktır. Bu takımlar turnuvadan direkt elenecektir.</li>
              <li>Turnuvanın son Büyük Final maçının olduğu hafta oyuncu çalınamaz.</li>
              <li>Yarı Final haftasında Mağluplar Fikstürü’nde bulunuyorsanız, hafta boyunca sadece bir oyuncu çalabilirsiniz. Bu oyuncu Yarı Final haftasında oynadığınız iki maçtan herhangi birinden olabilir.</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - DINAMIKLER.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Turnuva boyunca takım boyutları değişeceği gibi oynayacak oyuncu sayısı da değişecektir. Haftalara göre oynaması gereken oyuncu sayıları şu şekildedir:
                <ul>
                  <li>Son 16 Turu ve Çeyrek Final: 1xT1, 1xT2, 1xT3</li>
                  <li>Yarı Final ve Final: 1xT1, 1xT2, 1xT3, 1x T2 veya T3</li>
                  <li>Büyük Final: 1xT1, 2xT2, 2xT3</li>
                </ul>              
              </li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - MAC_SURECI.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Hakemler maçtan en az 15 dakika önce takım kaptanlarına Discord sunucusundan ulaşarak maç zamanı hakkında bilgi verecek ve 5 dakika öncesinden maç lobisi için davet gönderecektir. Eğer hakemler tarafından size zamanında herhangi bir bilgi verilmediyse, konuyla ilgili turnuva organizatörleriyle iletişime geçebilirsiniz.</li>
              <li>Maç saatinde her takımdan gerekli kişi sayısı (haftaya göre 3-5) lobide bulunmalıdır.</li>
              <li>Her iki takımdan biri maç saatinden 5 dakika sonrasına kadar yeterli oyuncu sayısına sahip değilse, eksik oyuncusu bulunan takım hükmen mağlup sayılır. Maç saatinin tekrar kararlaştırılması geç kalmayan takımın insiyatifindedir.</li>
              <li>Hiçbir takımın maç saatinde lobide bulunmadığı durumda kaptanın Eleme Turu sıralaması daha yüksek olan takım hükmen galip sayılır.</li>
              <li>Her takımın haritanın ilk 30 saniyesinde olmak kaydıyla bir abort hakkı vardır. Daha fazla abort hakkı verilmesi hakem insiyatifindedir fakat turnuva yöneticileri tarafından önerilmemektedir.</li>
              <li>Takımların harita seçmek ve doğru dizilimle lobiye girmek için toplam 2 dakikaları vardır. Süre aşımı halinde hakem, seçme veya yasaklama sıralamasını karşı takıma verebilir.</li>
              <li>Seçilen/Yasaklanan haritaların daha sonra değiştirilmesi teklif edilemez. Enter tuşuna basmadan önce 2 kez düşünün.</li>
              <li>Maçlar simultane bir biçimde oynanır. Ayrık veya asenkron maçlara izin verilmemektedir.</li>
              <li>Isınma haritası açılmayacaktır. Oyuncuların önceden ısınmış olmaları beklenmektedir.</li>
              <li>Maç öncesinde takım kaptanları !roll atar. Yüksek atan takım seçme veya yasaklama sırasını belirler. Düşük atan takım ise diğer sıralamayı belirler.</li>
              <li>Yasaklama ve seçme sırası ABAB şeklindedir.</li>
              <li>Aynı mod havuzundan ardışık iki harita seçmek (double pick) NM havuzu dışında yasaktır.</li>
              <li>Herhangi bir uygunsuzluk durumunda seçme sırasını karşı takıma vermek hakemin yetkisi altındadır. Olağandışı durumlarda hakemler turnuva organizatörlerine başvurmakta ve diskalifiye istemekte özgürdür. Bu gibi durumlarda sağduyu dikkate alınacaktır.</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - FREEMOD_KURALLARI.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Kullanılabilecek modlar: HD, HR, EZ</li>
              <li>Her takımda bir HD veya EZ, bir HR almış oyuncu bulunmalıdır. Kalan oyuncular istediği modu almakta/almamakta serbesttir.</li>
              <li>HDHR-&gt;HR</li>
              <li>EZ çarpanı: 1.8x (900k maksimum skor)</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - DOUBLETIME_FREEMOD_KURALLARI.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Kullanılabilecek modlar: HD, HR, EZ</li>
              <li>Her takımda bir HD, bir HR veya EZ almış oyuncu bulunmalıdır. Kalan oyuncular istediği modu almakta/almamakta serbesttir.</li>
              <li>EZHD-&gt;EZ, HDHR-&gt;HR</li>
              <li>EZ çarpanı: 2.2x (1.32m maksimum skor)</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - MAC_ZAMANI_BELIRLEME.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Maçlar varsayılan olarak haftasonuna rastgele dağıtılacaktır.</li>
              <li>Maç zamanları Türkiye saati (UTC+3) ile gösterileceği için bu zaman dilimi uyarınca bildirilmesi gerekmektedir.</li>
              <li>Oyuncular, maç zamanlarını bir sonraki haftanın havuz gösteriminden 2 saat öncesine kadar bildirmek zorundadır. Aksi halde önceden atanmış maç saatleri dikkate alınır.</li>
              <li>Maçların haftaiçi olmasında bir kısıtlama bulunmamaktadır, fakat yayınlanmaması ihtimalinin göz önünde bulundurulması gerekmektedir.</li>
              <li>Maç saati değişimlerinin belirlenen saatten 12 saat öncesi veya daha erken olmadığı takdirde değişimin garantisi bulunmamaktadır. Görevlilerin robot olmadığını unutmayın.</li>
              <li>Zaman değişikliklerinin Discord sunucusu üzerinden ekran görüntüsü kanıtıyla bildirilmesi gerekmektedir.</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - HARITA_HAVUZLARI.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Her bir harita havuzu, ait olduğu turun maçlarının oynanacağı haftanın Pazartesi günü önceden duyurulan bir saatte açıklanır. Turnuva organizatörleri gerekli gördüğü durumlarda havuz gösterim tarih ve saatini değiştirme hakkını saklı tutar.</li>
              <li>
                <img src="https://puu.sh/KsKnE/135c989a4d.png" style={{ display: 'block', margin: '0 auto', width: '90%' }} />
              </li>
              <li>Havuz zorluğu/best of/yasaklama sayısı/NM/HD/HR/DT/DTFM/FM/TB:</li>
              <li>Qualifier: 6.7/-/-/5/2/2/3/0/0/0</li>
              <li>Ro16: 6/9/1/5/2/2/2/1/2/1</li>
              <li>Çeyrek final: 6.4/11/2/6/3/3/2/2/2/1</li>
              <li>Yarı final: 6.8/11/2/6/3/3/2/2/2/1</li>
              <li>Final: 7.2/13/2/6/4/4/3/2/2/1</li>
              <li>Büyük final: 7.6/13/2/6/4/4/3/2/2/1</li>
            </ul>
          </div>
          <div className="window">
            <ul>
              {'\u003C'}osu!türkiye - TAKVIM.txt{'\u003E'}
              <li style={{marginTop: "1.2em"}}>Görevli Kayıtları: 25 Mayıs</li>
              <li>Kayıt açılışı: 7-14 Haziran</li>
              <li>Kayıt sonu: 5 Temmuz</li>
              <li>Qualifiers: 14-24 Temmuz</li>
              <li>Draft Yayını: 26-27 Temmuz</li>
              <li>RO16: 28 Temmuz - 3 Ağustos</li>
              <li>Çeyrek Final: 4-10 Ağustos</li>
              <li>Yarı Final: 11-17 Ağustos</li>
              <li>Final: 18-24 Ağustos</li>
              <li>Büyük Final: 25-31 Ağustos</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}