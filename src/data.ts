// All copy + asset references for the site. Text is provided in both English and
// Indonesian; the active language is selected at runtime via the i18n context
// (see src/i18n.tsx).
//
// POSITIONING: a software house (web, mobile, AI, IoT, ERP). Tone is grounded and
// confident, not hype. We read as substantial through clear, concrete copy, not
// through "enterprise" buzzwords or vanity numbers. Do NOT use the long em-dash in
// user-facing copy.
//
// IoT is a listed capability/service but has no case study under `work` (no IoT
// portfolio yet). Replace placeholder team/contact data before publishing.

export type Lang = "en" | "id";

// WhatsApp contact (0882… -> international 62882…). Used by the CTA section.
export const whatsappNumber = "6288218136929";

// ---------- Shared, non-translated assets ----------

// Client / partner logos shown in the "Trusted by" strip (shared across languages).
const clientLogos = [
  { name: "Honda", src: "/assets/client-honda.png" },
  { name: "Thursina", src: "/assets/client-thursina.png" },
  { name: "Indera Sae Pratama", src: "/assets/client-indera.png" },
  { name: "SMS Transporter", src: "/assets/client-sms.png" },
  { name: "Yasmin", src: "/assets/client-yasmin.png" },
  { name: "AR Project", src: "/assets/client-arproject.png" },
  { name: "eJ Peace Entertainment", src: "/assets/client-ejpeace.png" },
  { name: "eJP", src: "/assets/client-ejp.png" },
  { name: "Peace Club", src: "/assets/client-peaceclub.png" },
  { name: "Corndog Kane", src: "/assets/client-corndog.png" },
];

// ---------- Full content bundle, keyed by language ----------

