const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('❌ MONGODB_URI is not defined in .env.local');
    process.exit(1);
}

// Define Schemas inline to avoid import issues with ts-node/modules
const AboutSchema = new mongoose.Schema({
    profileImage: { type: String, required: true },
    badges: [{ type: String }],
    name: { type: String, default: "Anuj Kumar" },
    headline: { type: String },
    paragraphs: [{ type: String }],
    currentFocus: [{ type: String }],
    skills: [{ type: String }],
    socialLinks: {
        github: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
        resume: { type: String }
    }
}, { timestamps: true });

const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
    githubLink: { type: String }, // Optional
    liveLink: { type: String },   // Optional
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
}, { timestamps: true });

const ExperienceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    links: [{
        text: { type: String, required: true },
        url: { type: String, required: true }
    }],
    order: { type: Number, default: 0 },
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const About = mongoose.models.About || mongoose.model('About', AboutSchema);
const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);
const Experience = mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);

// Initial Data
const aboutData = {
    profileImage: "https://res.cloudinary.com/folioanuj/image/upload/v1771048048/folio-anuj/Anuj.jpg",
    badges: ["HackIndia National Finalist", "Tech Enthusiast"],
    name: "Anuj Kumar",
    headline: "Curious Mind | Tech Enthusiast | Innovator",
    paragraphs: [
        "Based in Chandigarh, India, I'm a third-year Computer Science Engineering student at Chitkara University, with a deep passion for learning and solving real-world problems through technology.",
        "From exploring diverse programming languages to working on cutting-edge projects, I am driven by my curiosity and the desire to make an impact in the tech space."
    ],
    currentFocus: [
        "Developing full-stack web development skills",
        "Building practical projects and solutions"
    ],
    skills: ["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Cloudinary"],
    socialLinks: {
        github: 'https://github.com/Anuj-er',
        linkedin: 'https://www.linkedin.com/in/anuj-er/',
        twitter: 'https://x.com/5iwach',
        resume: 'https://docs.google.com/document/d/1wCicoRxvyIMzqkGMlbq5CRsM_LKB6Whx/view?usp=sharing'
    }
};

