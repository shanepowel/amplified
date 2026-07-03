// ─── Organisation (use on homepage only via index.html static JSON-LD) ───────

export const organisationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://amplified.co.uk/#organisation',
  name: 'Amplified',
  legalName: 'Amplified Ltd',
  url: 'https://amplified.co.uk',
  logo: {
    '@type': 'ImageObject',
    url: 'https://amplified.co.uk/favicon.png',
    width: 200,
    height: 60,
  },
  image: 'https://amplified.co.uk/og-image.png',
  description:
    'Amplified helps project-driven organisations in regulated industries embed new technologies without losing the accountability frameworks that make them work. AI governance, structured delivery, and capability building.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7 Bell Yard',
    addressLocality: 'London',
    postalCode: 'WC2A 2JR',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@amplified.co.uk',
    contactType: 'customer service',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceArea: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  knowsAbout: [
    'AI Governance',
    'Responsible AI',
    'EU AI Act',
    'Technology Implementation',
    'Agile Delivery',
    'Programme Management',
    'Regulated Industries',
    'Infrastructure Projects',
    'Financial Services Technology',
    'Public Sector Transformation',
    'Energy Sector Technology',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Amplified Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Governance' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Implementation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Structured Delivery' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Capability Building' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Coaching' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tech Build' } },
    ],
  },
  sameAs: [
    'https://www.linkedin.com/company/amplified-consultancy',
    'https://www.instagram.com/amplifiedco',
  ],
};


// ─── Website (use on homepage only) ──────────────────────────────────────────

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://amplified.co.uk/#website',
  url: 'https://amplified.co.uk',
  name: 'Amplified',
  description: 'AI Governance & Technology Delivery for Regulated Industries',
  publisher: {
    '@id': 'https://amplified.co.uk/#organisation',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://amplified.co.uk/insights?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};


// ─── Service schema factory ───────────────────────────────────────────────────

export function createServiceSchema({
  name,
  url,
  description,
  keywords,
}: {
  name: string;
  url: string;
  description: string;
  keywords: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    url,
    description,
    provider: {
      '@id': 'https://amplified.co.uk/#organisation',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    serviceType: keywords[0],
    keywords: keywords.join(', '),
  };
}


// ─── Pre-built service schemas ────────────────────────────────────────────────

export const aiGovernanceServiceSchema = createServiceSchema({
  name: 'AI Governance for Regulated Industries',
  url: 'https://amplified.co.uk/ai-governance',
  description:
    'Responsible AI governance frameworks, risk assessments, and assurance structures for infrastructure, energy, financial services, and public sector organisations. EU AI Act and FCA aligned.',
  keywords: [
    'AI Governance',
    'Responsible AI',
    'EU AI Act compliance',
    'AI risk framework',
    'AI ethics governance',
    'Regulated industries AI',
  ],
});

export const aiImplementationServiceSchema = createServiceSchema({
  name: 'AI Implementation',
  url: 'https://amplified.co.uk/ai-implementation',
  description:
    'End-to-end AI implementation built within your governance structures. From proof of concept through to production, with handover and internal capability transfer.',
  keywords: [
    'AI Implementation',
    'AI deployment',
    'AI integration',
    'Production AI',
    'AI programme delivery',
  ],
});

export const structuredDeliveryServiceSchema = createServiceSchema({
  name: 'Structured Delivery',
  url: 'https://amplified.co.uk/structured-delivery',
  description:
    'Squad-based delivery models designed for organisations where governance, auditability, and structured programme management are non-negotiable.',
  keywords: [
    'Structured Delivery',
    'Agile delivery',
    'Programme management',
    'Governed agile',
    'Delivery governance',
    'Squad model',
  ],
});

export const capabilityBuildingServiceSchema = createServiceSchema({
  name: 'Capability Building',
  url: 'https://amplified.co.uk/capability',
  description:
    'Building permanent internal capability in AI, data, and digital delivery for regulated industry organisations so they are not perpetually dependent on external partners.',
  keywords: [
    'Capability Building',
    'Digital capability',
    'AI capability',
    'Training and development',
    'Digital skills',
    'Technology adoption',
  ],
});

export const coachingServiceSchema = createServiceSchema({
  name: 'Coaching for Delivery Leaders',
  url: 'https://amplified.co.uk/coaching',
  description:
    'One-to-one and cohort coaching for delivery directors, programme managers, and CIOs leading technology adoption in regulated industry organisations.',
  keywords: [
    'Delivery coaching',
    'CIO coaching',
    'Programme management coaching',
    'Technology leadership',
    'Executive coaching',
  ],
});

export const orgDesignServiceSchema = createServiceSchema({
  name: 'Autonomous Organisations',
  url: 'https://amplified.co.uk/org-design',
  description:
    'Holacracy implementation, product-led organisational design, and AI integration frameworks for organisations ready to restructure for the autonomous era.',
  keywords: [
    'Autonomous organisations',
    'Holacracy',
    'Org design',
    'Product organisation',
    'AI-native organisation',
  ],
});


// ─── Breadcrumb schema factory ────────────────────────────────────────────────

export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}


// ─── Article schema factory ───────────────────────────────────────────────────

export function createArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
  keywords,
  wordCount,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
  keywords: string[];
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: 'https://amplified.co.uk/about/team',
    },
    publisher: {
      '@id': 'https://amplified.co.uk/#organisation',
      name: 'Amplified',
      logo: {
        '@type': 'ImageObject',
        url: 'https://amplified.co.uk/favicon.png',
      },
    },
    image: image || 'https://amplified.co.uk/og-image.png',
    keywords: keywords.join(', '),
    ...(wordCount && { wordCount }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: 'en-GB',
  };
}


