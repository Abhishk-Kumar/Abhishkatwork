import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
	  ArrowUpRight,
	  Brain,
	  Bot,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Database,
  Eye,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  Send,
  ShieldCheck,
  Sparkles,
  Video,
  X,
} from "lucide-react";

type Project = {
  id: string;
  title: string;
  badge: string;
  year: string;
  summary: string;
  overview: string;
  goals: string;
  problem: string;
  features: string[];
  frontend: string;
  backend: string;
  ai?: string;
  challenges: string;
  implementation: string;
  results: string;
  future: string;
	  tech: string[];
	  image?: string;
	  images?: string[];
  live?: string;
  github?: string;
  accent: "cyan" | "amber" | "violet" | "green";
  placement: "featured" | "gallery";
};

const projects: Project[] = [
  {
    id: "biz-trade-mart",
    title: "Biz Trade Mart",
    badge: "Frontend Developer · Team role",
    year: "2024",
    summary: "A faster, more resilient B2B marketplace for buyers and verified suppliers across 100+ countries.",
    overview: "Multi-country B2B marketplace connecting buyers and verified suppliers through RFQ requests, seller discovery, and category browsing.",
    goals: "Give buyers and suppliers a reliable marketplace experience at scale while shipping new modules quickly.",
    problem: "Marketplace discovery and supplier communication needed to feel fast and trustworthy across a broad set of categories and markets.",
    features: ["RFQ request journeys", "Supplier discovery", "Category browsing", "Optimistic UI states"],
    frontend: "React component library with Tailwind CSS, reusable layout primitives, lazy loading, code splitting, and memoization.",
    backend: "RESTful API contracts with resilient error boundaries and optimistic updates across client-facing dashboards.",
    challenges: "Balancing a large product surface with consistent UI behavior and reliable cross-browser performance.",
    implementation: "Architected a scalable component library using OOP principles, performance budgets, lazy-loading, code-splitting, memoization, and reusable API contracts.",
    results: "UI development time reduced by 40%; Lighthouse performance improved from 62 to 91; 30+ cross-browser regressions resolved.",
    future: "Continue expanding supplier intelligence, richer buyer workflows, and more granular marketplace analytics.",
	    tech: ["React", "Tailwind CSS", "REST APIs"],
	    image: "/assets/projects/biz-trade-mart.png",
	    images: ["/assets/projects/biz-trade-mart.png", "/assets/projects/biz-trade-mart-2.png", "/assets/projects/biz-trade-mart-3.png", "/assets/projects/biz-trade-mart-4.png"],
    live: "https://www.biztrademart.com/",
    accent: "cyan",
    placement: "featured",
  },
  {
    id: "e-consultancy",
    title: "e-Consultancy",
    badge: "Freelance project",
    year: "2025",
    summary: "A self-serve consulting platform for booking, service discovery, and client management.",
    overview: "A consulting platform with client booking and service-management flows, delivered end-to-end as a freelance engagement.",
    goals: "Give a consultancy client a self-serve booking system that reduces manual scheduling back-and-forth.",
    problem: "Consultation requests and service details needed a clear, low-friction path from discovery to confirmed booking.",
    features: ["Service browsing", "Client booking", "Schedule management", "Responsive client flows"],
    frontend: "Responsive frontend patterns for service browsing, scheduling, and clear client-facing states.",
    backend: "FastAPI service layer handling booking logic, service management, and the core request lifecycle.",
    challenges: "Keeping scheduling states understandable while making the experience feel lightweight and dependable.",
    implementation: "Built a FastAPI backend for booking and service management, paired with a responsive frontend focused on scheduling clarity.",
    results: "Delivered an end-to-end freelance product that gives the client a more self-serve consultation workflow.",
    future: "Add reminders, calendar sync, richer availability rules, and an authenticated client workspace.",
	    tech: ["FastAPI", "Python", "Full-stack"],
	    image: "/assets/projects/e-consultancy.png",
	    images: ["/assets/projects/e-consultancy.png", "/assets/projects/e-consultancy-2.png", "/assets/projects/e-consultancy-3.png", "/assets/projects/e-consultancy-4.png"],
    live: "https://e-consultancy.onrender.com/",
    accent: "amber",
    placement: "featured",
  },
  {
    id: "azolic",
    title: "Azolic",
    badge: "Client project · In development",
    year: "2025–2026",
    summary: "A polished agency platform for content, advertising, and automated brand workflows.",
    overview: "A platform for Azolic, a content, advertising, and sales agency offering high-end editing and automated content workflows to scale client brands.",
    goals: "Present Azolic's services clearly and position the agency as an end-to-end content partner.",
    problem: "A broad service offering needed a clear, premium digital home that could communicate capability without adding friction.",
    features: ["Agency service presentation", "Content workflow storytelling", "Brand-led landing sections", "Conversion-oriented CTAs"],
    frontend: "Next.js page architecture focused on clean presentation, modular sections, and responsive storytelling.",
    backend: "The current build is presentation-led; future workflow services can be connected through a dedicated service layer.",
    challenges: "Making multiple agency capabilities feel like one coherent, high-confidence brand experience.",
    implementation: "Building the frontend in Next.js and deploying on Vercel with a focus on service clarity and workflow automation messaging.",
    results: "Created a clear foundation for showcasing Azolic's content, advertising, and sales capabilities.",
    future: "Expand automated content workflows, case studies, lead capture, and richer service onboarding.",
	    tech: ["Next.js", "Vercel"],
	    image: "/assets/projects/azolic.png",
	    images: ["/assets/projects/azolic.png", "/assets/projects/azolic-2.png", "/assets/projects/azolic-3.png", "/assets/projects/azolic-4.png"],
    live: "https://azura-rose.vercel.app/",
    accent: "violet",
    placement: "featured",
  },
  {
    id: "repogent-ai",
    title: "Repogent AI",
    badge: "Personal project",
    year: "2025",
    summary: "Turn any GitHub repository into a dependency graph and natural-language onboarding partner.",
    overview: "An AI agent that turns any GitHub repository into an interactive dependency graph and natural-language Q&A chat.",
    goals: "Make codebase exploration conversational instead of manual file-hunting for new contributors.",
    problem: "Large repositories hide architecture and intent across hundreds of files, making onboarding slow and fragmented.",
    features: ["Repository parsing", "Dependency graph generation", "Natural-language Q&A", "Semantic code retrieval"],
    frontend: "Interactive graph and chat surfaces designed to make repository structure explorable and legible.",
    backend: "Multi-agent orchestration with LangChain, LangGraph, ChromaDB retrieval, and Groq/Mistral inference.",
    ai: "Parsing, summarization, Q&A, and graph-generation agents collaborate through a structured pipeline.",
    challenges: "Preserving useful context while processing repositories with diverse structures and large file counts.",
    implementation: "Built an agentic pipeline that parses, summarizes, retrieves, answers, and maps repository relationships.",
    results: "Supports 500+ file repositories in under 60 seconds with sub-2-second Q&A response latency.",
    future: "Add pull-request awareness, team workspaces, visual diffing, and richer architecture recommendations.",
	    tech: ["LangChain", "LangGraph", "ChromaDB", "Python", "Groq/Mistral API"],
	    image: "/assets/projects/repogent-ai.png",
	    images: ["/assets/projects/repogent-ai.png", "/assets/projects/repogent-ai-2.png", "/assets/projects/repogent-ai-3.png", "/assets/projects/repogent-ai-4.png"],
    live: "https://repoonboarding-agent.onrender.com/",
    accent: "cyan",
    placement: "gallery",
  },
  {
    id: "hirelens",
    title: "HireLens",
    badge: "Personal project",
    year: "2025",
    summary: "An AI-assisted resume screening workspace for structured candidate comparison.",
    overview: "An AI resume-screening platform that batch-processes resumes and generates structured strength and weakness reports per candidate.",
    goals: "Cut manual resume-screening time while keeping ranking quality consistent with manual review.",
    problem: "Recruiting teams need consistent comparisons across many resumes without losing the nuance of candidate strengths.",
    features: ["Batch resume processing", "Structured reports", "Candidate ranking", "Comparative grading"],
    frontend: "Streamlit workflows that make uploads, evaluation states, and candidate comparisons easy to scan.",
    backend: "LangChain and Groq evaluation pipeline with FAISS vector search and schema-enforced structured outputs.",
    ai: "Parallelized LLM evaluation calls produce consistent structured candidate assessments.",
    challenges: "Combining flexible language-model reasoning with predictable, reviewable output schemas.",
    implementation: "Built comparative grading with vector search, JSON schema enforcement, and parallel LLM evaluation calls.",
    results: "Created a faster screening workflow that helps compare candidates with a more repeatable evaluation structure.",
    future: "Add recruiter collaboration, custom scorecards, calibrated rubrics, and exportable hiring packets.",
	    tech: ["LangChain", "Groq", "FAISS", "Streamlit"],
	    image: "/assets/projects/hirelens.png",
	    images: ["/assets/projects/hirelens.png", "/assets/projects/hirelens-2.png", "/assets/projects/hirelens-3.png", "/assets/projects/hirelens-4.png"],
    live: "https://hirelens-screener.streamlit.app/",
    accent: "amber",
    placement: "gallery",
  },
  {
    id: "mediconnect",
    title: "MediConnect",
    badge: "Personal project",
    year: "2024",
    summary: "A real-time healthcare scheduling experience with messaging and role-aware access.",
    overview: "A full-stack healthcare appointment platform with real-time doctor-patient messaging and conflict-free scheduling.",
    goals: "Explore a real-time, real-world-feeling healthcare product with proper authentication and messaging infrastructure.",
    problem: "Healthcare scheduling requires dependable availability, clear roles, and communication that feels immediate but safe.",
    features: ["Appointment scheduling", "Doctor-patient messaging", "Role-based access", "Appointment analytics"],
    frontend: "React interfaces for appointment discovery, role-specific dashboards, and real-time communication states.",
    backend: "Node.js, Express, MongoDB, JWT refresh-token rotation, and Socket.io real-time messaging.",
    challenges: "Coordinating scheduling conflicts, real-time events, and secure role-aware workflows in one product.",
    implementation: "Combined Socket.io messaging, JWT authentication, and optimized MongoDB aggregation pipelines for appointment analytics.",
    results: "Designed for sub-100ms appointment analytics queries under concurrent load.",
    future: "Add provider calendars, reminders, richer audit trails, and integrations with healthcare scheduling systems.",
	    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Socket.io"],
	    image: "/assets/projects/mediconnect.png",
	    images: ["/assets/projects/mediconnect.png", "/assets/projects/mediconnect-2.png", "/assets/projects/mediconnect-3.png", "/assets/projects/mediconnect-4.png"],
    accent: "green",
    placement: "gallery",
  },
];

