# ContentFilterApp

ContentFilterApp, belirli kurallara ve filtrelere göre içerikleri dinamik olarak filtreleyen bir **Next.js** uygulamasıdır. **React**, **TypeScript**, ve **Tailwind CSS** kullanarak geliştirilmiştir.

---

## Başlangıç

Projeyi çalıştırmadan önce aşağıdaki adımları takip edin.

### Gerekli Bağımlılıkları Yükleme

- Öncelikle, proje dizininde aşağıdaki komutu çalıştırarak bağımlılıkları yükleyin:

```sh
yarn install
# veya
npm install
```

- Aşağıdaki komutu çalıştırarak uygulamayı başlatabilirsiniz

```sh
npm run dev
# veya
yarn dev
# veya
pnpm dev
# veya
bun dev
```

- Daha sonra [**http://localhost:3000**](http://localhost:3000) adresine giderek projeyi tarayıcınızda görüntüleyebilirsiniz


ContentFilterApp/
│-- src/
│   ├── app/
│   │   ├── content/[id]/       # Dinamik içerik sayfası
│   │   │   ├── loading.tsx     # İçerik yüklenme ekranı
│   │   │   ├── page.tsx        # İçerik detay sayfası
│   │   ├── layout.tsx          # Genel sayfa düzeni
│   │   ├── page.tsx            # Ana sayfa
│   ├── data/
│   │   ├── dummy.json          # Örnek JSON verisi
│   ├── components/             # Yeniden kullanılabilir bileşenler
│   │   ├── category/           # Kategori filtreleme bileşeni
│   │   ├── contentCard/        # İçerik kart bileşeni
│   │   ├── contentGrid/        # Grid düzeninde içerik gösterimi
│   │   ├── contentPage/        # İçerik detay bileşeni
│   │   ├── filterBar/          # Filtreleme çubuğu bileşeni
│   │   ├── searchBar/          # Arama bileşeni
│-- public/
│   ├── favicon.ico             # Favicon dosyası
│-- styles/
│   ├── globals.css             # Global CSS stilleri
│-- .eslintrc.json              # ESLint yapılandırması
│-- .gitignore                  # Git için hariç tutulacak dosyalar
│-- README.md                   # Proje dökümantasyonu
│-- next.config.mjs             # Next.js yapılandırma dosyası
│-- package.json                # Bağımlılıklar ve proje bilgisi
│-- tailwind.config.ts          # Tailwind CSS yapılandırması
│-- tsconfig.json               # TypeScript yapılandırması

##  Kullanılan Teknolojiler

- **Next.js** - React tabanlı sunucu taraflı ve istemci taraflı rendering.
- **TypeScript** - Daha güvenli ve ölçeklenebilir JavaScript kodlama.
- **Tailwind CSS** - Modern UI stilleri.