// ─── FAQ schema factory ───────────────────────────────────────────────────────

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}


// ─── Pre-built FAQ schemas ────────────────────────────────────────────────────

export const aiGovernanceFAQSchema = createFAQSchema([
  {
    question: 'What is AI governance for regulated industries?',
    answer:
      'AI governance for regulated industries is the set of policies, frameworks, accountability structures, and oversight mechanisms that ensure AI systems operate within legal, ethical, and operational boundaries specific to sectors like infrastructure, financial services, energy, and the public sector. Unlike commercial AI governance, it must integrate with existing PMO structures, regulatory frameworks such as the EU AI Act and FCA guidance, and stage-gate programme controls.',
  },
  {
    question: 'Does the EU AI Act apply to UK organisations?',
    answer:
      'UK organisations that deploy AI systems in EU markets, or whose AI systems process data from EU subjects, must comply with the EU AI Act. Additionally, the UK Government has published its own AI regulatory framework, and regulators including the FCA and Ofgem have issued AI-specific guidance. Amplified builds governance frameworks that satisfy both UK and EU requirements.',
  },
  {
    question: 'When should an organisation start AI governance work?',
    answer:
      'AI governance must start before any technology procurement or model selection. The governance framework determines what you can and cannot deploy, sets the accountability structures engineering teams must work within, and satisfies the questions your regulatory board will ask. Starting governance after procurement is the single most common and costly mistake in regulated industry AI adoption.',
  },
  {
    question: 'What does Amplified deliver as part of AI governance?',
    answer:
      'Amplified delivers: AI risk frameworks and readiness assessments; responsible AI policy design and board-level reporting; EU AI Act and UK AI framework alignment; auditability, explainability, and model risk standards; and AI ethics governance and ongoing assurance. All frameworks are built to work inside your existing delivery structures, not alongside them.',
  },
]);

export const infrastructureFAQSchema = createFAQSchema([
  {
    question: 'What AI governance challenges are specific to infrastructure organisations?',
    answer:
      'Infrastructure organisations face a unique set of AI governance challenges: their programmes run on NEC or JCT contracts with fixed stage-gate approvals, their PMO structures require auditability and paper trails that most AI tools do not provide natively, their workforce is distributed across sites rather than desks, and the consequences of AI failure are physical, not just financial. Generic AI governance frameworks built for software businesses do not account for any of this.',
  },
  {
    question: 'Can agile delivery work in infrastructure programmes?',
    answer:
      'Yes, but it requires structured adaptation. Pure agile sprint cycles are incompatible with stage-gate approvals, NEC compensation events, and regulatory sign-off requirements. Amplified implements a structured agile model that retains sprint-based delivery while preserving the governance rigour, documentation standards, and audit trails that infrastructure programmes require.',
  },
  {
    question: 'How does digital transformation work alongside a live infrastructure programme?',
    answer:
      'The most effective approach is to embed digital capability within the existing programme structure rather than running it in parallel. Amplified maps the digital workstream to existing programme governance, ensures all outputs meet the same assurance standards as physical deliverables, and builds handover plans so internal teams maintain the capability after the engagement ends.',
  },
  {
    question: 'What does an AI readiness assessment cover for an infrastructure organisation?',
    answer:
      'An Amplified AI readiness assessment for infrastructure covers: data maturity and availability across the programme, existing governance structures and where AI accountability would sit, regulatory and contractual constraints on AI use, workforce readiness and change management requirements, and a prioritised roadmap of AI use cases with risk-adjusted business cases.',
  },
]);

