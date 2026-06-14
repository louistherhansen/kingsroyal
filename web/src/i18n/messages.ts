export const locales = ["en-US", "id-ID", "zh-CN", "ko-KR", "ar-SA"] as const
export type Locale = (typeof locales)[number]

export const localeLabels: Record<Locale, string> = {
  "en-US": "English (US)",
  "id-ID": "Indonesia",
  "zh-CN": "中文",
  "ko-KR": "한국어 (대한민국)",
  "ar-SA": "العربية (السعودية)",
}

export type Messages = {
  site: { name: string; tagline: string }
  nav: {
    home: string
    video: string
    services: string
    testimoni: string
    facilities: string
    location: string
    nearMe: string
    order: string
    book: string
    career: string
    login: string
  }
  branch: {
    intro: string
    layanan: {
      eyebrow: string
      title: string
      description: string
      highlights: string[]
    }
    video: {
      eyebrow: string
      title: string
      description: string
      placeholder: string
    }
    photo: {
      eyebrow: string
      title: string
      description: string
    }
    address: {
      eyebrow: string
      title: string
      description: string
      openInMaps: string
      mapPlaceholder: string
      locations: {
        cempaka: string
        "kebon-jeruk": string
        bekasi: string
        manado: string
      }
    }
    fasilitas: {
      eyebrow: string
      title: string
      description: string
      items: string[]
    }
  }
  header: { cta: string; openMenu: string; language: string }
  loginPage: {
    eyebrow: string
    title: string
    description: string
    identityLabel: string
    identityPlaceholder: string
    passwordLabel: string
    passwordPlaceholder: string
    signIn: string
    signUp: string
    forgot: string
    note: string
    languageTip: string
  }
  careerPage: {
    eyebrow: string
    title: string
    description: string
    whyTitle: string
    whyItems: string[]
    positionsTitle: string
    positions: { title: string; location: string; type: string }[]
    applyCta: string
    applyNote: string
    whatsappMessage: string
  }
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: string
    secondaryCta: string
    chips: string
    prevSlide: string
    nextSlide: string
    slideAria: (idx: number, total: number) => string
  }
  video: {
    eyebrow: string
    title: string
    description: string
    play: string
    muted: string
    soundOn: string
    unmuteAria: string
    muteAria: string
    fileHint: string
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string; imageSrc: string }[]
  }
  testimonials: {
    eyebrow: string
    title: string
    description: string
    imageAlt: string
  }
  philosophy: {
    eyebrow: string
    quote: string
    quoteEmphasis: string
    items: { title: string; value: string }[]
  }
  ourFacilities: {
    eyebrow: string
    title: string
  }
  floatingSocial: {
    instagramAria: string
    instagramPicker: string
    whatsappAria: string
  }
  footer: {
    motto: string
    quickLinksTitle: string
    followTitle: string
    followSocialPending: string
    hoursTitle: string
    operatingDays: string
    operatingTime: string
    locationsTitle: string
    copyrightLine: string
  }
}

