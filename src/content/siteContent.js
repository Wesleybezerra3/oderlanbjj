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
  address: 'Rua castro alves, 17 — Mirueira, Paulista-PE',
  phoneDisplay: '[(00) 00000-0000]',
  whatsappUrl: 'https://wa.me/5500000000000',
  instagramUrl: 'https://www.instagram.com/oderlan_jiujitsu_acamedia_/',
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rua%20castro%20alves%2C%2017%20%E2%80%94%20Mirueira%2C%20Paulista-PE',
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
  title: 'ODERLAN JIU-JITSU',
  description:
    'Força, Foco e Disciplina',
  secondaryCta: { label: 'Ver horários', href: '#horarios' },
  // Set to the image path (e.g. '/hero.webp') once a real photo is available.
  // Recommended: landscape, at least 1920px wide, WebP/AVIF, under ~300 KB.
  // Enhanced versions generated from the original hero.jpeg (levels, contrast, sharpening).
  imageSrc: '/hero2.png',
  // imageSrcSet: '/hero1.jpeg 1200w, /hero1.jpeg 1920w',
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
  imgSrc:'/classAdults1.jpeg',
  name: 'Turma Adulto',
  audience: 'Adultos de todos os níveis',
  description: 'Aulas focadas em técnica, condicionamento físico, disciplina e evolução constante, respeitando o nível de cada aluno.',
},
{
  imgSrc:'/classKids.jpeg',
  name: 'Turma Kids',
  audience: 'Crianças e adolescentes',
  description: 'Aulas adaptadas para desenvolver coordenação, disciplina, confiança e respeito de forma segura e dinâmica.',
},
{
  imgSrc:'/classKick.jpeg',
  name: 'Muay Thai / Kickboxing',
  audience: 'Iniciantes e praticantes de todos os níveis',
  description: 'Treinos de trocação com foco em técnica, condicionamento, defesa, agilidade e evolução física.',
},
]

export const weeklySchedule = [
  {
    day: 'Segunda',
    sessions: [
      { time: '18h ás 19h', group: 'Kids' },
      { time: '20h40h ás 21h50', group: 'Adultos' },
    ],
  },
  {
    day: 'Quarta',
    sessions: [
      { time: '18h ás 19h', group: 'Kids' },
      { time: '20h30h ás 21h40', group: 'Adultos' },
    ],
  },
  {
    day: 'Sábado',
    sessions: [{ time: '14h ás 15h20', group: 'Kids' },
      { time: '15h40 ás 17h', group: 'Adultos' }
    ],
  },
]

export const trialClassSteps = [
  {
    title: 'Chame no WhatsApp',
    description: 'Informe seu nome e a turma de interesse.',
  },
  {
    title: 'Escolha o horário',
    description: 'Combinamos o melhor dia para sua primeira aula.',
  },
  {
    title: 'Venha treinar',
    description: 'Chegue 10 minutos antes, traga roupas leves e disposição para aprender.',
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
  title: 'Comece sua jornada hoje',
description: 'Agende sua aula experimental e venha conhecer nossos treinos na prática. O primeiro passo para evoluir é começar.',
}