export const financialServicesFAQSchema = createFAQSchema([
  {
    question: 'What does FCA-aligned AI governance look like in practice?',
    answer:
      'FCA-aligned AI governance means every AI system used in regulated activities has a documented accountability owner, a model risk assessment aligned to SR 11-7 principles, explainability standards that satisfy Principle 6 (fair treatment of customers), and a change management process that triggers regulatory notification where required. It also means your board can answer questions about your AI systems if the FCA asks.',
  },
  {
    question: 'How does the EU AI Act affect UK financial services firms?',
    answer:
      'UK financial services firms operating in EU markets, offering products to EU customers, or processing data from EU subjects must comply with the EU AI Act. High-risk AI applications in credit scoring, insurance underwriting, and employment decisions face the strictest requirements. Amplified builds dual-compliance frameworks that satisfy both UK FCA requirements and EU AI Act obligations.',
  },
  {
    question: 'What is SMCR accountability for AI systems?',
    answer:
      'Under SMCR, Senior Managers are individually accountable for the areas they oversee, including technology and AI systems. This means a named Senior Manager must own every material AI system, understand its risk profile, and be able to demonstrate adequate oversight if the FCA investigates. Amplified structures AI governance frameworks to satisfy SMCR accountability requirements explicitly.',
  },
  {
    question: 'How quickly can Amplified implement an AI governance framework?',
    answer:
      'For most financial services organisations, an initial AI governance framework covering existing systems and controls can be delivered in eight to twelve weeks. This includes a risk assessment of current AI use, an accountability mapping exercise, policy documentation, and board reporting templates. Ongoing assurance and monitoring is then structured as a retained service.',
  },
]);

export const energyFAQSchema = createFAQSchema([
  {
    question: 'What AI governance requirements apply to Ofgem-regulated organisations?',
    answer:
      'Ofgem has issued guidance on AI use in regulated energy activities, with particular focus on customer-facing AI systems, algorithmic pricing, and smart grid management. Organisations must be able to demonstrate that AI systems used in regulated activities meet transparency, accountability, and non-discrimination standards. Amplified builds governance frameworks that align to Ofgem guidance while satisfying broader UK AI regulatory requirements.',
  },
  {
    question: 'How is AI being used in energy and utilities programmes?',
    answer:
      'The most mature AI use cases in energy and utilities include predictive maintenance for grid infrastructure, demand forecasting and load balancing, smart meter data analytics, customer service automation, and real-time network monitoring. Each of these has distinct governance requirements depending on whether they affect regulated activities, safety-critical systems, or customer outcomes.',
  },
  {
    question: 'What makes AI governance different for a safety-critical environment?',
    answer:
      'Safety-critical environments require AI governance to integrate with existing safety management systems, not sit alongside them. Every AI system that could affect physical safety must have a documented failure mode analysis, a human override procedure, and a clear accountability chain that extends to operational teams on the ground. Amplified builds AI governance that satisfies both regulatory and safety management standards simultaneously.',
  },
  {
    question: 'How does Amplified work alongside existing operational technology teams?',
    answer:
      'Amplified embeds within your existing programme and OT team structures rather than operating as an external advisory layer. This means governance frameworks are built with the people who will use them, accountability structures map to existing roles, and training is practical rather than theoretical. Handover is planned from day one so your teams own the capability when we leave.',
  },
]);

