
# SBM Ortak veri modeli mutabakat projesi

Sigorta Bilgi ve Gözetim Merkezi (SBM), Türkiyenin sigorta ekosistemindeki verileri merkezi bir yapıda konsolide eden teknolojik bir veri ambarıdır. Bu çalışma; SBM altyapısının operasyonel süreçlere entegrasyonu ve sistemler arası veri mutabakatının sağlanması süreçlerine odaklanmaktadır.


** Ortak veri modeli projesi nedir?**

Ortak veri modeli projesi tüm sigorta kurumlarının aynı standard'a sahip şekilde sigorta verilerinin sbm'ye iletme projesidir.
Sbm üretim,hasar,reasürans... ve pek çok sigortacılık sisteminde sigorta kurumlarına tek bir yapıda verilerinin transfer edilmesini şart koşar.
Bu transfer araçların hasarlarının sorgulanması,fraud, fiyatlandırma rücu gibi pek çok sürecin hızlı ve efektif bir şekilde yapılmasına olanak sağlar.

GÖRSEL[images/sbm_yapi.png]

**Bu projedeki görevlerim nedir?**

işe girdiğim dönemden çıktığım döneme kadar başka projelere full odak olduğum dönemler dışında parçası olduğum bir projedir.
Projenin başlangıcında veri bakımı aktarım ve takip çalışmaları yaparken sonlarına doğru sistemin değişmesi gereken yapılarını yenileyen ve ödeme mutabakat sistemini kuran kişi oldum.

Proje kendi içinde 3 farklı ayaktan oluştuğu söylenebilir.

**Sistem verilerinin düzeltilmesi:**

Migration,hatalı mapping, kullanıcı input hatası , iş kuralı veya herhangi bir sebepten dolayı gönderimi yapılamamış dosyalardaki veri hatalarının düzeltilmesini sağlamak,

Burada gelen hataya göre eğer sistemsel bir eksiklik varsa ilgili kod'u güncelelmesi için gerekli analiz ve test çalışmalarını yürütmek,
Eğer toplu veri bakımı gerekiyor ise python veya sql üzerinden veri bakımı scriptleri oluşturmak. Emekliye ayrılan bir sistemdeki verileri selenium üzerinden çekerek gerekli düzenlemeleri yapıp python üzerinden gönderimi sağladım.

**Yeni sistem geliştirmelerini yürütmek**

SBM ye ait 7-8 farklı ailedeki servislerin hasar ayağıona ait geliştirmelerini yürütmek örneğin kimlik sorgulama servisinde bir değişiklik olacaksa hasar modülünde ilgili servisin tüm kullandığı yapılarda geliştirmelerin yapılmasını sağlamak.
Veri aktarıma aykırı süreçlerdeki sistem veya procedurelerin güncele uygun hale getirilmesini sağlamak.

**Mutabakat sistemini iyileştirmek**

Yarım tamamlanmış bir Mutabakat sistemi mevcuttu fakat bu sistem her bir transaction'ı eşleştirmeye çalışıyor verilerin mevcut kirlilikleri ve sbm & sistem uyumsuzlukları sebebiyle büyük resmi görme de yetersiz kalmaktaydı.
Buradaki amaç mevcut yapıyı ödeme özelinde netleştirmekdi her bir transaction'ı takip etmek değil.

bu amaçla aşağıdaki diagram eski ve yeni mutabakat yaklaşımını ortaya koymaktadır.

Diagram[diagrams/sbm-surec-karsilastirma.svg]

Temel Katkılar:

Tek satırlıktan 200.000 satıra uzanan kapsamda veri bakım ve temizleme çalışmaları
Ödeme mutabakat sisteminin kurulumu ve projenin ilerleyen aşamalarında teknik yönlendirme
SBM süreçleri konusunda diğer birimlere teknik ve koordinasyon desteği
SBM geliştirmelerinde tam hakimiyet

Zorluklar:

Veri kirliliği ve sistem tasarımından kaynaklanan entegrasyon güçlükleri
Proje aynı anda sigorta domain uzmanlığı, veri yönetimi ve temel yazılım/debugging bilgisi gerektiren geniş bir kapsama sahip

Çıkarılan Dersler:

Kritik sistemlerde küçük bir veri hatası zincirleme etki yaratabilir, dikkat ve doğrulama adımları vazgeçilmezdir
Çok yönlü beceriler — veri, domain ve teknik bilginin bir arada bulunması — karmaşık problemlere esnek çözümler üretmeyi mümkün kılar