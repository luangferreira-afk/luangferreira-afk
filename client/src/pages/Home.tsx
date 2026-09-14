import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  Github,
  Mail,
  Menu,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navItems = [
  { label: "Sobre", href: "#about" },
  { label: "Capacidades", href: "#capabilities" },
  { label: "Projetos", href: "#projects" },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  };

  return (
    <main id="top" className="site-shell">
      <div className="grain" aria-hidden="true" />
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Voltar ao início">
          <span className="brand-mark">LG</span>
          <span className="brand-name">luan<span>.</span>dev</span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Vamos conversar <ArrowUpRight size={15} />
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero section-pad">
        <div className="hero-copy reveal-up">
          <p className="eyebrow"><span className="status-dot" /> {portfolio.eyebrow}</p>
          <h1>
            Ideias em <em>movimento.</em>
            <br />
            Código com <span className="outline-word">intenção.</span>
          </h1>
          <p className="hero-intro">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Ver projetos <ArrowDown size={16} />
            </a>
            <a className="text-link" href="#about">Conhecer o Luan <ArrowUpRight size={16} /></a>
          </div>
        </div>

        <div className="hero-visual reveal-up delay-1" aria-label="Cartão visual com o perfil de Luan">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="code-card">
            <div className="code-card-top"><span>luan.config.ts</span><span className="live-pill"><span /> online</span></div>
            <div className="code-content">
              <span className="code-comment">// build with curiosity</span>
              <span><b className="code-keyword">const</b> developer = {'{'}</span>
              <span className="code-indent"><b>name:</b> <i>"Luan"</i>,</span>
              <span className="code-indent"><b>focus:</b> <i>"web + automation"</i>,</span>
              <span className="code-indent"><b>mindset:</b> <i>"always learning"</i>,</span>
              <span>{'}'}</span>
              <span className="code-cursor">_</span>
            </div>
            <div className="code-card-footer"><Code2 size={14} /> <span>made with purpose</span><span className="code-line">Ln 14, Col 08</span></div>
          </div>
          <div className="hero-badge badge-coral"><Sparkles size={15} /> aberto a criar</div>
          <div className="hero-badge badge-blue">BR / REMOTO</div>
        </div>

        <div className="hero-bottom-line">
          <span>Scroll para explorar</span>
          <span className="line" />
          <span>01 — 04</span>
        </div>
      </section>

      <section id="about" className="about-section section-pad section-dark">
        <div className="about-grid">
          <div className="about-heading"><SectionLabel number="01" children="Ponto de partida" /><h2>Curiosidade que<br /><em>vira construção.</em></h2></div>
          <div className="about-body"><p className="large-copy">{portfolio.about}</p><a className="text-link" href={portfolio.github} target="_blank" rel="noreferrer">Ver no GitHub <Github size={16} /></a></div>
        </div>
        <div className="stats-row">
          {portfolio.stats.map((stat) => <div className="stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
        </div>
      </section>

      <section id="capabilities" className="capabilities-section section-pad">
        <div className="section-heading-row"><div><SectionLabel number="02" children="O que eu faço" /><h2>Peças para<br /><em>avançar.</em></h2></div><p className="section-aside">Cada projeto é uma oportunidade de aprender, simplificar e criar algo que faça sentido para quem usa.</p></div>
        <div className="capabilities-grid">
          {portfolio.capabilities.map((item) => <article className="capability-card" key={item.number}><div className="capability-top"><span className="capability-number">{item.number}</span><Terminal size={18} /></div><h3>{item.title}</h3><p>{item.text}</p><div className="tag-list">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}
        </div>
      </section>

      <section id="projects" className="projects-section section-pad section-dark">
        <div className="section-heading-row"><div><SectionLabel number="03" children="Em construção" /><h2>Projetos com<br /><em>proposito.</em></h2></div><span className="project-count">{portfolio.projects.length.toString().padStart(2, "0")} peças selecionadas</span></div>
        <div className="projects-list">
          {portfolio.projects.map((project) => <article className={`project-card ${project.accent}`} key={project.index}><div className="project-index">{project.index}</div><div className="project-main"><span className="project-type">{project.type}</span><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={24} /></div></article>)}
        </div>
      </section>

      <section className="learning-section section-pad">
        <div className="learning-intro"><SectionLabel number="04" children="Agora" /><h2>O próximo<br /><em>capítulo.</em></h2><p>O caminho continua. Este é o recorte do que estou praticando agora.</p></div>
        <div className="learning-list">{portfolio.learning.map((item, index) => <div className="learning-item" key={item.label}><span className="learning-index">0{index + 1}</span><span>{item.label}</span><strong>{item.value}</strong></div>)}</div>
      </section>

      <section id="contact" className="contact-section section-pad section-coral">
        <div className="contact-grid"><div><p className="eyebrow dark-eyebrow">Pronto para o próximo passo?</p><h2>Vamos dar forma<br />a uma boa <em>ideia.</em></h2></div><div className="contact-side"><p>Se você tem uma oportunidade, projeto ou simplesmente quer trocar uma ideia sobre tecnologia, me encontre por aqui.</p><div className="contact-actions"><button className="button button-dark" type="button" onClick={copyEmail}>{copied ? <><Check size={16} /> E-mail copiado</> : <><Mail size={16} /> Copiar meu e-mail</>}</button><a className="button button-ghost-dark" href={portfolio.github} target="_blank" rel="noreferrer">GitHub <Github size={16} /></a></div><small>{portfolio.email}</small></div></div>
      </section>

      <footer className="site-footer section-pad"><a className="brand" href="#top"><span className="brand-mark">LG</span><span className="brand-name">luan<span>.</span>dev</span></a><span>© 2026 · feito com intenção</span><a className="back-top" href="#top">Voltar ao topo <ArrowUpRight size={15} /></a></footer>
    </main>
  );
}

export default Home;
