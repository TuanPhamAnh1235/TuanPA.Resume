// --- DATA SECTION ---
const cvData = {
    fullName: "Đặng Văn Thanh",
    jobTitle: "Unity Game Programmer",
    portfolioInfo: {
        title: "Danh mục dự án",
        subTitle: "Tổng hợp các sản phẩm và dự án nghiên cứu kỹ thuật cá nhân trong quá trình học tập và làm việc.",
        footerText: "© 2026 Đặng Văn Thanh",
        personalSectionTitle: "Dự án Cá nhân"
    },
    about: "Mình là Game Developer với <b>4+ năm kinh nghiệm</b> làm việc với <b>Unity</b> và <b>C#</b>. Có kiến thức về OOP, ECS, Design Pattern, System Design... Đã tham gia phát triển đa dạng thể loại từ hyper-casual đến hybrid-casual. Có khả năng làm việc độc lập và phối hợp nhóm hiệu quả. <br><br>Ngoài ra, mình còn tự xây dựng hệ thống Home Lab Proxmox và quy trình <b>CI/CD</b> với <b>Jenkins</b> để quản lý package.<br><br>Hiện tại mình mong muốn được tham gia các dự án game chất lượng cao và phát triển sâu hơn về kỹ thuật <b>Technical Art, Software Architecture</b> và <b>Performance Optimization</b>.",
    sectionTitles: {
        about: "Giới thiệu",
        workExperience: "Kinh nghiệm làm việc",
        personalProjects: "Dự án cá nhân",
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
    displayConfig: {
        defaultWorkProjects: 3,
        defaultPersonalProjects: 2
    },
    workExperience: [
        {
            company: "Ohze",
            period: "03/2025 - 02/2026",
            title: "GAME DEVELOPER",
            description: ["Tham gia chương trình CrazyHubs do CrazyLabs tổ chức nhằm chuẩn hóa quy trình sản xuất game Hyper-casual theo tiêu chuẩn quốc tế."],
            maxProjects: 2,
            moreProjectsLink: "portfolio.html#Ohze",
            details: [
                {
                    name: "Train Loop: TD",
                    genre: "Tower Defense / Strategy",
                    description: "Dự án game Hybrid-casual thể loại Tower Defense kết hợp Strategy.",
                    tags: ["Unity", "iOS", "UI/UX"],
                    link: "https://www.taptap.io/app/33874766",
                    linkText: "TapTap",
                    points: [
                        "Phát triển tính năng Inventory, Daily Check-in.",
                        "Làm việc với back-end để xử lý và đồng bộ dữ liệu cho tính năng Daily Check-in."
                    ]
                },
                {
                    name: "Super Hero Defense",
                    genre: "Tower Defense / Roguelike",
                    description: "Dự án game Hybrid-casual thể loại Tower Defense kết hợp Roguelike.",
                    tags: ["Unity", "C#", "Dependency Injection", "Strategy", "Factory"],
                    link: "https://www.taptap.io/app/33910058",
                    linkText: "TapTap",
                    points: [
                        "Xây dựng core gameplay đảm bảo tính mở rộng để có thể dễ dàng teamwork trong quá trình làm việc.",
                        "Học hỏi và áp dụng các design pattern như Dependency Injection, Strategy, Factory để tối ưu cấu trúc code.",
                    ]
                },
                {
                    name: "Blocks Crusher",
                    genre: "Puzzle / Casual",
                    description: "Dự án game giải đố được phát triển và phát hành trong khuôn khổ chương trình CrazyHubs của CrazyLabs.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33891864",
                    linkText: "TapTap",
                    points: [
                        "Phát triển game từ giai đoạn ý tưởng đến sản phẩm hoàn chỉnh trong vòng 3 tuần theo quy trình CrazyHubs.",
                        "Rèn luyện kỹ năng phát triển nhanh (Rapid Prototyping) và tư duy làm sản phẩm theo tiêu chuẩn chất lượng của CrazyLabs.",
                    ]
                },
                {
                    name: "Arrow Break Out",
                    genre: "Puzzle / Casual",
                    description: "Dự án game giải đố được phát triển và phát hành trong khuôn khổ chương trình CrazyHubs của CrazyLabs.",
                    tags: ["Unity", "C#", "CrazyHubs", "Rapid Prototyping"],
                    link: "https://www.taptap.io/app/33914917",
                    linkText: "TapTap",
                    points: [
                        "Phát triển game từ giai đoạn ý tưởng đến sản phẩm hoàn chỉnh trong vòng 3 tuần theo quy trình CrazyHubs.",
                        "Rèn luyện kỹ năng phát triển nhanh (Rapid Prototyping) và tư duy làm sản phẩm theo tiêu chuẩn chất lượng của CrazyLabs.",
                    ]
                }
            ]
        },
        {
            company: "Bravestars",
            period: "12/2022 - 03/2024",
            title: "GAME DEVELOPER",
            description: ["Phát triển dự án game hybrid-casual theo quy trình Agile Scrum.", "Tham gia thiết kế và xây dựng các hệ thống trong game."],
            maxProjects: 2,
            moreProjectsLink: "portfolio.html#Bravestars",
            details: [
                {
                    name: "Candy Battle",
                    genre: "Survivor.io / Action",
                    description: "Dự án game hành động nhập vai lấy cảm hứng từ thể loại Survivor.io.",
                    tags: ["Unity", "C#", "ECS", "Optimization"],
                    link: "https://www.taptap.io/app/320447",
                    linkText: "TapTap",
                    points: [
                        "Phát triển hệ thống combat bao gồm: Vũ khí, Skill, AI Enemy, Inventory...",
                        "Ứng dụng ECS (Entitas) để tối ưu hiệu năng game."
                    ]
                },
                {
                    name: "Cat Restaurant Tycoon",
                    genre: "Simulation / Management",
                    description: "Game quản lý nhà hàng cho iOS. Phát triển tính năng Inventory, Daily Check-in.",
                    tags: ["Unity", "iOS", "UI/UX"],
                    link: "https://www.taptap.io/app/33656534",
                    linkText: "TapTap",
                    points: [
                        "Phát triển tính năng Inventory, Daily Check-in.",
                        "Làm việc với back-end để xử lý và đồng bộ dữ liệu cho tính năng Daily Check-in."
                    ]
                }
            ]
        },
        {
            company: "Omegame",
            period: "03/2021 - 12/2022",
            title: "GAME DEVELOPER",
            description: [
                "Phát triển, bảo trì các dự án game hyper-casual.",
                "Tích hợp quảng cáo, tracking cho game.",
                "Quản lý, phân bố công việc cho các thành viên trong team."
            ],
            details: [
                {
                    name: "Hyper-casual Projects",
                    genre: "Hyper-casual",
                    description: "Phát triển, bảo trì các dự án game hyper-casual. Tích hợp quảng cáo, tracking và quản lý team.",
                    tags: ["Unity", "AdMob", "Tracking", "Team Lead"],
                    icon: "zap",
                    points: [
                        "Phát triển, bảo trì các dự án game hyper-casual.",
                        "Tích hợp quảng cáo, tracking cho game.",
                        "Quản lý, phân bố công việc cho các thành viên trong team."
                    ]
                }
            ]
        }
    ],
    personalProjects: {
        projects: [
            {
                name: "UNITY STARTER KIT",
                period: "08/2024",
                genre: "Tooling / Open Source",
                description: "Dự án tổng hợp các tools và tiện ích cần thiết để triển khai nhanh một dự án game với Unity.",
                tags: ["Tooling", "Unity", "Open Source"],
                icon: "box",
                link: "https://github.com/ThanhDang143/UnityStarterKit.git",
                linkText: "Link GitHub",
                points: [
                    "Tích hợp sẵn các module thường dùng: Audio Manager, Pooling, Event System."
                ]
            },
            {
                name: "ALPHA",
                period: "10/2022",
                genre: "Multiplayer / FPS",
                description: "Game bắn súng multiplayer góc nhìn thứ 3.",
                tags: ["Multiplayer", "Photon", "FPS/TPS"],
                icon: "crosshair",
                link: "https://youtu.be/YGOPBS1dHss",
                linkText: "Link YouTube",
                points: [
                    "Sử dụng Unity, C# và Photon để làm multi-player.",
                    "Đồng bộ hóa vị trí, animation và trạng thái người chơi qua mạng."
                ]
            },
            {
                name: "TANK",
                period: "10/2020",
                genre: "Unreal Engine / Action",
                description: "Sản phẩm bắn tank góc nhìn thứ 3.",
                tags: ["Unreal Engine 4", "C++", "Tank"],
                icon: "shield",
                link: "https://youtu.be/5V0fplvsn70",
                linkText: "Link YouTube",
                points: [
                    "Sử dụng Unreal Engine 4 và C++ để tìm hiểu thêm engine khác ngoài Unity.",
                    "Xử lý vật lý xe tank và hệ thống đạn đạo."
                ]
            }
        ],
        maxProjects: 3,
        moreProjectsLink: "portfolio.html#PersonalProjects"
    },
    skills: [
        {
            category: "Ngôn ngữ lập trình & Game Engine",
            items: ["C#", "Unity"]
        },
        {
            category: "Unity Libraries & Tools",
            items: ["FMOD", "Addressables", "UniTask", "Odin Inspector"]
        },
        {
            category: "Công cụ khác",
            items: ["Git", "Photoshop", "Figma", "ClickUp", "Jenkins (CI/CD)"]
        }
    ]
};

// --- RENDER LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const setText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Helper: Hàm tạo HTML cho Link (tránh lặp code)
    const generateLinkHtml = (link, text) => {
        if (!link) return '';
        // Trả về một thẻ li chứa link, có icon mũi tên nhỏ
        return `
            <li class="mt-0.5 no-bullet">
                <a href="${link}" target="_blank" class="text-sky-700 hover:underline font-semibold inline-flex items-center gap-1">
                    ${text || 'Xem chi tiết'}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </a>
            </li>
        `;
    };

    // Set Headers
    setText('title-about', cvData.sectionTitles.about);
    setText('title-experience', cvData.sectionTitles.workExperience);
    setText('title-projects', cvData.sectionTitles.personalProjects);
    setText('title-contact', cvData.sectionTitles.contact);
    setText('title-contact-mobile', cvData.sectionTitles.contact);
    setText('title-education', cvData.sectionTitles.education);
    setText('title-skills', cvData.sectionTitles.skills);
    setText('title-skills-mobile', cvData.sectionTitles.skills);

    // Basic Info
    setText('fullName', cvData.fullName);
    setText('jobTitle', cvData.jobTitle);
    document.getElementById('about').innerHTML = cvData.about;

    // Icons
    const icons = {
        phone: `<svg class="w-4 h-4 text-sky-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
        email: `<svg class="w-4 h-4 text-sky-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
        location: `<svg class="w-4 h-4 text-sky-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
        web: `<svg class="w-4 h-4 text-sky-700 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
        github: `<svg class="w-4 h-4 text-sky-700 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>`
    };

    // Generate Contact List HTML
    const contactHTML = `
                <li class="flex items-center gap-2">${icons.phone} <span>${cvData.contact.phone}</span></li>
                <li class="flex items-center gap-2">${icons.email} <a href="mailto:${cvData.contact.email}">${cvData.contact.email}</a></li>
                <li class="flex items-center gap-2">${icons.web} <a href="${cvData.contact.website}" target="_blank">${cvData.contact.websiteDisplay}</a></li>
                <li class="flex items-center gap-2">${icons.github} <a href="${cvData.contact.github}" target="_blank">${cvData.contact.githubDisplay}</a></li>
                <li class="flex items-start gap-2"><span class="mt-0.5">${icons.location}</span> <span>${cvData.contact.address}</span></li>
            `;

    document.getElementById('contact-container').innerHTML = contactHTML;
    const mobileContactContainer = document.getElementById('contact-container-mobile');
    if (mobileContactContainer) mobileContactContainer.innerHTML = contactHTML;

    // Education
    document.getElementById('education-container').innerHTML = `
                <div>
                    <h3 class="font-bold text-slate-900 text-sm mb-1">${cvData.education.school}</h3>
                    <p class="text-slate-600 text-sm mb-1">${cvData.education.major}</p>
                    <span class="text-xs text-slate-400 font-medium">${cvData.education.period}</span>
                </div>
            `;

    // Work Experience
    const workContainer = document.getElementById('work-experience-container');
    cvData.workExperience.forEach(work => {
        let mainContentHtml = '';

        if (work.description) {
            if (Array.isArray(work.description)) {
                mainContentHtml += `<div class="mb-3 space-y-1 text-sm text-slate-600 italic leading-relaxed">
                            ${work.description.map(d => `<p>${d}</p>`).join('')}
                        </div>`;
            } else {
                mainContentHtml += `<p class="mb-3 text-xs text-slate-600 italic leading-relaxed">${work.description}</p>`;
            }
        }

        // Handle Details (Tự động thêm Link vào cuối list)
        if (Array.isArray(work.details) && work.details.length > 0) {
            mainContentHtml += `<div class="mt-3 space-y-4">
                        ${work.details.map(p => `
                            <div class="relative pl-4 border-l-2 border-slate-200">
                                <div class="mb-1">
                                    <h4 class="font-bold text-slate-800 text-sm inline-block mr-2">${p.name}</h4>
                                    <span class="text-xs text-slate-500 italic font-medium">${p.genre}</span>
                                </div>
                                ${p.description ? `<p class="mb-2 text-sm text-slate-600 italic leading-relaxed">${p.description}</p>` : ''}
                                <ul class="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1 marker:text-slate-400">
                                    ${p.points.map(pt => `<li>${pt}</li>`).join('')}
                                    ${generateLinkHtml(p.link, p.linkText)}
                                </ul>
                            </div>
                        `).join('')}
                    </div>`;

            const globalLimit = cvData.displayConfig?.defaultWorkProjects || 100;
            const limit = (work.maxProjects !== undefined) ? work.maxProjects : globalLimit;

            const visibleDetails = work.details.slice(0, limit);

            if (work.moreProjectsLink || work.details.length > limit) {
                mainContentHtml += `
                            <div class="mt-2 pl-4 text-xs">
                                <a href="${work.moreProjectsLink}" target="_blank" class="text-sky-600 hover:underline italic flex items-center gap-1">
                                    + Xem thêm các dự án khác...
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </a>
                            </div>
                        `;
            }
        }

        workContainer.innerHTML += `
                    <div class="relative job-entry">
                        <div class="flex justify-between items-baseline mb-1">
                            <h3 class="font-bold text-base text-slate-900">${work.company}</h3>
                            <span class="text-xs font-mono text-slate-500 whitespace-nowrap">${work.period}</span>
                        </div>
                        <p class="text-sm font-semibold text-sky-700 mb-2">${work.title}</p>
                        ${mainContentHtml}
                    </div>
                `;
    });

    // Projects
    const projectsContainer = document.getElementById('projects-container');

    if (projectsContainer && cvData.personalProjects && cvData.personalProjects.projects) {
        const globalPersonalLimit = cvData.displayConfig?.defaultPersonalProjects || 100;
        const personalLimit = (cvData.personalProjects.maxProjects !== undefined)
            ? cvData.personalProjects.maxProjects
            : globalPersonalLimit;

        const visiblePersonalProjects = cvData.personalProjects.projects.slice(0, personalLimit);

        visiblePersonalProjects.forEach(project => {
            projectsContainer.innerHTML += `
                <div class="project-entry relative pl-4 border-l-2 border-slate-200">
                    <div class="flex justify-between items-baseline mb-1">
                        <div>
                            <h3 class="font-bold text-slate-800 text-sm inline-block mr-2">${project.name}</h3>
                            <span class="text-xs text-slate-500 italic font-medium">${project.genre}</span>
                        </div>
                        <span class="text-xs font-mono text-slate-500 whitespace-nowrap ml-4">${project.period}</span>
                    </div>
                    ${project.description ? `<p class="mb-2 text-sm text-slate-600 italic leading-relaxed">${project.description}</p>` : ''}
                    <ul class="list-disc list-outside ml-4 text-sm text-slate-600 space-y-1 marker:text-slate-400">
                        ${project.points.map(d => `<li>${d}</li>`).join('')}
                        ${generateLinkHtml(project.link, project.linkText)}
                    </ul>
                </div>
            `;
        });

        const totalProjects = cvData.personalProjects.projects.length;
        const hasMoreLink = cvData.personalProjects.moreProjectsLink;

        if (hasMoreLink || totalProjects > personalLimit) {
            const targetLink = hasMoreLink || 'portfolio.html#PersonalProjects';

            projectsContainer.innerHTML += `
                <div class="mt-2 pl-4 text-xs">
                    <a href="${targetLink}" target="_blank" class="text-sky-600 hover:underline italic flex items-center gap-1">
                        + Xem thêm các dự án khác...
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                </div>
            `;
        }
    }

    // Skills
    const renderSkills = (containerId) => {
        const container = document.getElementById(containerId);
        if (!container) return;
        cvData.skills.forEach((group, index) => {
            const colorClasses = index === 0
                ? 'bg-sky-100 text-sky-800'
                : 'bg-slate-200 text-slate-700';

            const tags = group.items.map(s => `<span class="${colorClasses} text-xs font-semibold px-3 py-1 rounded-full">${s}</span>`).join('');
            container.innerHTML += `
                        <div class="mb-4 skill-group">
                            <h4 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">${group.category}</h4>
                            <div class="flex flex-wrap gap-2">${tags}</div>
                        </div>
                    `;
        });
    };
    renderSkills('skills-container');
    renderSkills('skills-container-mobile');
});