export const publicSectorFAQSchema = createFAQSchema([
  {
    question: 'What is the GDS Service Standard and how does it apply to AI?',
    answer:
      'The GDS Service Standard sets out 14 principles for designing and delivering government digital services. For AI systems, the most relevant standards are: understanding users and their needs (including how AI affects them), making the service accessible, testing with real users, and making source code open. Amplified applies the GDS Service Standard to AI delivery specifically, adapting it for systems that use machine learning and automated decision-making.',
  },
  {
    question: 'How does the UK AI in Public Sector framework affect local authorities?',
    answer:
      'The UK Government\'s AI in Public Sector framework, combined with CDDO guidance, sets expectations for how public bodies should assess, procure, and govern AI systems. Local authorities using AI in benefit assessments, planning decisions, or enforcement must ensure those systems are explainable, regularly audited, and do not produce discriminatory outcomes. Amplified builds governance structures that satisfy these requirements and prepare organisations for DSIT scrutiny.',
  },
  {
    question: 'Can public sector organisations use AI in decision-making?',
    answer:
      'Yes, but with specific governance requirements. The Algorithmic Transparency Recording Standard (ATRS) requires public sector bodies to publish records of algorithms used in significant decisions. Automated decisions affecting individuals must comply with UK GDPR Article 22. Amplified structures AI governance to ensure all automated and AI-assisted decision-making is properly documented, explainable, and has appropriate human oversight.',
  },
  {
    question: 'How does Amplified work within public sector procurement constraints?',
    answer:
      'Amplified is experienced working within public sector procurement frameworks including G-Cloud, DOS/Digital Outcomes, and Crown Commercial Service agreements. Engagements are structured to comply with procurement rules, with clear statement of work, defined deliverables, and milestone-based payment structures. We also support organisations through the business case and approval process before an engagement begins.',
  },
]);

export const aiImplementationFAQSchema = createFAQSchema([
  {
    question: 'What is the difference between AI implementation and AI governance?',
    answer:
      'AI governance is the framework of policies, oversight structures, and accountability mechanisms that determine how AI is used. AI implementation is the technical and delivery work of building, integrating, and deploying AI systems. Effective AI programmes need both: governance without implementation stays theoretical, implementation without governance creates unmanaged risk. Amplified delivers them together, ensuring the systems we build are governed from day one.',
  },
  {
    question: 'How long does a typical AI implementation engagement take?',
    answer:
      'This depends on scope, but a structured engagement runs in three phases: use case identification and prioritisation (four to six weeks), proof of concept development (eight to twelve weeks), and production deployment (twelve to twenty weeks). Organisations with strong existing governance and technical infrastructure move faster. Amplified scopes all engagements based on your specific context before committing to a timeline.',
  },
  {
    question: 'How does Amplified handle AI implementation in regulated environments?',
    answer:
      'Regulated environments require AI systems to be explainable, auditable, and documented. Every system Amplified delivers is designed for compliance from the outset: model decisions are logged, outputs are explainable in non-technical language, change management processes map to your existing change control frameworks, and governance documentation is produced alongside the technical deliverables. We do not retrofit governance after delivery.',
  },
  {
    question: 'What happens at the end of an AI implementation engagement?',
    answer:
      'Capability transfer is built into every engagement from the start, not added as a final step. By the time production deployment is complete, your internal teams understand how the system works, how to monitor it, how to identify model drift, and how to escalate issues. We produce handover documentation, run knowledge transfer sessions, and remain available for a defined support period. You own the capability when we leave.',
  },
]);

export const structuredDeliveryFAQSchema = createFAQSchema([
  {
    question: 'What is structured agile delivery and how is it different from standard agile?',
    answer:
      'Standard agile works well for greenfield digital products. Structured agile applies agile principles within the accountability and governance structures that regulated industries require, including stage gates, assurance reviews, RAID management, and formal reporting. It is not a compromise between agile and waterfall; it is agile designed for environments where auditability, traceability, and formal accountability are non-negotiable. Amplified has developed and refined this approach across infrastructure, energy, financial services, and public sector programmes.',
  },
  {
    question: 'Can agile delivery work in a programme with fixed milestones and contractual obligations?',
    answer:
      'Yes. Fixed milestones and contractual obligations define the boundaries within which delivery works, not the delivery method itself. Amplified structures agile sprints and iterations to produce specific, verifiable deliverables at each milestone, ensuring contractual obligations are met without reverting to big-bang waterfall execution. This approach reduces the risk of late discovery and gives sponsors confidence through regular, tangible progress.',
  },
  {
    question: 'How does structured delivery handle programme governance requirements?',
    answer:
      'Programme governance requirements, including board reporting, exception management, benefits tracking, and change control, are embedded into the delivery structure rather than treated as overhead. Amplified produces governance artefacts as natural outputs of the delivery process, not as separate documents created after the fact. This reduces reporting burden on delivery teams and ensures governance bodies have accurate, timely information.',
  },
  {
    question: 'What PMO and programme frameworks does Amplified work with?',
    answer:
      'Amplified works across NEC, PRINCE2, MSP, and bespoke programme frameworks used by major infrastructure clients. On the digital side, we work with SAFe, Scrum, and custom scaled agile approaches. We adapt to the frameworks already in place rather than requiring clients to adopt new methodology, and we support teams in making their existing frameworks work better rather than replacing them.',
  },
]);

