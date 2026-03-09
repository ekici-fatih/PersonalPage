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
    tag: 'Son Deneyim',
    company: 'Allianz',
    period: 'Mobil Ekip · 2024',
    desc: 'Hayat sigortası sistemlerinde kritik geçiş ve entegrasyon projelerinde görev aldım. Microservice mimarisi, mobil sistemler ve bağımlılık yönetimi konularında derin deneyim kazandım.',
    skills: ['Microservice', 'Mobil Sistemler', 'Waterfall', 'Dependency Management', 'Hayat Sigortası'],
    cards: [
      { id: 'allianz-1', num: '01', title: 'Hayat Sistemleri Yeni Ürün Geçişleri', desc: 'Mevcut sistemlerin yeni ürün yapılarına uyarlanması ve geçiş süreçlerinin yönetimi' },
      { id: 'allianz-2', num: '02', title: '3D Tahsilat Modülü Entegrasyonu', desc: 'Yeni tahsilat altyapısının mevcut sistemlere entegrasyonu ve test süreçleri' },
      { id: 'allianz-3', num: '03', title: 'Mobil Bağımlılık Yönetimi', desc: 'Sistem bağımlılıklarının haritalanması ve etki analizi' },
    ]
  },
  {
    id: 'slide-2',
    type: 'company',
    cardType: 'ts-grid',
    tag: 'Önceki Deneyim',
    company: 'Türkiye Sigorta',
    period: '2 Ekip · 5 Proje',
    desc: 'Müşteri, hasar ve üretim modüllerinde bakım, hata yönetimi, yeni geliştirme ve yapay zeka projelerinde sorumluluk üstlendim.',
    skills: [],
    cards: [
      { id: 'ts-aml',     icon: '🛡️', title: 'AML & Kara Liste Sistemleri',    desc: 'Kara liste entegrasyonu ve AML süreçlerinin analizi' },
      { id: 'ts-cagri',   icon: '📞', title: 'Çağrı Merkezi Entegrasyonu',      desc: 'CRM ve çağrı merkezi sistemleri arasındaki entegrasyon' },
      { id: 'ts-sbm',     icon: '🔗', title: 'SBM Ortak Veri Modeli',           desc: 'Sektör veri standardizasyonu ve SBM entegrasyonu' },
      { id: 'ts-chatbot', icon: '🤖', title: 'Chatbot & AI Asistan',            desc: 'Müşteri hizmetleri için yapay zeka tabanlı chatbot geliştirme' },
      { id: 'ts-btrans',  icon: '🔄', title: 'Broker Transferi Otomasyonu',     desc: 'Broker geçiş süreçlerinin otomasyonu' },
      { id: 'ts-bpmn',    icon: '📋', title: 'BPMN Süreç Modelleme',            desc: 'İş süreçlerinin BPMN ile modellenmesi' },
    ]
  },
  {
    id: 'slide-3',
    type: 'company',
    cardType: 'projects-grid',
    tag: 'İlgi Alanları & Notlar',
    company: 'Konular',
    period: '',
    desc: 'İş projelerinin dışında takip ettiğim, üzerinde düşündüğüm veya deney yaptığım alanlar.',
    skills: [],
    cards: [
      { id: 'interest-agile',   num: '01', title: 'Agile & Ürün Yönetimi', desc: 'Scrum, Kanban ve modern ürün geliştirme metodolojileri' },
      { id: 'interest-llm',     num: '02', title: 'LLM & AI Araçları',     desc: 'Büyük dil modelleri ve iş analizine uygulamaları' },
      { id: 'interest-browser', num: '03', title: 'Browser Automation',    desc: 'Web otomasyon araçları ve test süreçleri' },
    ]
  }
];

