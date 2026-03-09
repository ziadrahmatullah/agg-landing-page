export interface ProductFeature {
  title: string;
  description: string;
}

export interface ProductUseCase {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  title: string;
  titleId: string;
  description: string;
  descriptionId: string;
  icon: string;
  features: ProductFeature[];
  featuresId: ProductFeature[];
  useCases: ProductUseCase[];
  useCasesId: ProductUseCase[];
  techUsed: string[];
}

export const products: Product[] = [
  {
    slug: 'ai-powered-apps',
    title: 'AI-Powered Apps',
    titleId: 'Aplikasi Bertenaga AI',
    description:
      'We build custom applications with artificial intelligence at the core. Our AI-powered apps are designed to understand, learn, and adapt — delivering intelligent experiences that go far beyond traditional software. Whether you need a smart customer service bot, an intelligent data analysis tool, or a personalized recommendation engine, we craft solutions tailored to your exact needs.',
    descriptionId:
      'Kami membangun aplikasi kustom dengan kecerdasan buatan sebagai inti. Aplikasi bertenaga AI kami dirancang untuk memahami, belajar, dan beradaptasi — menghadirkan pengalaman cerdas yang jauh melampaui software tradisional. Apakah Anda membutuhkan bot layanan pelanggan cerdas, alat analisis data yang intelligent, atau mesin rekomendasi yang dipersonalisasi, kami merancang solusi yang disesuaikan dengan kebutuhan Anda.',
    icon: '🤖',
    features: [
      {
        title: 'Natural Language Processing',
        description:
          'Integrate powerful NLP capabilities that allow your application to understand, interpret, and generate human language — enabling chatbots, sentiment analysis, and document processing.',
      },
      {
        title: 'Predictive Analytics',
        description:
          'Leverage machine learning models to forecast trends, identify patterns, and make data-driven predictions that give your business a competitive edge.',
      },
      {
        title: 'Intelligent Automation',
        description:
          'Automate complex decision-making processes with AI that learns from data and continuously improves its performance over time.',
      },
      {
        title: 'Personalization Engine',
        description:
          'Deliver tailored experiences to each user based on their behavior, preferences, and history — increasing engagement and satisfaction.',
      },
      {
        title: 'Real-time AI Processing',
        description:
          'Process and analyze data in real-time, enabling instant insights and immediate responses that keep your operations agile.',
      },
    ],
    featuresId: [
      {
        title: 'Pemrosesan Bahasa Alami',
        description:
          'Integrasikan kemampuan NLP yang kuat yang memungkinkan aplikasi Anda memahami, menginterpretasi, dan menghasilkan bahasa manusia — memungkinkan chatbot, analisis sentimen, dan pemrosesan dokumen.',
      },
      {
        title: 'Analitik Prediktif',
        description:
          'Manfaatkan model machine learning untuk memperkirakan tren, mengidentifikasi pola, dan membuat prediksi berbasis data yang memberi bisnis Anda keunggulan kompetitif.',
      },
      {
        title: 'Otomasi Cerdas',
        description:
          'Otomasi proses pengambilan keputusan yang kompleks dengan AI yang belajar dari data dan terus meningkatkan kinerjanya dari waktu ke waktu.',
      },
      {
        title: 'Mesin Personalisasi',
        description:
          'Hadirkan pengalaman yang disesuaikan untuk setiap pengguna berdasarkan perilaku, preferensi, dan riwayat mereka — meningkatkan keterlibatan dan kepuasan.',
      },
      {
        title: 'Pemrosesan AI Real-time',
        description:
          'Proses dan analisis data secara real-time, memungkinkan wawasan instan dan respons segera yang menjaga operasi Anda tetap lincah.',
      },
    ],
    useCases: [
      {
        title: 'Customer Support Automation',
        description:
          'Deploy an AI-powered chatbot that handles customer inquiries 24/7, reducing support costs while improving response times and customer satisfaction scores.',
      },
      {
        title: 'Business Intelligence Dashboard',
        description:
          'Build an intelligent analytics platform that automatically surfaces insights from your data, identifies anomalies, and predicts future trends for strategic decision-making.',
      },
      {
        title: 'Document Processing & Analysis',
        description:
          'Automate the extraction, classification, and analysis of information from documents — contracts, invoices, reports — saving hundreds of hours of manual work.',
      },
    ],
    useCasesId: [
      {
        title: 'Otomasi Dukungan Pelanggan',
        description:
          'Deploy chatbot bertenaga AI yang menangani pertanyaan pelanggan 24/7, mengurangi biaya dukungan sekaligus meningkatkan waktu respons dan skor kepuasan pelanggan.',
      },
      {
        title: 'Dashboard Business Intelligence',
        description:
          'Bangun platform analitik cerdas yang secara otomatis menampilkan wawasan dari data Anda, mengidentifikasi anomali, dan memprediksi tren masa depan untuk pengambilan keputusan strategis.',
      },
      {
        title: 'Pemrosesan & Analisis Dokumen',
        description:
          'Otomasi ekstraksi, klasifikasi, dan analisis informasi dari dokumen — kontrak, faktur, laporan — menghemat ratusan jam kerja manual.',
      },
    ],
    techUsed: ['OpenAI GPT-4', 'LangChain', 'Next.js', 'TypeScript', 'PostgreSQL', 'Pinecone', 'Python'],
  },
  {
    slug: 'automation-tools',
    title: 'Automation Tools',
    titleId: 'Alat Otomasi',
    description:
      'Our automation tools are designed to eliminate repetitive, time-consuming tasks from your workflow. Using n8n as our primary automation backbone, combined with custom integrations and AI capabilities, we build pipelines that connect your apps, automate your processes, and ensure smooth, error-free operations. From WhatsApp Blast campaigns to complex multi-step business workflows, we automate it all.',
    descriptionId:
      'Alat otomasi kami dirancang untuk menghilangkan tugas berulang yang memakan waktu dari alur kerja Anda. Menggunakan n8n sebagai tulang punggung otomasi utama, dikombinasikan dengan integrasi kustom dan kemampuan AI, kami membangun pipeline yang menghubungkan aplikasi Anda, mengotomasi proses Anda, dan memastikan operasi yang lancar dan bebas kesalahan. Dari kampanye WhatsApp Blast hingga alur kerja bisnis multi-langkah yang kompleks, kami mengotomasi semuanya.',
    icon: '⚡',
    features: [
      {
        title: 'WhatsApp Blast via n8n',
        description:
          'Send personalized bulk messages to thousands of contacts via WhatsApp — automated, scheduled, and targeted for maximum impact with minimal effort.',
      },
      {
        title: 'Multi-App Workflow Integration',
        description:
          'Connect all your business tools — CRM, email, spreadsheets, databases, and more — into seamless automated workflows that eliminate data silos.',
      },
      {
        title: 'Process Optimization',
        description:
          'Analyze your existing processes and rebuild them as streamlined, automated pipelines that reduce bottlenecks and dramatically improve throughput.',
      },
      {
        title: 'Scheduled & Triggered Automation',
        description:
          'Set up automations that run on schedules or trigger based on specific events — ensuring your operations run like clockwork, 24/7.',
      },
      {
        title: 'Custom API Integrations',
        description:
          'Build custom connectors for any service or platform — if it has an API, we can automate it and integrate it into your workflow ecosystem.',
      },
    ],
    featuresId: [
      {
        title: 'WhatsApp Blast via n8n',
        description:
          'Kirim pesan massal yang dipersonalisasi ke ribuan kontak melalui WhatsApp — otomatis, terjadwal, dan ditargetkan untuk dampak maksimal dengan upaya minimal.',
      },
      {
        title: 'Integrasi Alur Kerja Multi-Aplikasi',
        description:
          'Hubungkan semua alat bisnis Anda — CRM, email, spreadsheet, database, dan lainnya — ke dalam alur kerja otomatis yang mulus yang menghilangkan silo data.',
      },
      {
        title: 'Optimasi Proses',
        description:
          'Analisis proses yang ada dan bangun ulang sebagai pipeline otomatis yang efisien yang mengurangi hambatan dan secara dramatis meningkatkan throughput.',
      },
      {
        title: 'Otomasi Terjadwal & Dipicu',
        description:
          'Siapkan otomasi yang berjalan berdasarkan jadwal atau dipicu oleh peristiwa tertentu — memastikan operasi Anda berjalan seperti jam, 24/7.',
      },
      {
        title: 'Integrasi API Kustom',
        description:
          'Bangun konektor kustom untuk layanan atau platform apa pun — jika memiliki API, kami dapat mengotomasi dan mengintegrasikannya ke dalam ekosistem alur kerja Anda.',
      },
    ],
    useCases: [
      {
        title: 'WhatsApp Marketing Campaigns',
        description:
          'Automate your marketing outreach by sending personalized WhatsApp messages to segmented contact lists — complete with rich media, scheduling, and delivery tracking.',
      },
      {
        title: 'Lead Management Automation',
        description:
          'Capture leads from any source, automatically enrich them with data, assign to sales reps, and trigger follow-up sequences — all without manual intervention.',
      },
      {
        title: 'Operational Data Sync',
        description:
          'Keep all your business systems in perfect sync — when data changes in one system, it automatically updates across all connected platforms in real-time.',
      },
    ],
    useCasesId: [
      {
        title: 'Kampanye Marketing WhatsApp',
        description:
          'Otomasi jangkauan marketing Anda dengan mengirim pesan WhatsApp yang dipersonalisasi ke daftar kontak tersegmentasi — lengkap dengan media kaya, penjadwalan, dan pelacakan pengiriman.',
      },
      {
        title: 'Otomasi Manajemen Lead',
        description:
          'Tangkap lead dari sumber mana pun, secara otomatis perkaya dengan data, tugaskan ke staf penjualan, dan picu urutan tindak lanjut — semua tanpa intervensi manual.',
      },
      {
        title: 'Sinkronisasi Data Operasional',
        description:
          'Jaga semua sistem bisnis Anda tetap sinkron sempurna — ketika data berubah di satu sistem, secara otomatis memperbarui di semua platform yang terhubung secara real-time.',
      },
    ],
    techUsed: ['n8n', 'WhatsApp Business API', 'REST APIs', 'Webhooks', 'Node.js', 'PostgreSQL', 'Redis'],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
