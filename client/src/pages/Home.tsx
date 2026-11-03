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
    summary: "A B2B marketplace experience connecting buyers and suppliers through discovery, RFQs and clear product workflows.",
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
	    images: ["/assets/projects/e-consultancy.png", "/assets/projects/e-consultancy-1.png", "/assets/projects/e-consultancy-2.png", "/assets/projects/e-consultancy-3.png", "/assets/projects/e-consultancy-4.png"],
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
	    images: ["/assets/projects/azolic-1.png", "/assets/projects/azolic-2.png", "/assets/projects/azolic-3.png", "/assets/projects/azolic-4.png"],
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
	    images: ["/assets/projects/repogent-ai.png"],
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
	    images: ["/assets/projects/hirelens.png"],
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

const featuredProjects = projects.filter((project) => ["repogent-ai", "hirelens", "biz-trade-mart"].includes(project.id));
const galleryProjects = projects.filter((project) => !featuredProjects.some((featured) => featured.id === project.id));

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
      <small>Project preview unavailable</small>
    </div>
  );
}

function ProjectScreenshot({ project, compact = false, index = 1 }: { project: Project; compact?: boolean; index?: number }) {
  const [failed, setFailed] = useState(false);
  const source = project.images ? project.images[index - 1] : project.image;
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
  const imageCount = project?.images?.length ?? (project?.image ? 1 : 0);
  useEffect(() => {
    setShot(0);
    if (project) {
      document.body.classList.add("modal-open");
      closeButtonRef.current?.focus();
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [project]);
  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (imageCount > 1 && event.key === "ArrowRight") setShot((value) => (value + 1) % imageCount);
      if (imageCount > 1 && event.key === "ArrowLeft") setShot((value) => (value + imageCount - 1) % imageCount);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [project, onClose, imageCount]);
  if (!project) return null;
  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <div className="modal-heading"><div><div className={`modal-meta accent-text-${project.accent}`}>{project.badge} · {project.year}</div><h2 id="project-modal-title">{project.title}</h2></div><button ref={closeButtonRef} className="icon-button" onClick={onClose} aria-label="Close project details"><X size={20} /></button></div>
      <div className="modal-screens">
        <ProjectScreenshot project={project} index={shot + 1} />
        {imageCount > 1 && <div className="screenshot-controls"><button className="icon-button" onClick={() => setShot((value) => (value + imageCount - 1) % imageCount)} aria-label="Previous screenshot"><ArrowLeft size={17} /></button><div className="screenshot-dots">{Array.from({ length: imageCount }, (_, index) => <button key={index} aria-label={`Show screenshot ${index + 1}`} className={shot === index ? "active" : ""} onClick={() => setShot(index)} />)}</div><button className="icon-button" onClick={() => setShot((value) => (value + 1) % imageCount)} aria-label="Next screenshot"><ArrowRight size={17} /></button></div>}
      </div>
      <div className="modal-techline">{project.tech.join(" · ")}</div>
      <div className="modal-body">
        <DetailBlock title="Overview"><p>{project.overview}</p></DetailBlock>
        <DetailBlock title="Goals"><p>{project.goals}</p></DetailBlock>
        <DetailBlock title="Problem Statement"><p>{project.problem}</p></DetailBlock>
        <DetailBlock title="Key Features"><ul>{project.features.map((feature) => <li key={feature}><Check size={13} />{feature}</li>)}</ul></DetailBlock>
        <DetailBlock title="Frontend Architecture"><p>{project.frontend}</p></DetailBlock>
        <DetailBlock title="Backend Architecture"><p>{project.backend}</p></DetailBlock>
        {project.ai && <DetailBlock title="AI Components"><p>{project.ai}</p></DetailBlock>}
        <DetailBlock title="Technical Challenges"><p>{project.challenges}</p></DetailBlock>
        <DetailBlock title="Technical Implementation"><p>{project.implementation}</p></DetailBlock>
        <DetailBlock title="Tech Stack"><div className="modal-tags">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></DetailBlock>
        <DetailBlock title="Results"><p>{project.results}</p></DetailBlock>
        <DetailBlock title="Future Improvements"><p>{project.future}</p></DetailBlock>
      </div>
      <div className="modal-actions">{project.live && <a className="primary-button" href={project.live} target="_blank" rel="noreferrer">VIEW LIVE PROJECT <ExternalLink size={15} /></a>}{project.github && <a className="secondary-button" href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> GITHUB</a>}</div>
    </section>
  </div>;
}

function DetailBlock({ title, children }: { title: string; children: React.ReactNode }) { return <div className="detail-block"><h3>{title}</h3>{children}</div>; }

function SkillDomain({ title, label, items, tone }: { title: string; label: string; items: string[]; tone: string }) { return <article className={`skill-domain tone-${tone}`}><div className="skill-domain-heading"><span className="domain-dot" /><div><SectionLabel>{label}</SectionLabel><h3>{title}</h3></div></div><div className="domain-tags">{items.map((item) => <span key={item}>{item}</span>)}</div></article>; }

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [filter, setFilter] = useState("All");
  const visibleGallery = useMemo(() => filter === "All" ? galleryProjects : galleryProjects.filter((project) => filter === "Client work" ? project.id === "e-consultancy" || project.id === "azolic" : filter === "Full Stack" ? project.id === "mediconnect" || project.id === "e-consultancy" : false), [filter]);
  useEffect(() => {
    if (selectedProject) return;
    const timer = window.setInterval(() => setActiveSlide((value) => (value + 1) % featuredProjects.length), 6500);
    return () => window.clearInterval(timer);
  }, [selectedProject]);
  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", mobileMenu);
    return () => document.body.classList.remove("mobile-menu-open");
  }, [mobileMenu]);
  const activeProject = featuredProjects[activeSlide];
  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry from ${String(form.get("name") || "Website visitor")}`;
    const body = [
      `Name: ${form.get("name") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Topic: ${form.get("topic") || "Not specified"}`,
      "",
      String(form.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:abhishkdk@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };
  return <div className="portfolio-shell editorial-shell">
    <header className="topbar editorial-topbar">
      <div className="container nav-inner">
        <a className="brand editorial-brand" href="#about">Abhishek Kumar<span>/AI</span></a>
        <div className="editorial-availability"><i /> Open to remote AI Engineer roles</div>
        <nav className={mobileMenu ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          {[["about","Origin"],["works","Projects"],["experience","Experience"],["education","Education"],["skills","Skills"],["contact","Contact"]].map(([id,label],index) => <a key={id} href={`#${id}`} onClick={() => setMobileMenu(false)}><small>0{index + 1}</small> {label}</a>)}
        </nav>
        <div className="nav-actions">
          <a className="hire-button editorial-hire" href="#contact">Get in touch <ArrowUpRight size={13} /></a>
          <button className="menu-button" onClick={() => setMobileMenu((value) => !value)} aria-label="Toggle navigation" aria-expanded={mobileMenu}>{mobileMenu ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
    </header>
    <main>
      <section id="about" className="hero-section container editorial-hero">
        <div className="hero-kicker"><span /> PORTFOLIO · 2026 <span className="kicker-divider">/</span> KANPUR, INDIA</div>
        <div className="editorial-hero-grid">
          <div className="editorial-hero-title">
            <h1>AI Engineer<span className="hero-period">.</span></h1>
            <p className="hero-subtitle">Building useful AI products, from LLM workflows to the full-stack systems around them.</p>
            <div className="hero-actions">
              <a className="primary-button" href="#works">Explore projects <ArrowDownRightIcon /></a>
              <a className="secondary-button" href="https://drive.google.com/file/d/1gy_ju_-nIGClPQ5N21pBQGcyyxqnQIEw/view?usp=sharing" target="_blank" rel="noreferrer"><ExternalLink size={14} /> View resume</a>
            </div>
          </div>
          <div className="editorial-hero-note">
            <span className="mono-label">01 / INTRODUCTION</span>
            <p>I work across Python, LangChain, LangGraph, FastAPI, React and TypeScript to build LLM-powered applications, retrieval workflows and dependable product interfaces.</p>
            <div className="hero-note-rule" />
            <div className="hero-note-meta"><span>BASED IN</span><b>Kanpur, India</b></div>
            <div className="hero-note-meta"><span>WORK MODE</span><b>Remote</b></div>
          </div>
        </div>
        <div className="hero-bottom-line"><span>APPLIED AI <b>·</b> FULL-STACK ENGINEERING <b>·</b> PRODUCT BUILDING</span><a href="#experience">Scroll to explore <ArrowDownRightIcon /></a></div>
      </section>

      <section className="editorial-intro-section">
        <div className="container editorial-intro-grid">
          <div><SectionLabel>01 — ORIGIN</SectionLabel><h2>Engineering at the intersection of <em>AI and product.</em></h2></div>
          <div className="editorial-intro-copy">
            <p>I’m an AI Engineer and full-stack developer focused on building practical applications with large language models. My work includes retrieval-augmented generation, multi-step agent workflows, API development, and the interfaces that make these systems useful.</p>
            <p>I enjoy taking a product from an early technical idea to a working application — making deliberate choices around retrieval quality, latency, usability, and maintainability.</p>
          </div>
        </div>
      </section>

      <section id="works" className="section container editorial-projects">
        <div className="section-heading editorial-section-heading"><div><SectionLabel>02 — SELECTED WORK</SectionLabel><h2>AI projects, in practice.</h2><p>Systems I’ve designed and built, with the architecture and decisions behind them.</p></div><div className="carousel-controls"><button className="icon-button" onClick={() => setActiveSlide((value) => (value + featuredProjects.length - 1) % featuredProjects.length)} aria-label="Previous project"><ArrowLeft size={16} /></button><button className="icon-button" onClick={() => setActiveSlide((value) => (value + 1) % featuredProjects.length)} aria-label="Next project"><ArrowRight size={16} /></button></div></div>
        <div className="featured-layout editorial-featured-layout">
          <button className={`featured-visual editorial-featured-visual accent-${activeProject.accent}`} onClick={() => setSelectedProject(activeProject)} aria-label={`Open ${activeProject.title} case study`}>
            <div className="featured-top"><span>FEATURED PROJECT / {String(activeSlide + 1).padStart(2,"0")}</span><span>{activeProject.year}</span></div>
            <div className="featured-media"><ProjectScreenshot project={activeProject} compact /></div>
            <div className="featured-center"><SectionLabel>{activeProject.badge}</SectionLabel><h3>{activeProject.title}</h3><p>{activeProject.summary}</p></div>
            <div className="featured-bottom"><b>{activeProject.tech.join(" · ")}</b><span>OPEN CASE STUDY <ArrowUpRight size={14} /></span></div>
          </button>
          <div className="featured-detail editorial-featured-detail">
            <span className="mono-label">SYSTEM OVERVIEW</span><h3>{activeProject.title}</h3><p>{activeProject.overview}</p>
            <div className="architecture-preview"><span>INPUT</span><b>{activeProject.id === "repogent-ai" ? "GitHub repository / ZIP" : activeProject.id === "hirelens" ? "Resume documents" : "Product interface"}</b><i>↓</i><span>PROCESS</span><b>{activeProject.id === "repogent-ai" ? "Parse · Index · Retrieve · Explain" : activeProject.id === "hirelens" ? "Extract · Evaluate · Compare" : "React components · REST APIs"}</b><i>↓</i><span>OUTPUT</span><b>{activeProject.id === "repogent-ai" ? "Codebase map + grounded Q&A" : activeProject.id === "hirelens" ? "Structured candidate reports" : "Responsive B2B workflows"}</b></div>
            <div className="feature-techs">{activeProject.tech.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <button className="primary-button" onClick={() => setSelectedProject(activeProject)}>Read case study <ArrowUpRight size={14} /></button>
          </div>
        </div>
        <div className="pagination editorial-pagination">{featuredProjects.map((project,index)=><button key={project.id} onClick={()=>setActiveSlide(index)} className={index===activeSlide?"active":""} aria-label={`Show ${project.title}`} />)}</div>
        <div className="archive-heading editorial-archive-heading"><div><SectionLabel>03 — MORE PROJECTS</SectionLabel><h3>Other selected work</h3></div><div className="filter-tabs">{["All","Client work","Full Stack"].map((item)=><button key={item} className={filter===item?"selected":""} onClick={()=>setFilter(item)}>{item}</button>)}</div></div>
        <div className="gallery-grid editorial-gallery-grid">{visibleGallery.map((project)=><ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />)}</div>
      </section>

      <section id="experience" className="section editorial-experience-section">
        <div className="container">
          <div className="section-heading editorial-section-heading"><div><SectionLabel>04 — EXPERIENCE</SectionLabel><h2>Where I’ve contributed.</h2><p>Professional experience across frontend engineering and applied AI research.</p></div></div>
          <div className="timeline editorial-timeline">
            <Experience title="AI Research Intern" company="Planto AI" date="Nov 2024 – May 2025" mode="Remote" tone="cyan" bullets={["Designed prompt-engineering and RAG workflows that improved response relevance by 35%.","Evaluated LangChain features against 500+ test queries and reduced hallucination rate by approximately 25%.","Optimized vector retrieval and reduced average copilot response latency by 30%."]} />
            <Experience title="Frontend Developer" company="Biz Trade Mart — Bizindo Trade Mart Pvt. Ltd." date="Dec 2024 – Feb 2026" mode="Remote" tone="green" bullets={["Built reusable React and Tailwind components across 10+ product modules, reducing UI development time by 40%.","Improved Lighthouse performance from 62 to 91 through lazy loading, code splitting and memoization.","Resolved 30+ cross-browser regressions and helped reduce production bug reports by 35%."]} />
          </div>
        </div>
      </section>

      <section id="education" className="section editorial-education-section"><div className="container"><div className="section-heading editorial-section-heading"><div><SectionLabel>05 — EDUCATION</SectionLabel><h2>Learning the foundations.</h2><p>Formal study in computer science, with a focus on AI and machine learning.</p></div></div><div className="education-grid"><article className="education-item"><span className="mono-label">2024 — 2027</span><h3>Bachelor of Technology</h3><p>Computer Science & Engineering — Artificial Intelligence and Machine Learning</p><div className="education-meta"><span>Dr. A.P.J. Abdul Kalam Technical University</span><b>CGPA 7.13 · through 6th semester</b></div></article><article className="education-item"><span className="mono-label">2021 — 2024</span><h3>Diploma</h3><p>Computer Science Engineering</p><div className="education-meta"><span>Government Technical Institute, Kanpur</span><b>CGPA 7.5</b></div></article></div></div></section>\n\n      <section id="skills" className="section container editorial-skills-section">
        <div className="section-heading editorial-section-heading"><div><SectionLabel>06 — TOOLKIT</SectionLabel><h2>Tools I work with.</h2><p>A practical stack for building and shipping AI-enabled applications.</p></div></div>
        <div className="editorial-skills-grid">
          <SkillDomain title="Applied AI" label="LLM APPLICATIONS" items={["LangChain","LangGraph","RAG Pipelines","Prompt Engineering","Groq / Mistral / OpenAI APIs","ChromaDB","FAISS","ML Model Optimization"]} tone="violet" />
          <SkillDomain title="Backend & Data" label="SERVICES / DATA" items={["Python","Java","SQL","FastAPI","Node.js","Express.js","PostgreSQL","MySQL","MongoDB","SQLite","REST APIs","JWT / OAuth2"]} tone="amber" />
          <SkillDomain title="Frontend" label="PRODUCT INTERFACES" items={["React.js","Next.js","TypeScript","JavaScript ES6+","Tailwind CSS","Material UI","HTML5","CSS3"]} tone="cyan" />
          <SkillDomain title="Engineering" label="DELIVERY" items={["Docker","Git","Vercel","Jest","Pytest","OOP","Agile / Scrum","Code Review"]} tone="green" />
        </div>
      </section>

      <section id="contact" className="contact-section section container editorial-contact-section">
        <div className="contact-copy"><SectionLabel>07 — CONTACT</SectionLabel><h2>Let’s build something <em>useful.</em></h2><p>I’m interested in remote AI Engineer opportunities and thoughtful product work. If you’re building with LLMs or need a full-stack product engineer, I’d be glad to hear from you.</p><div className="contact-links"><a href="mailto:abhishkdk@gmail.com"><Mail size={16} /><span><small>EMAIL</small>abhishkdk@gmail.com</span><ArrowRight size={14} /></a><a href="https://github.com/Abhishk-Kumar" target="_blank" rel="noreferrer"><Github size={16} /><span><small>GITHUB</small>Abhishk-Kumar</span><ArrowRight size={14} /></a><a href="https://linkedin.com/in/abhishkatwork" target="_blank" rel="noreferrer"><Linkedin size={16} /><span><small>LINKEDIN</small>abhishkatwork</span><ArrowRight size={14} /></a></div></div>
        <div className="contact-form-card editorial-contact-card"><div className="form-heading"><div><h3>Send an enquiry</h3><p>Submitting opens a pre-filled email in your mail app.</p></div><Mail size={18} /></div><form onSubmit={handleContactSubmit}><div className="form-row"><input name="name" required placeholder="Your name" aria-label="Your name" /><input name="email" required type="email" placeholder="Email address" aria-label="Email address" /></div><select name="topic" aria-label="What is this about?" defaultValue=""><option value="">What is this about? (optional)</option><option>AI Engineer opportunity</option><option>AI product development</option><option>Full-stack development</option><option>Something else</option></select><textarea name="message" required rows={5} placeholder="A little about what you have in mind…" aria-label="Message" /><button className="primary-button" type="submit">Prepare email <ArrowUpRight size={14} /></button></form></div>
      </section>
    </main>
    <footer className="footer container editorial-footer"><div><a className="brand editorial-brand" href="#about">Abhishek Kumar<span>/AI</span></a><p>AI Engineer · Full-stack product builder · Kanpur, India</p></div><div className="footer-meta"><span>© {new Date().getFullYear()} ABHISHEK KUMAR</span><a href="https://drive.google.com/file/d/1gy_ju_-nIGClPQ5N21pBQGcyyxqnQIEw/view?usp=sharing" target="_blank" rel="noreferrer">RESUME <ArrowUpRight size={12} /></a></div></footer>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
  </div>;
}

function ArrowDownRightIcon() { return <ArrowRight size={14} className="arrow-down-right" />; }


function Experience({ title, company, date, mode, tone, bullets }: { title: string; company: string; date: string; mode: string; tone: string; bullets: string[] }) { return <article className="experience-card"><span className={`timeline-node ${tone}`} /><div className="experience-top"><div><h3>{title}</h3><p className={tone}>{company}</p><div className="experience-meta"><span>{mode}</span><span>{date}</span></div></div></div><ul>{bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></article>; }
