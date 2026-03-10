// ============================================================
// data.js — Tüm içerik buradan yönetilir
// Yeni proje eklemek için:
//   1. projects objesine yeni key ekle
//   2. İlgili slide'ın cards dizisine kart bilgisini ekle
// ============================================================

// ── SLIDE METAVERİSİ ────────────────────────────────────────
const slidesMeta = [
  {
    id: 'slide-0',
    type: 'about'
  },
  {
    id: 'slide-1',
    type: 'company',
    cardType: 'projects-grid',
    tag: 'Profesyonel Deneyim',
    company: 'Deneyimler',
    period: '2018 - Günümüz',
    
    desc: `Hayat sigortası ve Elementer sigorta alanında 4 yılı aşkın süredir 2 büyük sigorta şirketinde iş analisti olarak görev yaptım.Kariyerime bu alanda devam etmekteyim.
    Bir iş analistinin asli görevleri olan süreç analizi gereksinim toplama ve dökümantasyonun yanı sıra sahip olduğum veri analizi ve teknik bilgi birikimiyle projelerin teknik tasarım ve geliştirme süreçlerine de aktif katkılar sağladım.
    Aşağıda her projeye dair süreç akışlarını, karşılaşılan zorlukları ve üretilen çözümleri detaylıca bulabilirsiniz.
    `,
    
    
    
    
    skills: ['Microservice', 'Mobil Sistemler', 'REST API', 'Oracle', 'Java', 'Agile', 'Sistem Analizi', 'Hasar Yönetimi'],
    cards: [
      { id: 'az-1', num: '01', title: 'Mobil 3D Tahsilat entegrasyonu', desc: 'Mevcut sistemlerin yeni ürün yapılarına uyarlanması ve geçiş süreçlerinin yönetimi' },
      { id: 'ts-sbm', num:'02',     icon: '🔗', title: 'SBM Veri Entegrasyonu & Mutabakat Sistemi',           desc: 'Sektör veri standardizasyonu ve SBM entegrasyonu' },
      { id: 'ts-chatbot', num:'03', icon: '🤖', title: 'Chatbot & AI Asistan',            desc: 'Müşteri hizmetleri için yapay zeka tabanlı chatbot geliştirme' },
      { id: 'ts-bpmn',    num:'04',    icon: '📋', title: 'BPMN Süreç Modelleme',            desc: 'İş süreçlerinin BPMN ile modellenmesi' },
    ]
  },
  {
    id: 'slide-2',
    type: 'company',
    cardType: 'projects-grid',
    tag: 'İlgi Alanları & Notlar',
    company: 'Araştırmalar & Kişisel Projeler',
    period: '',
    desc: 'İş projelerinin dışında takip ettiğim, üzerinde düşündüğüm veya deney yaptığım alanlar.',
    skills: [],
    cards: [
      { id: 'interest-agile',   num: '01', title: 'Agile & Ürün Yönetimi', desc: 'Scrum, Kanban ve modern ürün geliştirme metodolojileri' },
      { id: 'interest-llm',     num: '02', title: 'LLM & AI Araçları',     desc: 'Büyük dil modelleri ve iş analizine uygulamaları' },
    ]
  }
];

