import source from "@/docs/copy.json";

export type Locale = "en" | "pt";
export type Theme = "dark" | "light";

export const sourceCopy = source;

export const links = {
  payment: source.payment,
  phoneTel: `tel:${source.phoneTel}`,
  email: `mailto:${source.email}`,
  maps: "https://www.google.com/maps/search/?api=1&query=1637+State+Route+332,+Farmington,+NY+14425",
  mapsEmbed:
    "https://maps.google.com/maps?q=1637%20State%20Route%20332%2C%20Farmington%2C%20NY%2014425&z=15&output=embed",
  newPatientForms: source.patientInfo[0].href,
  existingPatient: source.patientInfo[1].href,
  privacy: source.patientInfo[2].href,
} as const;

export const teamPlates = {
  doctor: {
    name: source.team.doctor.name,
    title: source.team.doctor.title,
    src: "/brand/dr-alicia-sturn.jpg",
  },
  hygienists: [
    { name: "Corrie", src: "/brand/corrie.jpg" },
    { name: "Jennifer K", src: "/brand/jennifer-k.jpg" },
    { name: "Melanie", src: "/brand/melanie.jpg" },
    { name: "Kristen", src: "/brand/kristen.jpg" },
    { name: "Kaylin", src: "/brand/kaylin.jpg" },
    { name: "Tina", src: "/brand/tina.jpg" },
    { name: "Jennifer M", src: "/brand/jennifer-m.jpg" },
  ],
  admin: [{ name: "Abby", src: "/brand/abby.jpg" }],
} as const;