export const capabilityBuildingFAQSchema = createFAQSchema([
  {
    question: 'Why do most capability building programmes fail to create lasting change?',
    answer:
      'Most capability programmes fail because they focus on training events rather than embedded practice. A course creates awareness; working alongside experienced practitioners on real problems creates capability. Amplified structures all capability work around live engagements, coaching real decisions in real contexts, with deliberate handover at the end so the learning is retained by your people rather than residing in an external consultant.',
  },
  {
    question: 'What AI and digital capabilities does Amplified help organisations build?',
    answer:
      'The most common areas are: AI literacy for senior leaders and executives, data governance and data management practices, product thinking and user-centred design in regulated contexts, programme delivery using structured agile approaches, and AI governance and responsible AI frameworks. Amplified also builds bespoke capability programmes for specific roles, for example delivery directors leading technology change for the first time.',
  },
  {
    question: 'How does Amplified measure the impact of capability building?',
    answer:
      'We establish baseline capability measures at the start of each engagement, agree what good looks like with programme sponsors, and track measurable indicators throughout. These include: decisions made without external input, reduction in escalations to consultants, quality of artefacts produced by internal teams, and confidence assessments from participants. Impact measurement is built into the engagement structure, not treated as an afterthought.',
  },
  {
    question: 'Can Amplified deliver capability building alongside a live programme?',
    answer:
      'Yes, and this is often the most effective approach. Building capability in the context of real delivery decisions accelerates learning and ensures the capability is immediately applicable. Amplified structures embedded capability programmes to work alongside active programmes without adding significant overhead, integrating learning activities into existing team ceremonies and decision points.',
  },
]);

export const coachingFAQSchema = createFAQSchema([
  {
    question: 'Who is Amplified coaching designed for?',
    answer:
      'Amplified coaching is designed for delivery directors, programme managers, and CIOs who are leading technology change in regulated industries for the first time, or experienced leaders navigating a particularly complex programme. The most common coaching clients are senior professionals who are technically capable in their domain but need a thinking partner with specific experience in technology delivery, AI governance, or leading change in regulated contexts.',
  },
  {
    question: 'How is Amplified coaching different from executive coaching?',
    answer:
      'General executive coaching focuses on leadership behaviour and personal development. Amplified coaching combines that with deep subject matter expertise in technology delivery and AI governance. Clients work through real delivery challenges, governance decisions, and stakeholder situations with a coach who has led similar programmes. The sessions are structured around your specific context, not a generic coaching framework.',
  },
  {
    question: 'What does a typical coaching engagement look like?',
    answer:
      'A structured coaching engagement runs for three to six months, with fortnightly sessions of sixty to ninety minutes. Each session is centred on a live challenge the client is navigating. Between sessions, clients have access to resources, frameworks, and tools relevant to their situation. Amplified also offers cohort coaching for teams of delivery leaders within the same organisation, which builds shared language and mutual accountability.',
  },
  {
    question: 'Can coaching help with a specific programme crisis or challenge?',
    answer:
      'Yes. Amplified offers intensive coaching for programme leaders navigating a specific crisis, major decision, or difficult stakeholder situation. These engagements are shorter and more focused, typically four to eight sessions over four to six weeks, designed to give a leader the thinking support and practical frameworks they need to navigate a specific challenge rather than a sustained development programme.',
  },
]);

// ─── HowTo schema — /how-we-work ─────────────────────────────────────────────

