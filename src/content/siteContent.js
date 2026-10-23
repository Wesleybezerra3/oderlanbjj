/*
 * All business content lives here, separated from presentation.
 * Values wrapped in [brackets] are placeholders and MUST be replaced
 * with real information before going to production.
 */

export const academy = {
  name: 'Oderlan Jiu-Jitsu',
  logo: {
    src: '/logo-96.png',
    srcSet: '/logo-96.png 1x, /logo-192.png 2x',
  },
  city: 'Mirueira/Paulista-PE',
  address: '[Rua, número — Bairro, Cidade/UF]',
  phoneDisplay: '[(00) 00000-0000]',
  whatsappUrl: 'https://wa.me/5500000000000',
  instagramUrl: 'https://instagram.com/',
  mapsUrl: 'https://maps.google.com/',
}

export const primaryCta = {
  label: 'Agendar aula experimental',
  href: academy.whatsappUrl,
}

export const navigationLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Turmas', href: '#turmas' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const hero = {
  eyebrow: `Jiu-Jitsu em ${academy.city}`,
  title: 'Oderlan Jiu-Jitsu',
  description:
    'Jiu-Jitsu de qualidade, para todas as idades e níveis de experiência. Venha treinar com a gente!',
  secondaryCta: { label: 'Ver horários', href: '#horarios' },
  // Set to the image path (e.g. '/hero.webp') once a real photo is available.
  // Recommended: landscape, at least 1920px wide, WebP/AVIF, under ~300 KB.
  // Enhanced versions generated from the original hero.jpeg (levels, contrast, sharpening).
  imageSrc: '/hero-1200.jpg',
  imageSrcSet: '/hero-1200.jpg 1200w, /hero-1920.jpg 1920w',
  imageAlt: 'Professor e alunos da Oderlan Jiu-Jitsu reunidos no tatame da academia',
}

export const about = {
  eyebrow: 'Sobre',
  title: 'Oderlan Jiu-Jitsu',
  paragraphs: [
    'Oderlan Jiu-Jitsu é uma academia de Jiu-Jitsu localizada em Mirueira/Paulista-PE. Nossa missão é oferecer treinamento de qualidade para todas as idades e níveis de experiência.',
    'Na Oderlan Jiu-Jitsu, trabalhamos com metodologia eficaz e um ambiente acolhedor, onde os alunos podem desenvolver suas habilidades técnicas e físicas, além de cultivar valores como respeito, disciplina e esforço.',
  ],
  imageSrc: '/prof.png',
  imageAlt: 'Professor Oderlan e alunos da Oderlan Jiu-Jitsu reunidos no tatame da academia',
}

export const classGroups = [
  {
    name: '[Turma Adulto]',
    audience: '[Para quem é esta turma]',
    description: '[Breve descrição do foco das aulas.]',
  },
  {
    name: '[Turma Kids]',
    audience: '[Faixa etária]',
    description: '[Breve descrição do foco das aulas.]',
  },
  {
    name: '[Turma Feminina]',
    audience: '[Para quem é esta turma]',
    description: '[Breve descrição do foco das aulas.]',
  },
]

export const weeklySchedule = [
  {
    day: 'Segunda',
    sessions: [
      { time: '[00:00]', group: '[Turma]' },
      { time: '[00:00]', group: '[Turma]' },
    ],
  },
  {
    day: 'Terça',
    sessions: [{ time: '[00:00]', group: '[Turma]' }],
  },
  {
    day: 'Quarta',
    sessions: [
      { time: '[00:00]', group: '[Turma]' },
      { time: '[00:00]', group: '[Turma]' },
    ],
  },
  {
    day: 'Quinta',
    sessions: [{ time: '[00:00]', group: '[Turma]' }],
  },
  {
    day: 'Sexta',
    sessions: [{ time: '[00:00]', group: '[Turma]' }],
  },
  {
    day: 'Sábado',
    sessions: [{ time: '[00:00]', group: '[Turma]' }],
  },
]

export const trialClassSteps = [
  {
    title: 'Chame no WhatsApp',
    description: '[Informe seu nome e a turma de interesse.]',
  },
  {
    title: 'Escolha o horário',
    description: '[Combinamos o melhor dia para sua primeira aula.]',
  },
  {
    title: 'Venha treinar',
    description: '[O que trazer / vestir na aula experimental.]',
  },
]

// Leave empty until real, authorized testimonials are available — the section hides itself.
export const testimonials = [
  {
    quote: '[Depoimento real de aluno — substituir ou remover]',
    author: '[Nome do aluno]',
    detail: '[Turma / tempo de treino]',
  },
  {
    quote: '[Depoimento real de aluno — substituir ou remover]',
    author: '[Nome do aluno]',
    detail: '[Turma / tempo de treino]',
  },
]

export const faqItems = [
  {
    question: 'Preciso ter experiência para começar?',
    answer: '[Resposta da academia.]',
  },
  {
    question: 'Preciso ter kimono na primeira aula?',
    answer: '[Resposta da academia.]',
  },
  {
    question: 'A partir de qual idade as crianças podem treinar?',
    answer: '[Resposta da academia.]',
  },
  {
    question: 'Quais são os valores das mensalidades?',
    answer: '[Resposta da academia ou orientação para consultar pelo WhatsApp.]',
  },
]

export const finalCta = {
  title: '[Chamada final: convite para a aula experimental]',
  description: '[Reforço curto do benefício e da facilidade de começar.]',
}

