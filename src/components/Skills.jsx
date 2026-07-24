const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

const CATEGORIES = [
  {
    label: 'Languages',
    skills: [
      { name: 'HTML5',      icon: `${DEVICON}/html5/html5-original.svg`,               t: 'html' },
      { name: 'CSS3',       icon: `${DEVICON}/css3/css3-original.svg`,                 t: 'css' },
      { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg`,     t: 'js' },
      { name: 'Java',       icon: `${DEVICON}/java/java-original.svg`,                 t: 'java' },
      { name: 'C++',        icon: `${DEVICON}/cplusplus/cplusplus-original.svg`,       t: 'cpp' },
      { name: 'PHP',        icon: `${DEVICON}/php/php-original.svg`,                   t: 'php' },
    ],
  },
  {
    label: 'Frameworks & Libraries',
    skills: [
      { name: 'React',      icon: `${DEVICON}/react/react-original.svg`,               t: 'react' },
      { name: 'Node.js',    icon: `${DEVICON}/nodejs/nodejs-original.svg`,             t: 'node' },
      { name: 'Express.js', icon: `${DEVICON}/express/express-original.svg`,           t: 'express' },
    ],
  },
  {
    label: 'Databases',
    skills: [
      { name: 'MongoDB',    icon: `${DEVICON}/mongodb/mongodb-original.svg`,           t: 'mongo' },
      { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg`,     t: 'pg' },
    ],
  },
  {
    label: 'DevOps & Tools',
    skills: [
      { name: 'Docker',     icon: `${DEVICON}/docker/docker-original.svg`,             t: 'docker' },
      { name: 'Git',        icon: `${DEVICON}/git/git-original.svg`,                   t: 'git' },
      { name: 'GitHub',     icon: `${DEVICON}/github/github-original.svg`,             t: 'github' },
      { name: 'GCP',        icon: `${DEVICON}/googlecloud/googlecloud-original.svg`,   t: 'gcp' },
      { name: 'Nginx',      icon: `${DEVICON}/nginx/nginx-original.svg`,               t: 'nginx' },
    ],
  },
];

const Skills = () => (
  <section className="section" id="skills" aria-label="Skills section">
    <div className="container">
      <div className="skills-header reveal">
        <span className="section-label">What I Work With</span>
        <h2 className="section-title">
          My <span className="gradient-text">Tech Stack</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '0 auto', fontSize: '0.97rem' }}>
          A curated set of technologies I&apos;ve used to build, deploy, and scale real-world applications.
        </p>
      </div>

      <div className="skills-categories">
        {CATEGORIES.map(({ label, skills }, ci) => (
          <div key={label} className="skill-category reveal" style={{ transitionDelay: `${ci * 0.1}s` }}>
            <div className="skill-cat-title">{label}</div>
            <div className="skills-grid">
              {skills.map(({ name, icon, t, invert }) => (
                <div
                  key={name}
                  id={`skill-${t}`}
                  className="skill-card"
                  data-t={t}
                  role="listitem"
                >
                  <div className="skill-icon-wrap">
                    <img
                      src={icon}
                      alt={name}
                      className={`skill-icon${invert ? ' invert' : ''}`}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.opacity = '0.4'; }}
                    />
                  </div>
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