const featuredProjects = projects.filter((project) => project.placement === "featured");
const galleryProjects = projects.filter((project) => project.placement === "gallery");

const skills = [
  { icon: Code2, title: "Full Stack Engineering", tag: "WEB3.0", tone: "cyan", copy: "Building scalable, robust web applications from intuitive frontends to complex backend infrastructures.", items: ["SPA Development", "API Integration", "Database Design"] },
  { icon: Bot, title: "AI Solutions", tag: "CORE", tone: "blue", copy: "Integrating advanced AI models to create intelligent chatbots, predictive systems, and automated workflows.", items: ["LLM Integration", "Neural Networks", "Smart Agents"] },
  { icon: Sparkles, title: "Automation", tag: "BOTS", tone: "rose", copy: "Streamlining business processes with custom bots, scrapers, and workflow automation tools.", items: ["Browser Automation", "Data Extraction", "Workflow Scripts"] },
  { icon: Palette, title: "Design", tag: "UI/UX", tone: "amber", copy: "Creating visual experiences with modern design principles, from wireframes to polished interfaces.", items: ["Figma", "Brand Identity", "Motion Graphics"] },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="section-label">{children}</span>;
}

function ScreenshotPlaceholder({ project, index = 1, compact = false }: { project: Project; index?: number; compact?: boolean }) {
  return (
    <div className={`screenshot-placeholder accent-${project.accent} ${compact ? "compact" : ""}`}>
      <div className="placeholder-scanline" />
      <div className="placeholder-symbol">{project.id === "repogent-ai" ? "◈" : project.id === "hirelens" ? "⌁" : project.id === "mediconnect" ? "✚" : "◌"}</div>
      <span>{project.title.toUpperCase()} · SCREENSHOT {index}</span>
      <small>Add {index}.png to the project screenshot folder</small>
    </div>
  );
}

