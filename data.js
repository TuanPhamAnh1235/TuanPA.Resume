const cvData = {
    fullName: "Phạm Anh Tuấn",
    jobTitle: "Unity Game Programmer",
    portfolioInfo: {
        title: "Danh mục dự án",
        subTitle: "Tổng hợp các sản phẩm và dự án nghiên cứu kỹ thuật cá nhân trong quá trình học tập và làm việc.",
        footerText: "© 2026 Đặng Văn Thanh",
        personalSectionTitle: "Technical R&D"
    },
    about: "Mình là Game Developer với <b>4+ năm kinh nghiệm</b> làm việc với <b>Unity</b> và <b>C#</b>. Có kiến thức về OOP, ECS, Design Pattern, System Design... Đã tham gia phát triển đa dạng thể loại từ hyper-casual đến hybrid-casual. Có khả năng làm việc độc lập và phối hợp nhóm hiệu quả. <br><br>Ngoài ra, mình còn tự xây dựng hệ thống HomeLab Proxmox và quy trình <b>CI/CD</b> với <b>Jenkins</b> để quản lý package.<br><br>Hiện tại mình mong muốn được tham gia các dự án game chất lượng cao và phát triển sâu hơn về kỹ thuật <b>Technical Art, Software Architecture</b> và <b>Performance Optimization</b>.",
    sectionTitles: {
        about: "Giới thiệu",
        workExperience: "Kinh nghiệm làm việc",
        personalProjects: "Technical R&D",
        contact: "Liên hệ",
        education: "Học vấn",
        skills: "Kỹ năng"
    },
    contact: {
        phone: "0358040000",
        email: "vanthanh1998@gmail.com",
        address: "Trung Văn, Nam Từ Liêm, Hà Nội",
        website: "https://knowledge.thanhdv.com",
        websiteDisplay: "knowledge.thanhdv.com",
        github: "https://github.com/ThanhDang143",
        githubDisplay: "github.com/ThanhDang143"
    },
    education: {
        school: "Đại học Mỏ - Địa chất Hà Nội",
        major: "Khoa IT - Chuyên ngành Khoa học Máy tính",
        period: "09/2016 - 09/2022"
    },
    workExperience: [
        {
            company: "Ohze",
            theme: "#e4343b",
            period: "03/2025 - 02/2026",
            title: "GAME DEVELOPER",
            description: ["Tham gia chương trình CrazyHubs do CrazyLabs tổ chức nhằm chuẩn hóa quy trình sản xuất game Hyper-casual theo tiêu chuẩn quốc tế."],
            maxProjects: 2,
            moreProjectsLink: "portfolio.html#Ohze",
            details: [
                {
                    icon: "Icon/train_loop.webp",
                    name: "Train Loop: TD",
                    genre: "Tower Defense / Strategy",
                    description: "Kết hợp cơ chế Tower Defense và Strategy, tập trung vào System Design và Optimize Performance.",
                    tags: ["Unity", "C#", "Solo", "Pragmatic Architecture"],
                    link: "https://www.taptap.io/app/33874766",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/TrainLoop_TD.apk",
                    backupLinkText: "APK", 
                    points: [
                        "Chủ động loại bỏ các pattern phức tạp (như DI Framework) để tránh over-engineering.",
                        "Triển khai Spatial Partitioning (Grid-based) để tối ưu hiệu năng."
                    ],
                    videos: [],
                    images: [
                        "Images/TrainLoop/train_loop1.jfif",
                        "Images/TrainLoop/train_loop2.jfif",
                        "Images/TrainLoop/train_loop3.jfif",
                        "Images/TrainLoop/train_loop4.jfif",
                    ]
                },
                {
                    icon: "Icon/heroes.webp",
                    name: "Super Hero Defense",
                    genre: "Tower Defense / Roguelike",
                    description: "Kết hợp cơ chế Tower Defense và Roguelike. Ưu tiên code có cấu trúc rõ ràng, dễ mở rộng.",
                    tags: ["Unity", "C#", "Teamwork", "Dependency Injection", "Strategy", "Factory"],
                    link: "https://www.taptap.io/app/33910058",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/SuperHeroDefense.apk",
                    backupLinkText: "APK",
                    points: [
                        "Xây dựng core gameplay đảm bảo tính mở rộng để có thể dễ dàng teamwork trong quá trình làm việc.",
                        "Học hỏi và áp dụng các design pattern như Dependency Injection, Strategy, Factory để tối ưu cấu trúc code.",
                    ],
                    videos: [],
                    images: [
                        "Images/Heroes/heroes1.jfif",
                        "Images/Heroes/heroes2.jfif",
                        "Images/Heroes/heroes3.jfif",
                        "Images/Heroes/heroes4.jfif",
                        "Images/Heroes/heroes5.jfif",
                    ]
                },
                {
                    icon: "Icon/smash_face.png",
                    name: "Smash Your Face",
                    genre: "Party / Action",
                    description: "Hoàn thiện prototype trong 48h (OHZE Jam), tích hợp diện khuôn mặt.",
                    tags: ["Unity", "C#", "MediaPipe", "JAM"],
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/SmashYourFace.rar",
                    backupLinkText: "Download",
                    points: [
                        "Tích hợp MediaPipe Plugin vào game để nhận diện khuôn mặt.",
                        "Làm việc với team 6 (3 programmer) người trong thời gian ngắn.",
                    ],
                    videos: ["https://youtu.be/A1SdOcHdQ3Y"],
                    images: [
                        "Images/SYF/SYF1.png",
                        "Images/SYF/SYF2.png",
                        "Images/SYF/SYF3.png",
                        "Images/SYF/SYF4.png",
                    ]
                },
                {
                    icon: "Icon/block_crusher.webp",
                    name: "Blocks Crusher",
                    genre: "Puzzle / Casual",
                    description: "Thực hành quy trình Rapid Prototyping: từ ý tưởng đến sản phẩm hoàn chỉnh trong 3 tuần.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33891864",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/BlockCrusher.apk",
                    backupLinkText: "APK",
                    points: [
                        "Phát triển game từ giai đoạn ý tưởng đến sản phẩm hoàn chỉnh trong vòng 3 tuần theo quy trình CrazyHubs.",
                        "Rèn luyện kỹ năng phát triển nhanh (Rapid Prototyping) và tư duy làm sản phẩm theo tiêu chuẩn chất lượng của CrazyLabs.",
                    ],
                    videos: [],
                    images: [
                        "Images/BlockCrusher/blockCrusher1.jfif",
                        "Images/BlockCrusher/blockCrusher2.jfif",
                        "Images/BlockCrusher/blockCrusher3.jfif",
                        "Images/BlockCrusher/blockCrusher4.jfif",
                        "Images/BlockCrusher/blockCrusher5.jfif",
                    ]
                },
                {
                    icon: "Icon/arrow.webp",
                    name: "Arrow Break Out",
                    genre: "Puzzle / Casual",
                    description: "Tối ưu trải nghiệm sản phẩm theo tiêu chuẩn chất lượng CrazyLabs.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33914917",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/ArrowBreakOut.apk",
                    backupLinkText: "APK",
                    points: [
                        "Phát triển game từ giai đoạn ý tưởng đến sản phẩm hoàn chỉnh trong vòng 3 tuần theo quy trình CrazyHubs.",
                        "Rèn luyện kỹ năng phát triển nhanh (Rapid Prototyping) và tư duy làm sản phẩm theo tiêu chuẩn chất lượng của CrazyLabs.",
                    ],
                    videos: [],
                    images: [
                        "Images/Arrow/arrow1.jfif",
                        "Images/Arrow/arrow2.jfif",
                        "Images/Arrow/arrow3.jfif",
                        "Images/Arrow/arrow4.jfif",
                        "Images/Arrow/arrow5.jfif",
                    ]
                }
            ]
        },
        {
            company: "Bravestars",
            theme: "#f15a29",
            period: "12/2022 - 03/2024",
            title: "GAME DEVELOPER",
            description: ["Phát triển dự án game hybrid-casual theo quy trình Agile Scrum.", "Tham gia thiết kế và xây dựng các hệ thống trong game."],
            maxProjects: 1,
            moreProjectsLink: "portfolio.html#Bravestars",
            details: [
                {
                    icon: "Icon/candy_battle.webp",
                    name: "Candy Battle",
                    genre: "Adventure / Action",
                    description: "Xây dựng hệ thống combat cường độ cao (Survivor-like), tối ưu hiệu năng cho số lượng lớn entity.",
                    tags: ["Unity", "C#", "ECS (Entitas)", "Optimization"],
                    link: "https://www.taptap.io/app/320447",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/CandyBattle.apk",
                    backupLinkText: "APK",
                    points: [
                        "Phát triển hệ thống combat bao gồm: Vũ khí, Skill, AI Enemy, Inventory...",
                        "Ứng dụng ECS (Entitas) để tối ưu hiệu năng game."
                    ],
                    videos: [],
                    images: [
                        "Images/CandyBattle/candyBattle1.jpg",
                        "Images/CandyBattle/candyBattle2.jpg",
                        "Images/CandyBattle/candyBattle3.jpg",
                        "Images/CandyBattle/candyBattle4.jpg",
                        "Images/CandyBattle/candyBattle5.jpg",
                        "Images/CandyBattle/candyBattle6.jpg",
                    ]
                },
                {
                    icon: "Icon/cat_tycoon.webp",
                    name: "Cat Restaurant Tycoon",
                    genre: "Simulation / Management",
                    description: "Game quản lý nhà hàng cho iOS. Học hỏi và ứng dụng tích hợp API phía client.",
                    tags: ["Unity", "C#", "iOS", "API Integration"],
                    link: "https://www.taptap.io/app/33656534",
                    linkText: "TapTap",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/CatRestaurantTycoon.apk",
                    backupLinkText: "APK",
                    points: [
                        "Phát triển tính năng Inventory, Daily Check-in.",
                        "Xử lý tích hợp API (Client-side): Thực hiện gọi API, xử lý dữ liệu trả về để đồng bộ với Server."
                    ],
                    videos: [],
                    images: [
                        "Images/CatTycoon/catTycoon1.jpg",
                        "Images/CatTycoon/catTycoon2.jpg",
                        "Images/CatTycoon/catTycoon3.jpg",
                        "Images/CatTycoon/catTycoon4.jpg",
                        "Images/CatTycoon/catTycoon5.jpg",
                    ]
                }
            ]
        },
        {
            company: "Omegame",
            theme: "#990000",
            period: "03/2021 - 12/2022",
            title: "GAME DEVELOPER",
            description: [
                "Phát triển, bảo trì các dự án game hyper-casual.",
                "Tích hợp quảng cáo, tracking cho game.",
                "Theo dõi tiến độ các thành viên trong team dev."
            ],
            maxProjects: 0,
            moreProjectsLink: "portfolio.html#Omegame",
            details: [
                {
                    icon: "Icon/metamon.webp",
                    name: "Metamon",
                    genre: "Casual",
                    description: "Triển khai gameplay bắt và huấn luyện quái vật, lấy cảm hứng từ Pokemon.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/metamon/com.metamon.pkm.zoo.monster",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/Metamon.apk",
                    backupLinkText: "APK",
                    points: [],
                    videos: [],
                    images: [
                        "Images/Metamon/metamon1.webp",
                        "Images/Metamon/metamon2.webp",
                        "Images/Metamon/metamon3.webp",
                        "Images/Metamon/metamon4.webp",
                        "Images/Metamon/metamon5.webp",
                    ]
                },
                {
                    icon: "Icon/fall_party.webp",
                    name: "Fall Party",
                    genre: "Casual",
                    description: "Huấn luyện AI Bot bằng MLAgent, mô phỏng vật lý va chạm 3D vui nhộn.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/fall-party/com.fall.party.guys.fallguyparty.gameparty",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/FallParty.apk",
                    backupLinkText: "APK",
                    points: ["Sử dụng MLAgent để huấn luyện AI cho bot trong game."],
                    videos: [],
                    images: [
                        "Images/Fall/fall1.webp",
                        "Images/Fall/fall2.webp",
                        "Images/Fall/fall3.webp",
                        "Images/Fall/fall4.webp",
                        "Images/Fall/fall5.webp",
                        "Images/Fall/fall6.webp",
                        "Images/Fall/fall7.webp",
                        "Images/Fall/fall8.webp",
                    ]
                },
                {
                    icon: "Icon/hook.webp",
                    name: "Hook Guys Party",
                    genre: "Casual",
                    description: "Tập trung tối ưu hóa ánh sáng (Lighting) và hiệu ứng môi trường trong game.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/hook-guys-party/com.hook.guys.party.wuggyparty.hypercasual",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/Hook.apk",
                    backupLinkText: "APK",
                    points: ["Bước đầu tìm hiểu về tối ưu Lighting."],
                    videos: [],
                    images: [
                        "Images/Hook/hook1.webp",
                        "Images/Hook/hook2.webp",
                        "Images/Hook/hook3.webp",
                        "Images/Hook/hook4.webp",
                        "Images/Hook/hook5.webp",
                    ]
                },
                {
                    icon: "Icon/beach.webp",
                    name: "Beach Defence BH",
                    genre: "Arcade",
                    description: "Nghiên cứu cơ chế AI và điều khiển cho game bắn súng góc nhìn thứ nhất.",
                    tags: ["Unity", "C#"],
                    link: "https://apkpure.com/vn/beach-defence-bh/com.beachhead.beach.defence.defense",
                    linkText: "APKPure",
                    backupLink: "https://github.com/ThanhDang143/ThanhDV.GameDemos/releases/download/Upload_001/BeachDefence.apk",
                    backupLinkText: "APK",
                    points: ["Tìm hiểu về game 3D và AI trong game."],
                    videos: [],
                    images: [
                        "Images/Beach/beach1.webp",
                        "Images/Beach/beach2.webp",
                        "Images/Beach/beach3.webp",
                        "Images/Beach/beach4.webp",
                        "Images/Beach/beach5.webp",
                        "Images/Beach/beach6.webp",
                    ]
                }
            ]
        }
    ],
    personalProjects: {
        theme: "#0866ff",
        projects: [
            {
                name: "HomeLab Proxmox",
                period: "2025 - nay",
                genre: "DevOps / System Admin",
                description: "Hệ thống Home Server Self-hosted phục vụ nhu cầu lưu trữ, quản lý và học tập của cá nhân.",
                tags: ["Proxmox", "Jenkins", "Verdaccio", "Docker", "Cloudflared"],
                icon: "server",
                link: "https://knowledge.thanhdv.com",
                linkText: "Tech Blog",
                points: [
                    "Thiết lập Proxmox Virtual Environment để ảo hóa và quản lý các dịch vụ hạ tầng (NAS XPEnology, Web Server).",
                    "Thiết lập cấu hình mạng để có thể truy cập server từ internet với Cloudflare Tunnel.",
                    "Xây dựng quy trình CI/CD với Jenkins: Tự động hóa việc publish các Unity Package lên Verdaccio.",
                ],
                videos: [],
                images: [
                    "Images/HomeLab/lab1.png",
                    "Images/HomeLab/lab2.png",
                    "Images/HomeLab/lab3.png",
                    "Images/HomeLab/lab4.png",
                    "Images/HomeLab/lab5.png",
                ]
            },
            {
                name: "AudioManager.FMOD",
                period: "2025",
                genre: "Tooling / Audio Middleware",
                description: "Thư viện Wrapper cho FMOD trong Unity, giúp chuẩn hóa và tăng tốc quy trình tích hợp âm thanh.",
                tags: ["Unity", "FMOD", "Tooling","Audio"],
                icon: "music",
                link: "https://github.com/ThanhDang143/ThanhDV.AudioManager.FMOD.git",
                linkText: "GitHub",
                points: [
                    "Cung cấp các API high-level dễ sử dụng, giảm thiểu code lặp lại khi tích hợp âm thanh.",
                    "Cung cấp công cụ quản lý trực quan trong Unity Editor, tự động tạo code tiết kiện thời gian khi triển khai."
                ],
                videos: [],
                images: [
                    "Images/AudioManager.FMOD/fmod1.png",
                    "Images/AudioManager.FMOD/fmod2.png",
                ]
            },
            {
                icon: "save",
                name: "GameSaver",
                period: "2025",
                genre: "Tooling / Save System",
                description: "Giải pháp quản lý dữ liệu local đơn giản, an toàn và trực quan dành cho Unity Developer.",
                tags: ["Unity", "JSON", "AES Encryption", "Open Source"],
                link: "https://github.com/ThanhDang143/ThanhDV.GameSaver.git",
                linkText: "GitHub",
                points: [
                    "Hỗ trợ Serialization dữ liệu ra file JSON, tích hợp sẵn thuật toán mã hóa AES để bảo mật thông tin người chơi.",
                    "Cung cấp công cụ quản lý trực quan cho phép xem, sửa và xóa file save ngay trong Unity Editor."
                ],
                videos: [],
                images: [
                    "Images/GameSaver/saver1.png",
                ]
            },
            {
                name: "ESP32 - The Cube (WIP)",
                period: "2025",
                genre: "Hardware / Embedded",
                description: "Dự án nghiên cứu cá nhân về Robotics và giao tiếp phần cứng (Hardware Interface).",
                tags: ["WIP", "ESP32", "C++", "Robotics"],
                icon: "cpu",
                link: "https://knowledge.thanhdv.com/books/esp32-the-cube",
                linkText: "Devlog",
                points: [
                    "Phát triển Robot sử dụng vi điều khiển ESP32, thực hiện lắp ráp và giao tiếp phần cứng.",
                    "Hướng tới ứng dụng State Machine, Behaviour Tree cho hành vi tự động của robot."
                ],
                videos: [],
                images: [
                    "Images/ESP32/cube1.jpg",
                    "Images/ESP32/cube2.jpg",
                    "Images/ESP32/cube3.jpg",
                ]
            },
            {
                name: "ACADEMIC ARCHIVE",
                period: "2020 - 2022",
                genre: "Research / Legacy Projects",
                description: "Các dự án nghiên cứu nền tảng kỹ thuật thời sinh viên, bao gồm Multiplayer và C++ Unreal Engine 4.",
                tags: ["Legacy", "C++", "Photon", "Multiplayer", "Unreal Engine 4"],
                icon: "archive",
                link: "",
                linkText: "",
                points: [
                    "Alpha (FPS Multiplayer): Nghiên cứu cách phát triển một game multiplayer cơ bản với Photon.",
                    "Tank (Unreal Engine 4): Tìm hiểu và trải nghiệm Unreal Engine 4."
                ],
                videos: [
                    "https://www.youtube.com/watch?v=YG0PBS1dHss",
                    "https://youtu.be/5V0fp1vsn70"
                ],
                images: []
            }
        ],
        maxProjects: 3,
        moreProjectsLink: "portfolio.html#TechnicalR&D"
    },
    skills: [
        {
            category: "Ngôn ngữ lập trình & Game Engine",
            items: ["C#", "Unity"]
        },
        {
            category: "Unity Libraries & Tools",
            items: ["FMOD", "Addressables", "UniTask", "Odin Inspector", "..."]
        },
        {
            category: "Công cụ khác",
            items: ["Git", "Photoshop", "Figma", "ClickUp", "Jenkins (CI/CD)", "..."]
        }
    ]
};