export const content = {
  en: {
    nav: {
      brand: "thetective",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Services", to: "/services" },
        { label: "Work", to: "/work" },
      ],
      cta: { label: "Contact", to: "/contact" },
    },

    footer: {
      tagline: "Software house for web, mobile, AI, IoT, and ERP.",
      columns: [
        {
          title: "Studio",
          links: [
            { label: "About", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Work", to: "/work" },
            { label: "Contact", to: "/contact" },
          ],
        },
      ],
      contactTitle: "Get in touch",
      email: "halo@thetective.id",
      phone: "+62 882-1813-6929",
      address: "Bandung, Indonesia",
      legal: "PT Thetective Karya Digital · NIB 1000000008361256",
      location: "© Thetective",
      bottom: "Software, built to last.",
    },

    consultation: {
      kicker: "(06) Get started",
      heading: "Let's talk.",
      subtitle:
        "No forms, no waiting. Message us on WhatsApp and we'll take it from there.",
      button: "Chat on WhatsApp",
      waMessage: "Hi Thetective, I'd like to discuss a project.",
    },

    hero: {
      badge: "Software House · Bandung, Indonesia",
      preline: "We build the software your",
      highlight: "business runs on.",
      subtitle:
        "A software house building web, mobile, AI, IoT, and ERP. From the first sketch to a system running in production.",
      ctaPrimary: { label: "Start a project", to: "/contact" },
      ctaSecondary: { label: "See our work", to: "/work" },
    },

    capabilities: {
      kicker: "(01) Capabilities",
      heading: "From idea to production, across the stack.",
      subtitle:
        "The whole stack handled in-house by one team, so you never juggle multiple vendors.",
      items: [
        { title: "Web Platforms", description: "Web apps, dashboards, and customer portals." },
        { title: "Mobile Apps", description: "iOS and Android, from design to the store." },
        { title: "AI & Data", description: "Models, automation, forecasting, and analytics." },
        { title: "IoT & Embedded", description: "Connected devices, sensors, and telemetry." },
        { title: "ERP & Operations", description: "Finance, inventory, HR, and procurement." },
        { title: "Cloud & Integration", description: "APIs, migration, and infrastructure." },
      ],
    },

    clients: { label: "Trusted by", logos: clientLogos },

    weAre: {
      kicker: "(02) Who we are",
      headingLead: "A software house, built to ",
      headingHighlight: "ship",
      headingTail: ".",
      paragraphs: [
        "We build across the stack: web, mobile, AI, IoT, and ERP. Every project gets the same care, whether it serves four users or four million.",
        "We go deep on every project. Senior engineers stay on it from the first sketch to production and the support that follows.",
      ],
    },

    assurance: {
      kicker: "(03) Why us",
      heading: "Built to be relied on.",
      subtitle:
        "The things teams ask before trusting a system with their operations. We answer them up front, in writing.",
      items: [
        {
          title: "Security & compliance",
          description:
            "Encryption in transit and at rest, role-based access, audit trails, and practices aligned with Indonesia's personal data protection law (UU PDP).",
        },
        {
          title: "Scale & reliability",
          description:
            "Cloud-native architecture that absorbs heavy loads like transaction peaks and launch spikes, with monitoring and clear uptime targets.",
        },
        {
          title: "Support & handover",
          description:
            "SLA-backed maintenance, bug warranty, user training, and full documentation. You own the source code, and we don't disappear after launch.",
        },
      ],
    },

    services: {
      kicker: "(04) What we do",
      heading: "What we build.",
      subtitle:
        "What we take on, from the first sketch to a system running in production.",
      tabs: [
        {
          label: "Web Platforms",
          detail: {
            title: "Web Platforms",
            description:
              "Web apps, dashboards, and customer portals that are fast, accessible, and built to scale with your business.",
            tags: ["Web Apps", "Dashboards", "Portals", "SaaS"],
            cta: "Discuss your platform",
          },
        },
        {
          label: "Mobile Apps",
          detail: {
            title: "Mobile Apps",
            description:
              "Native-quality iOS and Android apps, from design to store release, with a backend that holds up.",
            tags: ["iOS", "Android", "Cross-platform", "UX"],
            cta: "Discuss your app",
          },
        },
        {
          label: "AI & Data",
          detail: {
            title: "AI & Data",
            description:
              "Practical AI on your data: automation, forecasting, chatbots, and analytics that earn their keep.",
            tags: ["AI", "Automation", "Forecasting", "Analytics"],
            cta: "Discuss your data",
          },
        },
        {
          label: "IoT & Embedded",
          detail: {
            title: "IoT & Embedded",
            description:
              "Connected devices and the platforms behind them: sensors, telemetry, and real-time dashboards.",
            tags: ["Devices", "Sensors", "Telemetry", "Real-time"],
            cta: "Discuss your devices",
          },
        },
        {
          label: "ERP & Operations",
          detail: {
            title: "ERP & Operations",
            description:
              "Custom ERP that replaces scattered spreadsheets: finance, inventory, HR, and procurement in one connected system.",
            tags: ["Finance", "Inventory", "HR", "Procurement"],
            cta: "Discuss your ERP",
          },
        },
      ],
    },

    work: {
      kicker: "(05) Our products",
      headingLead: "Products we ",
      headingHighlight: "build",
      headingTail: " and run.",
      note: "Our own SaaS products, built and maintained in-house.",
      cta: "Request a demo",
      products: [
        {
          name: "TiveFlow",
          tag: "POS & ERP for F&B",
          description:
            "A point-of-sale and ERP platform for food & beverage businesses. Fast checkout, automatic stock and ingredients, with finance and reporting built in.",
          features: [
            "Fast POS checkout",
            "Automatic stock & ingredients",
            "Built-in finance & reports",
            "Multi-outlet ready",
          ],
          image: "/assets/project-tiveflow.png",
        },
        {
          name: "Juragan Jeklos",
          tag: "POS for traditional markets",
          description:
            "A POS and management platform made for traditional markets. Monitor every branch in real time, with automatic stock, shrinkage, and COGS.",
          features: [
            "Real-time multi-branch",
            "Stock, shrinkage & COGS",
            "Reports straight to WhatsApp",
            "Made for market stalls",
          ],
          image: "/assets/project-juragan-jeklos.png",
        },
      ],
    },

    aboutHero: {
      badge: "About Thetective",
      headingLead: "A team built for ",
      headingHighlight: "large",
      headingTail: " systems.",
      subtitle:
        "Thetective is an Indonesian software house. We design and build web, mobile, AI, IoT, and ERP systems, from the first sketch to production.",
      location: "Bandung, Indonesia",
      image: "/assets/about-office.jpg",
    },

    story: {
      kicker: "(01) Our story",
      headingLead: "Quality, ",
      headingHighlight: "not",
      headingTail: " quantity.",
      paragraphs: [
        "We exist for one reason: to build software organizations can actually rely on. Not demos, not press releases. Systems that run the business, day after day.",
        "We are full-stack by design: web, mobile, AI, IoT, and ERP under one roof. Done properly, documented, and built to run for years.",
      ],
    },

    principles: {
      kicker: "(02) Principles",
      heading: "How we work.",
      subtitle:
        "Three rules we hold ourselves to on every project, written down so you can hold us to them too.",
      items: [
        {
          title: "Operators first",
          description:
            "We sit with the people who actually run the workflow before we write a line of code. The product reflects their language, not ours.",
        },
        {
          title: "Transparent delivery",
          description:
            "Sprint demos, progress reports, and full documentation. No black boxes, so you always know where the project stands and who owns what.",
        },
        {
          title: "Senior from day one",
          description:
            "Every project is staffed with engineers who have shipped at scale. No bait-and-switch, no juniors learning on your time.",
        },
      ],
    },
  },

  id: {
    nav: {
      brand: "thetective",
      links: [
        { label: "Beranda", to: "/" },
        { label: "Tentang", to: "/about" },
        { label: "Layanan", to: "/services" },
        { label: "Karya", to: "/work" },
      ],
      cta: { label: "Kontak", to: "/contact" },
    },

    footer: {
      tagline: "Software house untuk web, mobile, AI, IoT, dan ERP.",
      columns: [
        {
          title: "Studio",
          links: [
            { label: "Tentang", to: "/about" },
            { label: "Layanan", to: "/services" },
            { label: "Karya", to: "/work" },
            { label: "Kontak", to: "/contact" },
          ],
        },
      ],
      contactTitle: "Hubungi kami",
      email: "halo@thetective.id",
      phone: "+62 882-1813-6929",
      address: "Bandung, Indonesia",
      legal: "PT Thetective Karya Digital · NIB 1000000008361256",
      location: "© Thetective",
      bottom: "Perangkat lunak yang dibangun untuk bertahan.",
    },

    consultation: {
      kicker: "(06) Mulai",
      heading: "Mari bicara.",
      subtitle:
        "Tanpa formulir, tanpa menunggu. Chat kami di WhatsApp dan biar kami yang mengurus sisanya.",
      button: "Chat via WhatsApp",
      waMessage: "Halo Thetective, saya ingin berdiskusi tentang sebuah proyek.",
    },

    hero: {
      badge: "Software House · Bandung, Indonesia",
      preline: "Kami membangun perangkat lunak yang",
      highlight: "menggerakkan bisnis Anda.",
      subtitle:
        "Software house yang membangun web, mobile, AI, IoT, dan ERP. Dari sketsa pertama hingga sistem yang berjalan di produksi.",
      ctaPrimary: { label: "Mulai proyek", to: "/contact" },
      ctaSecondary: { label: "Lihat karya kami", to: "/work" },
    },

    capabilities: {
      kicker: "(01) Kapabilitas",
      heading: "Dari ide hingga produksi, di seluruh lini.",
      subtitle:
        "Seluruh lini kami tangani in-house dengan satu tim, jadi Anda tak perlu repot mengelola banyak vendor.",
      items: [
        { title: "Platform Web", description: "Aplikasi web, dasbor, dan portal pelanggan." },
        { title: "Aplikasi Mobile", description: "iOS dan Android, dari desain hingga rilis." },
        { title: "AI & Data", description: "Model, otomasi, peramalan, dan analitik." },
        { title: "IoT & Embedded", description: "Perangkat terhubung, sensor, dan telemetri." },
        { title: "ERP & Operasi", description: "Keuangan, inventori, SDM, dan pengadaan." },
        { title: "Cloud & Integrasi", description: "API, migrasi, dan infrastruktur." },
      ],
    },

    clients: { label: "Dipercaya oleh", logos: clientLogos },

    weAre: {
      kicker: "(02) Siapa kami",
      headingLead: "Software house yang berfokus pada ",
      headingHighlight: "hasil nyata",
      headingTail: ".",
      paragraphs: [
        "Kami membangun di seluruh lini: web, mobile, AI, IoT, dan ERP. Setiap proyek mendapat perhatian yang sama, baik untuk empat pengguna maupun empat juta.",
        "Kami menggarap setiap proyek secara mendalam. Engineer senior menemani proyek Anda dari sketsa pertama hingga produksi dan dukungan setelahnya.",
      ],
    },

    assurance: {
      kicker: "(03) Kenapa kami",
      heading: "Dibangun untuk diandalkan.",
      subtitle:
        "Hal-hal yang ditanyakan tim sebelum mempercayakan operasinya pada sebuah sistem. Kami jawab di depan, secara tertulis.",
      items: [
        {
          title: "Keamanan & kepatuhan",
          description:
            "Enkripsi saat transit maupun tersimpan, hak akses berjenjang, jejak audit, dan praktik yang selaras dengan UU Pelindungan Data Pribadi (UU PDP).",
        },
        {
          title: "Skala & keandalan",
          description:
            "Arsitektur cloud-native yang menyerap beban berat seperti puncak transaksi dan lonjakan saat rilis, dengan pemantauan dan target uptime yang jelas.",
        },
        {
          title: "Dukungan & serah terima",
          description:
            "Pemeliharaan ber-SLA, garansi bug, pelatihan pengguna, dan dokumentasi lengkap. Kode sumber milik Anda, dan kami tidak hilang setelah rilis.",
        },
      ],
    },

    services: {
      kicker: "(04) Yang kami kerjakan",
      heading: "Apa yang kami bangun.",
      subtitle:
        "Pendekatan end-to-end: dari perumusan ide hingga performa produksi yang andal.",
      tabs: [
        {
          label: "Platform Web",
          detail: {
            title: "Platform Web",
            description:
              "Aplikasi web, dasbor, dan portal pelanggan yang cepat, aksesibel, dan dibangun untuk berkembang bersama bisnis Anda.",
            tags: ["Aplikasi Web", "Dasbor", "Portal", "SaaS"],
            cta: "Diskusikan platform Anda",
          },
        },
        {
          label: "Aplikasi Mobile",
          detail: {
            title: "Aplikasi Mobile",
            description:
              "Aplikasi iOS dan Android berkualitas native, dari desain hingga rilis ke store, dengan backend yang tangguh.",
            tags: ["iOS", "Android", "Lintas-platform", "UX"],
            cta: "Diskusikan aplikasi Anda",
          },
        },
        {
          label: "AI & Data",
          detail: {
            title: "AI & Data",
            description:
              "AI praktis di atas data Anda: otomasi, peramalan, chatbot, dan analitik yang memberikan dampak nyata.",
            tags: ["AI", "Otomasi", "Peramalan", "Analitik"],
            cta: "Diskusikan data Anda",
          },
        },
        {
          label: "IoT & Embedded",
          detail: {
            title: "IoT & Embedded",
            description:
              "Perangkat terhubung beserta platform di baliknya: sensor, telemetri, dan dasbor real-time.",
            tags: ["Perangkat", "Sensor", "Telemetri", "Real-time"],
            cta: "Diskusikan perangkat Anda",
          },
        },
        {
          label: "ERP & Operasi",
          detail: {
            title: "ERP & Operasi",
            description:
              "ERP custom yang menggantikan spreadsheet tercerai-berai: keuangan, inventori, SDM, dan pengadaan dalam satu sistem terintegrasi.",
            tags: ["Keuangan", "Inventori", "SDM", "Pengadaan"],
            cta: "Diskusikan ERP Anda",
          },
        },
      ],
    },

    work: {
      kicker: "(05) Produk kami",
      headingLead: "Produk yang kami ",
      headingHighlight: "bangun",
      headingTail: " dan kelola.",
      note: "Produk SaaS milik kami sendiri, dibangun dan dirawat in-house.",
      cta: "Minta demo",
      products: [
        {
          name: "TiveFlow",
          tag: "POS & ERP untuk F&B",
          description:
            "Platform POS dan ERP untuk bisnis makanan & minuman. Transaksi cepat, stok dan bahan otomatis, dengan keuangan dan pelaporan yang menyatu.",
          features: [
            "Transaksi POS cepat",
            "Stok & bahan otomatis",
            "Keuangan & laporan terintegrasi",
            "Siap multi-outlet",
          ],
          image: "/assets/project-tiveflow.png",
        },
        {
          name: "Juragan Jeklos",
          tag: "POS untuk pasar tradisional",
          description:
            "Platform POS dan manajemen khusus pasar tradisional. Pantau setiap cabang secara real-time, dengan stok, susut, dan HPP otomatis.",
          features: [
            "Multi-cabang real-time",
            "Stok, susut & HPP",
            "Laporan langsung ke WhatsApp",
            "Dibuat untuk lapak pasar",
          ],
          image: "/assets/project-juragan-jeklos.png",
        },
      ],
    },

    aboutHero: {
      badge: "Tentang Thetective",
      headingLead: "Tim yang dibangun untuk sistem ",
      headingHighlight: "besar",
      headingTail: ".",
      subtitle:
        "Thetective adalah software house asal Indonesia. Kami merancang dan membangun sistem web, mobile, AI, IoT, dan ERP, dari sketsa pertama hingga produksi.",
      location: "Bandung, Indonesia",
      image: "/assets/about-office.jpg",
    },

    story: {
      kicker: "(01) Kisah kami",
      headingLead: "Kualitas, ",
      headingHighlight: "bukan",
      headingTail: " kuantitas.",
      paragraphs: [
        "Kami ada untuk satu alasan: membangun perangkat lunak yang benar-benar bisa diandalkan organisasi. Bukan demo, bukan siaran pers. Sistem yang menjalankan bisnis, hari demi hari.",
        "Kami full-stack secara desain: web, mobile, AI, IoT, dan ERP dalam satu atap. Dikerjakan dengan benar, terdokumentasi, dan dibangun untuk bertahan bertahun-tahun.",
      ],
    },

    principles: {
      kicker: "(02) Prinsip",
      heading: "Cara kami bekerja.",
      subtitle:
        "Tiga aturan yang kami pegang di setiap proyek, kami tuliskan agar Anda pun bisa menuntut kami menepatinya.",
      items: [
        {
          title: "Operator yang utama",
          description:
            "Kami duduk bersama orang yang benar-benar menjalankan alur kerja sebelum menulis satu baris kode. Produk mencerminkan bahasa mereka, bukan bahasa kami.",
        },
        {
          title: "Pengerjaan transparan",
          description:
            "Demo sprint, laporan progres, dan dokumentasi lengkap. Tanpa kotak hitam, jadi Anda selalu tahu posisi proyek dan siapa bertanggung jawab atas apa.",
        },
        {
          title: "Senior sejak hari pertama",
          description:
            "Setiap proyek diisi engineer yang sudah merilis di skala besar. Sesuai janji di awal, tanpa junior yang belajar menggunakan waktu Anda.",
        },
      ],
    },
  },
};

// Widen literal/tuple types so both languages share one structural type. This is
// what every component receives from `useContent()`.
type Widen<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : T extends ReadonlyArray<infer U>
  ? Widen<U>[]
  : { -readonly [K in keyof T]: Widen<T[K]> };

export type Content = Widen<(typeof content)["en"]>;
