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
  city: 'Mirueira, Paulista-PE',
  street: 'Rua Castro Alves, 17',
  address: 'Rua Castro Alves, 17 — Mirueira, Paulista-PE',
  phoneDisplay: '(81) 9718-9110',
  phoneUrl: 'tel:+558197189110',
  whatsappUrl: 'https://wa.me/558197189110',
  instagramUrl: 'https://www.instagram.com/oderlan_jiujitsu_acamedia_/',
  mapsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Rua Castro Alves, 17 — Mirueira, Paulista-PE',
  )}`,
}

export const developer = {
  name: 'Wesley Bezerra',
  instagramUrl: 'https://www.instagram.com/wesleyy_bezerra8/',
}

export const primaryCta = {
  label: 'Agendar aula experimental',
  href: academy.whatsappUrl,
}

const allNavigationLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Turmas', href: '#turmas' },
  { label: 'Horários', href: '#horarios' },
  { label: 'Localização', href: '#localizacao' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const hero = {
  location: 'Mirueira, Paulista-PE',
  title: 'ODERLAN JIU-JITSU',
  description: 'Disciplina gera resultados',
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
  imageAlt: 'Professor Oderlan de kimono, sentado no tatame da academia',
}

export const classGroups = [
  {
    imgSrc: '/classAdults1.jpeg',
    imageAlt: 'Alunos da turma adulto de Oderlan Jiu-Jitsu alinhados no tatame, de kimono',
    name: 'Turma Adulto',
    audience: 'Adultos de todos os níveis',
    description: 'Técnica, condicionamento e evolução no ritmo de cada aluno.',
    ctaLabel: 'Quero a turma Adulto',
    whatsappUrl: `${academy.whatsappUrl}?text=${encodeURIComponent('Olá! Quero a turma Adulto.')}`,
  },
  {
    imgSrc: '/classKids.jpeg',
    imageAlt: 'Crianças da turma kids reunidas no tatame da Oderlan Jiu-Jitsu',
    name: 'Turma Kids',
    audience: 'Crianças e adolescentes',
    description: 'Coordenação, confiança e respeito, com treino seguro e dinâmico.',
    ctaLabel: 'Quero a turma Kids',
    whatsappUrl: `${academy.whatsappUrl}?text=${encodeURIComponent('Olá! Quero a turma Kids.')}`,
  },
  {
    imgSrc: '/classKick.jpeg',
    imageAlt: 'Alunos de Muay Thai e Kickboxing em treino na academia',
    name: 'Muay Thai / Kickboxing',
    audience: 'Iniciantes e todos os níveis',
    description: 'Trocação com foco em técnica, defesa e condicionamento.',
    ctaLabel: 'Quero Muay Thai / Kickboxing',
    whatsappUrl: `${academy.whatsappUrl}?text=${encodeURIComponent('Olá! Quero treinar Muay Thai / Kickboxing.')}`,
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

const PLACEHOLDER_COPY = /^\s*\[.*\]\s*$/

export function isPublishedCopy(value) {
  return typeof value === 'string' && value.trim() !== '' && !PLACEHOLDER_COPY.test(value.trim())
}

// Leave empty until real, authorized testimonials are available — the section hides itself.
export const testimonials = []

// Leave empty until the academy supplies real answers — the FAQ section hides itself.
export const faqItems = []

export const publishedFaqItems = faqItems.filter(
  ({ question, answer }) => isPublishedCopy(question) && isPublishedCopy(answer),
)

export const publishedTestimonials = testimonials.filter(
  ({ quote, author }) => isPublishedCopy(quote) && isPublishedCopy(author),
)

export const navigationLinks = allNavigationLinks.filter(
  ({ href }) => href !== '#duvidas' || publishedFaqItems.length > 0,
)

export const finalCta = {
  title: 'Primeira aula pelo WhatsApp',
  description: 'Diga seu nome e a turma. Combinamos o horário e você treina.',
  imageSrc: '/hero2.png',
  imageAlt: 'Tatame vermelho da academia Oderlan Jiu-Jitsu em Mirueira',
}