function ProjectScreenshot({ project, compact = false, index = 1 }: { project: Project; compact?: boolean; index?: number }) {
  const [failed, setFailed] = useState(false);
  const source = project.images?.[index - 1] ?? project.image;
  if (!source || failed) return <ScreenshotPlaceholder project={project} index={index} compact={compact} />;
  return <div className={`project-image-frame accent-${project.accent} ${compact ? "compact" : ""}`}><img src={source} alt={`${project.title} project screenshot ${index}`} loading="lazy" onError={() => setFailed(true)} /></div>;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-card-top"><span className="year-chip">{project.year}</span><span className="badge-chip">{project.badge}</span></div>
      <button className="project-card-preview" onClick={() => onOpen(project)} aria-label={`Open details for ${project.title}`}><ProjectScreenshot project={project} compact /><div className="project-hover"><span className="eye-button"><Eye size={20} /></span><span>OPEN CASE STUDY</span></div></button>
      <div className="project-card-footer"><div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tech-line">{project.tech.slice(0, 3).join(" · ")}</div></div><ArrowUpRight size={17} /></div>
      <div className="project-card-actions"><button className="project-action primary" onClick={() => onOpen(project)}>VIEW PROJECT <ArrowUpRight size={13} /></button>{project.github && <a className="project-action" href={project.github} target="_blank" rel="noreferrer"><Github size={13} /> GITHUB</a>}</div>
    </article>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [shot, setShot] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => { setShot(0); if (project) { document.body.classList.add("modal-open"); closeButtonRef.current?.focus(); } else document.body.classList.remove("modal-open"); return () => document.body.classList.remove("modal-open"); }, [project]);
  useEffect(() => { if (!project) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); if (event.key === "ArrowRight") setShot((value) => (value + 1) % 4); if (event.key === "ArrowLeft") setShot((value) => (value + 3) % 4); }; window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, [project, onClose]);
  if (!project) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}><section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title"><div className="modal-heading"><div><div className={`modal-meta accent-text-${project.accent}`}>{project.badge} · {project.year}</div><h2 id="project-modal-title">{project.title}</h2></div><button ref={closeButtonRef} className="icon-button" onClick={onClose} aria-label="Close project details"><X size={20} /></button></div><div className="modal-screens"><ProjectScreenshot project={project} index={shot + 1} /><div className="screenshot-controls"><button className="icon-button" onClick={() => setShot((value) => (value + 3) % 4)} aria-label="Previous screenshot"><ArrowLeft size={17} /></button><div className="screenshot-dots">{[0, 1, 2, 3].map((index) => <button key={index} aria-label={`Show screenshot ${index + 1}`} className={shot === index ? "active" : ""} onClick={() => setShot(index)} />)}</div><button className="icon-button" onClick={() => setShot((value) => (value + 1) % 4)} aria-label="Next screenshot"><ArrowRight size={17} /></button></div></div><div className="modal-techline">{project.tech.join(" · ")}</div><div className="modal-body"><DetailBlock title="Overview"><p>{project.overview}</p></DetailBlock><DetailBlock title="Goals"><p>{project.goals}</p></DetailBlock><DetailBlock title="Problem Statement"><p>{project.problem}</p></DetailBlock><DetailBlock title="Key Features"><ul>{project.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul></DetailBlock><DetailBlock title="Frontend Architecture"><p>{project.frontend}</p></DetailBlock><DetailBlock title="Backend Architecture"><p>{project.backend}</p></DetailBlock>{project.ai && <DetailBlock title="AI Components"><p>{project.ai}</p></DetailBlock>}<DetailBlock title="Technical Challenges"><p>{project.challenges}</p></DetailBlock><DetailBlock title="Technical Implementation"><p>{project.implementation}</p></DetailBlock><DetailBlock title="Tech Stack"><div className="modal-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></DetailBlock><DetailBlock title="Results"><p>{project.results}</p></DetailBlock><DetailBlock title="Future Improvements"><p>{project.future}</p></DetailBlock></div><div className="modal-actions">{project.live && <a className="primary-button" href={project.live} target="_blank" rel="noreferrer">VIEW LIVE PROJECT <ExternalLink size={15} /></a>}{project.github && <a className="secondary-button" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> GITHUB</a>}</div></section></div>;
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) { return <div className="detail-block"><h3>{title}</h3>{children}</div>; }