export const howWeWorkSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  'name': 'The Amp Model: How Amplified Delivers AI Governance and Structured Delivery',
  'description': 'Three clear phases: Assess, Implement, Amplify. Every engagement has defined outputs, governance checkpoints, and built-in capability transfer. No methodology and run.',
  'url': 'https://amplified.co.uk/how-we-work',
  'publisher': {
    '@type': 'Organization',
    'name': 'Amplified',
    'url': 'https://amplified.co.uk',
    '@id': 'https://amplified.co.uk/#organisation',
  },
  'step': [
    {
      '@type': 'HowToStep',
      'position': 1,
      'name': 'Assess',
      'text': 'We conduct a structured assessment of your current state, covering AI readiness, delivery capability, governance maturity, and team structure. Outputs include an AI Readiness Report, Governance Maturity Assessment, Delivery Capability Review, and a prioritised roadmap. Typical duration: two to four weeks.',
    },
    {
      '@type': 'HowToStep',
      'position': 2,
      'name': 'Implement',
      'text': 'Implementation at Amplified is always embedded. Our practitioners work inside your teams, alongside your people, delivering AI capabilities, governance frameworks, or new operating models within your existing structures. All delivery integrates with your existing PMO, programme governance, and assurance frameworks.',
    },
    {
      '@type': 'HowToStep',
      'position': 3,
      'name': 'Amplify',
      'text': 'We build the capability so your teams can run it without external support. Every implementation phase includes a structured embedding programme that transfers real capability, not just documentation. Includes an internal capability programme, Centre of Excellence design, and a three-month post-engagement check-in.',
    },
  ],
};

// ─── CollectionPage schema — /insights ───────────────────────────────────────

export const insightsHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://amplified.co.uk/insights',
  'name': 'Amplified Insights: AI Governance and Structured Delivery',
  'description': 'Practical thinking for delivery-led organisations. Research, frameworks, and analysis on AI governance, structured delivery, and capability building for regulated industries.',
  'url': 'https://amplified.co.uk/insights',
  'publisher': {
    '@type': 'Organization',
    'name': 'Amplified',
    'url': 'https://amplified.co.uk',
    '@id': 'https://amplified.co.uk/#organisation',
  },
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://amplified.co.uk/' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Insights', 'item': 'https://amplified.co.uk/insights' },
    ],
  },
};


export const ciosFAQSchema = createFAQSchema([
  {
    question: 'How does Amplified work alongside our existing technology governance?',
    answer: 'We work inside your existing governance structures, not around them. Our AI governance frameworks are designed to slot into established assurance, risk, and compliance processes. We map existing controls first, identify gaps, and build only what is missing rather than starting from scratch.',
  },
  {
    question: 'What does an AI governance framework from Amplified actually include?',
    answer: 'A framework built around your regulatory context: an AI risk register, model inventory, usage policies, approval and escalation pathways, third-party AI assessment criteria, and a governance board pack template. Everything is documented to be owned and operated by your team, not us.',
  },
  {
    question: 'How do you handle EU AI Act and sector-specific regulatory requirements?',
    answer: 'We have deep familiarity with EU AI Act obligations, FCA SYSC requirements, GDS standards, and infrastructure-sector assurance frameworks. We do not offer generic compliance templates. Every framework is built around the specific regulatory obligations your organisation carries.',
  },
  {
    question: 'Can you work alongside our existing delivery partners and system integrators?',
    answer: 'Yes. Most of our engagements sit alongside existing SI relationships. We operate as the governance and assurance layer, not a competitor to implementation partners. We define the standards your partners work to and hold the accountability framework that vendors report into.',
  },
  {
    question: 'What does a first engagement typically look like?',
    answer: 'We start with a 30-minute conversation to understand your specific context. From there, most CIO engagements begin with a governance readiness assessment: a structured review of your current AI posture, risk exposure, and the gaps between where you are and where regulators and your board expect you to be.',
  },
]);

export const deliveryDirectorsFAQSchema = createFAQSchema([
  {
    question: "What is different about Amplified's approach to structured delivery?",
    answer: 'We combine proper governance rigour with delivery pace. Most delivery frameworks treat governance as a checkpoint process. We build governance into delivery cadences so that assurance happens continuously, not at stage gates. Programmes move faster because there are fewer surprises.',
  },
  {
    question: 'How does the Stable Teams model work?',
    answer: 'AmplifiedTeams provides IR35-compliant, multi-disciplinary delivery teams mobilised within 48 hours. Teams are not assembled ad hoc from a contractor pool. They are stable units with established ways of working, which means onboarding friction is minimal and delivery starts immediately.',
  },
  {
    question: 'Can you come into a programme that is already in trouble?',
    answer: 'Yes. Programme recovery is one of the most common reasons organisations come to us. We assess the current state quickly, identify the root causes (not just the symptoms), stabilise governance and team accountability, and establish a credible path forward. We have done this in infrastructure, financial services, and public sector contexts.',
  },
  {
    question: 'What does governance recovery actually look like in practice?',
    answer: 'We typically start with a rapid diagnostic: reviewing delivery artefacts, governance documentation, and stakeholder reporting. Within two weeks we produce a clear view of what is working, what is not, and what needs to change. Recovery then follows a structured 90-day stabilisation plan.',
  },
  {
    question: 'Do you work on public sector frameworks and NEC contracts?',
    answer: 'Yes. Our team has direct experience across Crown Commercial Service frameworks, NEC contract environments, GDS delivery standards, and major capital programme governance. We understand the accountability structures and reporting requirements these environments demand.',
  },
]);

