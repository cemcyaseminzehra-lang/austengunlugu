# 📖 Austen Günlüğü — Jane Austen Kitap & Edebiyat Günlüğü

> **Yapay Zeka Araçları Kullanımı Dersi Vize Ödevi** kapsamında geliştirilmiş, İngiliz edebiyatının usta kalemi **Jane Austen**'ın hayatını, 6 ölümsüz eserini, kronolojisini ve okur sıralamasını sunan karanlık Letterboxd estetiğinde modern web uygulaması.

---

## ✨ Özellikler

1. **Özgün Jane Austen Biyografisi**:
   - Tarihsel 1870 Victoria dönemi gravürü ve 1810 Cassandra Austen suluboya portresi arasında geçiş imkanı.
   - Regency dönemi tarihi alıntıları ve biyografik hayat dönüm noktaları.
2. **Letterboxd Estetiğinde Kitap Kataloğu**:
   - *Sense and Sensibility (1811)*
   - *Pride and Prejudice (1813)*
   - *Mansfield Park (1814)*
   - *Emma (1816)*
   - *Northanger Abbey (1818)*
   - *Persuasion (1818)*
   - Pastel tonlarda vintage kitap kapakları, 5 yıldızlı puanlama sistemi, favorileme (kalp), okuma durumu ve detaylı modal incelemeleri.
   - Gerçek okur yorumları, spoiler uyarısı, beğeni butonları ve yeni inceleme ekleme formu.
3. **Kronolojik Yayın Tarihi & Perde Arkası**:
   - 1811'den 1818'e uzanan interaktif zaman çizelgesi.
   - Her kitabın yazılış serüveni, yayınlanma zorlukları ve "By a Lady" imzasının perde arkası.
4. **Regency Karakter Avatarları & Kişisel Sıralama**:
   - Okur kendi mahlasını/adını yazıp Elizabeth Bennet, Mr. Darcy, Emma Woodhouse, Jane Austen vb. özgün karikatür avatarlarını seçebilir.
   - 6 kitabı en sevdiğinden en az sevdiğine doğru interaktif olarak sıralayabilme.
   - Sıralama rozeti ve panoya kopyalanabilir paylaşım kartı (konfeti animasyonlu).

---

## 🛠️ Kullanılan Teknolojiler

- **React 19** + **TypeScript**
- **Tailwind CSS v4** (İngiliz orman yeşili `#468B62`, altın mühür `#D4AF37` ve Letterboxd koyu paleti `#14181C`)
- **Vite** (Hızlı derleme ve SPA yapısı)
- **Lucide React** (İkon seti)
- **Motion / Framer Motion** (Zarif geçişler ve modal animasyonları)

---

## 🚀 Yerel Kurulum & Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için:

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcınızda `http://localhost:3000` adresine gidin.

---

## 🌐 Vercel'e Dağıtım (Deploy Rehberi)

1. Bu depoyu GitHub hesabınıza aktarın (Push).
2. [vercel.com](https://vercel.com) adresine gidin ve **"Add New Project"** butonuna tıklayın.
3. GitHub reponuzu seçin:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. **Deploy** butonuna basın. Projeniz saniyeler içinde `austengunlugu.vercel.app` (veya belirlediğiniz alan adı) adresinde canlıya geçecektir!

---

*Hazırlayan: Seçkin Okur — Jane Austen Edebiyat Günlüğü*
