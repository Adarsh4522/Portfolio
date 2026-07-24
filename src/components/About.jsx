const About = () => {
  const cards = [
    {
      icon: '🚀',
      title: 'Full Stack Builder',
      text: 'Crafting end-to-end web applications from pixel-perfect UIs to robust, scalable backends — with a focus on developer experience and production quality.',
    },
    {
      icon: '☁️',
      title: 'Cloud & DevOps Explorer',
      text: 'Containerizing applications with Docker, deploying on GCP, and setting up real-world production pipelines with reverse proxies and persistent volumes.',
    },
    {
      icon: '💡',
      title: 'Curiosity-Driven Creator',
      text: 'Driven by the desire to solve real-world problems with technology. Whether it\'s water conservation or AI tutoring — I build with purpose.',
    },
  ];

  const tags = [
    { icon: '⚛️', label: 'React Ecosystem' },
    { icon: '🌿', label: 'MERN Stack' },
    { icon: '🐳', label: 'Containerization' },
    { icon: '☁️', label: 'Cloud Native' },
    { icon: '📊', label: 'Data Visualization' },
    { icon: '🔌', label: 'REST APIs' },
  ];

  return (
    <section className="section" id="about" aria-label="About section">
      <div className="container">
        <div className="about-grid">
          {/* Left — Text */}
          <div className="about-text reveal">
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              A developer who loves <span className="gradient-text">building things</span>
            </h2>

            <p>
              Hi there! I&apos;m <strong>Adarsh</strong>, a Full Stack Developer driven by curiosity
              and a love for clean, well-crafted code. From architecting MERN-based platforms to
              deploying production-grade applications on the cloud, I thrive across the entire
              development lifecycle.
            </p>
            <p>
              My journey spans <strong>web development, cloud infrastructure, and data-driven
              systems</strong>. I enjoy turning complex problems into simple, elegant solutions
              that are both scalable and user-centric.
            </p>
            <p>
              When I&apos;m not writing code, I&apos;m exploring new technologies, reading about
              distributed systems, or imagining the next meaningful digital product to build.
            </p>

            <div className="about-tags">
              {tags.map(({ icon, label }) => (
                <span key={label} className="about-tag">
                  <span aria-hidden="true">{icon}</span> {label}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Cards */}
          <div className="about-cards">
            {cards.map(({ icon, title, text }, i) => (
              <div
                key={title}
                className="glass-card about-card reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <span className="about-card-icon" aria-hidden="true">{icon}</span>
                <h3 className="about-card-title">{title}</h3>
                <p className="about-card-text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