export const SERVICE_KEYS = [
  "Preventative Care",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Emergency Dentistry",
  "Pediatric Dentistry",
  "Endodontic Care (Root Canals)",
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const servicePlates: Record<
  ServiceKey,
  { plate: string; nest: string }
> = {
  "Preventative Care": {
    plate: "from-[#0C3C60] via-[#39729B] to-[#689ADE]",
    nest: "from-[#0C3C60]/80 to-[#86A69E]/40",
  },
  "Cosmetic Dentistry": {
    plate: "from-[#1D67CD] via-[#689ADE] to-[#DAEDFF]",
    nest: "from-[#1D67CD]/70 to-[#86A69E]/35",
  },
  "Restorative Dentistry": {
    plate: "from-[#0C3C60] via-[#86A69E] to-[#39729B]",
    nest: "from-[#0C3C60]/75 to-[#689ADE]/35",
  },
  "Emergency Dentistry": {
    plate: "from-[#1D67CD] via-[#0C3C60] to-[#39729B]",
    nest: "from-[#1D67CD]/70 to-[#0C3C60]/80",
  },
  "Pediatric Dentistry": {
    plate: "from-[#689ADE] via-[#86A69E] to-[#DAEDFF]",
    nest: "from-[#689ADE]/50 to-[#86A69E]/40",
  },
  "Endodontic Care (Root Canals)": {
    plate: "from-[#39729B] via-[#0C3C60] to-[#86A69E]",
    nest: "from-[#39729B]/70 to-[#0C3C60]/75",
  },
};

type RailId =
  | "about"
  | "services"
  | "team"
  | "reviews"
  | "patient-info"
  | "contact";

export const RAIL: { id: RailId; en: string; pt: string }[] = [
  { id: "about", en: "About", pt: "Sobre" },
  { id: "services", en: "Services", pt: "Serviços" },
  { id: "team", en: "Team", pt: "Equipa" },
  { id: "reviews", en: "Reviews", pt: "Avaliações" },
  { id: "patient-info", en: "Patient Info", pt: "Info do paciente" },
  { id: "contact", en: "Contact", pt: "Contacto" },
];

const ptServices: Record<ServiceKey, { title: string; body: string }> = {
  "Preventative Care": {
    title: "Cuidados Preventivos",
    body: "O nosso principal objetivo é ajudar a manter um sorriso saudável. Em cada consulta de profilaxia (limpeza), realizamos um exame completo não só das gengivas e dos dentes, mas também da cabeça e do pescoço. Isto inclui radiografias digitais (se necessário), rastreio de cancro oral e avaliação da articulação temporomandibular (ATM). Tratamento com flúor, aconselhamento nutricional e selantes são oferecidos conforme necessário.",
  },
  "Cosmetic Dentistry": {
    title: "Dentisteria Cosmética",
    body: "Esta acontece ser a área favorita da Dr. Sturn na medicina dentária! Queremos que cada paciente tenha o sorriso com que sempre sonhou. Gostaríamos muito de nos sentar consigo e falar sobre como podemos ajudar a alcançar esse objetivo. Alguns dos serviços cosméticos que oferecemos incluem branqueamento, facetas, coroas e implantes.",
  },
  "Restorative Dentistry": {
    title: "Dentisteria Restauradora",
    body: "Se tiver um problema com um dente, estamos aqui para ajudar. Quer o dente fique cariado, lascado, fissurado ou até parta, temos uma solução. Se for um problema pequeno, provavelmente pode ser resolvido com uma restauração composta (da cor do dente) \"obturação\". Problemas maiores podem ser tratados com coroas, pontes ou implantes. Também podemos ajudar se as suas necessidades incluírem parciais ou próteses (sobre implantes ou tradicionais) para substituir áreas mais extensas de dentes em falta.",
  },
  "Emergency Dentistry": {
    title: "Dentisteria de Emergência",
    body: "Se está com dor, provavelmente precisa de ajuda imediatamente, não daqui a duas semanas! Compreendemos isso e fazemos todos os esforços para oferecer tratamento no mesmo dia aos nossos pacientes existentes. De facto, reservamos tempo nos nossos horários para podermos atender os nossos pacientes caso tenham um problema inesperado que precise de atenção imediata.",
  },
  "Pediatric Dentistry": {
    title: "Dentisteria Pediátrica",
    body: "Já mencionámos que adoramos receber crianças no nosso consultório? Exames, limpezas, aplicação de flúor, intervenção ortodôntica, manutenção de espaço, o que o seu filho precisar, nós tratamos. E sim, podem contar com uma visita ao baú do tesouro no final de cada consulta!",
  },
  "Endodontic Care (Root Canals)": {
    title: "Cuidados Endodônticos (Canais)",
    body: "Até dizer as palavras \"canal\" em voz alta pode fazer a maioria das pessoas estremecer. Estamos aqui para lhe dizer: não é assim tão grave! Se um dente fica infetado ou uma cárie fica demasiado grande, pode entrar no canal nervoso do dente, causando dor. A terapia de canal é então necessária para salvar o dente. O comentário mais típico que ouvimos depois de um paciente terminar um canal no nosso consultório é: \"Já está? Não foi nada de especial!\"",
  },
};

const ptWhy = [
  "Um prestador de confiança e bem estabelecido",
  "Ambiente acolhedor e atencioso",
  "Abordagem conservadora ao tratamento",
  "Tecnologia mais atual num consultório moderno",
  "Informativo e centrado no paciente",
  "Tratamento especializado para toda a família",
  "Cuidados preventivos e restauradores especializados",
  "Dentisteria cosmética, facetas, coroas e próteses",
  "Ortodontia Invisalign®",
  "Cuidados dentários de emergência",
  "Centenas de avaliações positivas",
];

const ptReviews = [
  {
    quote:
      "Experiência dentária excecional!! Hoje foi a minha primeira consulta na Farmington Dental e a visita foi maravilhosa do início ao fim! Cada membro da equipa foi simpático, envolvente e conhecedor. A Dr. Sturn e a sua equipa fizeram com que a consulta que eu temia parecesse uma visita a amigos!! Além disso, o consultório é simplesmente lindo!! Se tiver de ir ao dentista, este é o sítio!",
    by: "Amy P",
  },
  {
    quote:
      "É um prazer ser paciente na Farmington Dental! Profissionais, simpáticos, informativos, prestáveis… cumprem todos os requisitos!",
    by: "Dea J",
  },
  {
    quote:
      "Experiência maravilhosa, edifício de última geração, sala de espera confortável, pessoal de escritório alegre e bem versado no protocolo de seguros. A Doctor Sturn e a higienista — incrivelmente talentosas. Sou um homem de sessenta e cinco anos que já teve os dentes limpos por muitas higienistas dentárias, e esta foi de longe a melhor experiência que já tive. Recomendaria a Farmington Dental à minha família, aos meus amigos e a qualquer pessoa que procure um centro de cuidados dentários profissional e amigável!",
    by: "Kenny R",
  },
  {
    quote:
      "Tive a minha primeira consulta na Farmington Dental na semana passada, e foi uma ótima experiência como nenhuma outra! Ir a um dentista novo pode ser stressante, mas senti-me seguro e confortável o tempo todo. Todas as pessoas que lá trabalham trataram-me com a maior gentileza e paciência. Quando saí, também me senti muito informado sobre os cuidados dentários adequados daí em diante; coisas que estava a fazer bem e coisas que deveria ter em mente. Muito obrigado!!",
    by: "Brian H",
  },
  {
    quote: "Cuidado incrível. Médica incrível. Equipa maravilhosa. 10/10.",
    by: "Matthew P",
  },
  {
    quote:
      "Esta é uma prática dentária maravilhosa — a melhor de que já recebi cuidados. São atentos, cuidadosos, comunicativos e reativos às necessidades dos pacientes. Marcar e remarcar quando necessário é fácil, e sei sempre o que esperar com a faturação e o meu seguro. Definitivamente 5 estrelas. Se precisa de um novo dentista, recomendo vivamente a Farmington Dental.",
    by: "Caitlin M",
  },
  {
    quote:
      "Um ótimo consultório! … A Dr. Sturn é sempre meticulosa e ponderada no seu trabalho e tem uma excelente relação com o paciente. Não posso recomendar este consultório o suficiente. Obrigado!",
    by: "David D",
  },
];

export type Dictionary = {
  brand: string;
  phone: string;
  email: string;
  address: string[];
  hours: string;
  serving: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutBody: string[];
  whyChooseTitle: string;
  whyChoose: string[];
  welcomeClose: string;
  services: Record<ServiceKey, { title: string; body: string }>;
  reviews: { quote: string; by: string }[];
  patientInfo: { label: string; href: string }[];
  chrome: {
    skip: string;
    callNow: string;
    patientForms: string;
    makePayment: string;
    menu: string;
    close: string;
    meetTeam: string;
    hygienists: string;
    adminTeam: string;
    happyPatients: string;
    patientInfo: string;
    contactUs: string;
    contactInfo: string;
    officeHours: string;
    openMaps: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formHint: string;
    formSubject: string;
    light: string;
    dark: string;
    builtBy: string;
    rail: Record<RailId, string>;
  };
};

const chromeEn: Dictionary["chrome"] = {
  skip: "Skip to content",
  callNow: "Call Now",
  patientForms: "Patient Forms",
  makePayment: "Make a payment",
  menu: "Menu",
  close: "Close",
  meetTeam: "MEET THE TEAM",
  hygienists: "Our Amazing Hygienists",
  adminTeam: "The Outstanding Administrative Team",
  happyPatients: "HAPPY PATIENTS",
  patientInfo: "PATIENT INFO",
  contactUs: "CONTACT US",
  contactInfo: "Contact Information",
  officeHours: "Office Hours",
  openMaps: "Open in Google Maps",
  formName: "Name",
  formEmail: "Email",
  formMessage: "Message",
  formSend: "Open email",
  formHint:
    "Opens your email app with this message. We do not claim the message was delivered.",
  formSubject: "Website message — Farmington Dental",
  light: "Light",
  dark: "Dark",
  builtBy: "built by dglxss",
  rail: {
    about: "About",
    services: "Services",
    team: "Team",
    reviews: "Reviews",
    "patient-info": "Patient Info",
    contact: "Contact",
  },
};

const chromePt: Dictionary["chrome"] = {
  skip: "Saltar para o conteúdo",
  callNow: "Ligar agora",
  patientForms: "Formulários",
  makePayment: "Efetuar pagamento",
  menu: "Menu",
  close: "Fechar",
  meetTeam: "CONHEÇA A EQUIPA",
  hygienists: "As nossas higienistas",
  adminTeam: "A equipa administrativa",
  happyPatients: "PACIENTES FELIZES",
  patientInfo: "INFO DO PACIENTE",
  contactUs: "CONTACTE-NOS",
  contactInfo: "Informação de contacto",
  officeHours: "Horário",
  openMaps: "Abrir no Google Maps",
  formName: "Nome",
  formEmail: "Email",
  formMessage: "Mensagem",
  formSend: "Abrir email",
  formHint:
    "Abre a sua aplicação de email com esta mensagem. Não afirmamos que a mensagem foi entregue.",
  formSubject: "Mensagem do website — Farmington Dental",
  light: "Claro",
  dark: "Escuro",
  builtBy: "construído por dglxss",
  rail: {
    about: "Sobre",
    services: "Serviços",
    team: "Equipa",
    reviews: "Avaliações",
    "patient-info": "Info do paciente",
    contact: "Contacto",
  },
};

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    brand: source.brand,
    phone: source.phone,
    email: source.email,
    address: source.address,
    hours: source.hours,
    serving: source.serving,
    aboutEyebrow: source.aboutEyebrow,
    aboutTitle: source.aboutTitle,
    aboutSubtitle: source.aboutSubtitle,
    aboutBody: source.aboutBody,
    whyChooseTitle: source.whyChooseTitle,
    whyChoose: source.whyChoose,
    welcomeClose: source.welcomeClose,
    services: Object.fromEntries(
      SERVICE_KEYS.map((key) => [
        key,
        { title: key, body: source.services[key] },
      ]),
    ) as Dictionary["services"],
    reviews: source.reviews,
    patientInfo: source.patientInfo,
    chrome: chromeEn,
  },
  pt: {
    brand: source.brand,
    phone: source.phone,
    email: source.email,
    address: source.address,
    hours: "Segunda – quinta, 8:00 – 17:00\nSexta-feira por marcação",
    serving:
      "A servir as zonas dos Finger Lakes e de Rochester, com uma localização conveniente em Farmington, NY — a uma curta viagem de Victor, Canandaigua, Bloomfield ou Pittsford!",
    aboutEyebrow: "SOBRE NÓS",
    aboutTitle: "Experimente a diferença Farmington Dental!",
    aboutSubtitle:
      "Cuidados dentários especializados num ambiente descontraído e amigável",
    aboutBody: [
      "Esforçamo-nos por oferecer excelente medicina dentária num ambiente acolhedor e atencioso, onde os pacientes se sentem confortáveis e à vontade. Escutamos os nossos pacientes, levando a sério as suas necessidades e preocupações. Acreditamos numa abordagem conservadora às recomendações de tratamento e sabemos que pacientes bem informados são uma parte importante do processo. Trabalharemos consigo para determinar o melhor plano de tratamento para as suas necessidades.",
      "Toda a família é bem-vinda",
      "Temos a experiência e a especialização para cuidar de pacientes de todas as idades — desde a infância até aos anos seniores. Os nossos pacientes mais novos precisam de atenção especial para cuidar dos dentes de leite e receber educação precoce sobre escovagem, uso de fio dentário e manutenção da saúde oral. Dedicamos tempo para garantir que todos os nossos pacientes, em qualquer idade, possam fazer perguntas e se sintam confortáveis com o tratamento.",
      "Somos altamente avaliados",
      "Os nossos pacientes gostam de nós e têm o prazer de o dizer aos outros! Não deixe de consultar as nossas centenas de avaliações positivas no google!",
    ],
    whyChooseTitle: "Porquê escolher a Farmington Dental?",
    whyChoose: ptWhy,
    welcomeClose:
      "O seu sorriso e a sua saúde dentária são importantes para nós! Damos as boas-vindas a novos pacientes na nossa prática e estamos ansiosos por ouvir de si!",
    services: ptServices,
    reviews: ptReviews,
    patientInfo: [
      {
        label: "Formulários para novos pacientes",
        href: source.patientInfo[0].href,
      },
      {
        label: "Paciente existente — atualizar informação",
        href: source.patientInfo[1].href,
      },
      {
        label: "Aviso de práticas de privacidade (HIPAA)",
        href: source.patientInfo[2].href,
      },
    ],
    chrome: chromePt,
  },
};