function SkillDomain({ title, label, items, tone }: { title: string; label: string; items: string[]; tone: string }) { return <article className={`skill-domain tone-${tone}`}><div className="skill-domain-heading"><span className="domain-dot" /><div><SectionLabel>{label}</SectionLabel><h3>{title}</h3></div></div><div className="domain-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>; }

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [paused, setPaused] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const visibleGallery = useMemo(() => filter === "All" ? galleryProjects : galleryProjects.filter((project) => filter === "AI / ML" ? project.id === "repogent-ai" || project.id === "hirelens" : filter === "Full Stack" ? project.id === "mediconnect" : false), [filter]);
	  useEffect(() => { if (selectedProject) return; const timer = window.setInterval(() => setActiveSlide((value) => (value + 1) % featuredProjects.length), 4500); return () => window.clearInterval(timer); }, [selectedProject]);
	  useEffect(() => { document.body.classList.toggle("mobile-menu-open", mobileMenu); return () => document.body.classList.remove("mobile-menu-open"); }, [mobileMenu]);
	  useEffect(() => { const topbar = document.querySelector(".topbar"); const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a")); const sections = ["about", "experience", "skills", "works", "contact"].map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]; const updateScrolled = () => topbar?.classList.toggle("is-scrolled", window.scrollY > 18); const setActive = (id: string) => links.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${id}`)); updateScrolled(); setActive("about"); window.addEventListener("scroll", updateScrolled, { passive: true }); const observer = new IntersectionObserver((entries) => { const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]; if (visible) setActive(visible.target.id); }, { rootMargin: "-26% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] }); sections.forEach((section) => observer.observe(section)); return () => { window.removeEventListener("scroll", updateScrolled); observer.disconnect(); }; }, []);
   const activeProject = featuredProjects[activeSlide];
  return <div className="portfolio-shell">
    <header className="topbar"><div className="container nav-inner"><a className="brand" href="#about"><span>ABHISHEK</span> KUMAR</a><div className="status-pill"><i /> SYSTEMS ONLINE</div><nav className={mobileMenu ? "nav-links open" : "nav-links"}>{["about", "experience", "skills", "works", "contact"].map((item) => <a key={item} href={`#${item}`} onClick={() => setMobileMenu(false)}>{item === "works" ? "Best Works" : item === "contact" ? "Contacts" : item === "about" ? "About Me" : item[0].toUpperCase() + item.slice(1)}</a>)}</nav><div className="nav-actions"><span className="language-chip">EN <span>⇄</span></span><a className="hire-button" href="#contact">AVAILABLE FOR HIRE</a><button className="menu-button" onClick={() => setMobileMenu((value) => !value)} aria-label="Toggle navigation">{mobileMenu ? <X size={19} /> : <Menu size={19} />}</button></div></div></header>
    <main>
      <section id="about" className="hero-section container"><div className="section-intro center"><h1>About <span>Me</span></h1><div className="title-rule" /><p>I’m an AI engineer who builds LLM-powered products end to end: RAG pipelines, vector search, agent workflows and FastAPI backends, with clean frontends on top. I help startups and clients ship reliable AI features fast.</p></div><div className="hero-grid"><div className="profile-card hud-card"><div className="portrait"><div className="portrait-glow" /><div className="portrait-core">⚡<div /></div><span className="mono cyan">AI ENGINEER · FULL STACK</span><strong>Abhishek Kumar</strong><div className="portrait-tag">⚡ SYSTEMS <b>ONLINE</b></div><span className="command-pill">&gt;_</span><div className="available-pill">● AVAILABLE FOR HIRE</div><div className="location"><MapPin size={12} /> India · Open to Pune / Remote</div></div><div className="language-row"><span>🇬🇧 <b>English</b> <em>(Fluent)</em></span><span>🇮🇳 <b>Hindi</b> <em>(Native)</em></span><span>🤖 <b>Binary / Code</b> <em>(0101)</em></span></div></div><div className="profile-copy hud-card"><div className="card-topline"><span className="mono cyan">● CORE SPECIALIZATION</span><a className="small-button" href="#contact">📄 LOAD FULL PROFILE <ArrowUpRight size={13} /></a></div><div className="copy-body"><h2>Engineering the<br /><span>Intelligent Web</span></h2><p>I am an <b>AI Engineer</b> and <b>Full Stack Developer</b> focused on turning language models into useful products. My work sits at the intersection of clean code, thoughtful design, and applied AI.</p><p>I build with <strong className="amber">Python</strong>, <strong className="cyan">React / Next.js</strong>, and modern <strong className="violet">LLM tooling</strong> like LangChain, LangGraph and vector databases, from semantic search and RAG to agent workflows, shipping AI features that are practical, reliable and well documented.</p></div><div className="metrics"><div><b>1+</b><span>YEARS EXP</span></div><div><b className="cyan">3+</b><span>AI PROJECTS</span></div><div><b className="amber">35%</b><span>RAG RELEVANCE GAIN</span></div><div><b>2</b><span>INDUSTRY ROLES</span></div></div></div></div></section>
	      <section id="experience" className="section container"><div className="section-heading"><div><SectionLabel>EXPERIENCE</SectionLabel><h2>Where I've worked</h2></div><a href="#contact" className="muted-link">More about my journey <ArrowRight size={13} /></a></div><div className="timeline"><Experience title="Frontend Developer" company="Biz Trade Mart — Bizindo Trade Mart Pvt. Ltd." date="Dec 2024 – Feb 2026" mode="Remote" tone="green" bullets={["Architected a scalable component library in React.js with Tailwind CSS using OOP principles, reducing UI development time by 40% across 10+ product modules.", "Engineered lazy-loading, code-splitting, and memoization strategies that improved Lighthouse performance from 62 to 91.", "Designed RESTful API contracts and resolved 30+ cross-browser regressions, reducing production bug reports by 35%."]} /><Experience title="AI Research Intern" company="Planto AI" date="Nov 2024 – May 2025" mode="Remote" tone="cyan" bullets={["Contributed to a 6-month AI copilot research effort, designing prompt engineering and RAG workflows that improved response relevance by 35%.", "Built and evaluated LangChain features against 500+ test queries to reduce hallucination rate by approximately 25%.", "Optimized vector retrieval and cut average copilot response latency by 30%."]} /></div></section>
	      <section id="skills" className="section container"><div className="section-intro center"><SectionLabel>TECHNICAL ARCHITECTURE</SectionLabel><h2>Skills &amp; Ecosystem Matrix</h2><p>From RAG pipelines and LLM apps to polished client-facing products.</p></div><div className="skills-radar-layout"><div className="skills-domain-stack"><SkillDomain title="AI &amp; LLM Engineering" label="AI &amp; LLM ENGINEERING" items={["LLM APIs", "LangChain", "LangGraph", "RAG Pipelines", "Vector DB (ChromaDB)", "Hugging Face", "Prompt Engineering", "LLM Evaluation"]} tone="cyan" /><SkillDomain title="Automation &amp; Agents" label="AUTOMATION &amp; AGENTS" items={["Smart Agents", "Browser Automation", "Data Extraction", "Workflow Scripts", "Chrome Extensions"]} tone="violet" /></div><div className="experience-core" aria-label="1 plus years experience, AI and full stack"><div className="experience-ring" /><div className="experience-core-inner"><Brain size={34} /><strong>1+</strong><span>EXPERIENCE</span><small>AI + FULL STACK</small></div></div><div className="skills-domain-stack"><SkillDomain title="Backend Logic &amp; Data" label="BACKEND LOGIC &amp; DATA" items={["Python / FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "REST API", "Docker"]} tone="amber" /><SkillDomain title="Frontend &amp; Design" label="FRONTEND &amp; DESIGN" items={["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Figma", "Design Systems"]} tone="rose" /></div></div></section>
	      <section id="works" className="section container"><div className="section-heading"><div><h2>Best Works</h2><SectionLabel>CURATED PORTFOLIO SELECTION</SectionLabel></div><div className="carousel-controls"><button className="icon-button" onClick={() => setActiveSlide((value) => (value + featuredProjects.length - 1) % featuredProjects.length)} aria-label="Previous featured project"><ArrowLeft size={16} /></button><button className="icon-button" onClick={() => setActiveSlide((value) => (value + 1) % featuredProjects.length)} aria-label="Next featured project"><ArrowRight size={16} /></button></div></div><div className="featured-layout" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}><button className={`featured-visual accent-${activeProject.accent}`} onClick={() => setSelectedProject(activeProject)} aria-label={`Open ${activeProject.title} case study`}><div className="featured-ambient" /><div className="featured-top"><span>{activeProject.title.toUpperCase()} · FEATURED</span><span>{activeProject.year}</span></div><div className="featured-media"><ProjectScreenshot project={activeProject} compact /></div><div className="featured-center"><SectionLabel>{activeProject.badge}</SectionLabel><h3>{activeProject.title}</h3><p>{activeProject.summary}</p></div><div className="featured-bottom"><b>{activeProject.tech.join(" · ")}</b><span>CLICK TO OPEN CASE STUDY <ArrowUpRight size={14} /></span></div></button><div className="featured-detail hud-card"><div className="project-badge">{activeProject.badge}</div><h3>{activeProject.title}</h3><p>{activeProject.overview}</p><div className="feature-techs">{activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><button className="primary-button" onClick={() => setSelectedProject(activeProject)}>VIEW CASE STUDY <ArrowUpRight size={14} /></button></div></div><div className="pagination">{featuredProjects.map((project, index) => <button key={project.id} onClick={() => setActiveSlide(index)} className={index === activeSlide ? "active" : ""} aria-label={`Show ${project.title}`} />)}</div><div className="archive-heading"><h3>Portfolio Gallery</h3><p>COMPLETE PROJECT ARCHIVE</p><div className="filter-tabs">{["All", "AI / ML", "Full Stack", "Design"].map((item) => <button key={item} className={filter === item ? "selected" : ""} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="gallery-grid">{visibleGallery.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div><div className="more-projects"><h3>More Projects on GitHub</h3><a href="https://github.com/Abhishk-Kumar" target="_blank" rel="noreferrer">See More Works <ArrowUpRight size={14} /></a></div></section>
      <section className="discovery container"><div className="discovery-card hud-card"><div className="calendar-pill"><span>●</span> CALENDAR OPEN</div><div className="calendar-icon"><Clock3 size={22} /></div><h2>Book a <span>Discovery</span> <em>Call</em></h2><p>Prefer a real conversation over a form? Grab a time that suits you and let's explore your idea together — a relaxed 30-minute call, zero pressure, zero cost.</p><div className="discovery-pills"><span><Clock3 size={13} /> 30-Min Session</span><span><Video size={13} /> Video Call</span><span><Check size={13} /> Free Consultation</span></div><a className="primary-button" href="#contact">SCHEDULE A MEETING <ArrowRight size={15} /></a><small>Instant confirmation · Reschedule anytime · Booking link placeholder</small></div></section>
      <section id="contact" className="contact-section section container"><div className="contact-copy"><div className="system-pill">● SYSTEM ONLINE</div><h2>Let's<br /><span>Sync.</span></h2><p>Hiring for an AI role or have an LLM product to ship? Send a message and let's talk about what you're building.</p><div className="contact-links"><a href="mailto:abhishkdk@gmail.com"><Mail size={16} /> <span><small>EMAIL</small>abhishkdk@gmail.com</span><ArrowRight size={14} /></a><a href="https://github.com/Abhishk-Kumar" target="_blank" rel="noreferrer"><Github size={16} /> <span><small>GITHUB</small>Abhishk-Kumar</span><ArrowRight size={14} /></a><a href="https://linkedin.com/in/abhishkatwork" target="_blank" rel="noreferrer"><Linkedin size={16} /> <span><small>LINKEDIN</small>abhishkatwork</span><ArrowRight size={14} /></a></div></div><div className="contact-form-card hud-card"><div className="form-heading"><div><h3>Transmission Data</h3><p>SECURE CHANNEL: <span>ENCRYPTED</span></p></div><ShieldCheck size={18} className="cyan" /></div><form onSubmit={(event) => { event.preventDefault(); window.alert("Transmission signal dispatched successfully."); }}><div className="form-row"><input required placeholder="Full name" aria-label="Full name" /><input required type="email" placeholder="Email address" aria-label="Email address" /></div><div className="form-row"><select aria-label="Project type" defaultValue=""><option value="" disabled>Project type</option><option>AI / LLM application</option><option>Full-stack product</option><option>Job opportunity</option></select><select aria-label="Estimated budget" defaultValue=""><option value="" disabled>Est. budget</option><option>Under $2k</option><option>$2k–$5k</option><option>$5k+</option></select></div><textarea required rows={5} placeholder="Tell me about your project" aria-label="Message" /><button className="primary-button" type="submit">TRANSMIT SIGNAL <Send size={14} /></button></form></div></section>
    </main>
	    <footer className="footer container"><div className="footer-cta"><div><SectionLabel>TRANSMIT DATA</SectionLabel><h2>Ready to build something impactful together?</h2><p>Let's create AI-powered products, RAG systems and scalable web experiences.</p></div><a className="primary-button" href="#contact">CONTACT ME <ArrowUpRight size={15} /></a></div><div className="footer-meta"><span>ABHISHEK KUMAR · ENGINEERED FOR THE NEXT</span><span>© 2026 · ALL SYSTEMS NOMINAL</span></div></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>;
}

function Experience({ title, company, date, mode, tone, bullets }: { title: string; company: string; date: string; mode: string; tone: string; bullets: string[] }) { return <article className="experience-card"><span className={`timeline-node ${tone}`} /><div className="experience-top"><div><h3>{title}</h3><p className={tone}>{company}</p><div className="experience-meta"><span>{mode}</span><span>{date}</span></div></div></div><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>; }
