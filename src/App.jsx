// App.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

// --- Data Definitions (Unchanged) ---
const projects = [
  {
    title: "🚜 Work Dairy Management (Farm CRM & Payment Tracking System)",
    tag: "Featured • Real World",
    tech: ["React Native CLI", "Node.js", "Express", "MongoDB", "REST API"],
    description:
      "End-to-end mobile solution to track grass-cutting & tractor trips, driver earnings, and CRM-based payment settlements with smart auto-calculation.",
    bullets: [
      "Automatic share calculations for Trips & Kattalu",
      "Ledger-style CRM for farmer & driver settlements",
      "Dashboard with daily earnings & booking summary",
      "Real-time data refetch using useFocusEffect & useCallback",
    ],
    links: {
      demo: "https://your-demo-link.com",
      backend: "https://github.com/yourname/workdairy-backend",
      mobile: "https://github.com/yourname/workdairy-reactnative",
      api: "https://documenter.getpostman.com/view/workdairy-api",
    },
  },
  {
    title: "🏥 Hospital Appointment Booking App",
    tag: "Full Stack • MERN",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    description:
      "Dual-interface platform for patients and admins to manage appointments, doctors, and schedules seamlessly.",
  },
  {
    title: "🐄 LivestockXpress – Livestock Buy/Sell App",
    tag: "Mobile • Frontend",
    tech: ["React Native", "React Navigation", "Google AdMob"],
    description:
      "Mobile app UI for buying/selling livestock with ads integration and clean navigation flows.",
  },
  {
    title: "💬 Social Media Web App",
    tag: "Full Stack • Real-time",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Socket.IO", "MUI"],
    description:
      "Social platform with login, posts, likes, comments, and 1-to-1 real-time chat using Socket.IO.",
  },
  {
    title: "🛍 ShopSwift – E-Commerce Web App",
    tag: "Frontend • React",
    tech: ["React", "Vite", "Redux", "Tailwind CSS", "React Router"],
    description:
      "E-commerce web app supporting filters, product details, cart, and authentication-ready structure.",
  },
];

const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "React Native",
      "JavaScript",
      "HTML",
      "CSS",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "MUI",
    ],
  },
  { group: "Backend", items: ["Node.js", "Express.js", "Python"] },
  { group: "Database", items: ["MongoDB", "MySQL", "SQLite", "SQL"] },
  {
    group: "Tools",
    items: ["Git", "Postman", "Power BI (Basic)", "MS Office"],
  },
];

const education = [
  {
    title: "B.Tech in Civil Engineering",
    place: "Ramachandra College of Engineering, Eluru",
    time: "2021 – 2024",
  },
  {
    title: "Diploma in Civil Engineering",
    place: "Govt. Polytechnic, Jangareddigudem",
    time: "2018 – 2021",
  },
  {
    title: "SSC",
    place: "ZPP High School",
    time: "2017 – 2018",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

// --- Component Definitions (Added/Completed) ---

/**
 * Helper component for consistent section headings.
 */
function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.4 }}
      className="space-y-1"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
        {subtitle}
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold">{title}</h2>
    </motion.div>
  );
}

/**
 * Helper component for displaying technology icons and labels.
 */
function TechBadge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 backdrop-blur">
      <span className="text-base">{icon}</span>
      <span className="text-[11px] uppercase tracking-[0.18em]">{label}</span>
    </div>
  );
}