// ── PROJE DETAYLARI (modal içeriği) ─────────────────────────
const projects = {
  'az-1': {
    tag: 'Proje',
    title: 'Mobil 3D Tahsilat entegrasyonu',
    stack: ['Java', 'IBM D2B', 'Waterfall', 'Hayat Sigortası', 'UAT'],
sections: [
  { 
    type: 'text', 
    content: `Hayat sigortası sisteminde vadesi geçmiş poliçe ödemelerini mobil kanal üzerinden anlık olarak yapılabilir hale getiren ödeme akışını tasarladım ve süreci uçtan uca yönettim.

Aşağıdaki diyagramda sistemin high-level mimarisi görülmektedir.` 
  },
  { 
    type: 'svg', 
    content: 'diagrams/tahsilat-akis-en.svg' 
  },
  { 
    type: 'text', 
    content: `Akış klasik bir ödeme sistemine benzerlik göstermekle birlikte sigorta iş kurallarını da kapsamaktadır. Borç sorgulama ve tutar doğrulamadan kart kontrolü ile ödeme gateway entegrasyonuna kadar her adımı analiz ederek gereksinimleri tanımladım.` 
  },
  {
    type: 'text',
    content: `<div style="margin: 24px 0;">
      <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Temel Katkılarım</h4>
      <ul style="list-style: none; margin: 0; padding: 0;">
        <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
          <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
          Vade tespiti, kur yönetimi ve mükerrer tahsilat konularında hata toleransı düşük iş kuralları ve engelleri tanımlayarak sürecin güvenilirliğini sağladım.
        </li>
        <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
          <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
          Karma test senaryoları için test verilerini script ile üreterek farklı senaryoların test edilmesini sağladım
        </li>
      </ul>
    </div>`
  },
{ 
  type: 'bottomText', 
  content: `<div style="margin-bottom: 24px;">
  <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Zorluklar</h4>
  <ul style="list-style: none; margin: 0; padding: 0;">
    <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
      Çok sayıda ekibin ortak paydası olan bir ürünün koordinasyonu ve sorumluluk sınırlarının netleştirilmesi
    </li>
    <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
      Know-how eksikliği olan noktalarda tersine mühendislik yaparak sistemin davranışlarını analiz etmek
    </li>
  </ul>
</div>

<div>
  <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Çıkarılan Dersler</h4>
  <ul style="list-style: none; margin: 0; padding: 0;">
    <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
      <span style="font-weight: 600; color: #1c1a18;">Early Documentation:</span> Büyük ölçekli projelerde erken aşamada yapılan strateji analizi ve bulguların kayıt altına alınması, ilerleyen süreçteki anlaşmazlıkları önlemenin en etkili yoludur
    </li>
    <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
      <span style="font-weight: 600; color: #1c1a18;">Reverse Engineering:</span> Az dokümantasyonlu yapılarda tersine mühendislik ile ilerlemenin ne zaman yeterli, ne zaman yetersiz kalacağını öngörmek kritik bir beceridir — doğru noktada flag kaldırarak bilgi aktarımı talep etmek süreci tıkanmaktan kurtarır
    </li>
    <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
      <span style="font-weight: 600; color: #1c1a18;">Test Automation:</span> Script ile test verisi üretmek, karma senaryoların kapsamını genişletirken tekrar kullanılabilir bir test altyapısı kurmanın da temelini atar
    </li>
    <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
      <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
      <span style="font-weight: 600; color: #1c1a18;">Dependency Management:</span> Çok paydaşlı yapılarda her ekibin kendi öncelikleri ve takvimi olduğunu göz önünde bulundurarak bağımlılıkların ve sorumluluk alanlarının netleştirilmesi projenin sağlıklı ilerlemesi için hayati önem taşır
    </li>
  </ul>
</div>` 
}
]


  },
  'ts-sbm': {
    tag: '',
    title: 'SBM Veri Entegrasyonu & Mutabakat Sistemi',
    stack: ['PL/SQL', 'Oracle', 'Java', 'ETL', 'Shell Script', 'Veri Kalitesi', 'Python', 'Selenium'],
    sections: [
      { 
        type: 'text', 
        content: `Sigorta Bilgi ve Gözetim Merkezi (SBM), Türkiye'nin sigorta ekosistemindeki verileri merkezi bir yapıda konsolide eden teknolojik bir veri ambarıdır. Ortak veri modeli projesi kapsamında tüm sigorta kurumlarının aynı standarda sahip şekilde verilerini SBM'ye iletmesi sağlanmaktadır.` 
      },
      { type: 'image', content: 'images/sbm_yapi.png' },
      { 
        type: 'text', 
        content: `<div style="margin: 24px 0;">
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Görevlerim & Sorumluluklar</h4>
          <div style="color: #6b6560; line-height: 1.7; margin-bottom: 18px;">
            İşe girdiğim dönemden çıktığım döneme kadar (başka projelere full odaklandığım dönemler dışında) bu projenin parçası oldum. Projeyi başlangıçta veri bakımı ve aktarım çalışmalarından başlayarak, sonrasında sistem geliştirmelerine ve ödeme mutabakat sisteminin kurulumuna kadar yönettiğim projeyi 3 ana ayakta organiye edebilirim:
          </div>
          
          <h5 style="font-size: 13px; font-weight: 600; color: #1c1a18; margin-bottom: 10px; margin-top: 14px;">1. Sistem Verilerinin Düzeltilmesi</h5>
          <p style="color: #6b6560; line-height: 1.65; margin-bottom: 10px; margin-left: 10px;">Migration hataları, yanlış mapping, kullanıcı input hataları ve iş kuralı ihlalleri nedeniyle oluşan veri hatalarının düzeltilmesi. Sistemsel eksikliklerin tespitinde analiz ve test çalışmalarını yürütme. Toplu veri bakımı gerektiğinde SQL ve Python scriptleri yazarak otomasyonu sağlama.</p>
          
          <h5 style="font-size: 13px; font-weight: 600; color: #1c1a18; margin-bottom: 10px; margin-top: 14px;">2. Yeni Sistem Geliştirmeleri</h5>
          <p style="color: #6b6560; line-height: 1.65; margin-bottom: 10px; margin-left: 10px;">SBM'ye ait 7-8 farklı servis ailesinin hasar ayağındaki geliştirmelerini yürütme. Kimlik sorgulama gibi hizmetlerdeki değişiklikleri tüm bağımlı modüllerde güncelleyerek tutarlılığı sağlama. Veri aktarım standartlarına aykırı sistem prosedürlerinin güncellenmesini sağlama.</p>
          
          <h5 style="font-size: 13px; font-weight: 600; color: #1c1a18; margin-bottom: 10px; margin-top: 14px;">3. Mutabakat Sistemini İyileştirme</h5>
          <p style="color: #6b6560; line-height: 1.65; margin-left: 10px;">Yapılmış fakat yetersiz kalan mutabakat sistemini ödeme özelinde netleştirerek yeniden tasarlama. Her transaction'ı eşleştirmeye çalışmak yerine, geniş resmi görüp veri uyumsuzluklarını anlık olarak tanımlayan bir sistem kurma.</p>
        </div>`
      },
      { 
        type: 'svg', 
        content: 'diagrams/sbm-surec-karsilastirma.svg' 
      },
      {
        type: 'text',
        content: `<div style="margin: 24px 0;">
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Temel Katkılarım</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              Tek satırlıktan 200.000 satıra uzanan kapsamda veri bakım ve temizleme çalışmaları
            </li>
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              Ödeme mutabakat sisteminin kurulumu ve proje ilerlemesinde teknik yönlendirme
            </li>
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              SBM süreçleri konusunda diğer birimlere teknik ve koordinasyon desteği
            </li>
            <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              SBM geliştirmelerinde tam hakimiyet ve end-to-end süreç yönetimi
            </li>
          </ul>
        </div>`
      },
      { 
        type: 'bottomText', 
        content: `<div style="margin-bottom: 24px;">
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Zorluklar</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
              Veri kirliliği ve sistem tasarımından kaynaklanan entegrasyon güçlükleri
            </li>
            <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
              Proje sigorta domain uzmanlığı, veri yönetimi ve yazılım/debugging bilgisinin bir arada talep edildiği geniş bir kapsama sahip
            </li>
          </ul>
        </div>

        <div>
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Çıkarılan Dersler</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
              <span style="font-weight: 600; color: #1c1a18;">Veri Validation:</span> Kritik sistemlerde küçük bir veri hatası zincirleme etki yaratabilir — dikkat, doğrulama ve audit adımları vazgeçilmezdir
            </li>
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
              <span style="font-weight: 600; color: #1c1a18;">Multidisciplinary Skills:</span> Veri, domain ve teknik bilginin bir arada bulunması karmaşık problemlere esnek ve bütünsel çözümler üretmeyi mümkün kılar
            </li>

          </ul>
        </div>` 
      },
      { type: 'image', content: 'images/ts-sbm.png' }
    ]
  },
  'ts-chatbot': {
    tag: '',
    title: 'Chatbot Servis Entegrasyonları',
    stack: ['REST API', 'Java', 'NLP Entegrasyon', 'Chatbot', 'Servis Tasarımı', 'POC', 'Login Akışı'],
    sections: [
      { 
        type: 'text', 
        content: `Şirketin AI dönüşüm sürecinin bir parçası olarak sigorta sektöründe fark yaratacak bir müşteri chatbotu geliştirme projesidir.
         Müşteriler poliçe, hasar ve provizyon süreçlerine dair sorularını chatbot üzerinden iletebilmesi hedeflenmiştir. 
         Sistemin kalbinde müşteri niyetini analiz edip en doğru cevap kaynağını seçen bir AI modülü yer alıyor:  Bu kaynaklar eğitilmiş knowledge base, intent bazlı cevap kalıpları ve servis entegrasyonlarıdır.` 
      },
      { type: 'svg', content: 'diagrams/chatbot_design.svg' },
      { 
        type: 'text', 
        content: `<div style="margin: 24px 0;">
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Benim Rolüm & Sorumluluklar</h4>
          <p style="color: #6b6560; line-height: 1.7; margin-bottom: 14px;">Elementer sigorta (hayat ve BES dışı) alanındaki hasar, provizyon ve poliçe servislerini chatbot altyapısına entegre etmek ve tüm servis flow'larını tasarlamak.</p>
          
          <h5 style="font-size: 13px; font-weight: 600; color: #1c1a18; margin-bottom: 10px; margin-top: 12px;">Temel Katkılarım:</h5>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 10px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              <strong>50 Senaryo Analizi:</strong> 50 farklı kullanıcı senaryosunun analiz ederek backend servis entegrasyonu teknik dökümantasyonunu oluşturdum
            </li>
            <li style="margin-bottom: 10px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              <strong>Zaraf Gören Path (★):</strong> Mevcut sigortalı altyapısı dışında, trafik hasarlarında zaraf gören tarafın da bilgiye erişebilmesi için yeni servis altyapısını  veritabanı üzerinden POC çalışmaları yaparak sıfırdan tasarladım.
            </li>
            <li style="margin-bottom: 10px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              <strong>Cross-Functional Involvement:</strong> Login akışı test süreçlerine aktif katılım, conversation design ortamında doğrudan test ve debugging yaparak chatbotun sadece teknik değil, kullanıcı deneyimi açısından da sağlam bir şekilde geliştirilmesine katkı sağladım.
            </li>
            <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">→</span>
              <strong>Production Deployment:</strong> Canlı ortam  deployment çalışmalarına destek (servisli & servissiz senaryolar)
            </li>
          </ul>
        </div>`
      },
      
      { 
        type: 'bottomText', 
        content: `<div style="margin-bottom: 24px;">
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Zorluklar</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
              Test ortamı veritabanı sorunları test süreçlerini zaman zaman sekteye uğrattı
            </li>
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
              AI sistemlerin doğası — bir yerde yapılan düzeltme başka bir alanı etkileyebilmesi nedeniyle her değişiklik sonrası tüm test setinin baştan koşulması gerekiyordu
            </li>
            <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">•</span>
              Sıkı deadline ve birden fazla ekiple eş zamanlı çalışma ortamında hesap verebilirlik kritik bir öneme sahipti
            </li>
          </ul>
        </div>

        <div>
          <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Kazanımlar</h4>
          <ul style="list-style: none; margin: 0; padding: 0;">
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
              <span style="font-weight: 600; color: #1c1a18;">Holistic Experience:</span> Chatbot geliştirmesini sadece analiz katmanında değil, servis tasarımı, test ve canlıya alma aşamalarında da bütünüyle deneyimleme
            </li>
            <li style="margin-bottom: 12px; color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
              <span style="font-weight: 600; color: #1c1a18;">Domain Expertise & POC:</span> Sigorta domeninde API tasarımı ve POC metodolojisi konusunda derinlemesine deneyim
            </li>
            <li style="color: #6b6560; line-height: 1.65; padding-left: 20px; position: relative;">
              <span style="position: absolute; left: 0; color: #b5472a; font-weight: 600;">✓</span>
              <span style="font-weight: 600; color: #1c1a18;">Stakeholder Management:</span> Farklı ekiplerle hızlı koordinasyon ve çok paydaşlı projelerde sorumluluk yönetimi konularında olgunluk
            </li>
          </ul>
        </div>` 
      },
      { type: 'image', content: 'images/ts-chatbot.png' }
    ]
  },
  'ts-bpmn': {
    tag: '',
    title: 'BPMN Süreç Orkestrasyon',
    stack: ['BPMN', 'Süreç Analizi', 'Hasar Yönetimi', 'Sistem Entegrasyonu'],
    sections: [
      { type: 'text', content: `Hasar sürecinin analizinde, test ve preprod deployment öncesinde yer aldım. Süreç analizi sırasında karşılaştığım temel zorluk, sistemin komple otomasyon yapılmasındaki teknik engellerdi: biçimsiz evraklar, sözlü iş kurallarının tespiti ve hukuki belirsizlikler. Bu zorluklar süreç tasarımını sürekli değiştiriyor, yeni workaround çözümleri bulmayı gerektiriyordu — yorucu bir süreç olsa da çok değerli bir öğrenme deneyimi sağladı.` },
      
      { type: 'svg', content: 'diagrams/BPM-diagram.svg' },
      
      { type: 'text', content: `<h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px; margin-top: 24px;">BPMN & Süreç Orkestrasyon Yaklaşımı</h4>
      <p style="color: #6b6560; line-height: 1.75;">BPMN hem süreci görsel bir dile dönüştürür hem de bu görsel dil deployment da korunur. Know how bilgisi iyi saklanır. Uzun iş kuralları yönetilebilir bir yapı kazanmış olur.</p>` },
      
      { type: 'text', content: `<div style="margin: 24px 0;">
      <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Pratikte Ne Anlama Gelir?</h4>
      <p style="color: #6b6560; line-height: 1.75; margin-bottom: 16px;">Hasar süreçlerini az hasarlı, ağır hasarlı, filo hasarlı olarak segmentlere ayırdığınızda her segment farklı bir akış izler. Az hasarlı dosya otomatik kapanırken ağır hasarlıya hukuki inceleme eklenir, filo hasarlıya özel SLA saatleri işler. Bu ayrımı core sisteme yazdırmak yerine BPMN katmanında tanımladığınızda, bir segment kuralı değiştiğinde sadece süreci güncelliyorsunuz; core sisteme dokunmuyorsunuz.</p>
      </div>` },
      
      { type: 'text', content: `<div style="margin: 24px 0;">
      <h4 style="font-size: 14px; font-weight: 600; color: #1c1a18; margin-bottom: 14px;">Entegrasyon Boyutu</h4>
      <p style="color: #6b6560; line-height: 1.75;">BPMN katmanı aynı zamanda bir orkestrasyon katmanı işlevi görür. Core sistem, belge yönetimi, ödeme sistemi, bildirim servisi — bunların her biri kendi işini yapar. BPMN hangi servisin ne zaman tetikleneceğini yönetir. Yarın ödeme sistemi değişse sadece o servis bağlantısı güncellenir, sürecin geri kalanı etkilenmez.</p>
      </div>` },
      
      { type: 'bottomText', content: `<div style="margin: 24px 0; padding: 16px; background: #f0ebe3; border-left: 3px solid #b5472a; border-radius: 4px;">
      <p style="color: #6b6560; line-height: 1.75; margin: 0;"><strong style="color: #b5472a;">Sonuç olarak:</strong> Bu mimari; iş kurallarını görünür ve düzenlenebilir kılar, segment bazlı SLA takibini mümkün kılar, darboğazların nerede oluştuğunu gösterir ve sistemler arası bağımlılığı yönetilebilir hale getirir.</p>
      </div>` }
    ]
  },
  'interest-agile': {
  tag: 'Ilgi Alani',
  title: 'Agile Metrikleri Nasıl Kullanılmalı?',
  stack: ['Agile', 'Scrum', 'Metrik', 'Goodhart Yasası', 'Ekip Kültürü'],
  sections: [
    { type: 'text', content: 'Agile ve agile çalışma metodolojileri 20-25 yılı aşkın süredir endüstriyi şekillendirmektedir. Her yıl pek çok şirket agile dönüşümler yaparak şirket üretkenliklerini artırmayı hedeflemektedir. Ayrıca bu kazanılan üretkenliğin ölçümü de gelecek projeksiyonlarına ışık tutacaktır.' },
    { type: 'text', content: 'Agile ekiplerin kullandığı başlıca metrikler şunlardır: Velocity, Sprint Burndown, Release Burnup, Cycle Time, Lead Time, Defect Rate / Escaped Defects, Code Coverage, Team Happiness / Morale, Cumulative Flow Diagram ve Deployment Frequency. Her biri, takımın farklı bir boyutuna dair veri üretir; sprint kapasitesinden kaliteye, akış hızından ekip sürdürülebilirliğine kadar geniş bir yelpazeyi kapsar.' },
    { type: 'text', content: 'Bu makale bu metriklerin nasıl yorumlanması gerektiğinden ziyade nasıl yorumlanmaması gerektiğine yoğunlaşacaktır.' },
    { type: 'text', content: 'Standart KPI takibinden farklı olarak agile metrikler tek başlarına bir anlam taşımazlar. İstatistikte korelasyon ile nedensellik arasındaki ilişki sık sık karıştırılır; yüksek korelasyon, yüksek nedensellik anlamına gelmez. Eğer bir metrik iyi ya da kötü bir trend taşıyorsa, bu trendin altında yatan neden açıklanmadan takım performansı hakkında yorum yapmak doğru değildir.' },
    { type: 'text', content: 'Takım performansı üzerine acele yorum yapmak, Goodhart Yasası göz önüne alındığında ayrıca ciddi bir risk barındırır. İngiliz ekonomist Charles Goodhart\'ın ortaya koyduğu bu ilke özetle şunu söyler: "Bir ölçüm hedef haline geldiğinde, iyi bir ölçüm olmaktan çıkar." Başka bir deyişle, bir metrik performans yargılamasının aracına dönüştüğünde ekipler çıktıya değil metriğe oynamaya başlar. Velocity şişer, hatalar kayıt dışı kalır, testler anlamsızlaşır. Bu, hiç kimsenin kasıtlı olarak tercih ettiği bir sonuç değildir — ama yanlış kurgulanmış bir ölçüm sisteminin kaçınılmaz çıktısıdır.' },
    { type: 'text', content: 'Her metrik belirli bir konu hakkında sinyal vermektedir. Sinyallerin görevi, takımın bir konuda ileri ya da geriye doğru yol aldığını göstermek ve bunun araştırılmasına zemin hazırlamaktır. Bu araştırmanın içini doldurmak ise tamamen kuruma ve ekibe özgüdür. Aynı metrik, iki farklı şirkette iki farklı anlam taşıyabilir. Velocity\'nin düştüğü bir sprint, bir ekip için teknik borcun biriktiğinin işareti olabilirken; bir diğeri için ekibin daha gerçekçi tahminler yapmaya başladığının göstergesidir. Sinyali doğru okumak, o sinyalin hangin zeminde yükseldiğini bilmeyi gerektirir.' },
    { type: 'text', content: 'Bu nedenle agile metrik setinin ve eşik değerlerinin kurumun kendi olgunluk seviyesine, kültürüne ve stratejik önceliklerine göre tasarlanması gerekir. Evrensel bir metrik panosu yoktur — olmamalıdır da. Hangi sinyallerin önemli olduğunu, bu sinyallerin ne anlama geldiğini ve ne zaman harekete geçilmesi gerektiğini tanımlamak, her kurumun kendi yapması gereken tasarım çalışmasıdır.' },
    { type: 'bottomText', content: 'Sonuç olarak agile metrikler bir karne değil, bir pusulasıdır. Pusulanın görevi nereye gidileceğini söylemek değil, nerede durulduğunu göstermektir. Nereye gidileceğine ise insan karar verir — veriyi anlayan, bağlamı bilen, kültürü taşıyan insan.' }
  ]
},
  'interest-llm': {
    tag: 'Ilgi Alani',
    title: 'AI · Local LLM',
    stack: ['Ollama', 'LLaMA', 'Mistral', 'RAG', 'Prompt Engineering', 'Python'],
    sections: [
      { type: 'text', content: 'Ollama ile yerel model çalıştırma, farklı model mimarilerini karşılaştırma ve kendi veri setlerimle deney yapma üzerine vakit harcıyorum. LLM\'lerin iş süreçlerine pratik entegrasyonu özellikle ilgimi çekiyor.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="20" y="45" width="110" height="70" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="75" y="76" text-anchor="middle" fill="#6b6560" font-size="10">Yerel Donanim</text>
      <text x="75" y="92" text-anchor="middle" fill="#b5472a" font-size="10">GPU / CPU</text>
      <line x1="130" y1="80" x2="178" y2="80" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="178,75 190,80 178,85" fill="#b5472a44"/>
      <rect x="190" y="28" width="130" height="104" rx="4" fill="#e8e0d4" stroke="#b5472a77" stroke-width="1.5"/>
      <text x="255" y="56" text-anchor="middle" fill="#6b6560" font-size="10">Ollama</text>
      <line x1="205" y1="66" x2="305" y2="66" stroke="#b5472a15" stroke-width="1"/>
      <text x="255" y="83" text-anchor="middle" fill="#8b3520" font-size="11">LLaMA · Mistral</text>
      <text x="255" y="99" text-anchor="middle" fill="#6b6560" font-size="9">Phi · Gemma</text>
      <text x="255" y="115" text-anchor="middle" fill="#6b6560" font-size="9">Fine-tune Deneyleri</text>
      <line x1="320" y1="65" x2="368" y2="48" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="320" y1="98" x2="368" y2="115" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="368" y="30" width="120" height="36" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="428" y="52" text-anchor="middle" fill="#b5472a" font-size="10">RAG Pipeline</text>
      <rect x="368" y="98" width="120" height="36" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="428" y="120" text-anchor="middle" fill="#b5472a" font-size="10">Prompt Mühendisliği</text>
      <line x1="488" y1="48" x2="540" y2="68" stroke="#b5472a22" stroke-width="1"/>
      <line x1="488" y1="116" x2="540" y2="94" stroke="#b5472a22" stroke-width="1"/>
      <rect x="540" y="56" width="80" height="48" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="580" y="76" text-anchor="middle" fill="#6b6560" font-size="9">Pratik</text>
      <text x="580" y="92" text-anchor="middle" fill="#6b6560" font-size="9">Uygulama</text>
    </svg>` },
      { type: 'bottomText', content: 'Veri gizliligi gerektiren senaryolarda yerel LLM çalıştırmanın avantajları ve kurumsal süreçlere entegrasyon potansiyeli üzerine aktif araştırma.' },
      { type: 'image', content: 'images/interest-llm.png' }
    ]
  }
}
