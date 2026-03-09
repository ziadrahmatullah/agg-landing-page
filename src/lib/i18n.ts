export type Language = 'en' | 'id';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      products: 'Products',
      techStack: 'Tech Stack',
      testimonials: 'Testimonials',
      contact: 'Contact',
    },
    home: {
      hero: {
        headline: 'We Build Software That Solves Real Problems',
        subheadline:
          'Abdul Ghani Global crafts intelligent, AI-powered solutions that transform the way businesses operate — eliminating repetitive work, streamlining operations, and unlocking new possibilities.',
        ctaPrimary: 'Explore Our Products',
        ctaSecondary: 'Contact Us',
        scrollHint: 'Scroll to explore',
      },
      summary: {
        title: 'What We Offer',
        about: {
          title: 'About Us',
          description:
            'A forward-thinking software company dedicated to building intelligent solutions that address real-world challenges.',
          link: 'Learn More',
        },
        products: {
          title: 'Our Products',
          description:
            'From AI-powered applications to smart automation tools — we build software that works for you.',
          link: 'View Products',
        },
        techStack: {
          title: 'Tech Stack',
          description:
            'Built on modern, battle-tested technologies: Next.js, n8n, AI/LLMs, and more.',
          link: 'See Stack',
        },
      },
    },
    about: {
      title: 'About Us',
      subtitle: 'Who We Are',
      story:
        'Abdul Ghani Global was founded with a singular vision: to harness the power of artificial intelligence and automation to solve the real problems that businesses and communities face every day. We believe that great software does more than function — it transforms.',
      mission:
        'Our mission is to make intelligent software accessible to every business, no matter the size. We combine deep technical expertise with a genuine understanding of our clients\' challenges to deliver solutions that truly matter.',
      stats: [
        { value: '10+', label: 'Projects Completed' },
        { value: 'AI-First', label: 'Approach' },
        { value: '100%', label: 'Client Focused' },
      ],
      team: {
        title: 'Our Team',
        subtitle: 'The people behind the innovation',
        members: [
          { name: 'Abdul Ghani', role: 'Founder & CEO', initials: 'AG' },
          { name: 'Team Member', role: 'Lead Developer', initials: 'TM' },
          { name: 'Team Member', role: 'AI Engineer', initials: 'TM' },
        ],
      },
      values: {
        title: 'Our Values',
        items: [
          {
            title: 'Innovation First',
            description: 'We embrace cutting-edge technologies to deliver tomorrow\'s solutions today.',
          },
          {
            title: 'Client-Centric',
            description: 'Every decision we make is guided by what\'s best for our clients and their users.',
          },
          {
            title: 'Quality & Reliability',
            description: 'We build software that you can depend on — robust, scalable, and maintainable.',
          },
        ],
      },
    },
    products: {
      title: 'Our Products',
      subtitle: 'Solutions Built for Impact',
      description:
        'We develop intelligent software products that solve specific, real-world problems using AI and automation.',
      items: [
        {
          slug: 'ai-powered-apps',
          title: 'AI-Powered Apps',
          shortDescription:
            'Custom applications with AI at the core — intelligent, adaptive, and built to solve your specific challenges.',
          icon: '🤖',
        },
        {
          slug: 'automation-tools',
          title: 'Automation Tools',
          shortDescription:
            'Smart automation solutions including WhatsApp Blast, workflow automation, and process optimization via n8n.',
          icon: '⚡',
        },
      ],
      cta: 'Learn More',
      backToProducts: '← Back to Products',
    },
    techStack: {
      title: 'Our Tech Stack',
      subtitle: 'Built on Modern Foundations',
      description:
        'We use the best tools available to build fast, reliable, and scalable software solutions.',
      items: [
        {
          name: 'Next.js',
          description: 'React framework for production-grade web applications with server-side rendering.',
          icon: '▲',
        },
        {
          name: 'TypeScript',
          description: 'Strongly typed JavaScript that scales — safer code, better developer experience.',
          icon: 'TS',
        },
        {
          name: 'n8n',
          description: 'Powerful workflow automation platform for connecting apps and automating processes.',
          icon: 'n8',
        },
        {
          name: 'OpenAI / LLMs',
          description: 'Large language models powering our AI features — from GPT-4 to custom fine-tuned models.',
          icon: '🧠',
        },
        {
          name: 'Node.js',
          description: 'Server-side JavaScript runtime for building fast, scalable network applications.',
          icon: '⬢',
        },
        {
          name: 'Tailwind CSS',
          description: 'Utility-first CSS framework for rapidly building modern, responsive user interfaces.',
          icon: '🎨',
        },
        {
          name: 'React',
          description: 'The library for building user interfaces — component-based, declarative, and fast.',
          icon: '⚛',
        },
        {
          name: 'PostgreSQL',
          description: 'Advanced open-source relational database for reliable, scalable data storage.',
          icon: '🐘',
        },
        {
          name: 'Docker',
          description: 'Containerization platform ensuring consistent environments from dev to production.',
          icon: '🐳',
        },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Trusted by Businesses',
      description: 'Don\'t just take our word for it — hear from the businesses we\'ve helped transform.',
      items: [
        {
          name: 'Ahmad Rizal',
          role: 'CEO',
          company: 'TechVenture ID',
          rating: 5,
          text: 'Abdul Ghani Global transformed our operations with their AI solution. What used to take hours now takes minutes. Absolutely incredible work.',
          initials: 'AR',
        },
        {
          name: 'Siti Rahma',
          role: 'Operations Manager',
          company: 'LogistiKa Pro',
          rating: 5,
          text: 'Their WhatsApp automation tool revolutionized how we communicate with clients. The ROI was evident within the first week of deployment.',
          initials: 'SR',
        },
        {
          name: 'Budi Santoso',
          role: 'Founder',
          company: 'StartupNusantara',
          rating: 5,
          text: 'Professional, innovative, and deeply committed to solving our actual problems. This isn\'t just a software vendor — they\'re a true technology partner.',
          initials: 'BS',
        },
        {
          name: 'Diana Putri',
          role: 'Marketing Director',
          company: 'BrandCraft Agency',
          rating: 5,
          text: 'The AI-powered content tool they built for us has saved our team over 20 hours per week. Game-changing efficiency for our agency.',
          initials: 'DP',
        },
        {
          name: 'Hendra Wijaya',
          role: 'CTO',
          company: 'FinTech Solutions',
          rating: 5,
          text: 'Exceptional technical depth combined with a genuine understanding of business needs. They delivered beyond what we thought was possible.',
          initials: 'HW',
        },
        {
          name: 'Rina Kusuma',
          role: 'Business Owner',
          company: 'RetailPlus ID',
          rating: 5,
          text: 'Their automation pipeline eliminated our manual data entry completely. The accuracy and speed improvement has been remarkable.',
          initials: 'RK',
        },
        {
          name: 'Fajar Nugroho',
          role: 'Product Manager',
          company: 'EduTech Indonesia',
          rating: 5,
          text: 'Built our entire AI tutoring system from scratch. Students love it, teachers love it, and our metrics show a 40% improvement in engagement.',
          initials: 'FN',
        },
        {
          name: 'Lestari Dewi',
          role: 'Director',
          company: 'HealthCare Connect',
          rating: 4,
          text: 'Their team brought expertise and professionalism to every interaction. The patient notification automation has improved our workflows significantly.',
          initials: 'LD',
        },
        {
          name: 'Eko Prasetyo',
          role: 'General Manager',
          company: 'PropTech Jakarta',
          rating: 5,
          text: 'From initial consultation to final delivery, the experience was seamless. The custom CRM they built has become central to everything we do.',
          initials: 'EP',
        },
      ],
    },
    contact: {
      title: 'Ready to Transform Your Business?',
      subtitle: 'Get in Touch',
      description:
        'Tell us about your challenge. We\'ll craft an intelligent solution that fits your needs — and your budget.',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        subject: 'Subject',
        message: 'Your Message',
        submit: 'Send Message',
        success: 'Message sent successfully! We\'ll be in touch soon.',
        sending: 'Sending...',
      },
      info: {
        title: 'Contact Information',
        email: 'hello@abdulghaniglobal.com',
        whatsapp: '+62 812-3456-7890',
        location: 'Indonesia',
      },
      map: 'Our Location',
    },
    footer: {
      tagline: 'Solving Real Problems Through Intelligent Software',
      links: 'Quick Links',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2026 Abdul Ghani Global. All rights reserved.',
      builtWith: 'Built with Next.js & Tailwind CSS',
    },
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      products: 'Produk',
      techStack: 'Tech Stack',
      testimonials: 'Testimoni',
      contact: 'Kontak',
    },
    home: {
      hero: {
        headline: 'Kami Membangun Software untuk Memecahkan Masalah Nyata',
        subheadline:
          'Abdul Ghani Global menciptakan solusi cerdas berbasis AI yang mengubah cara bisnis beroperasi — menghilangkan pekerjaan berulang, memperlancar operasi, dan membuka kemungkinan baru.',
        ctaPrimary: 'Jelajahi Produk Kami',
        ctaSecondary: 'Hubungi Kami',
        scrollHint: 'Gulir untuk menjelajahi',
      },
      summary: {
        title: 'Yang Kami Tawarkan',
        about: {
          title: 'Tentang Kami',
          description:
            'Perusahaan software inovatif yang berdedikasi membangun solusi cerdas untuk mengatasi tantangan dunia nyata.',
          link: 'Pelajari Lebih',
        },
        products: {
          title: 'Produk Kami',
          description:
            'Dari aplikasi berbasis AI hingga alat otomasi cerdas — kami membangun software yang bekerja untuk Anda.',
          link: 'Lihat Produk',
        },
        techStack: {
          title: 'Tech Stack',
          description:
            'Dibangun di atas teknologi modern dan terpercaya: Next.js, n8n, AI/LLMs, dan lainnya.',
          link: 'Lihat Stack',
        },
      },
    },
    about: {
      title: 'Tentang Kami',
      subtitle: 'Siapa Kami',
      story:
        'Abdul Ghani Global didirikan dengan visi tunggal: memanfaatkan kekuatan kecerdasan buatan dan otomasi untuk memecahkan masalah nyata yang dihadapi bisnis dan komunitas setiap hari. Kami percaya bahwa software yang baik bukan sekadar berfungsi — ia mengubah segalanya.',
      mission:
        'Misi kami adalah membuat software cerdas yang dapat diakses oleh setiap bisnis, tanpa memandang ukurannya. Kami menggabungkan keahlian teknis mendalam dengan pemahaman genuine tentang tantangan klien untuk menghadirkan solusi yang benar-benar berarti.',
      stats: [
        { value: '10+', label: 'Proyek Selesai' },
        { value: 'AI-First', label: 'Pendekatan' },
        { value: '100%', label: 'Fokus Klien' },
      ],
      team: {
        title: 'Tim Kami',
        subtitle: 'Orang-orang di balik inovasi',
        members: [
          { name: 'Abdul Ghani', role: 'Pendiri & CEO', initials: 'AG' },
          { name: 'Anggota Tim', role: 'Lead Developer', initials: 'AT' },
          { name: 'Anggota Tim', role: 'AI Engineer', initials: 'AT' },
        ],
      },
      values: {
        title: 'Nilai Kami',
        items: [
          {
            title: 'Inovasi Pertama',
            description: 'Kami merangkul teknologi terdepan untuk menghadirkan solusi masa depan hari ini.',
          },
          {
            title: 'Berpusat pada Klien',
            description: 'Setiap keputusan yang kami buat dipandu oleh apa yang terbaik untuk klien dan pengguna mereka.',
          },
          {
            title: 'Kualitas & Keandalan',
            description: 'Kami membangun software yang dapat Anda andalkan — kokoh, skalabel, dan mudah dipelihara.',
          },
        ],
      },
    },
    products: {
      title: 'Produk Kami',
      subtitle: 'Solusi yang Dibangun untuk Dampak',
      description:
        'Kami mengembangkan produk software cerdas yang memecahkan masalah nyata menggunakan AI dan otomasi.',
      items: [
        {
          slug: 'ai-powered-apps',
          title: 'Aplikasi Bertenaga AI',
          shortDescription:
            'Aplikasi kustom dengan AI sebagai inti — cerdas, adaptif, dan dibangun untuk memecahkan tantangan spesifik Anda.',
          icon: '🤖',
        },
        {
          slug: 'automation-tools',
          title: 'Alat Otomasi',
          shortDescription:
            'Solusi otomasi cerdas termasuk WhatsApp Blast, otomasi alur kerja, dan optimasi proses via n8n.',
          icon: '⚡',
        },
      ],
      cta: 'Pelajari Lebih',
      backToProducts: '← Kembali ke Produk',
    },
    techStack: {
      title: 'Tech Stack Kami',
      subtitle: 'Dibangun di Atas Fondasi Modern',
      description:
        'Kami menggunakan alat terbaik yang tersedia untuk membangun solusi software yang cepat, andal, dan skalabel.',
      items: [
        {
          name: 'Next.js',
          description: 'Framework React untuk aplikasi web berkelas produksi dengan server-side rendering.',
          icon: '▲',
        },
        {
          name: 'TypeScript',
          description: 'JavaScript dengan tipe yang kuat — kode lebih aman, pengalaman developer lebih baik.',
          icon: 'TS',
        },
        {
          name: 'n8n',
          description: 'Platform otomasi alur kerja yang kuat untuk menghubungkan aplikasi dan mengotomasi proses.',
          icon: 'n8',
        },
        {
          name: 'OpenAI / LLMs',
          description: 'Model bahasa besar yang mendukung fitur AI kami — dari GPT-4 hingga model yang disesuaikan.',
          icon: '🧠',
        },
        {
          name: 'Node.js',
          description: 'Runtime JavaScript sisi server untuk membangun aplikasi jaringan yang cepat dan skalabel.',
          icon: '⬢',
        },
        {
          name: 'Tailwind CSS',
          description: 'Framework CSS utility-first untuk membangun antarmuka pengguna modern dan responsif dengan cepat.',
          icon: '🎨',
        },
        {
          name: 'React',
          description: 'Library untuk membangun antarmuka pengguna — berbasis komponen, deklaratif, dan cepat.',
          icon: '⚛',
        },
        {
          name: 'PostgreSQL',
          description: 'Database relasional open-source canggih untuk penyimpanan data yang andal dan skalabel.',
          icon: '🐘',
        },
        {
          name: 'Docker',
          description: 'Platform kontainerisasi yang memastikan lingkungan konsisten dari dev hingga produksi.',
          icon: '🐳',
        },
      ],
    },
    testimonials: {
      title: 'Apa Kata Klien Kami',
      subtitle: 'Dipercaya oleh Bisnis',
      description: 'Jangan hanya percaya kata-kata kami — dengarkan dari bisnis yang telah kami bantu transformasi.',
      items: [
        {
          name: 'Ahmad Rizal',
          role: 'CEO',
          company: 'TechVenture ID',
          rating: 5,
          text: 'Abdul Ghani Global mentransformasi operasi kami dengan solusi AI mereka. Yang biasanya memakan berjam-jam kini selesai dalam hitungan menit. Luar biasa.',
          initials: 'AR',
        },
        {
          name: 'Siti Rahma',
          role: 'Manajer Operasional',
          company: 'LogistiKa Pro',
          rating: 5,
          text: 'Alat otomasi WhatsApp mereka merevolusi cara kami berkomunikasi dengan klien. ROI sudah terlihat dalam seminggu pertama penggunaan.',
          initials: 'SR',
        },
        {
          name: 'Budi Santoso',
          role: 'Pendiri',
          company: 'StartupNusantara',
          rating: 5,
          text: 'Profesional, inovatif, dan sangat berkomitmen untuk memecahkan masalah nyata kami. Ini bukan sekadar vendor software — mereka adalah mitra teknologi sejati.',
          initials: 'BS',
        },
        {
          name: 'Diana Putri',
          role: 'Direktur Marketing',
          company: 'BrandCraft Agency',
          rating: 5,
          text: 'Alat konten berbasis AI yang mereka bangun telah menghemat tim kami lebih dari 20 jam per minggu. Efisiensi yang mengubah permainan.',
          initials: 'DP',
        },
        {
          name: 'Hendra Wijaya',
          role: 'CTO',
          company: 'FinTech Solutions',
          rating: 5,
          text: 'Kedalaman teknis yang luar biasa dikombinasikan dengan pemahaman genuine tentang kebutuhan bisnis. Mereka memberikan lebih dari yang kami bayangkan.',
          initials: 'HW',
        },
        {
          name: 'Rina Kusuma',
          role: 'Pemilik Bisnis',
          company: 'RetailPlus ID',
          rating: 5,
          text: 'Pipeline otomasi mereka menghilangkan entri data manual kami sepenuhnya. Peningkatan akurasi dan kecepatan yang luar biasa.',
          initials: 'RK',
        },
        {
          name: 'Fajar Nugroho',
          role: 'Product Manager',
          company: 'EduTech Indonesia',
          rating: 5,
          text: 'Membangun seluruh sistem tutor AI kami dari awal. Siswa menyukainya, guru menyukainya, dan metrik kami menunjukkan peningkatan 40% dalam keterlibatan.',
          initials: 'FN',
        },
        {
          name: 'Lestari Dewi',
          role: 'Direktur',
          company: 'HealthCare Connect',
          rating: 4,
          text: 'Tim mereka membawa keahlian dan profesionalisme ke setiap interaksi. Otomasi notifikasi pasien telah meningkatkan alur kerja kami secara signifikan.',
          initials: 'LD',
        },
        {
          name: 'Eko Prasetyo',
          role: 'General Manager',
          company: 'PropTech Jakarta',
          rating: 5,
          text: 'Dari konsultasi awal hingga pengiriman akhir, pengalamannya mulus. CRM kustom yang mereka bangun kini menjadi inti dari semua yang kami lakukan.',
          initials: 'EP',
        },
      ],
    },
    contact: {
      title: 'Siap Mentransformasi Bisnis Anda?',
      subtitle: 'Hubungi Kami',
      description:
        'Ceritakan tantangan Anda. Kami akan merancang solusi cerdas yang sesuai dengan kebutuhan — dan anggaran Anda.',
      form: {
        name: 'Nama Anda',
        email: 'Email Anda',
        subject: 'Subjek',
        message: 'Pesan Anda',
        submit: 'Kirim Pesan',
        success: 'Pesan berhasil terkirim! Kami akan segera menghubungi Anda.',
        sending: 'Mengirim...',
      },
      info: {
        title: 'Informasi Kontak',
        email: 'hello@abdulghaniglobal.com',
        whatsapp: '+62 812-3456-7890',
        location: 'Indonesia',
      },
      map: 'Lokasi Kami',
    },
    footer: {
      tagline: 'Memecahkan Masalah Nyata Melalui Software Cerdas',
      links: 'Tautan Cepat',
      legal: 'Legal',
      privacy: 'Kebijakan Privasi',
      terms: 'Ketentuan Layanan',
      copyright: '© 2026 Abdul Ghani Global. Hak cipta dilindungi.',
      builtWith: 'Dibangun dengan Next.js & Tailwind CSS',
    },
  },
} as const;

export type TranslationKey = typeof translations;
export type Translations = typeof translations.en;