// --- Main App Component ---
function App() {
  return (
    <div className="min-h-screen bg-[#050709] text-slate-100 font-sans">
      {/* Background gradient */}
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -top-40 -left-40 h-80 w-80 bg-emerald-500 blur-3xl rounded-full" />
        <div className="absolute top-40 right-[-120px] h-96 w-96 bg-indigo-500 blur-3xl rounded-full" />
      </div>

      <main className="relative max-w-6xl mx-auto px-4 md:px-8 py-10 space-y-20">
        {/* Navbar */}
        <header className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-300 flex items-center justify-center text-xl font-bold">
              S
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-emerald-300">
                Full-Stack Developer
              </p>
              <p className="text-sm text-slate-400">
                MERN & React Native • India
              </p>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex gap-6 text-sm text-slate-300"
          >
            <a href="#projects" className="hover:text-emerald-300 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-emerald-300 transition">
              Skills
            </a>
            <a href="#education" className="hover:text-emerald-300 transition">
              Education
            </a>
            <a href="#contact" className="hover:text-emerald-300 transition">
              Contact
            </a>
          </motion.nav>
        </header>

        {/* Hero */}
        <section
          id="hero"
          className="grid md:grid-cols-[3fr,2fr] gap-8 items-center"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
              Hello, I’m Srinivas Kota
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              I build <span className="text-emerald-300">real-world apps</span>{" "}
              with <br className="hidden sm:block" />
              clean UI & smart logic.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl">
              A passionate Full-Stack MERN & React Native developer with a civil
              engineering background. I love turning on-ground problems like
              farm work management or hospital operations into smooth digital
              experiences.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-emerald-400 text-black hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/25"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 border border-white/10 hover:border-emerald-300 hover:bg-white/10 transition"
              >
                Hire Me
              </a>
              <div className="flex gap-3 text-xl ml-1">
                <a
                  href="https://github.com/developersrinivas"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/developersrinivas"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-300 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            <div className="flex gap-4 text-xs sm:text-sm text-slate-300 flex-wrap">
              <TechBadge icon={<FaReact />} label="React & React Native" />
              <TechBadge icon={<FaNodeJs />} label="Node + Express" />
              <TechBadge icon={<SiMongodb />} label="MongoDB" />
              <TechBadge icon={<SiJavascript />} label="JavaScript" />
            </div>
          </motion.div>

          {/* Right - Animated Card */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-lime-400/20 to-transparent blur-2xl rounded-3xl -z-10" />
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 space-y-4 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-300">
                Featured Project
              </p>
              <h2 className="text-lg font-semibold">
                🚜 Work Dairy Management
              </h2>
              <p className="text-xs text-slate-300">
                Farm CRM & Payment Tracking app managing grass-cutting tasks,
                tractor trips, and driver earnings with auto calculations.
              </p>
              <ul className="text-xs text-slate-200 list-disc list-inside space-y-1">
                <li>Auto share calc for Trips & Kattalu</li>
                <li>Ledger view for settlements</li>
                <li>Built with React Native + Node + MongoDB</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-[10px]">
                <span className="px-2.5 py-1 rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200">
                  Real-world farm use case
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
                  Full Stack Ownership
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <SectionHeading
            title="Projects"
            subtitle="Things I’ve built & shipped"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="group rounded-2xl border border-white/10 bg-white/5/5 hover:bg-white/10 transition overflow-hidden flex flex-col"
              >
                <div className="p-5 space-y-3 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-base sm:text-lg font-semibold">
                      {project.title}
                    </h3>
                    {index === 0 && (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-emerald-400/20 text-emerald-200 border border-emerald-300/40">
                        Featured
                      </span>
                    )}
                  </div>
                  {project.tag && (
                    <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                      {project.tag}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-slate-200">
                    {project.description}
                  </p>

                  {project.bullets && (
                    <ul className="text-xs text-slate-200 list-disc list-inside space-y-1">
                      {project.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-full bg-black/40 border border-white/10 text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && (
                  <div className="px-5 py-3 flex flex-wrap gap-3 text-[11px] border-t border-white/5 bg-black/20">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-2 hover:underline text-emerald-300"
                      >
                        🔗 Demo / APK
                      </a>
                    )}
                    {project.links.backend && (
                      <a
                        href={project.links.backend}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        💾 Backend Repo
                      </a>
                    )}
                    {project.links.mobile && (
                      <a
                        href={project.links.mobile}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        📱 Mobile Repo
                      </a>
                    )}
                    {project.links.api && (
                      <a
                        href={project.links.api}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-2 hover:underline"
                      >
                        📜 API Docs
                      </a>
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <SectionHeading title="Skills" subtitle="Technologies I work with" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid md:grid-cols-2 gap-6"
          >
            {skills.map((block) => (
              <div
                key={block.group}
                className="rounded-2xl border border-white/10 bg-black/30 p-5 space-y-3"
              >
                <p className="text-sm font-medium text-emerald-200">
                  {block.group}
                </p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {block.items.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            <div className="md:col-span-2 rounded-2xl border border-emerald-400/40 bg-emerald-400/10 p-5 space-y-3">
              <p className="text-sm font-medium text-emerald-100">
                Soft Skills
              </p>
              <p className="text-xs text-emerald-50/90">
                Communication • Teamwork • Problem Solving • Client-focused
                mindset • Learning agility • Adaptability
              </p>
            </div>
          </motion.div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <SectionHeading title="Education" subtitle="Where I started" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="space-y-4"
          >
            {education.map((e) => (
              <div
                key={e.title}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 rounded-2xl border border-white/10 bg-black/25 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium">{e.title}</p>
                  <p className="text-xs text-slate-300">{e.place}</p>
                </div>
                <p className="text-xs text-slate-400">{e.time}</p>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6 pb-10">
          <SectionHeading
            title="Let’s Work Together"
            subtitle="Say hi or share your idea"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid md:grid-cols-[3fr,2fr] gap-6"
          >
            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 space-y-4">
              <p className="text-sm text-slate-200">
                Have an app idea, CRM requirement, or want to convert a manual
                process into a clean digital workflow? I’d love to help.
              </p>
              <form
                className="space-y-3 text-xs sm:text-sm"
                onSubmit={(e) => {
                  e.preventDefault();

                  const name = e.target[0].value;
                  const email = e.target[1].value;
                  const message = e.target[2].value;

                  const text = `Hi Srinivas, I am ${name}. My email is ${email}. Message: ${message}`;

                  const encoded = encodeURIComponent(text);

                  // Change this number to your WhatsApp number
                  window.open(
                    `https://wa.me/917207364266?text=${encoded}`,
                    "_blank"
                  );
                }}
              >
                <div className="grid sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 outline-none focus:border-emerald-300"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="bg-black/40 border border-white/15 rounded-xl px-3 py-2 outline-none focus:border-emerald-300"
                    required
                  />
                </div>

                <textarea
                  rows="4"
                  placeholder="Tell me about your project / idea..."
                  className="w-full bg-black/40 border border-white/15 rounded-xl px-3 py-2 outline-none focus:border-emerald-300 resize-none"
                  required
                />

                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-emerald-400 text-black text-sm font-medium hover:bg-emerald-300 transition shadow-lg shadow-emerald-500/25"
                >
                  Send Message (WhatsApp)
                </button>
              </form>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/25 p-5 space-y-4 text-xs sm:text-sm">
              <p className="font-medium text-slate-100">Contact Info</p>
              <div className="space-y-2 text-slate-300">
                <p>📍 Jangareddygudem, Andhra Pradesh, India</p>
                <p>📞 +91 7207364266</p>
                <p>📧 kotasrinivas51@gmail.com</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-slate-100">Links</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://github.com/developersrinivas"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-emerald-300 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/developersrinivas"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-emerald-300 transition"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://wa.me/917207364266"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-emerald-300 transition"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                “Code is my new construction site – instead of bricks and
                cement, I now use components and APIs.” 🧱💻
              </p>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}

export default App;
