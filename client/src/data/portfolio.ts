export const portfolio = {
  name: "Luan Gasparotto Ferreira",
  shortName: "Luan Gasparotto",
  role: "Desenvolvedor em formação",
  eyebrow: "Portfolio / 2026",
  intro:
    "Transformo curiosidade em interfaces claras, automações úteis e experiências digitais com intenção.",
  about:
    "Sou um desenvolvedor em formação, interessado em tecnologia e resolução de problemas. Atualmente, foco meus estudos em desenvolvimento web, lógica de programação e automação — sempre buscando aprender fazendo.",
  location: "Brasil · disponível remotamente",
  availability: "Aberto a oportunidades e colaborações",
  email: "adicione-seu-email@exemplo.com", // Edite este campo antes de publicar.
  github: "https://github.com/luangferreira-afk",
  stats: [
    { value: "02+", label: "anos explorando tecnologia" },
    { value: "06", label: "tecnologias no toolkit" },
    { value: "∞", label: "vontade de aprender" },
  ],
  capabilities: [
    {
      number: "01",
      title: "Interfaces web",
      text: "Páginas responsivas com hierarquia visual, acessibilidade e atenção aos detalhes.",
      tags: ["HTML5", "CSS3", "JavaScript"],
    },
    {
      number: "02",
      title: "Lógica & automação",
      text: "Pensamento estruturado para resolver problemas e transformar tarefas repetitivas em fluxos simples.",
      tags: ["Python", "Lógica", "Processos"],
    },
    {
      number: "03",
      title: "Aprendizado contínuo",
      text: "Evolução constante através de projetos, documentação, prática e experimentação.",
      tags: ["Git", "VS Code", "GitHub"],
    },
  ],
  projects: [
    {
      index: "01",
      title: "Interfaces que comunicam",
      type: "Web design / frontend",
      description:
        "Construção de experiências digitais responsivas, com foco em clareza, ritmo visual e uma base sólida para crescer.",
      stack: ["HTML", "CSS", "JavaScript"],
      accent: "coral",
    },
    {
      index: "02",
      title: "Automação sem ruído",
      type: "Lógica / Python",
      description:
        "Exploração de scripts e automações para reduzir trabalho manual, organizar processos e abrir espaço para o que importa.",
      stack: ["Python", "Lógica", "Fluxos"],
      accent: "blue",
    },
  ],
  learning: [
    { label: "Desenvolvimento web", value: "Em evolução" },
    { label: "Interfaces responsivas", value: "Praticando" },
    { label: "Lógica de programação", value: "Aprofundando" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/luangferreira-afk" },
  ],
};

export type PortfolioData = typeof portfolio;
