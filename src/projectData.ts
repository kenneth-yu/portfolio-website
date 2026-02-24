import type { ProjectData } from './types/projectData';

export const projectData: ProjectData = {
  experience: [
    {
      jobTitle: 'Staff Software Engineer',
      company: 'Priceline',
      jobDates: 'June 2019 - Present',
      summary: [
        "At Priceline, I lead major front-end initiatives that power core customer experiences and large partner integrations. My work supports high-traffic products used by millions of customers and hundreds of business partners in fast-moving, deadline-driven environments.",
        "I shape technical direction and establish company-wide standards for front end architecture, content management, and experimentation systems. This improves consistency, scalability, and development speed across teams.",
        "I focus on building resilient systems and practical workflows that help teams navigate complex problems and deliver high-quality features with confidence.",
        "Beyond delivery, I invest in strong engineering culture through mentorship, clear documentation, and long-term growth support. I regularly partner with leaders across product, design, and engineering to guide long-term platform investments.",
        "I also lead incident response and prevention efforts to reduce downtime, protect revenue, and strengthen platform reliability.",
      ],
      description: [],
    },
    {
      jobTitle: 'Associate Software Engineer',
      company: 'M&T Bank',
      mobileName: 'M&T',
      linkTag: 'mtb',
      jobDates: 'June 2017 - Nov 2018',
      summary: [
        "At M&T Bank, I developed and maintained internal web applications supporting operations across more than 750 branches using C#, JavaScript, and ASP.NET.",
        "I modernized legacy acquisition systems by restoring deprecated functionality and introducing new features, helping internal teams transition smoothly to updated platforms.",
        "My work included designing and optimizing SQL Server databases, improving application performance and data reliability across business-critical systems.",
        "I partnered closely with business stakeholders to design, wireframe, and implement solutions aligned with operational and regulatory requirements, while continuously improving workflows through system analysis and process mapping.",
        "I also provided post-deployment support through troubleshooting and feature enhancements, ensuring long-term stability and usability for internal users.",
        "In parallel, I produced detailed technical documentation to support audit readiness and regulatory compliance in a highly regulated environment.",
      ],
      description: [],
    },
  ],
  copy: {
    hero: {
      heading: 'Hi, My Name is Kenny.',
      subheading: "I'm a Software Engineer.",
      body: 'Based in New York City, I specialize in building exceptional digital experiences through thoughtful, user centric design and engineering. As a staff front-end engineer at Priceline, I shape technical direction, set company-wide standards, and lead high-impact initiatives that deliver reliable, scalable customer experiences.',
    },
    aboutMe: {
      heading: 'About Me',
      paragraphs: [
        "My name is Kenneth Yu and I have always been drawn to understanding how things work. That curiosity turned into a passion for technology when I built my first computer around age ten and learned how each component fit together. It sparked a desire to understand not just finished products but the systems behind them.",
        "Moving into software engineering felt like a natural next step. Over the years I've worked across industries from regulated financial systems to large-scale consumer platforms. Those experiences shaped how I approach engineering and strengthened my focus on building solutions that balance technical quality business goals and user experience.",
        "Communication is one of my strongest skills. I'm comfortable diving deep into architecture discussions and translating complex ideas into clear practical terms for business partners. Today I focus on shaping technical direction and building resilient systems that people can rely on.",
      ],
      technologiesLabel: 'Here are some of the technologies I am currently using:',
      technologies: [
        ['JavaScript (ES6+)', 'React', 'Node.js', 'GraphQL'],
        ['TypeScript', 'Tailwind', 'Remix.js', 'Jest'],
      ],
      carouselImages: [
        { path: 'white-pc-finished.jpg', alt: 'Finished white PC build' },
        { path: 'white-pc-unfinished.jpg', alt: 'Unfinished white PC build' },
        { path: 'finished-black-pc-1.jpg', alt: 'Finished black PC build 1' },
        { path: 'unfinished-black-pc.jpg', alt: 'Unfinished black PC build', objectFit: 'cover' },
        { path: 'finished-black-pc-2.jpg', alt: 'Finished black PC build 2' },
        { path: 'unfinished-black-pc-2.jpg', alt: 'Unfinished black PC build 2', objectFit: 'cover' },
      ],
    },
    contact: {
      heading: 'Contact Me',
      bodyTemplate: 'Although I am not actively searching for new opportunities, I am always open for suggestions. Feel free to send me a message using the button below or by emailing me at {{email}}.\nI will try my best to get back to you as soon as possible. Thanks for visiting my website!',
      buttonText: 'Email Me',
      buttonTextCopied: 'Email Copied',
      email: 'mail@kennethyu.dev',
    },
    experience: {
      heading: 'Experience',
      viewDetails: 'View details',
      collapse: 'Collapse',
      ariaLabelTabs: 'Work experience',
    },
    nav: [
      { href: '#intro', label: 'Home' },
      { href: '#about-me', label: 'About' },
      { href: '#experience', label: 'Experience' },
      { href: '#contact-me', label: 'Contact' },
    ],
  },
};