// Complete Project List from AllProjects.tsx (12 items)
const projectsData = [
    {
        title: "Shipment Tracker",
        description: "A React application forcargo shipment tracking featuring interactive maps, comprehensive dashboard, and Docker support.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048060/folio-anuj/Projects/allshipment.png",
        githubLink: "https://github.com/Anuj-er/cargo-tracker-webapp",
        liveLink: "https://shipmenttracker.vercel.app/",
        tags: ["react", "docker", "responsive", "mapbox", "mern-stack", "tracking-api", "shipment-tracking"],
        order: 12
    },
    {
        title: "AutoStash Linux",
        description: "A secure, GUI-based Linux backup system with encryption, incremental backups, GitHub integration, and real-time system monitoring.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048060/folio-anuj/Projects/autostash.png",
        githubLink: "https://github.com/Anuj-er/autostash-linux",
        liveLink: "",
        tags: ["linux", "python3", "tkinter-gui"],
        order: 11
    },
    {
        title: "Testpad-Solutions",
        description: "A comprehensive repository containing solutions for university courses and assignments.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048056/folio-anuj/Projects/Testpad.png",
        githubLink: "https://github.com/Anuj-er/Testpad-Solutions",
        liveLink: "",
        tags: ["mysql", "html5", "frontend", "backend", "cpp"],
        order: 10
    },
    {
        title: "Pharmacy Management System",
        description: "A comprehensive Java application for pharmacy management with inventory control, customer management, and sales processing using custom data structures.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048064/folio-anuj/Projects/pharmacy.png",
        githubLink: "https://github.com/Anuj-er/PharmacyManagementSystem-Java-DSA",
        liveLink: "",
        tags: ["java", "linkedlist", "mergesort-algorithm", "dsa"],
        order: 9
    },
    {
        title: "RaitaLeaks",
        description: "A secure social media platform for information sharing with real-time notifications, user authentication, and media support.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048064/folio-anuj/Projects/raitaleaks.png",
        githubLink: "https://github.com/Anuj-er/RaitaLeaks",
        liveLink: "https://raita-leaks.vercel.app",
        tags: ["react", "nodejs", "mongodb", "websockets", "cloudinary", "jwt-authentication", "mern-stack"],
        order: 8
    },
    {
        title: "Digital-Clock-App",
        description: "A sleek, customizable digital clock app with responsive design and cross-browser compatibility.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048060/folio-anuj/Projects/digitalclock.jpg",
        githubLink: "https://github.com/Anuj-er/Digital-Clock-App/",
        liveLink: "https://eclipse-clock.vercel.app/",
        tags: ["reactjs", "clock", "weather-api", "tailwind-css"],
        order: 7
    },
    {
        title: "Simple-Calculator-App",
        description: "A fast and responsive calculator app with a clean, modern interface built using React and Tailwind CSS.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048064/folio-anuj/Projects/quickCalc.jpg",
        githubLink: "https://github.com/Anuj-er/Simple-Calculator-App/",
        liveLink: "https://quickcalculator.vercel.app/",
        tags: ["calculator", "reactjs", "tailwindcss", "quickcalc"],
        order: 6
    },

    {
        title: "Folio-Anuj",
        description: "A Next.js-based portfolio showcasing my skills, projects, and experiences with interactive features.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048064/folio-anuj/Projects/portfolio.jpg",
        githubLink: "https://github.com/Anuj-er/Folio-Anuj",
        liveLink: "https://anujer.is-a.dev",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
        order: 5
    },
    {
        title: "ProTrack Dashboard",
        description: "A modern project management dashboard with real-time analytics and team collaboration features.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048056/folio-anuj/Projects/Protrack.jpg",
        githubLink: "https://github.com/Jiya-Damara/ProTrack2",
        liveLink: "https://jiya-damara.github.io/ProTrack2/",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Dashboard"],
        order: 4
    },
    {
        title: "Ucampus-InfoSite",
        description: "A website showcasing the Ucampus app designed to enhance the student experience.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048064/folio-anuj/Projects/ucampus.png",
        githubLink: "https://github.com/Anuj-er/Ucampus-InfoSite",
        liveLink: "https://ucampus.vercel.app",
        tags: ["html5", "reactjs", "food-app", "app-information"],
        order: 3
    },
    {
        title: "By The Cook",
        description: "A food recipe website featuring delicious recipes from around the world.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048061/folio-anuj/Projects/bythecook.jpg",
        githubLink: "https://github.com/Anuj-er/Cafe-Website/",
        liveLink: "https://anuj-er.github.io/Cafe-Website/",
        tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Cafe"],
        order: 2
    },
    {
        title: "Library-Management-System-Cpp",
        description: "A console-based Library Management System developed in C++.",
        image: "https://res.cloudinary.com/folioanuj/image/upload/v1771048060/folio-anuj/Projects/interface-c%2B%2B.png",
        githubLink: "https://github.com/Anuj-er/Library-Management-System-Cpp",
        liveLink: "",
        tags: ["C++", "OOP", "CLI"],
        order: 1
    }
];