export const digitalLeadsFAQSchema = createFAQSchema([
  {
    question: "How does Amplified avoid the 'training course' trap?",
    answer: 'Every capability programme we design is tied to real delivery. Skills are built through doing, not through slide decks. We embed practitioners alongside your teams on live work, so learning happens in context and sticks. We also build in structured knowledge transfer so the capability stays when we leave.',
  },
  {
    question: 'What does embedded upskilling look like in practice?',
    answer: 'An Amplified practitioner joins your team in a coaching and doing capacity. They model the behaviours, challenge the gaps, and transfer the skills through the actual work. This is not instruction from the front of a room. It is collaborative work with explicit capability transfer built into every sprint or workstream.',
  },
  {
    question: 'How long does it take to build real internal AI capability?',
    answer: 'For most organisations, meaningful capability takes 6 to 12 months to embed properly. We are honest about this because quick programmes rarely change behaviour. We structure programmes around defined milestones so you can see progress, and we build internal communities of practice that sustain the capability after the engagement ends.',
  },
  {
    question: 'Do you work with teams that have limited technical background?',
    answer: 'Yes. Our AI literacy programmes are designed specifically for non-technical leaders, governance teams, and operational staff. We make AI concepts accessible without oversimplifying them, so people can make informed decisions, interrogate vendor claims, and own AI adoption rather than just approving it.',
  },
  {
    question: 'Can you help us move from pilot to scaled adoption?',
    answer: 'This is one of the most common challenges we help with. Pilots succeed in controlled conditions but fail to scale because the governance, capability, and operating model are not ready. We help you build the foundation that makes scale possible: the policies, the trained people, the decision frameworks, and the ways of working.',
  },
]);


export const technologySectorFAQSchema = createFAQSchema([
  {
    question: 'Does Amplified only work with regulated industries, or do you work with technology companies too?',
    answer: 'Amplified works with technology companies, scale-ups, and private sector organisations as well as regulated industries. Our methods and governance frameworks are designed for environments where rigour matters, whether that rigour is imposed by a regulator or by the demands of operating at scale. Many of our technology clients are moving into regulated markets, building AI-native products, or operating inside enterprises where delivery accountability has become critical.',
  },
  {
    question: 'What does AI governance look like for a technology company that is not yet in a regulated market?',
    answer: 'For technology companies not yet subject to external regulation, AI governance is primarily about internal accountability, product risk management, and preparing for the regulatory landscape you will inevitably enter. We help you build governance frameworks that are proportionate to your current context but designed to scale into the FCA, ICO, EU AI Act, or sector-specific frameworks your product trajectory will require.',
  },
  {
    question: 'We already have strong engineering processes. What does Amplified add?',
    answer: 'Most strong engineering organisations have excellent delivery processes at the squad or product level. The gaps we address are typically governance above the squad level: how AI decisions are made and documented, how accountability flows from engineering to product to board, how you demonstrate responsible AI use to enterprise customers, regulators, or investors, and how you build the leadership capability to govern technology at scale.',
  },
  {
    question: 'Can you work within our existing product and engineering culture?',
    answer: 'Yes. We do not impose delivery frameworks that conflict with engineering culture. We work within your existing rituals and tooling, identifying the governance and accountability gaps without adding unnecessary process. Our goal is to make your teams more effective, not to slow them down with frameworks built for a different context.',
  },
  {
    question: 'What does a Tech Build engagement with Amplified look like?',
    answer: 'Tech Build engagements start with a clear brief: what you need to build, the constraints you are working within, and the accountability you need to maintain. We build alongside your team or independently depending on your preference, with a strong emphasis on architecture that is maintainable and governance that satisfies your enterprise and regulatory obligations. We document as we go so the handover is clean.',
  },
]);
