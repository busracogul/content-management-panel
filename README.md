# 📝 Content Management Panel

Content Management Panel, kullanıcıların içerik bloklarını kolayca ekleyip yönetebilecekleri modern bir içerik yönetim panelidir. Kullanıcılar, "Add Content" butonuna tıklayarak içerik eklemek için bir form sayfasına yönlendirilir. Formda başlık, resim ve metin bloğu oluşturabilir ve ardından içerikleri silebilir veya güncelleyebilirler. Bu panel, kullanıcı dostu arayüzü ve işlevselliğiyle içerik yönetimini daha verimli hale getirir.

## 🚀 Özellikler

- **İçerik Ekleme**: "Add Content" butonuna tıklayarak başlık, resim ve metin bloğu ekleyebilirsiniz.
- **İçerik Güncelleme ve Silme**: Eklediğiniz içerikleri güncelleyebilir veya silebilirsiniz.
- **Dinamik İçerik Yönetimi**: İçerikler formdan eklenip ana sayfada görüntülenir.
- **Form Yönetimi**: React Hook Form ile içerik ekleme, güncelleme ve silme işlemleri yapılır.
- **Modern UI**: ShadCN UI ve Tailwind CSS ile şık ve duyarlı bir kullanıcı arayüzü.

## 🛠️ Kullanılan Teknolojiler

- **React (v19.0.0)**: Kullanıcı arayüzünü oluşturmak ve dinamik içerik yönetimi sağlamak için bileşen tabanlı yapıyı kullanarak modüller (örneğin, içerik listeleme ve içerik detayları sayfaları) oluşturmak için tercih edildi.
- **TypeScript**: Proje genelinde statik tip denetimi sağlayarak, daha güvenli ve bakımı kolay bir kod yapısı elde etmek için kullanıldı.
- **Vite**: Hızlı geliştirme süreci için proje yapılandırmasında, hızlı yeniden yükleme ve optimal derleme işlemleri sağlamak amacıyla kullanıldı.
- **Tailwind CSS**: Hızlı ve özelleştirilebilir stil yazımı için modern bir CSS framework'ü olarak, şık ve esnek bir kullanıcı arayüzü tasarımı oluşturmak için kullanıldı.
- **ShadCN UI**: Duyarlı ve modern UI bileşenleri sağlayarak kullanıcı arayüzünü geliştirmek için kullanıldı (örneğin, form, buton, ve inputlar).
- **React Hook Form**: Form yönetimini basitleştirmek ve kullanıcı etkileşimlerini daha verimli hale getirmek için form işlemleri (örneğin, içerik ekleme ve güncelleme) için kullanıldı.
- **Zod**: Form verilerinin doğruluğunu sağlamak için güçlü bir şema doğrulama kütüphanesi olarak kullanıldı.
- **Axios**: API istekleri yapmak ve verileri almak için, özellikle içerik ekleme ve düzenleme işlemleri için kullanılan HTTP istemcisi.
- **JSON Server**: Sahte veri sunucusu olarak, içerik verilerini saklamak ve yönetmek için kullanıldı.
- **Lucide React**: UI üzerinde modern ve estetik iconlar kullanmak için tercih edildi.
- **Sonner**: Kullanıcı etkileşimlerini bildirmek için Toast bildirimleri sağlamak amacıyla kullanıldı.
- **Tiptap/react**: Zengin metin editörünü entegre etmek ve içerik düzenleme işlemleri sağlamak amacıyla kullanıldı.
- **Dompurify**: XSS saldırılarına karşı güvenli içerik temizliği sağlamak amacıyla kullanıldı.
- **React Router Dom**: Sayfa yönlendirmelerini yönetmek için React Router kullanıldı (sayfalar arası geçiş ve URL yönetimi).
- **React Icons**: UI bileşenlerine ikon eklemek için kullanıldı.


## 📸 Ekran Görüntüleri
- **Ana Sayfa**
  ![ana ekran](https://github.com/user-attachments/assets/acb58713-85e6-4680-9dc0-c926a7077996)
- **Blog Ekleme Sayfası**
 ![blog ekleme sayfası](https://github.com/user-attachments/assets/152f19df-a2f7-4126-a964-0c45aec28bc7)
- **Güncelleme Sayfası**
 ![güncelleme sayfası](https://github.com/user-attachments/assets/52254337-5b93-42bd-ae54-e2809302bb65)


## ⚙️ Kurulum

1. Bu projeyi klonlayın:
   ```bash
   git clone <https://github.com/busracogul/content-management-panel.git>
   cd content-management-panel
   ```
2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
3. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```
4. Uygulamayı tarayıcınızda görüntüleyin:
   ```bash
   http://localhost:5173
   ```