export const messages: Record<Locale, Messages> = {
  "en-US": {
    site: {
      name: "King’s Royal Spa",
      tagline: "The most luxurious spa sanctuary in Indonesia.",
    },
    nav: {
      home: "Home",
      video: "Video",
      services: "Services",
      testimoni: "Testimonials",
      facilities: "Facilities",
      location: "Location",
      nearMe: "Near Me",
      order: "Order",
      book: "Book",
      career: "Careers",
      login: "Login",
    },
    branch: {
      intro:
        "Discover the signature experience, latest branch video, health benefits, and curated facilities available at this location.",
      layanan: {
        eyebrow: "Services",
        title: "Services",
        description:
          "Explore the treatments and rituals available at this branch.",
        highlights: [
          "Royal signature massage (sample)",
          "Body care & polish (sample)",
          "Facial & wellness add-ons (sample)",
        ],
      },
      video: {
        eyebrow: "Video",
        title: "Branch Video",
        description: "Watch the latest branch showcase and atmosphere.",
        placeholder: "Video area — add file or embed URL",
      },
      photo: {
        eyebrow: "Photo",
        title: "Photo",
        description: "A glimpse of the atmosphere and experience at this branch.",
      },
      address: {
        eyebrow: "Address",
        title: "Address",
        description: "Visit us at our branch location.",
        openInMaps: "Open in Google Maps",
        mapPlaceholder: "Map unavailable — open the Google Maps link instead.",
        locations: {
          cempaka:
            "Graha Mega Grosir, Block K.40, Jl. Sumur Batu Raya Cemp. Mas Timur No.8, RT.17/RW.8, Sumur Batu, Kemayoran, Central Jakarta, Jakarta 10640, Indonesia",
          "kebon-jeruk":
            "Graha Handaya 12, Jl. Perjuangan No.12 A, RT.1/RW.7, Kebon Jeruk, West Jakarta, Jakarta 11530, Indonesia",
          bekasi:
            "Mutiara Bekasi Center, Jl. Jenderal Ahmad Yani, RT.005/RW.002, Kayuringin Jaya, South Bekasi, Bekasi City, West Java 17144, Indonesia",
          manado:
            "Jl. Laut Aru No.71, Ranotana, Sario, Manado City, North Sulawesi 95116, Indonesia",
        },
      },
      fasilitas: {
        eyebrow: "Facilities",
        title: "Facilities",
        description: "Premium amenities and room options available at this branch.",
        items: [
          "Treatment room (sample)",
          "Lounge & refresh area (sample)",
          "Shower & locker (sample)",
          "Private suite option (sample)",
        ],
      },
    },
    header: {
      cta: "Login",
      openMenu: "Open menu",
      language: "Language",
    },
    loginPage: {
      eyebrow: "Member",
      title: "Login",
      description:
        "Sign in to access member features. This project is static-ready—authentication can be connected later via an external provider.",
      identityLabel: "Email or phone",
      identityPlaceholder: "name@example.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Your password",
      signIn: "Sign in",
      signUp: "Create account",
      forgot: "Forgot password?",
      note: "Note: This is a UI demo (no server auth on shared hosting).",
      languageTip:
        "Tip: You can switch language from the header, even on this page.",
    },
    careerPage: {
      eyebrow: "Careers",
      title: "Join King’s Royal Spa",
      description:
        "Grow with a luxury wellness brand built on calm excellence, refined service, and teams who take pride in every guest moment.",
      whyTitle: "Why work with us",
      whyItems: [
        "Premium environment with consistent standards of care",
        "Training and growth across signature treatments",
        "Supportive teams at selected locations across Indonesia",
      ],
      positionsTitle: "Open opportunities",
      positions: [
        {
          title: "Spa Therapist",
          location: "Jakarta & Bekasi",
          type: "Full-time",
        },
        {
          title: "Front Desk & Guest Relations",
          location: "All branches",
          type: "Full-time / Part-time",
        },
        {
          title: "Spa Supervisor",
          location: "Manado",
          type: "Full-time",
        },
      ],
      applyCta: "Apply via WhatsApp",
      applyNote:
        "Send your name, preferred branch, role, and a brief introduction. Our team will respond during operating hours.",
      whatsappMessage:
        "Hello King's Royal Spa, I would like to apply for a career opportunity.",
    },
    hero: {
      eyebrow: "King’s Royal Spa",
      title: "King's Royal Men's Health",
      subtitle: "Luxury treatments with a calm, refined touch—crafted to restore balance, soften stress, and leave you radiant.",
      primaryCta: "View Services",
      secondaryCta: "Watch Video",
      chips: "Luxury • Calm • Care",
      prevSlide: "Previous slide",
      nextSlide: "Next slide",
      slideAria: (idx: number, total: number) => `Hero slide ${idx} of ${total}`,
    },
    video: {
      eyebrow: "Video Review",
      title: "A closer look at the experience",
      description:
        "A short walkthrough of ambience, care, and the luxury details that define King’s Royal Spa.",
      play: "Play video",
      muted: "Muted",
      soundOn: "Sound on",
      unmuteAria: "Unmute video",
      muteAria: "Mute video",
      fileHint: "If the video doesn’t play, ensure the file exists at",
    },
    services: {
      eyebrow: "Services",
      title: "Product",
      description:
        "Melt the tension. Restore the balance.\n\nIndulge in the art of deep relaxation with our Hot Stone Massage - where warmth meets precision. Smooth heated stones glide across the body, releasing tension, improving circulation, and restoring your natural balance.",
      items: [
        {
          title: "🔥 Body Scrub Treatment",
          description:
            "Refine the skin. Elevate the experience.\n\nIndulge in a luxurious Body Scrub Treatment - a delicate exfoliating ritual designed to reveal smoother, brighter, and impeccably refined skin. Each gentle stroke removes dullness, enhances circulation, and restores your natural glow.",
          imageSrc: "/service/_MG_6109.JPG",
        },
        {
          title: "🔥 Herbal Bath Treatment",
          description:
            "Immerse in tranquility. Restore from within.\n\nStep into a refined Herbal Bath Ritual - where warm water meets the essence of nature. Infused with selected botanical blends, this soothing experience gently detoxifies, relaxes the body, and nourishes the skin to a naturally radiant glow.",
          imageSrc: "/service/SERVIC-3.jpeg",
        },
        {
          title: "🔥 Nuru Gel Treatment",
          description:
            "Seamless touch. Elevated sensation.\n\nDiscover a refined Nuru Gel Experience - a water-based ritual designed for an exceptionally smooth, continuous glide. Lightweight and crystal-clear, it enhances every movement, allowing the body to fully unwind while leaving the skin soft, hydrated, and refreshed.",
          imageSrc: "/service/_MG_6059.JPG",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      title: "What our guests say",
      description:
        "A glimpse of real moments—comfort, care, and the quiet luxury our guests return for.",
      imageAlt: "Customer testimonial photo",
    },
    philosophy: {
      eyebrow: "Philosophy",
      quote:
        "Some moments are meant to be received—quietly, fully, and without hurry.",
      quoteEmphasis: "A massage is one of them.",
      items: [
        { title: "Signature Services", value: "Curated rituals" },
        { title: "Luxury Atmosphere", value: "Cream • Gold • Calm" },
        { title: "Across Indonesia", value: "Selected locations" },
      ],
    },
    ourFacilities: {
      eyebrow: "Our Facilities",
      title: "Our Facilities",
    },
    floatingSocial: {
      instagramAria: "Follow on Instagram",
      instagramPicker: "Choose Instagram Outlet",
      whatsappAria: "Chat via WhatsApp",
    },
    footer: {
      motto: "Do it once. Do it right.",
      quickLinksTitle: "Quick Links",
      followTitle: "Follow",
      followSocialPending: "Coming soon",
      hoursTitle: "Operating Hours",
      operatingDays: "Monday – Sunday",
      operatingTime: "11:00 AM – 11:00 PM",
      locationsTitle: "Our Locations",
      copyrightLine: "© 2026 Kings Royal Official.  All rights reserved.",
    },
  },
  "id-ID": {
    site: {
      name: "King’s Royal Spa",
      tagline: "Spa mewah paling elegan di Indonesia.",
    },
    nav: {
      home: "Beranda",
      video: "Video",
      services: "Layanan",
      testimoni: "Testimoni",
      facilities: "Fasilitas",
      location: "Lokasi",
      nearMe: "Terdekat",
      order: "Cara Pesan",
      book: "Booking",
      career: "Karir",
      login: "Masuk",
    },
    branch: {
      intro:
        "Temukan pengalaman terbaik kami, video terbaru cabang, health benefits, dan fasilitas unggulan di lokasi ini.",
      layanan: {
        eyebrow: "Layanan",
        title: "Layanan",
        description:
          "Jelajahi perawatan dan treatment yang tersedia di cabang ini.",
        highlights: [
          "Royal signature massage (contoh)",
          "Perawatan tubuh & body polish (contoh)",
          "Facial & add-on wellness (contoh)",
        ],
      },
      video: {
        eyebrow: "Video",
        title: "Video Cabang",
        description: "Tonton video suasana terbaru dari cabang ini.",
        placeholder: "Area video — unggah file atau sematkan URL",
      },
      photo: {
        eyebrow: "Photo",
        title: "Photo",
        description: "Cuplikan suasana dan pengalaman di cabang ini.",
      },
      address: {
        eyebrow: "Alamat",
        title: "Alamat",
        description: "Kunjungi cabang kami di lokasi berikut.",
        openInMaps: "Buka di Google Maps",
        mapPlaceholder: "Peta tidak tersedia — buka tautan Google Maps.",
        locations: {
          cempaka:
            "Graha Mega Grosir, Blok K. 40, Jl. Sumur Batu Raya Cemp. Mas Timur No.8, RT.17/RW.8, Sumur Batu, Kec. Kemayoran, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10640",
          "kebon-jeruk":
            "Graha Handaya. 12, Jl. Perjuangan No.12 A, RT.1/RW.7, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530",
          bekasi:
            "Jl. Jenderal Ahmad Yani Nomer Ruko Mutiara Bekasi Center, RT.005/RW.002, Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144",
          manado:
            "Jl. Laut Aru No.71, Ranotana, Kec. Sario, Kota Manado, Sulawesi Utara 95116",
        },
      },
      fasilitas: {
        eyebrow: "Fasilitas",
        title: "Fasilitas",
        description: "Nikmati fasilitas premium dan pilihan ruang terbaik di cabang ini.",
        items: [
          "Ruang treatment (contoh)",
          "Area lounge & refresh (contoh)",
          "Shower & locker (contoh)",
          "Opsi suite pribadi (contoh)",
        ],
      },
    },
    header: {
      cta: "Masuk",
      openMenu: "Buka menu",
      language: "Bahasa",
    },
    loginPage: {
      eyebrow: "Member",
      title: "Masuk",
      description:
        "Masuk untuk akses fitur member. Project ini siap static—autentikasi bisa disambungkan nanti via provider eksternal.",
      identityLabel: "Email atau nomor HP",
      identityPlaceholder: "nama@email.com",
      passwordLabel: "Password",
      passwordPlaceholder: "Password kamu",
      signIn: "Masuk",
      signUp: "Buat akun",
      forgot: "Lupa password?",
      note: "Catatan: Ini demo tampilan (belum ada server auth di shared hosting).",
      languageTip:
        "Tips: Anda bisa mengganti bahasa dari header, termasuk di halaman ini.",
    },
    careerPage: {
      eyebrow: "Karir",
      title: "Bergabung dengan King’s Royal Spa",
      description:
        "Berkembang bersama brand wellness mewah yang mengutamakan pelayanan halus, standar perawatan konsisten, dan tim yang bangga pada setiap momen tamu.",
      whyTitle: "Mengapa bergabung",
      whyItems: [
        "Lingkungan premium dengan standar layanan yang konsisten",
        "Pelatihan dan pengembangan pada treatment signature",
        "Tim solid di cabang terpilih di seluruh Indonesia",
      ],
      positionsTitle: "Lowongan terbuka",
      positions: [
        {
          title: "Terapis Spa",
          location: "Jakarta & Bekasi",
          type: "Full-time",
        },
        {
          title: "Front Desk & Guest Relations",
          location: "Semua cabang",
          type: "Full-time / Part-time",
        },
        {
          title: "Supervisor Spa",
          location: "Manado",
          type: "Full-time",
        },
      ],
      applyCta: "Lamar via WhatsApp",
      applyNote:
        "Kirim nama, cabang pilihan, posisi yang diminati, dan perkenalan singkat. Tim kami akan membalas pada jam operasional.",
      whatsappMessage:
        "Halo King's Royal Spa, saya ingin melamar lowongan karir.",
    },
    hero: {
      eyebrow: "King’s Royal Spa",
      title: "King's Royal Men's Health",
      subtitle:
        "Perawatan mewah dengan sentuhan tenang dan elegan—dirancang untuk memulihkan keseimbangan, meredakan stres, dan membuatmu lebih segar.",
      primaryCta: "Lihat Layanan",
      secondaryCta: "Tonton Video",
      chips: "Mewah • Tenang • Peduli",
      prevSlide: "Slide sebelumnya",
      nextSlide: "Slide berikutnya",
      slideAria: (idx: number, total: number) => `Slide hero ${idx} dari ${total}`,
    },
    video: {
      eyebrow: "Video Review",
      title: "Lihat pengalaman lebih dekat",
      description:
        "Cuplikan singkat suasana, pelayanan, dan detail mewah yang menjadi ciri King’s Royal Spa.",
      play: "Putar video",
      muted: "Senyap",
      soundOn: "Suara aktif",
      unmuteAria: "Nyalakan suara video",
      muteAria: "Matikan suara video",
      fileHint: "Jika video tidak berjalan, pastikan file ada di",
    },
    services: {
      eyebrow: "Layanan",
      title: "Layanan signature, dirancang dengan penuh perhatian",
      description:
        "Empat ritual pilihan—dibuat untuk kenyamanan, presisi, dan kemewahan yang tenang.",
      items: [
        {
          title: "Royal Signature Massage",
          description:
            "Ritual perlahan untuk melepas tegang dan mengembalikan rasa tenang.",
          imageSrc: "/service/_MG_5995.JPG",
        },
        {
          title: "Deep Tissue Therapy",
          description:
            "Tekanan terarah untuk kelegaan mendalam—dirancang untuk hasil yang tahan lama.",
          imageSrc: "/service/_MG_6059.JPG",
        },
        {
          title: "Gold Facial Ritual",
          description:
            "Perawatan mencerahkan dengan hasil halus—kulit terasa lembut dan bercahaya.",
          imageSrc: "/service/_MG_6095.JPG",
        },
        {
          title: "Body Polish & Glow",
          description:
            "Eksfoliasi lembut dan hidrasi untuk sensasi halus serta tampak lebih cerah.",
          imageSrc: "/service/_MG_6109.JPG",
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimoni",
      title: "Apa kata tamu kami",
      description:
        "Sekilas momen nyata—kenyamanan, perhatian, dan kemewahan tenang yang membuat tamu kembali.",
      imageAlt: "Foto testimoni pelanggan",
    },
    philosophy: {
      eyebrow: "Filosofi",
      quote:
        "Ada momen yang lebih indah untuk diterima—pelan, penuh, dan tanpa terburu-buru.",
      quoteEmphasis: "Pijat adalah salah satunya.",
      items: [
        { title: "Layanan Signature", value: "Ritual pilihan" },
        { title: "Suasana Mewah", value: "Cream • Gold • Tenang" },
        { title: "Di Indonesia", value: "Lokasi terpilih" },
      ],
    },
    ourFacilities: {
      eyebrow: "Fasilitas Kami",
      title: "Fasilitas Kami",
    },
    floatingSocial: {
      instagramAria: "Ikuti di Instagram",
      instagramPicker: "Pilih Outlet Instagram",
      whatsappAria: "Chat via WhatsApp",
    },
    footer: {
      motto: "Sekali saja. Harus sempurna.",
      quickLinksTitle: "Tautan Cepat",
      followTitle: "Ikuti",
      followSocialPending: "Segera hadir",
      hoursTitle: "Jam Operasional",
      operatingDays: "Senin – Minggu",
      operatingTime: "11.00 – 23.00 WIB",
      locationsTitle: "Lokasi Kami",
      copyrightLine: "© 2026 Kings Royal Official. Semua hak dilindungi.",
    },
  },
  "zh-CN": {
    site: {
      name: "King’s Royal Spa",
      tagline: "印尼臻享奢华水疗圣地。",
    },
    nav: {
      home: "首页",
      video: "视频",
      services: "服务",
      testimoni: "评价",
      facilities: "设施",
      location: "地址",
      nearMe: "附近",
      order: "预约流程",
      book: "预约",
      career: "招聘",
      login: "登录",
    },
    branch: {
      intro:
        "在此了解本门店的特色服务、最新视频、健康疗愈项目与精选设施。",
      layanan: {
        eyebrow: "服务",
        title: "服务",
        description: "了解本门店提供的护理与疗程项目。",
        highlights: [
          "皇家经典按摩（示例）",
          "身体护理与抛光（示例）",
          "面部与养护加项（示例）",
        ],
      },
      video: {
        eyebrow: "视频",
        title: "门店视频",
        description: "观看该门店最新环境与体验视频。",
        placeholder: "视频区域 — 上传文件或嵌入链接",
      },
      photo: {
        eyebrow: "照片",
        title: "Photo",
        description: "一览本门店的环境与体验氛围。",
      },
      address: {
        eyebrow: "地址",
        title: "地址",
        description: "欢迎前往以下门店地址。",
        openInMaps: "在 Google 地图中打开",
        mapPlaceholder: "地图暂不可用 — 请使用 Google 地图链接。",
        locations: {
          cempaka:
            "Graha Mega Grosir，K 座 40 号，Jl. Sumur Batu Raya Cemp. Mas Timur 8 号，RT.17/RW.8，Sumur Batu，Kemayoran 区，中雅加达，雅加达 10640，印度尼西亚",
          "kebon-jeruk":
            "Graha Handaya 12，Jl. Perjuangan 12A 号，RT.1/RW.7，Kebon Jeruk，西雅加达，雅加达 11530，印度尼西亚",
          bekasi:
            "Mutiara Bekasi Center，Jl. Jenderal Ahmad Yani，RT.005/RW.002，Kayuringin Jaya，南勿加泗，勿加泗市，西爪哇 17144，印度尼西亚",
          manado:
            "Jl. Laut Aru 71 号，Ranotana，Sario 区，万鸦老市，北苏拉威西 95116，印度尼西亚",
        },
      },
      fasilitas: {
        eyebrow: "设施",
        title: "设施",
        description: "探索本门店提供的高端设施与房型选择。",
        items: [
          "理疗房间（示例）",
          "休息与茶点区（示例）",
          "淋浴与更衣柜（示例）",
          "私人套房方案（示例）",
        ],
      },
    },
    header: {
      cta: "登录",
      openMenu: "打开菜单",
      language: "语言",
    },
    loginPage: {
      eyebrow: "会员",
      title: "登录",
      description:
        "登录以访问会员功能。本项目支持静态部署—后续可通过外部身份认证服务接入登录。",
      identityLabel: "邮箱或手机号",
      identityPlaceholder: "name@example.com",
      passwordLabel: "密码",
      passwordPlaceholder: "你的密码",
      signIn: "登录",
      signUp: "创建账号",
      forgot: "忘记密码？",
      note: "提示：当前仅为界面演示（共享主机无服务器端登录）。",
      languageTip: "提示：可在页头切换语言，本页同样适用。",
    },
    careerPage: {
      eyebrow: "招聘",
      title: "加入 King’s Royal Spa",
      description:
        "与注重静谧奢华、精致服务与宾客体验的团队共同成长。",
      whyTitle: "为何加入我们",
      whyItems: [
        "高端环境与服务标准始终如一",
        "招牌疗程培训与职业发展",
        "印尼精选门店的协作团队",
      ],
      positionsTitle: "在招岗位",
      positions: [
        { title: "水疗理疗师", location: "雅加达 & 勿加泗", type: "全职" },
        { title: "前台与客户关系", location: "各门店", type: "全职 / 兼职" },
        { title: "水疗主管", location: "万鸦老", type: "全职" },
      ],
      applyCta: "通过 WhatsApp 申请",
      applyNote:
        "请发送姓名、意向门店、应聘岗位及简短自我介绍。我们将在营业时间内回复。",
      whatsappMessage: "您好 King's Royal Spa，我想申请招聘职位。",
    },
    hero: {
      eyebrow: "King’s Royal Spa",
      title: "King's Royal Men's Health",
      subtitle:
        "以宁静、精致的奢华护理，重拾平衡、舒缓压力，让你焕然一新。",
      primaryCta: "查看服务",
      secondaryCta: "观看视频",
      chips: "奢华 • 宁静 • 关怀",
      prevSlide: "上一张",
      nextSlide: "下一张",
      slideAria: (idx: number, total: number) => `主视觉第 ${idx} 张（共 ${total} 张）`,
    },
    video: {
      eyebrow: "视频",
      title: "近距离感受体验",
      description:
        "简短带你了解氛围、服务与细节之美——定义 King’s Royal Spa 的奢华质感。",
      play: "播放视频",
      muted: "静音",
      soundOn: "开启声音",
      unmuteAria: "取消静音",
      muteAria: "静音",
      fileHint: "如果视频无法播放，请确认文件位于",
    },
    services: {
      eyebrow: "服务",
      title: "匠心定制的招牌服务",
      description:
        "四款精选仪式——为舒适、精准与静奢而生。",
      items: [
        {
          title: "Royal Signature Massage",
          description: "缓慢而扎实的仪式，释放紧绷，回归宁静。",
          imageSrc: "/service/_MG_5995.JPG",
        },
        {
          title: "Deep Tissue Therapy",
          description: "针对性深层按压，持久舒缓与放松。",
          imageSrc: "/service/_MG_6059.JPG",
        },
        {
          title: "Gold Facial Ritual",
          description: "焕亮护理，细腻收尾——肌肤柔软透亮。",
          imageSrc: "/service/_MG_6095.JPG",
        },
        {
          title: "Body Polish & Glow",
          description: "温和去角质与深度保湿，触感丝滑、光采动人。",
          imageSrc: "/service/_MG_6109.JPG",
        },
      ],
    },
    testimonials: {
      eyebrow: "评价",
      title: "宾客怎么说",
      description:
        "真实瞬间的一瞥——舒适、关怀与静奢体验，让宾客愿意再次到来。",
      imageAlt: "顾客评价照片",
    },
    philosophy: {
      eyebrow: "理念",
      quote: "有些时刻更适合被温柔地“接住”——安静、完整、从容不迫。",
      quoteEmphasis: "按摩就是其中之一。",
      items: [
        { title: "招牌服务", value: "精选仪式" },
        { title: "奢华氛围", value: "奶油 • 金色 • 宁静" },
        { title: "印尼范围", value: "甄选门店" },
      ],
    },
    ourFacilities: {
      eyebrow: "我们的设施",
      title: "我们的设施",
    },
    floatingSocial: {
      instagramAria: "关注 Instagram",
      instagramPicker: "选择 Instagram 门店",
      whatsappAria: "通过 WhatsApp 联系",
    },
    footer: {
      motto: "一次到位，做到极致。",
      quickLinksTitle: "快速链接",
      followTitle: "关注我们",
      followSocialPending: "即将推出",
      hoursTitle: "营业时间",
      operatingDays: "周一至周日",
      operatingTime: "11:00 – 23:00",
      locationsTitle: "门店地址",
      copyrightLine: "© 2026 Kings Royal Official. 保留所有权利。",
    },
  },
  "ko-KR": {
    site: {
      name: "King’s Royal Spa",
      tagline: "인도네시아 최고급 럭셔리 스파 성지입니다.",
    },
    nav: {
      home: "홈",
      video: "영상",
      services: "서비스",
      testimoni: "후기",
      facilities: "시설",
      location: "위치",
      nearMe: "내 주변",
      order: "이용 안내",
      book: "예약",
      career: "채용",
      login: "로그인",
    },
    branch: {
      intro:
        "이 지점만의 특별한 경험, 최신 지점 소개 영상, 웰니스 혜택, 엄선된 시설까지 한곳에서 만나 보세요.",
      layanan: {
        eyebrow: "서비스",
        title: "서비스",
        description: "이 지점에서 이용할 수 있는 케어와 프로그램을 살펴보세요.",
        highlights: [
          "로열 시그니처 마사지 (예시)",
          "바디 케어 & 폴리시 (예시)",
          "페이셜 & 웰니스 옵션 (예시)",
        ],
      },
      video: {
        eyebrow: "영상",
        title: "지점 영상",
        description: "최근 지점 분위기와 경험을 영상으로 만나 보세요.",
        placeholder: "영상 영역 — 파일 업로드 또는 URL 삽입",
      },
      photo: {
        eyebrow: "사진",
        title: "Photo",
        description: "이 지점의 분위기와 경험을 사진으로 만나 보세요.",
      },
      address: {
        eyebrow: "주소",
        title: "주소",
        description: "아래 주소에서 지점을 방문해 보세요.",
        openInMaps: "Google 지도에서 열기",
        mapPlaceholder: "지도를 불러올 수 없습니다 — Google 지도 링크를 이용해 주세요.",
        locations: {
          cempaka:
            "Graha Mega Grosir, K블록 40, Jl. Sumur Batu Raya Cemp. Mas Timur 8번, RT.17/RW.8, Sumur Batu, Kemayoran, 중앙 자카르타, 자카르타 10640, 인도네시아",
          "kebon-jeruk":
            "Graha Handaya 12, Jl. Perjuangan 12A번, RT.1/RW.7, Kebon Jeruk, 서부 자카르타, 자카르타 11530, 인도네시아",
          bekasi:
            "Mutiara Bekasi Center, Jl. Jenderal Ahmad Yani, RT.005/RW.002, Kayuringin Jaya, 남부 베카시, 베카시시, 서부 자바 17144, 인도네시아",
          manado:
            "Jl. Laut Aru 71번, Ranotana, Sario, 마나도시, 북술라웨시 95116, 인도네시아",
        },
      },
      fasilitas: {
        eyebrow: "시설",
        title: "시설",
        description:
          "이 지점에서 누릴 수 있는 프리미엄 편의시설과 룸 타입 안내입니다.",
        items: [
          "케어 룸 (예시)",
          "라운지 & 리프레시 존 (예시)",
          "샤워 & 락커 (예시)",
          "프라이빗 스위트 옵션 (예시)",
        ],
      },
    },
    header: {
      cta: "로그인",
      openMenu: "메뉴 열기",
      language: "언어",
    },
    loginPage: {
      eyebrow: "회원",
      title: "로그인",
      description:
        "회원 전용 기능을 이용하려면 로그인하세요. 프로젝트는 정적 배포에 맞춰져 있으며, 이후 외부 인증 연동으로 연결할 수 있습니다.",
      identityLabel: "이메일 또는 전화번호",
      identityPlaceholder: "name@example.com",
      passwordLabel: "비밀번호",
      passwordPlaceholder: "비밀번호",
      signIn: "로그인",
      signUp: "계정 만들기",
      forgot: "비밀번호를 잊으셨나요?",
      note:
        "참고: 현재 화면은 데모이며 공유 호스팅 환경에는 서버 인증이 없습니다.",
      languageTip:
        "팁: 이 페이지에서도 헤더에서 언어를 변경할 수 있습니다.",
    },
    careerPage: {
      eyebrow: "채용",
      title: "King’s Royal Spa와 함께하세요",
      description:
        "고요한 럭셔리, 정교한 서비스, 그리고 모든 순간을 소중히 여기는 팀과 함께 성장하세요.",
      whyTitle: "함께하는 이유",
      whyItems: [
        "일관된 케어 기준의 프리미엄 환경",
        "시그니처 트리트먼트 교육과 성장 기회",
        "인도네시아 주요 지점의 협력 문화",
      ],
      positionsTitle: "모집 포지션",
      positions: [
        {
          title: "스파 테라피스트",
          location: "자카르타 & 베카시",
          type: "정규직",
        },
        {
          title: "프론트 & 게스트 릴레이션",
          location: "전 지점",
          type: "정규직 / 파트타임",
        },
        { title: "스파 슈퍼바이저", location: "마나도", type: "정규직" },
      ],
      applyCta: "WhatsApp으로 지원",
      applyNote:
        "이름, 희망 지점, 지원 직무, 간단한 자기소개를 보내 주세요. 운영 시간 내에 답변드립니다.",
      whatsappMessage:
        "안녕하세요 King's Royal Spa, 채용 지원 문의드립니다.",
    },
    hero: {
      eyebrow: "King’s Royal Spa",
      title: "King's Royal Men's Health",
      subtitle:
        "차분하고 세련된 럭셔리 케어로 균형을 되찾고 스트레스를 풀어 드립니다.",
      primaryCta: "서비스 보기",
      secondaryCta: "영상 보기",
      chips: "럭셔리 • 차분함 • 배려",
      prevSlide: "이전 슬라이드",
      nextSlide: "다음 슬라이드",
      slideAria: (idx: number, total: number) =>
        `히어로 슬라이드 ${idx} / 전체 ${total}`,
    },
    video: {
      eyebrow: "영상",
      title: "경험을 가까이서",
      description:
        "King’s Royal Spa의 분위기, 케어, 디테일이 만드는 럭셔리한 순간을 담았습니다.",
      play: "재생",
      muted: "음소거",
      soundOn: "소리 켜기",
      unmuteAria: "영상 음소거 해제",
      muteAria: "영상 음소거",
      fileHint: "영상이 재생되지 않으면 다음 경로에 파일이 있는지 확인하세요.",
    },
    services: {
      eyebrow: "서비스",
      title: "정성 어린 시그니처 서비스",
      description:
        "편안함, 정교함, 그리고 차분한 럭셔리를 위한 네 가지 프로그램입니다.",
      items: [
        {
          title: "Royal Signature Massage",
          description:
            "천천히 긴장을 풀고 고요함으로 돌아가는 시간을 만듭니다.",
          imageSrc: "/service/_MG_5995.JPG",
        },
        {
          title: "Deep Tissue Therapy",
          description:
            "부위별 깊은 압으로 오래 머무는 이완을 돕습니다.",
          imageSrc: "/service/_MG_6059.JPG",
        },
        {
          title: "Gold Facial Ritual",
          description:
            "맑고 부드러운 광채를 위해 다듬어진 페이셜 리추얼입니다.",
          imageSrc: "/service/_MG_6095.JPG",
        },
        {
          title: "Body Polish & Glow",
          description:
            "부드러운 각질 케어와 보습으로 윤기 있는 피부를 느껴 보세요.",
          imageSrc: "/service/_MG_6109.JPG",
        },
      ],
    },
    testimonials: {
      eyebrow: "후기",
      title: "고객 한마디",
      description:
        "편안함과 세심한 배려, 다시 찾게 되는 럭셔리한 순간을 엿보세요.",
      imageAlt: "고객 후기 사진",
    },
    philosophy: {
      eyebrow: "철학",
      quote:
        "어떤 순간은 천천히, 온전히, 서두르지 않고 받아들일 때 빛납니다.",
      quoteEmphasis: "마사지 또한 그중 하나입니다.",
      items: [
        { title: "시그니처 서비스", value: "엄선된 리추얼" },
        { title: "럭셔리 분위기", value: "크림 • 골드 • 고요함" },
        { title: "인도네시아 전역", value: "선별된 지점" },
      ],
    },
    ourFacilities: {
      eyebrow: "우리 시설",
      title: "우리 시설",
    },
    floatingSocial: {
      instagramAria: "Instagram 팔로우",
      instagramPicker: "Instagram 지점 선택",
      whatsappAria: "WhatsApp으로 문의",
    },
    footer: {
      motto: "한 번, 제대로.",
      quickLinksTitle: "빠른 링크",
      followTitle: "팔로우",
      followSocialPending: "곧 제공",
      hoursTitle: "운영 시간",
      operatingDays: "월요일 – 일요일",
      operatingTime: "오전 11:00 – 오후 11:00",
      locationsTitle: "지점 안내",
      copyrightLine: "© 2026 Kings Royal Official. 모든 권리 보유.",
    },
  },
  "ar-SA": {
    site: {
      name: "King’s Royal Spa",
      tagline: "أرقى ملاذ سبّا فاخر في إندونيسيا.",
    },
    nav: {
      home: "الرئيسية",
      video: "فيديو",
      services: "الخدمات",
      testimoni: "آراء الضيوف",
      facilities: "المرافق",
      location: "الموقع",
      nearMe: "بالقرب مني",
      order: "كيفية الحجز",
      book: "احجز",
      career: "الوظائف",
      login: "تسجيل الدخول",
    },
    branch: {
      intro:
        "اكتشف التجربة المميزة، أحدث فيديو للفرع، فوائد العافية، والمرافق المختارة في هذا الموقع.",
      layanan: {
        eyebrow: "الخدمات",
        title: "الخدمات",
        description: "اطّلع على العنايات والطقوس المتوفرة في هذا الفرع.",
        highlights: [
          "تدليك رويال المميز (مثال)",
          "العناية بالجسم والتلميع (مثال)",
          "خدمات وجه وإضافات عافية (مثال)",
        ],
      },
      video: {
        eyebrow: "فيديو",
        title: "فيديو الفرع",
        description: "شاهد أحدث عرض لأجواء الفرع.",
        placeholder: "منطقة الفيديو — أضف ملفًا أو عنوان رابط",
      },
      photo: {
        eyebrow: "صور",
        title: "Photo",
        description: "لمحة عن أجواء وتجربة هذا الفرع.",
      },
      address: {
        eyebrow: "العنوان",
        title: "العنوان",
        description: "زر فرعنا في العنوان التالي.",
        openInMaps: "افتح في Google Maps",
        mapPlaceholder: "الخريطة غير متاحة — استخدم رابط Google Maps.",
        locations: {
          cempaka:
            "Graha Mega Grosir، المبنى K.40، Jl. Sumur Batu Raya Cemp. Mas Timur رقم 8، RT.17/RW.8، Sumur Batu، Kemayoran، جاكرتا الوسطى، جاكرتا 10640، Indonesia",
          "kebon-jeruk":
            "Graha Handaya 12، Jl. Perjuangan رقم 12A، RT.1/RW.7، Kebon Jeruk، جاكرتا الغربية، جاكرتا 11530، Indonesia",
          bekasi:
            "Mutiara Bekasi Center، Jl. Jenderal Ahmad Yani، RT.005/RW.002، Kayuringin Jaya، جنوب Bekasi، مدينة Bekasi، Jawa Barat 17144، Indonesia",
          manado:
            "Jl. Laut Aru رقم 71، Ranotana، Sario، مدينة Manado، Sulawesi Utara 95116، Indonesia",
        },
      },
      fasilitas: {
        eyebrow: "المرافق",
        title: "المرافق",
        description: "وسائل راحة فاخرة وخيارات الغرف المتوفرة في هذا الفرع.",
        items: [
          "غرفة معالجة (مثال)",
          "منطقة جلوس واستجمام (مثال)",
          "دش وخزائن (مثال)",
          "خيار جناح خاص (مثال)",
        ],
      },
    },
    header: {
      cta: "تسجيل الدخول",
      openMenu: "فتح القائمة",
      language: "اللغة",
    },
    loginPage: {
      eyebrow: "عضوية",
      title: "تسجيل الدخول",
      description:
        "سجّل الدخول للوصول إلى ميزات العضوين. هذا المشروع مهيّأ للاستضافة الثابتة ويمكن لاحقًا ربط المصادقة بمزوّد خارجي.",
      identityLabel: "البريد أو رقم الهاتف",
      identityPlaceholder: "name@example.com",
      passwordLabel: "كلمة المرور",
      passwordPlaceholder: "كلمة المرور",
      signIn: "دخول",
      signUp: "إنشاء حساب",
      forgot: "نسيت كلمة المرور؟",
      note:
        "ملاحظة: هذا عرض تجريبي للواجهة (بدون مصادقة خادم في الاستضافة المشتركة).",
      languageTip:
        "نصيحة: يمكنك تغيير اللغة من الشريط العلوي حتى في هذه الصفحة.",
    },
    careerPage: {
      eyebrow: "الوظائف",
      title: "انضم إلى King’s Royal Spa",
      description:
        "انمُ مع علامة عافية فاخرة تبني تجربة الضيف على الهدوء والخدمة الراقية والفريق الفخور بكل لحظة.",
      whyTitle: "لماذا تعمل معنا",
      whyItems: [
        "بيئة فاخرة بمعايير رعاية ثابتة",
        "تدريب وتطوير على العلاجات المميزة",
        "فرق داعمة في فروع مختارة في إندونيسيا",
      ],
      positionsTitle: "فرص متاحة",
      positions: [
        {
          title: "معالج سبا",
          location: "جاكرتا وبيكاسي",
          type: "دوام كامل",
        },
        {
          title: "الاستقبال وعلاقات الضيوف",
          location: "جميع الفروع",
          type: "دوام كامل / جزئي",
        },
        { title: "مشرف سبا", location: "مانادو", type: "دوام كامل" },
      ],
      applyCta: "قدّم عبر WhatsApp",
      applyNote:
        "أرسل اسمك والفرع المفضل والوظيفة ونبذة قصيرة. سيرد فريقنا خلال ساعات العمل.",
      whatsappMessage:
        "مرحبًا King's Royal Spa، أود التقديم على فرصة وظيفية.",
    },
    hero: {
      eyebrow: "King’s Royal Spa",
      title: "King's Royal Men's Health",
      subtitle:
        "عنايات فاخرة بهدوء ورقي—لمساعدتك على استعادة التوازن، تهدئة التوتّر، والشعور بالانتعاش.",
      primaryCta: "عرض الخدمات",
      secondaryCta: "شاهد الفيديو",
      chips: "فخامة • هدوء • عناية",
      prevSlide: "الشرائحة السابقة",
      nextSlide: "الشرائح التالية",
      slideAria: (idx: number, total: number) =>
        `شريحة الترحيب ${idx} من ${total}`,
    },
    video: {
      eyebrow: "فيديو",
      title: "نظر أقرب إلى التجربة",
      description:
        "جولة مختصرة عن الأجواء، العناية، والتفاصيل الفاخرة التي تميّز King’s Royal Spa.",
      play: "تشغيل الفيديو",
      muted: "صامت",
      soundOn: "تشغيل الصوت",
      unmuteAria: "إلغاء كتم الفيديو",
      muteAria: "كتم الفيديو",
      fileHint: "إذا لم يعمل الفيديو، تأكد أن الملف موجود في",
    },
    services: {
      eyebrow: "الخدمات",
      title: "خدمات توقيع صُممت بإتقان",
      description:
        "أربع طقوس مختارة للراحة والدقة والفخامة الهادئة.",
      items: [
        {
          title: "Royal Signature Massage",
          description: "طقوس هادئة تُفرِّج عن التوتّر وتعيد السكينة.",
          imageSrc: "/service/_MG_5995.JPG",
        },
        {
          title: "Deep Tissue Therapy",
          description: "ضغط عميق موجّه لراحة تدوم وتخفيف أعمق.",
          imageSrc: "/service/_MG_6059.JPG",
        },
        {
          title: "Gold Facial Ritual",
          description: "عناية تُجدِّد الإشراق بملمس ناعم وبشرة متوهجة.",
          imageSrc: "/service/_MG_6095.JPG",
        },
        {
          title: "Body Polish & Glow",
          description: "تقشير لطيف وترطيب لبشرة ناعمة ومشرقة.",
          imageSrc: "/service/_MG_6109.JPG",
        },
      ],
    },
    testimonials: {
      eyebrow: "آراء الضيوف",
      title: "ماذا يقول ضيوفنا",
      description:
        "لمحات من لحظات حقيقية—الراحة، العناية، والرفاهية الهادئة التي يعود لها ضيوفنا.",
      imageAlt: "صورة شهادة ضيف",
    },
    philosophy: {
      eyebrow: "الفلسفة",
      quote:
        "هناك لحظات تُهدى لك بهدوء—كاملة، دون تعجُّل.",
      quoteEmphasis: "التدليك واحدة منها.",
      items: [
        { title: "خدمات مميزة", value: "طقوس مختارة" },
        { title: "أجواء فاخرة", value: "كريمي • ذهبي • هادئ" },
        { title: "في إندونيسيا", value: "مواقع مختارة" },
      ],
    },
    ourFacilities: {
      eyebrow: "مرافقنا",
      title: "مرافقنا",
    },
    floatingSocial: {
      instagramAria: "تابعنا على Instagram",
      instagramPicker: "اختر فرع Instagram",
      whatsappAria: "تواصل عبر WhatsApp",
    },
    footer: {
      motto: "مرة واحدة، على الوجه الأكمل.",
      quickLinksTitle: "روابط سريعة",
      followTitle: "تابعنا",
      followSocialPending: "قريبًا",
      hoursTitle: "ساعات العمل",
      operatingDays: "الاثنين – الأحد",
      operatingTime: "11:00 ص – 11:00 م",
      locationsTitle: "فروعنا",
      copyrightLine: "© 2026 Kings Royal Official. جميع الحقوق محفوظة.",
    },
  },
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages["en-US"]
}