// Complete Experience List from PreviousWork.tsx (8 items)
const experienceData = [
    {
        title: 'HackFest25',
        description: "Our team had the incredible opportunity to present our innovative idea to experienced mentors. The feedback and insights we received were invaluable, helping us refine our concept and approach.\\n\\nCan't wait to implement the suggestions and take our project to the next level! 💡",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048080/folio-anuj/previous-work/hackfest25.jpg"],
        links: [],
        order: 10
    },
    {
        title: 'HackIndia\'25 Mentoring Experience',
        description: "Mentoring at HackIndia'25, Spark 7 was an incredible journey! 🔥\\n\\nFrom being '404 Name Not Found' (Anushi, Akanksha, Parnika, and I) last year to returning as mentors alongside our seniors - Teena Goyal, TANYA BATRA, Swastik Verma and Khushdeep Sharma. The experience of sharing insights and receiving a 𝗟𝗲𝘁𝘁𝗲𝗿 𝗼𝗳 𝗔𝗽𝗽𝗿𝗲𝗰𝗶𝗮𝘁𝗶𝗼𝗻 made it all worthwhile.\\n\\nWhat started as a learning experience last year transformed into an opportunity to give back. From debugging code to guiding teams, every moment was a chance to share knowledge and grow together. Huge thanks to Stephen SIMON and Evolve AI for making Spark 7 a memorable event. From learning to mentoring, it's been a truly fulfilling experience! 🙌",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048080/folio-anuj/previous-work/hack_gallery.jpg"],
        links: [],
        order: 9
    },
    {
        title: 'FusionFest Hackathon',
        description: "Last month, I had the privilege of participating in the 36-hour Web3 & MERN 'Fusion Fest' hackathon organized by the Design Thinking Club, in collaboration with HackwithIndia, Unstop.",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048080/folio-anuj/previous-work/fusionFest.jpg"],
        links: [],
        order: 8
    },
    {
        title: 'Somnium Victory',
        description: "I am thrilled to share that our team, \"404 Coders\", secured 1st place at the 𝘚𝘖𝘔𝘕𝘐𝘜𝘔 hackathon.",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048076/folio-anuj/previous-work/Somnium.jpg"],
        links: [],
        order: 7
    },
    {
        title: 'TestPad Solution!',
        description: "Back at it with a brand-new repo - this one's bigger, better, and Built with an incredible crew 📣💪",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048076/folio-anuj/previous-work/TestPad.png"],
        links: [
            { text: "TestPad Solution", url: "https://2ly.link/20s9O" },
            { text: "Anuj's GitHub", url: "https://github.com/Anuj-er" }
        ],
        order: 6
    },
    {
        title: "Creating Portfolio Website",
        description: "This project is a showcase of my skills, projects, and accomplishments as a developer. It's a Next.js-based site 🧑‍💻 designed to highlight my journey, experiences, and tech stack while integrating features like an interactive gallery 📸, recent updates section 📰.",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048070/folio-anuj/og_image.jpg"],
        links: [],
        order: 5
    },
    {
        title: 'HackIndia Hackathon Experience!',
        description: "Just Posted a Linkedin Post sharing my HackIndia Experience",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048072/folio-anuj/previous-work/HackIndia.jpg"],
        links: [
            { text: "here", url: "https://www.linkedin.com/posts/anuj-er_hackindia-hackindia2024-404namenotfound-activity-7253842414077915137-des2?utm_source=share&utm_medium=member_desktop" }
        ],
        order: 4
    },
    {
        title: 'UCampus Info-site',
        description: "UCampus Info-site is a platform showcasing the UCampus app, aimed at enhancing the student experience by simplifying key tasks such as food ordering from on-campus outlets, purchasing gym memberships, and managing uniform orders. The site provides detailed information on all app features, giving students a streamlined way to interact with campus services.    Check it out",
        images: [
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048084/folio-anuj/previous-work/og_image.png",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048080/folio-anuj/previous-work/homepage.png",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048076/folio-anuj/previous-work/explore.png",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048080/folio-anuj/previous-work/food_outlet.png"
        ],
        links: [
            { text: "here", url: "https://ucampus.vercel.app" }
        ],
        order: 3
    },
    {
        title: 'ProTrack',
        description: "Built ProTrack, a collaborative platform developed as a team project to track analytics and reports. This platform provides users with comprehensive insights and performance tracking across various domains, enabling informed decision-making and strategic planning. Check it out",
        images: [
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048076/folio-anuj/previous-work/Protrack.jpg",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048072/folio-anuj/previous-work/Protrack-2.png",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048072/folio-anuj/previous-work/Protrack-3.png",
            "https://res.cloudinary.com/folioanuj/image/upload/v1771048076/folio-anuj/previous-work/Protrack-4.png"
        ],
        links: [
            { text: "here", url: "https://jiya-damara.github.io/ProTrack2/" }
        ],
        order: 2
    },
    {
        title: 'Dean\'s List',
        description: "Excited to share that I've made the Dean's List! 🎉 Check out my latest LinkedIn post to see the recognition and what it means to me.",
        images: ["https://res.cloudinary.com/folioanuj/image/upload/v1771048072/folio-anuj/previous-work/Dean-list.jpg"],
        links: [
            { text: "here", url: "https://www.linkedin.com/posts/anuj-er_starprogrammer-codingcommunity-activity-7196424956539203586-jgHw?utm_source=share&utm_medium=member_desktop" }
        ],
        order: 1
    }
];

async function seed() {
    try {
        console.log('🌱 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected');

        // PRODUCTION GUARD
        if (process.env.NODE_ENV === 'production') {
            console.error('⚠️  CRITICAL: Seeding is disabled in PRODUCTION mode to prevent data loss.');
            console.log('💡 To seed in production, you must temporarily change NODE_ENV or use a separate staging database.');
            process.exit(1);
        }

        console.log('🧹 Clearing existing data...');
        await About.deleteMany({});
        await Project.deleteMany({});
        await Experience.deleteMany({});

        console.log('🚀 Seeding About section...');
        await About.create(aboutData);

        console.log(`🚀 Seeding \${projectsData.length} Projects...`);
        await Project.insertMany(projectsData);

        console.log(`🚀 Seeding \${experienceData.length} Experience/Timeline entries...`);
        await Experience.insertMany(experienceData);

        console.log('✨ Database seeded successfully with COMPLETE data!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding error:', error);
        process.exit(1);
    }
}

seed();