// ── PROJE DETAYLARI (modal içeriği) ─────────────────────────
const projects = {
  'allianz-1': {
    tag: 'Allianz · Mobil Ekip',
    title: 'Hayat Sistemleri Yeni Ürün Geçişleri',
    stack: ['Java', 'Oracle DB', 'Waterfall', 'Hayat Sigortası', 'UAT'],
    sections: [
  { type:'text',content:'hello motherfucker' },
      { type: 'text', content: 'Mevcut hayat sigortası sistemlerinin yeni ürün yapılarına uyarlanması sürecinde aktif rol üstlendim. Ürün parametrelerinin yeni şemaya taşınması, veri doğrulama adımlarının oluşturulması ve regresyon testlerinin koordinasyonunu yürüttüm.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="20" y="60" width="130" height="60" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="85" y="86" text-anchor="middle" fill="#6b6560" font-size="11">Eski Ürün</text>
      <text x="85" y="103" text-anchor="middle" fill="#b5472a" font-size="11" font-weight="500">Sistemleri</text>
      <line x1="150" y1="90" x2="210" y2="90" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="5,3"/>
      <polygon points="210,85 222,90 210,95" fill="#b5472a44"/>
      <rect x="222" y="45" width="196" height="90" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="320" y="73" text-anchor="middle" fill="#6b6560" font-size="10">Geçiş Katmanı</text>
      <line x1="238" y1="83" x2="402" y2="83" stroke="#b5472a22" stroke-width="1"/>
      <text x="320" y="100" text-anchor="middle" fill="#8b3520" font-size="11">Parametre Mapping</text>
      <text x="320" y="117" text-anchor="middle" fill="#6b6560" font-size="10">Veri Doğrulama · Regresyon</text>
      <line x1="418" y1="90" x2="478" y2="90" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="5,3"/>
      <polygon points="478,85 490,90 478,95" fill="#b5472a44"/>
      <rect x="490" y="60" width="130" height="60" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="555" y="86" text-anchor="middle" fill="#6b6560" font-size="11">Yeni Ürün</text>
      <text x="555" y="103" text-anchor="middle" fill="#b5472a" font-size="11" font-weight="500">Yapıları</text>
    </svg>` },
      { type: 'bottomText', content: 'Waterfall metodolojisi kapsamında teknik gereksinim analizi, geçiş planlaması ve UAT süreçlerinde koordinatör rolü üstlenildi.' },
      { type: 'image', content: 'images/allianz-gecis.png' }
    ]
  },
  'allianz-2': {
    tag: 'Allianz · Mobil Ekip',
    title: '3D Tahsilat Modülü Entegrasyonu',
    stack: ['REST API', '3D Secure', 'Java', 'Oracle', 'Integration Testing'],
    sections: [
      { type: 'text', content: 'Yeni 3D tahsilat altyapısının mevcut ödeme sistemlerine entegrasyonunu gerçekleştirdim. Servis kontratlarının tanımlanması, hata yönetimi senaryoları ve entegrasyon testlerinin planlanmasında etkin rol üstlendim.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="20" y="60" width="110" height="70" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="75" y="92" text-anchor="middle" fill="#6b6560" font-size="10">Mobil</text>
      <text x="75" y="108" text-anchor="middle" fill="#b5472a" font-size="11">Uygulama</text>
      <line x1="130" y1="95" x2="180" y2="95" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="180,90 192,95 180,100" fill="#b5472a44"/>
      <rect x="192" y="45" width="136" height="100" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="260" y="72" text-anchor="middle" fill="#6b6560" font-size="10">Ödeme Gateway</text>
      <line x1="206" y1="82" x2="314" y2="82" stroke="#b5472a22" stroke-width="1"/>
      <text x="260" y="98" text-anchor="middle" fill="#8b3520" font-size="11">3D Secure</text>
      <text x="260" y="114" text-anchor="middle" fill="#6b6560" font-size="10">Hata Yönetimi</text>
      <text x="260" y="130" text-anchor="middle" fill="#6b6560" font-size="9">Timeout Kontrolü</text>
      <line x1="328" y1="80" x2="378" y2="58" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="328" y1="115" x2="378" y2="138" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="378" y="38" width="120" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="438" y="64" text-anchor="middle" fill="#b5472a" font-size="11">Banka API</text>
      <rect x="378" y="118" width="120" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="438" y="144" text-anchor="middle" fill="#b5472a" font-size="11">Tahsilat DB</text>
      <line x1="498" y1="60" x2="548" y2="85" stroke="#b5472a22" stroke-width="1"/>
      <line x1="498" y1="140" x2="548" y2="110" stroke="#b5472a22" stroke-width="1"/>
      <rect x="548" y="72" width="72" height="46" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="584" y="98" text-anchor="middle" fill="#6b6560" font-size="9">Raporlama</text>
    </svg>` },
      { type: 'bottomText', content: 'Hata senaryoları ve timeout yönetimi özel olarak ele alındı; ödeme başarı oranlarının izlenmesi için temel metrikler tanımlandı.' },
      { type: 'image', content: 'images/allianz-3d-tahsilat.png' }
    ]
  },
    'allianz-0': {
    tag: 'deneme',
    title: '3D Tahsilat Modülü Entegrasyonu',
    stack: ['REST API', '3D Secure', 'Java', 'Oracle', 'Integration Testing'],
    sections: [
      { type: 'text', content: 'Yeni 3D tahsilat altyapısının mevcut ödeme sistemlerine entegrasyonunu gerçekleştirdim. Servis kontratlarının tanımlanması, hata yönetimi senaryoları ve entegrasyon testlerinin planlanmasında etkin rol üstlendim.' },
      { type: 'image', content: 'images/allianz-3d-tahsilat.png' }
    ]
  },

  
  'allianz-3': {
    tag: 'Allianz · Mobil Ekip',
    title: 'Yetkilendirme & Takip Sistemi',
    stack: ['RBAC', 'JWT', 'Audit Log', 'Java', 'Oracle', 'Security'],
    sections: [
      { type: 'text', content: 'Kullanıcı yetkilendirme altyapısının geliştirilmesi ve işlem takip sisteminin kurulumunda görev aldım. Rol bazlı erişim kontrolü (RBAC) tasarımı ve audit log mekanizmalarının entegrasyonu bu projenin temel çıktıları arasında yer aldı.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <circle cx="60" cy="90" r="30" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="60" y="86" text-anchor="middle" fill="#6b6560" font-size="10">Kullanıcı</text>
      <text x="60" y="101" text-anchor="middle" fill="#b5472a" font-size="10">/ Rol</text>
      <line x1="92" y1="90" x2="148" y2="90" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="148,85 160,90 148,95" fill="#b5472a44"/>
      <rect x="160" y="50" width="144" height="80" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="232" y="76" text-anchor="middle" fill="#6b6560" font-size="10">Auth Servisi</text>
      <line x1="174" y1="86" x2="290" y2="86" stroke="#b5472a15" stroke-width="1"/>
      <text x="232" y="102" text-anchor="middle" fill="#8b3520" font-size="11">RBAC</text>
      <text x="232" y="118" text-anchor="middle" fill="#6b6560" font-size="9">Token Yönetimi</text>
      <line x1="304" y1="78" x2="358" y2="55" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="304" y1="104" x2="358" y2="130" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="358" y="36" width="124" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="420" y="56" text-anchor="middle" fill="#6b6560" font-size="10">İzin Kontrol</text>
      <text x="420" y="72" text-anchor="middle" fill="#b5472a" font-size="10">Modülü</text>
      <rect x="358" y="110" width="124" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="420" y="130" text-anchor="middle" fill="#6b6560" font-size="10">Audit Log</text>
      <text x="420" y="146" text-anchor="middle" fill="#b5472a" font-size="10">& Takip</text>
      <line x1="482" y1="58" x2="538" y2="80" stroke="#b5472a22" stroke-width="1"/>
      <line x1="482" y1="132" x2="538" y2="108" stroke="#b5472a22" stroke-width="1"/>
      <rect x="538" y="68" width="82" height="50" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="579" y="91" text-anchor="middle" fill="#6b6560" font-size="9">İşlem</text>
      <text x="579" y="106" text-anchor="middle" fill="#6b6560" font-size="9">Kaydı</text>
    </svg>` },
      { type: 'bottomText', content: 'Rol tanımları iş birimleriyle koordineli belirlendi; audit log yapısı hem güvenlik hem uyumluluk gereksinimlerini karşılayacak şekilde tasarlandı.' },
      { type: 'image', content: 'images/allianz-yetkilendirme.png' }
    ]
  },
  
  
  'ts-aml': {
    tag: 'Türkiye Sigorta · Müşteri Modülü',
    title: 'AML & Kara Liste Sistemleri',
    stack: ['PL/SQL', 'Oracle', 'Java', 'AML Mevzuatı', 'Bakım & Geliştirme'],
    sections: [
      { type: 'text', content: 'Kara liste ve AML ekranlarının bakım süreçlerini yürüttüm; mevzuat güncellemelerine göre sistem uyarlamalarını gerçekleştirdim. Şüpheli işlem tespiti için sorgu optimizasyonları ve ekran geliştirmeleri yapıldı.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="60" width="120" height="65" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="75" y="88" text-anchor="middle" fill="#6b6560" font-size="10">Müşteri</text>
      <text x="75" y="104" text-anchor="middle" fill="#b5472a" font-size="11">Verisi</text>
      <line x1="135" y1="93" x2="190" y2="93" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="190,88 202,93 190,98" fill="#b5472a44"/>
      <rect x="202" y="42" width="164" height="102" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="284" y="68" text-anchor="middle" fill="#6b6560" font-size="10">Tarama Motoru</text>
      <line x1="216" y1="78" x2="352" y2="78" stroke="#b5472a15" stroke-width="1"/>
      <text x="284" y="96" text-anchor="middle" fill="#8b3520" font-size="11">AML Kontrolü</text>
      <text x="284" y="112" text-anchor="middle" fill="#6b6560" font-size="10">Kara Liste Eşleşme</text>
      <text x="284" y="128" text-anchor="middle" fill="#6b6560" font-size="9">Şüpheli İşlem Tespiti</text>
      <line x1="366" y1="78" x2="418" y2="58" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="366" y1="112" x2="418" y2="135" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="418" y="38" width="116" height="40" rx="4" fill="#f0ebe3" stroke="#2a7a5644" stroke-width="1.5"/>
      <text x="476" y="57" text-anchor="middle" fill="#2a7a56" font-size="10">✓ Temiz</text>
      <text x="476" y="72" text-anchor="middle" fill="#6b6560" font-size="9">Onay</text>
      <rect x="418" y="116" width="116" height="40" rx="4" fill="#f0ebe3" stroke="#c0392b44" stroke-width="1.5"/>
      <text x="476" y="135" text-anchor="middle" fill="#c0392b" font-size="10">✗ Eşleşme</text>
      <text x="476" y="150" text-anchor="middle" fill="#6b6560" font-size="9">Uyarı / Blok</text>
      <line x1="534" y1="58" x2="580" y2="80" stroke="#b5472a22" stroke-width="1"/>
      <line x1="534" y1="136" x2="580" y2="110" stroke="#b5472a22" stroke-width="1"/>
      <rect x="580" y="68" width="50" height="50" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="605" y="91" text-anchor="middle" fill="#6b6560" font-size="9">Rapor</text>
      <text x="605" y="106" text-anchor="middle" fill="#6b6560" font-size="9">& Log</text>
    </svg>` },
      { type: 'bottomText', content: 'Mevzuat değişikliklerine paralel kara liste güncelleme süreçleri optimize edildi; yeni ekran bileşenleri kullanıcı geri bildirimleriyle şekillendirildi.' },
      { type: 'image', content: 'images/ts-aml.png' }
    ]
  },
  'ts-cagri': {
    tag: 'Türkiye Sigorta · Müşteri Modülü',
    title: 'Çağrı Merkezi Projesi — Faz 1',
    stack: ['REST Servis', 'CRM', 'Java', 'Entegrasyon Analizi', 'Test Senaryoları'],
    sections: [
      { type: 'text', content: 'Çağrı merkezi sisteminin ilk fazında müşteri veri entegrasyonu ve CRM servis bağlantılarının geliştirilmesinde aktif rol aldım. Mevcut modüllerle entegrasyon kontratları tanımlandı ve test senaryoları oluşturuldu.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="62" width="108" height="60" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="69" y="88" text-anchor="middle" fill="#6b6560" font-size="10">Müşteri</text>
      <text x="69" y="104" text-anchor="middle" fill="#b5472a" font-size="10">Araması</text>
      <line x1="123" y1="92" x2="173" y2="92" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="173,87 185,92 173,97" fill="#b5472a44"/>
      <rect x="185" y="46" width="138" height="92" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="254" y="72" text-anchor="middle" fill="#6b6560" font-size="10">CTI Katmanı</text>
      <line x1="200" y1="82" x2="308" y2="82" stroke="#b5472a15" stroke-width="1"/>
      <text x="254" y="98" text-anchor="middle" fill="#8b3520" font-size="11">Yönlendirme</text>
      <text x="254" y="114" text-anchor="middle" fill="#6b6560" font-size="9">IVR · Kuyruk</text>
      <text x="254" y="128" text-anchor="middle" fill="#6b6560" font-size="9">Temsilci Atama</text>
      <line x1="323" y1="72" x2="370" y2="52" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="323" y1="92" x2="370" y2="92" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="323" y1="115" x2="370" y2="138" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="370" y="34" width="116" height="34" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="428" y="55" text-anchor="middle" fill="#b5472a" font-size="10">Müşteri Servisi</text>
      <rect x="370" y="75" width="116" height="34" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="428" y="96" text-anchor="middle" fill="#b5472a" font-size="10">Poliçe Servisi</text>
      <rect x="370" y="120" width="116" height="34" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="428" y="141" text-anchor="middle" fill="#b5472a" font-size="10">Hasar Servisi</text>
      <line x1="486" y1="92" x2="538" y2="92" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="538" y="68" width="88" height="50" rx="4" fill="#f0ebe3" stroke="#b5472a22" stroke-width="1"/>
      <text x="582" y="91" text-anchor="middle" fill="#6b6560" font-size="9">Temsilci</text>
      <text x="582" y="106" text-anchor="middle" fill="#6b6560" font-size="9">Ekranı</text>
    </svg>` },
      { type: 'bottomText', content: 'Faz 1 kapsamında altyapı servis kontratları belirlendi, mock test ortamı kuruldu ve entegrasyon dokümanları hazırlandı.' },
      { type: 'image', content: 'images/ts-cagri.png' }
    ]
  },
  'ts-sbm': {
    tag: 'Türkiye Sigorta · Hasar Modülü',
    title: 'SBM Ortak Veri Modeli',
    stack: ['PL/SQL', 'Oracle', 'Java', 'ETL', 'Shell Script', 'Veri Kalitesi'],
    sections: [
      { type: 'text', content: 'SBM ortak veri modeli kapsamında mevcut job yapılarını güncelledim, yeni job ve servisler oluşturdum. Bozuk veri analizi için ad-hoc otomasyon scriptleri yazdım. En büyük katkım olarak gördüğüm mutabakat yönetim ekranını geliştirdim.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="58" width="112" height="80" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="71" y="90" text-anchor="middle" fill="#6b6560" font-size="10">Kaynak</text>
      <text x="71" y="106" text-anchor="middle" fill="#b5472a" font-size="10">Sistemler</text>
      <line x1="127" y1="98" x2="178" y2="98" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="178,93 190,98 178,103" fill="#b5472a44"/>
      <rect x="190" y="42" width="154" height="112" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="267" y="68" text-anchor="middle" fill="#6b6560" font-size="10">ETL / Job Katmanı</text>
      <line x1="205" y1="78" x2="329" y2="78" stroke="#b5472a15" stroke-width="1"/>
      <text x="267" y="96" text-anchor="middle" fill="#8b3520" font-size="10">Job Güncelleme</text>
      <text x="267" y="112" text-anchor="middle" fill="#6b6560" font-size="9">Yeni Job & Servisler</text>
      <text x="267" y="127" text-anchor="middle" fill="#6b6560" font-size="9">Veri Düzeltme Script</text>
      <text x="267" y="142" text-anchor="middle" fill="#6b6560" font-size="9">Otomasyon</text>
      <line x1="344" y1="88" x2="394" y2="68" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="344" y1="112" x2="394" y2="136" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="394" y="48" width="122" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="455" y="68" text-anchor="middle" fill="#6b6560" font-size="10">SBM</text>
      <text x="455" y="84" text-anchor="middle" fill="#b5472a" font-size="10">Ortak Model</text>
      <rect x="394" y="116" width="122" height="44" rx="4" fill="#e8e0d4" stroke="#b5472a77" stroke-width="1.5"/>
      <text x="455" y="136" text-anchor="middle" fill="#8b3520" font-size="10">Mutabakat</text>
      <text x="455" y="152" text-anchor="middle" fill="#6b6560" font-size="9">Yönetim Ekranı ★</text>
      <line x1="516" y1="70" x2="566" y2="88" stroke="#b5472a22" stroke-width="1"/>
      <line x1="516" y1="138" x2="566" y2="110" stroke="#b5472a22" stroke-width="1"/>
      <rect x="566" y="72" width="62" height="50" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="597" y="95" text-anchor="middle" fill="#6b6560" font-size="9">Raporlama</text>
      <text x="597" y="110" text-anchor="middle" fill="#6b6560" font-size="9">& İzleme</text>
    </svg>` },
      { type: 'bottomText', content: '★ Mutabakat yönetim ekranı; veri uyumsuzluklarının anlık görüntülenmesini, elle müdahale ve onay akışlarını tek bir arayüzde birleştirdi.' },
      { type: 'image', content: 'images/ts-sbm.png' }
    ]
  },
  'ts-chatbot': {
    tag: 'Türkiye Sigorta · Dijital Kanallar',
    title: 'Chatbot Servis Entegrasyonları',
    stack: ['REST API', 'Java', 'NLP Entegrasyon', 'Chatbot', 'Servis Tasarımı'],
    sections: [
      { type: 'text', content: '50 farklı chatbot senaryosunun backend servis entegrasyonlarını oluşturdum. Zarar gören araç hasar sorgulama akışını ve ödeme cevap yapısını baştan kurguladım; mevcut servis kontratlarını chatbot iletişim modeline uygun hale getirdim.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="62" width="100" height="60" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="65" y="89" text-anchor="middle" fill="#6b6560" font-size="10">Kullanıcı</text>
      <text x="65" y="105" text-anchor="middle" fill="#b5472a" font-size="10">Mesajı</text>
      <line x1="115" y1="92" x2="162" y2="92" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="162,87 174,92 162,97" fill="#b5472a44"/>
      <rect x="174" y="52" width="138" height="80" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="243" y="78" text-anchor="middle" fill="#6b6560" font-size="10">NLP / Intent</text>
      <line x1="188" y1="88" x2="298" y2="88" stroke="#b5472a15" stroke-width="1"/>
      <text x="243" y="104" text-anchor="middle" fill="#8b3520" font-size="11">50 Senaryo</text>
      <text x="243" y="120" text-anchor="middle" fill="#6b6560" font-size="9">Sınıflandırma</text>
      <line x1="312" y1="78" x2="360" y2="55" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="312" y1="92" x2="360" y2="92" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="312" y1="108" x2="360" y2="132" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="360" y="37" width="120" height="34" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="420" y="58" text-anchor="middle" fill="#b5472a" font-size="10">Hasar Sorgulama</text>
      <rect x="360" y="75" width="120" height="34" rx="4" fill="#e8e0d4" stroke="#b5472a77" stroke-width="1.5"/>
      <text x="420" y="96" text-anchor="middle" fill="#8b3520" font-size="10">Ödeme Cevabı ★</text>
      <rect x="360" y="115" width="120" height="34" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="420" y="136" text-anchor="middle" fill="#b5472a" font-size="10">Poliçe Bilgisi</text>
      <line x1="480" y1="92" x2="535" y2="92" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="535" y="68" width="90" height="50" rx="4" fill="#f0ebe3" stroke="#b5472a22" stroke-width="1"/>
      <text x="580" y="91" text-anchor="middle" fill="#6b6560" font-size="9">Yanıt</text>
      <text x="580" y="106" text-anchor="middle" fill="#6b6560" font-size="9">Üretimi</text>
    </svg>` },
      { type: 'bottomText', content: '★ Ödeme cevap yapısı; farklı ödeme durumları için anlaşılır, hata toleranslı ve kullanıcı dostu bir yanıt şeması olarak yeniden tasarlandı.' },
      { type: 'image', content: 'images/ts-chatbot.png' }
    ]
  },
  'ts-btrans': {
    tag: 'Türkiye Sigorta · Hasar Modülü',
    title: 'BTrans Veri Aktarımı Modernizasyonu',
    stack: ['Sistem Analizi', 'Dokümantasyon', 'Süreç Modelleme', 'Java', 'Geçiş Planlaması'],
    sections: [
      { type: 'text', content: 'Desktop ortamda çalışan BTrans uygulamasının farklı makineye ve ardından online sisteme taşınması için gerekli sistem analizini yaptım. Mevcut iş akışlarını belgeledim, bağımlılık haritasını çıkardım ve geçiş planı dokümantasyonunu hazırladım.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 180" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="50" width="128" height="90" rx="4" fill="#f0ebe3" stroke="#c0392b44" stroke-width="1.5"/>
      <text x="79" y="82" text-anchor="middle" fill="#6b6560" font-size="10">Eski Desktop</text>
      <text x="79" y="98" text-anchor="middle" fill="#c0392b" font-size="11">BTrans App</text>
      <text x="79" y="114" text-anchor="middle" fill="#6b6560" font-size="9">Tek Makine</text>
      <text x="79" y="129" text-anchor="middle" fill="#6b6560" font-size="9">Manuel Süreç</text>
      <line x1="143" y1="95" x2="193" y2="95" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="193,90 205,95 193,100" fill="#b5472a44"/>
      <rect x="205" y="46" width="148" height="96" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="279" y="72" text-anchor="middle" fill="#6b6560" font-size="10">Sistem Analizi</text>
      <line x1="220" y1="82" x2="338" y2="82" stroke="#b5472a15" stroke-width="1"/>
      <text x="279" y="98" text-anchor="middle" fill="#8b3520" font-size="10">İş Akışı Analizi</text>
      <text x="279" y="114" text-anchor="middle" fill="#6b6560" font-size="9">Bağımlılık Haritası</text>
      <text x="279" y="129" text-anchor="middle" fill="#6b6560" font-size="9">Geçiş Planı</text>
      <line x1="353" y1="80" x2="403" y2="60" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="353" y1="112" x2="403" y2="135" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="403" y="40" width="114" height="44" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="460" y="60" text-anchor="middle" fill="#6b6560" font-size="9">Faz 1</text>
      <text x="460" y="76" text-anchor="middle" fill="#b5472a" font-size="10">Farklı Makine</text>
      <rect x="403" y="115" width="114" height="44" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="460" y="135" text-anchor="middle" fill="#6b6560" font-size="9">Faz 2</text>
      <text x="460" y="151" text-anchor="middle" fill="#8b3520" font-size="10">Online Sistem</text>
      <line x1="517" y1="62" x2="562" y2="84" stroke="#b5472a22" stroke-width="1"/>
      <line x1="517" y1="137" x2="562" y2="110" stroke="#b5472a22" stroke-width="1"/>
      <rect x="562" y="72" width="66" height="50" rx="4" fill="#f0ebe3" stroke="#2a7a5644" stroke-width="1"/>
      <text x="595" y="95" text-anchor="middle" fill="#2a7a56" font-size="9">Modernize</text>
      <text x="595" y="110" text-anchor="middle" fill="#6b6560" font-size="9">Sistem</text>
    </svg>` },
      { type: 'bottomText', content: 'Proje; mevcut durumu netleştiren kapsamlı bir current state dokümantasyonu ve faz bazlı geçiş planı ile sonuçlandı.' },
      { type: 'image', content: 'images/ts-btrans.png' }
    ]
  },
  'ts-bpmn': {
    tag: 'Türkiye Sigorta · Hasar & Test',
    title: 'BPMN & Test Anonimleştirme',
    stack: ['BPMN', 'Süreç Analizi', 'POC', 'Veri Maskeleme', 'Dokümantasyon'],
    sections: [
      { type: 'text', content: 'Ağır hasar süreçlerinin current state analizini ve solution design dokümantasyonunu oluşturdum. Ayrıca test ortamlarında anonim veri yaratma sürecinin POC analizlerini gerçekleştirerek diğer ekiplere yol haritası sundum.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="15" y="25" width="290" height="72" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="160" y="48" text-anchor="middle" fill="#6b6560" font-size="10">BPMN — Ağır Hasar Süreci</text>
      <line x1="30" y1="58" x2="288" y2="58" stroke="#b5472a15" stroke-width="1"/>
      <circle cx="55" cy="78" r="10" fill="none" stroke="#b5472a66" stroke-width="1.5"/>
      <line x1="65" y1="78" x2="100" y2="78" stroke="#b5472a44" stroke-width="1.5"/>
      <rect x="100" y="68" width="42" height="20" rx="3" fill="#f0ebe3" stroke="#b5472a44" stroke-width="1.2"/>
      <text x="121" y="82" text-anchor="middle" fill="#8b3520" font-size="9">Analiz</text>
      <line x1="142" y1="78" x2="178" y2="78" stroke="#b5472a44" stroke-width="1.5"/>
      <rect x="178" y="68" width="42" height="20" rx="3" fill="#f0ebe3" stroke="#b5472a44" stroke-width="1.2"/>
      <text x="199" y="82" text-anchor="middle" fill="#8b3520" font-size="9">Design</text>
      <line x1="220" y1="78" x2="255" y2="78" stroke="#b5472a44" stroke-width="1.5"/>
      <circle cx="268" cy="78" r="10" fill="none" stroke="#4caf7d88" stroke-width="2"/>
      <circle cx="268" cy="78" r="6" fill="#2a7a5633"/>
      <rect x="15" y="118" width="290" height="62" rx="4" fill="#e8e0d4" stroke="#c9a84c66" stroke-width="1.5"/>
      <text x="160" y="138" text-anchor="middle" fill="#6b6560" font-size="10">Test Ortamı Anonimleştirme POC</text>
      <line x1="30" y1="148" x2="288" y2="148" stroke="#b5472a15" stroke-width="1"/>
      <text x="82" y="167" text-anchor="middle" fill="#8b3520" font-size="10">Gerçek Veri</text>
      <line x1="120" y1="165" x2="162" y2="165" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="162,160 174,165 162,170" fill="#b5472a44"/>
      <text x="220" y="167" text-anchor="middle" fill="#b5472a" font-size="10">Anonim Veri</text>
      <line x1="305" y1="62" x2="356" y2="62" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="305" y1="149" x2="356" y2="149" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="356" y="38" width="136" height="134" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="424" y="64" text-anchor="middle" fill="#6b6560" font-size="10">Çıktılar</text>
      <line x1="370" y1="74" x2="478" y2="74" stroke="#b5472a15" stroke-width="1"/>
      <text x="424" y="92" text-anchor="middle" fill="#b5472a" font-size="10">Solution Design</text>
      <text x="424" y="108" text-anchor="middle" fill="#6b6560" font-size="9">Dokümantasyon</text>
      <text x="424" y="126" text-anchor="middle" fill="#b5472a" font-size="10">POC Raporu</text>
      <text x="424" y="142" text-anchor="middle" fill="#6b6560" font-size="9">Ekip Yönlendirme</text>
      <text x="424" y="158" text-anchor="middle" fill="#6b6560" font-size="9">Yol Haritası</text>
    </svg>` },
      { type: 'bottomText', content: 'POC sonuçları farklı ekiplere sunuldu; anonimleştirme süreci için tercih edilen araç ve yöntem belirlendi, teknik rehber dokümantasyonu hazırlandı.' },
      { type: 'image', content: 'images/ts-bpmn.png' }
    ]
  },
  'interest-agile': {
    tag: 'İlgi Alanı',
    title: 'Agile Geliştirme',
    stack: ['Scrum', 'Sprint', 'Retrospektif', 'Jira', 'Cevik Dönüsüm'],
    sections: [
      { type: 'text', content: 'Sprint bazlı çalışma disiplinini hem Türkiye Sigorta hasar ekibinde hem de kişisel projelerimde uyguladım. Retrospektif kültürünün ekip verimliliğine etkisini bizzat gözlemledim.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="20" y="40" width="100" height="80" rx="4" fill="#e8e0d4" stroke="#b5472a66" stroke-width="1.5"/>
      <text x="70" y="76" text-anchor="middle" fill="#6b6560" font-size="10">Backlog</text>
      <text x="70" y="92" text-anchor="middle" fill="#8b3520" font-size="10">Items</text>
      <line x1="120" y1="80" x2="160" y2="80" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="160,75 172,80 160,85" fill="#b5472a44"/>
      <rect x="172" y="28" width="110" height="104" rx="4" fill="#e8e0d4" stroke="#b5472a77" stroke-width="1.5"/>
      <text x="227" y="58" text-anchor="middle" fill="#6b6560" font-size="10">Sprint</text>
      <line x1="185" y1="68" x2="269" y2="68" stroke="#b5472a15" stroke-width="1"/>
      <text x="227" y="85" text-anchor="middle" fill="#8b3520" font-size="11">2 Hafta</text>
      <text x="227" y="101" text-anchor="middle" fill="#6b6560" font-size="9">Plan · Dev · Test</text>
      <text x="227" y="116" text-anchor="middle" fill="#6b6560" font-size="9">Retro · Review</text>
      <line x1="282" y1="80" x2="322" y2="80" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="322,75 334,80 322,85" fill="#b5472a44"/>
      <rect x="334" y="40" width="100" height="80" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="384" y="76" text-anchor="middle" fill="#6b6560" font-size="10">Done</text>
      <text x="384" y="92" text-anchor="middle" fill="#2a7a56" font-size="10">Teslim</text>
      <line x1="434" y1="80" x2="474" y2="80" stroke="#b5472a22" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="474" y="40" width="120" height="80" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="534" y="73" text-anchor="middle" fill="#6b6560" font-size="10">Retrospektif</text>
      <text x="534" y="89" text-anchor="middle" fill="#b5472a" font-size="10">Iyilestirme</text>
      <text x="534" y="105" text-anchor="middle" fill="#6b6560" font-size="9">Dongusu</text>
    </svg>` },
      { type: 'bottomText', content: 'Sprint bazlı geliştirme, günlük stand-up kültürü ve sürekli iyileştirme döngüsü — hem teknik hem insani boyutuyla ilgi çekici bir alan.' }
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
  },
  'interest-browser': {
    tag: 'Ilgi Alani',
    title: 'Browser Use',
    stack: ['browser-use', 'Playwright', 'Python', 'LLM Agent', 'Otomasyon'],
    sections: [
      { type: 'text', content: 'AI destekli tarayıcı otomasyon araçlarını takip ediyor, browser-use kütüphanesi ve Playwright tabanlı agent deneyleri yapıyorum. Tekrarlayan web işlemlerini otomatize etmenin pratik sınırlarını keşfediyorum.' },
      { type: 'svg', content: `<svg viewBox="0 0 640 160" xmlns="http://www.w3.org/2000/svg" font-family="DM Sans,sans-serif">
      <rect x="20" y="40" width="120" height="80" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="80" y="73" text-anchor="middle" fill="#6b6560" font-size="10">AI Agent</text>
      <text x="80" y="89" text-anchor="middle" fill="#b5472a" font-size="11">LLM</text>
      <text x="80" y="105" text-anchor="middle" fill="#6b6560" font-size="9">Karar Motoru</text>
      <line x1="140" y1="80" x2="188" y2="80" stroke="#b5472a44" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="188,75 200,80 188,85" fill="#b5472a44"/>
      <rect x="200" y="28" width="140" height="104" rx="4" fill="#e8e0d4" stroke="#b5472a77" stroke-width="1.5"/>
      <text x="270" y="56" text-anchor="middle" fill="#6b6560" font-size="10">Browser Controller</text>
      <line x1="215" y1="66" x2="325" y2="66" stroke="#b5472a15" stroke-width="1"/>
      <text x="270" y="83" text-anchor="middle" fill="#8b3520" font-size="10">Playwright</text>
      <text x="270" y="99" text-anchor="middle" fill="#6b6560" font-size="9">DOM Okuma · Tıklama</text>
      <text x="270" y="115" text-anchor="middle" fill="#6b6560" font-size="9">Screenshot -&gt; LLM</text>
      <line x1="340" y1="65" x2="390" y2="48" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <line x1="340" y1="100" x2="390" y2="118" stroke="#b5472a33" stroke-width="1.2" stroke-dasharray="4,3"/>
      <rect x="390" y="30" width="120" height="36" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="450" y="52" text-anchor="middle" fill="#b5472a" font-size="10">Web Scraping</text>
      <rect x="390" y="102" width="120" height="36" rx="4" fill="#f0ebe3" stroke="#b5472a33" stroke-width="1.5"/>
      <text x="450" y="124" text-anchor="middle" fill="#b5472a" font-size="10">Görev Otomasyonu</text>
      <line x1="510" y1="48" x2="558" y2="68" stroke="#b5472a22" stroke-width="1"/>
      <line x1="510" y1="120" x2="558" y2="96" stroke="#b5472a22" stroke-width="1"/>
      <rect x="558" y="56" width="72" height="48" rx="4" fill="#f0ebe3" stroke="#b5472a15" stroke-width="1"/>
      <text x="594" y="76" text-anchor="middle" fill="#6b6560" font-size="9">Çiktı</text>
      <text x="594" y="92" text-anchor="middle" fill="#6b6560" font-size="9">ve Rapor</text>
    </svg>` },
      { type: 'bottomText', content: 'Browser-use, Stagehand gibi yeni nesil araçlarla AI nin web üzerinde otonom hareket etme kapasitesini test ediyorum.' },
      { type: 'image', content: 'images/interest-browser.png' }
    ]
  }
}
