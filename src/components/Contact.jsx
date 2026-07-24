const CONTACTS = [
  {
    id: 'github',
    icon: '🐙',
    title: 'GitHub',
    value: 'github.com/Adarsh4522',
    href: 'https://github.com/Adarsh4522',
    label: 'View GitHub profile',
  },
  {
    id: 'linkedin',
    icon: '💼',
    title: 'LinkedIn',
    value: 'linkedin.com/in/adarsh-aa4b29339',
    href: 'https://www.linkedin.com/in/adarsh-aa4b29339/',
    label: 'Connect on LinkedIn',
  },
  {
    id: 'email',
    icon: '✉️',
    title: 'Email',
    value: 'adarshk1412@gmail.com',
    href: 'mailto:adarshk1412@gmail.com',
    label: 'Send an email',
  },
];

const Contact = () => (
  <section className="section" id="contact" aria-label="Contact section">
    <div className="container">
      <div className="contact-wrapper">
        <div className="contact-header reveal">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="contact-desc">
            Whether you have a project in mind, an opportunity to share, or just want to
            say hello — my inbox is always open. I&apos;ll do my best to get back to you promptly!
          </p>
        </div>

        <div className="contact-grid">
          {CONTACTS.map(({ id, icon, title, value, href, label }, i) => (
            <a
              key={id}
              id={`contact-${id}`}
              href={href}
              target={href.startsWith('mailto') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="glass-card contact-card reveal"
              aria-label={label}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <span className="contact-icon" aria-hidden="true">{icon}</span>
              <div className="contact-card-title">{title}</div>
              <div className="contact-card-value">{value}</div>
            </a>
          ))}
        </div>

        <div className="reveal" style={{ transitionDelay: '0.4s' }}>
          <a
            id="contact-email-cta"
            href="mailto:adarshk1412@gmail.com"
            className="btn btn-primary"
          >
            <span>Say Hello 👋</span>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
