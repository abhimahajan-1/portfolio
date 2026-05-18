const featuredProjects = [
  {
    title: "3D Printed Upper Limb Support for Pediatric Rehabilitation",
    category: "Research • Rehabilitation Engineering",
    image: "/images/upper-limb-device.png",
    description:
      "Designed and optimized a patient-specific upper limb support device using CAD, FEA, embedded sensing, and iterative 3D printing. The project focused on reducing print time, material usage, manufacturability constraints, and cost while preserving structural integrity for rehabilitation use.",
    bullets: [
      "CAD-modeled and iterated patient-specific device geometry",
      "Integrated force sensors to collect upper-limb loading data",
      "Ran FEA iterations to evaluate factor of safety and stress response",
      "Compared print strategies including honeycomb and hollow infill designs",
    ],
    tools: ["SolidWorks", "FEA", "3D Printing", "Arduino", "Raspberry Pi", "Sensors", "Excel"],
    gallery: [
      "/images/upper-limb-device.png",
      "/images/upper-limb-fos.png",
      "/images/upper-limb-stresstest.png",
      "/images/upper-limb-sensortest.png",
    ],
  },
  {
    title: "FieldSight Autonomous Agricultural Rover",
    category: "Industry • Robotics / Mechanical Design",
    image: "/images/fieldsight-render.png",
    description:
      "Designed mechanical systems for an autonomous rover built to monitor leafy green crops and support AI-based plant health analysis. Work included rover architecture, drivetrain integration, CAD, fabrication documentation, and subsystem packaging.",
    bullets: [
      "Modeled chassis, drivetrain, mounts, and packaging components",
      "Created exploded assemblies, BOMs, and fabrication-ready drawings",
      "Integrated mechanical design with Raspberry Pi-based sensing architecture",
      "Supported rover testing across garden and field-like environments",
    ],
    tools: ["SolidWorks", "FEA", "Engineering Drawings", "BOM", "Raspberry Pi", "Manufacturing"],
    gallery: [
      "/images/fieldsight-render.png",
      "/images/fieldsight-transparentview.png",
      "/images/fieldsight-explodedview.png",
      "/images/fieldsight-drivetrain.png",
    ],
  },
  {
    title: "Autonomous Multirotor UAV Design & Flight Control System",
    category: "Project • Autonomous Systems",
    image: "/images/uav-render.png",
    description:
      "Designed a modular multirotor UAV platform with focus on mechanical packaging, propulsion layout, avionics mounting, structural efficiency, and autonomous flight-control architecture.",
    bullets: [
      "CAD-modeled modular UAV airframe and propulsion layout",
      "Planned motor, propeller, ESC, battery, and avionics integration",
      "Designed manufacturable components for rapid prototyping",
      "Structured system around autonomous flight concepts including GPS and IMU integration",
    ],
    tools: ["SolidWorks", "Fusion 360", "PX4", "ArduPilot", "GPS", "IMU", "FEA"],
    gallery: ["/images/uav-render.png"],
  },
  {
    title: "Multi-DOF Robotic Manipulator for Assistive Applications",
    category: "Project • Robotics / Assistive Technology",
    image: "/images/robotic-arm-render.png",
    description:
      "Designed a multi-degree-of-freedom robotic manipulator with articulated joints, linkages, and load-bearing structures for assistive motion applications.",
    bullets: [
      "Modeled joints, base structure, and linkages in CAD",
      "Designed mechanical interfaces for controlled rotational motion",
      "Balanced range of motion, stiffness, and torque transfer",
      "Planned FEA-based validation for critical joint loading",
    ],
    tools: ["SolidWorks", "FEA", "Robotics", "Mechanical Design", "Linkages"],
    gallery: ["/images/robotic-arm-render.png"],
  },
];

const researchProjects = [
  {
    title: "Application of Data Mining to Search for Potentially Habitable Exoplanets",
    description:
      "Analyzed NASA exoplanet datasets to identify potentially habitable candidates using habitable-zone calculations, density estimation, orbital filtering, and Python-based data processing.",
    tools: ["Python", "Pandas", "Excel", "Data Mining", "Scientific Computing"],
  },
  {
    title: "AI-Driven Detection of Cancerous Cells for Precision Medicine",
    description:
      "Developed supervised deep learning workflows using convolutional neural networks to classify cancerous cell imagery with preprocessing and augmentation techniques.",
    tools: ["PyTorch", "CNNs", "Python", "Computer Vision", "Data Augmentation"],
  },
  {
    title: "NASA L'SPACE NPWEE Space Debris Prediction Proposal",
    description:
      "Contributed to a NASA-aligned concept for predicting tumbling orbital debris using physics-informed Transformers, synthetic Blender datasets, and short-horizon attitude prediction.",
    tools: ["Python", "Blender", "Machine Learning", "Computer Vision", "Transformers", "Simulation"],
  },
];

const techStack = [
  {
    category: "Mechanical / Design",
    skills: ["SolidWorks", "FEA", "Engineering Drawings", "3D Printing", "CNC Machining"],
  },
  {
    category: "Programming",
    skills: ["Python", "C++", "Java", "MATLAB", "HTML/CSS"],
  },
  {
    category: "Robotics / Embedded",
    skills: ["ROS2", "Raspberry Pi", "Arduino", "Sensor Integration", "Soldering"],
  },
  {
    category: "AI / Data",
    skills: ["PyTorch", "CNNs", "Excel", "Data Mining", "Computer Vision"],
  },
];

const experience = [
  {
    title: "Mechanical Engineering Researcher",
    org: "Upper Limb Exoskeleton Optimization for Pediatric Rehabilitation",
    description:
      "Designed and optimized a 3D-printed rehabilitation support device using CAD, FEA, embedded sensing, and patient-specific design constraints.",
  },
  {
    title: "Mechanical Engineer",
    org: "FieldSight Autonomous Agricultural Rover",
    description:
      "Designed and integrated drivetrain and chassis systems for an autonomous agricultural rover, contributing CAD models, engineering drawings, manufacturability planning, and fabrication support.",
  },
  {
    title: "Mechatronics Engineering Intern",
    org: "Electromyography (EMG)-Interfaced Robotic Arm — BlueStamp Engineering",
    description:
      "Developed an EMG-controlled robotic arm using Arduino-based signal acquisition, calibration, and actuator integration workflows.",
  },
  {
    title: "Astrophysics Researcher",
    org: "Application of Data Mining to Search for Potentially Habitable Exoplanets",
    description:
      "Conducted computational research using Python and NASA exoplanet datasets to identify candidates with potentially habitable conditions.",
  },
];

const organizations = [
  "Theta Tau Professional Engineering Fraternity",
  "Pi Tau Sigma Mechanical Engineering Honor Society",
  "American Institute of Aeronautics and Astronautics (AIAA)",
  "American Society of Mechanical Engineers (ASME)",
];

const volunteering = [
  {
    title: "Astrophysics Outreach Volunteer",
    org: "KIPAC",
    location: "Stanford University",
    description:
      "Support outreach efforts that make astronomy, cosmology, and space science more accessible to students and the public.",
  },
  {
    title: "STEM Outreach Volunteer",
    org: "The Tech Interactive",
    location: "San Jose",
    description:
      "Help visitors engage with hands-on STEM activities centered around engineering, creativity, and technical problem solving.",
  },
  {
    title: "Aircraft Restoration Volunteer",
    org: "USS Hornet",
    location: "Alameda, CA",
    description:
      "Contribute to aircraft preservation work while learning about aviation systems, mechanical restoration, and maintenance practices.",
  },
];

const contactLinks = [
  {
    label: "Email",
    value: "abhirney.mahajan@sjsu.edu",
    href: "mailto:abhirney.mahajan@sjsu.edu",
    icon: "✉",
  },
  {
    label: "LinkedIn",
    value: "Abhi Mahajan",
    href: "https://www.linkedin.com/in/abhi-mahajan/",
    icon: "in",
  },
  {
    label: "GitHub",
    value: "GitHub",
    href: "#",
    icon: "⌘",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
      {children}
    </p>
  );
}

function FeaturedProject({
  project,
  reverse = false,
}: {
  project: (typeof featuredProjects)[number];
  reverse?: boolean;
}) {
  return (
    <article
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-3 shadow-2xl transition duration-300 hover:border-cyan-300/40 hover:shadow-cyan-300/10">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-[520px] w-full rounded-2xl object-contain transition duration-500 hover:scale-[1.02]"
        />
      </div>

      <div>
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
          {project.category}
        </p>

        <h3 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">
          {project.title}
        </h3>

        <p className="mb-6 text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        <ul className="mb-6 space-y-3 text-slate-300">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.gallery.map((image) => (
            <div
              key={image}
              className="flex h-24 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-1"
            >
              <img
                src={image}
                alt={`${project.title} gallery image`}
                className="h-full w-full rounded-lg object-contain opacity-80 transition hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function SmallCard({
  title,
  description,
  tools,
}: {
  title: string;
  description: string;
  tools: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]">
      <h3 className="mb-3 text-2xl font-bold leading-tight">{title}</h3>
      <p className="mb-5 leading-7 text-slate-400">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <Tag key={tool}>{tool}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top" className="min-h-screen scroll-smooth bg-[#050505] text-white">
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shootingStarOne {
          0% {
            transform: translateX(0) translateY(0) rotate(135deg);
            opacity: 0;
          }
          8% { opacity: 1; }
          28% { opacity: 1; }
          100% {
            transform: translateX(-520px) translateY(420px) rotate(135deg);
            opacity: 0;
          }
        }

        @keyframes shootingStarTwo {
          0% {
            transform: translateX(0) translateY(0) rotate(145deg);
            opacity: 0;
          }
          10% { opacity: 0.85; }
          30% { opacity: 0.85; }
          100% {
            transform: translateX(-420px) translateY(360px) rotate(145deg);
            opacity: 0;
          }
        }

        @keyframes shootingStarThree {
          0% {
            transform: translateX(0) translateY(0) rotate(128deg);
            opacity: 0;
          }
          12% { opacity: 0.7; }
          32% { opacity: 0.7; }
          100% {
            transform: translateX(-620px) translateY(500px) rotate(128deg);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.45); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(18px, -14px); }
        }

        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.9s ease-out both;
        }

        .hero-star {
          position: absolute;
          border-radius: 999px;
          background: white;
          animation: twinkle 4s ease-in-out infinite;
        }

        .shooting-star {
          position: absolute;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(90deg, rgba(255,255,255,0), rgba(103,232,249,0.95));
          filter: drop-shadow(0 0 10px rgba(103,232,249,0.8));
          opacity: 0;
        }

        .shooting-star.one {
          top: 14%;
          right: 8%;
          width: 145px;
          animation: shootingStarOne 13s ease-in-out infinite;
          animation-delay: 2s;
        }

        .shooting-star.two {
          top: 28%;
          right: 28%;
          width: 95px;
          animation: shootingStarTwo 17s ease-in-out infinite;
          animation-delay: 8s;
        }

        .shooting-star.three {
          top: 9%;
          right: 42%;
          width: 120px;
          animation: shootingStarThree 21s ease-in-out infinite;
          animation-delay: 14s;
        }

        .orbit-ring {
          animation: orbit 18s linear infinite;
        }

        .space-drift {
          animation: drift 9s ease-in-out infinite;
        }
      `}</style>

      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.08),transparent_25%),radial-gradient(circle_at_50%_90%,rgba(147,51,234,0.08),transparent_30%)]" />

      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-serif text-2xl italic tracking-wide">
            AM
          </a>

          <div className="hidden gap-7 text-sm tracking-wider text-slate-400 md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#featured" className="transition hover:text-white">Projects</a>
            <a href="#research" className="transition hover:text-white">Research</a>
            <a href="#tech" className="transition hover:text-white">Stack</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 z-0">
          <span className="hero-star left-[7%] top-[13%] h-[2px] w-[2px]" />
          <span className="hero-star left-[12%] top-[48%] h-[3px] w-[3px] [animation-delay:1.1s]" />
          <span className="hero-star left-[18%] top-[22%] h-[1.5px] w-[1.5px] [animation-delay:2s]" />
          <span className="hero-star left-[27%] top-[68%] h-[2px] w-[2px] [animation-delay:0.5s]" />
          <span className="hero-star left-[34%] top-[18%] h-[2px] w-[2px] [animation-delay:2.7s]" />
          <span className="hero-star left-[46%] top-[36%] h-[1.5px] w-[1.5px] [animation-delay:1.8s]" />
          <span className="hero-star left-[58%] top-[72%] h-[2px] w-[2px] [animation-delay:3.1s]" />
          <span className="hero-star left-[66%] top-[19%] h-[3px] w-[3px] [animation-delay:1.3s]" />
          <span className="hero-star left-[79%] top-[58%] h-[2px] w-[2px] [animation-delay:2.3s]" />
          <span className="hero-star left-[88%] top-[31%] h-[1.5px] w-[1.5px] [animation-delay:0.8s]" />
          <span className="hero-star left-[93%] top-[76%] h-[2px] w-[2px] [animation-delay:3.4s]" />

          <div className="shooting-star one" />
          <div className="shooting-star two" />
          <div className="shooting-star three" />

          <div className="absolute left-[12%] top-[22%] h-24 w-24 rounded-full border border-cyan-300/20 space-drift" />
          <div className="absolute bottom-[18%] right-[12%] h-40 w-40 rounded-full border border-white/10 orbit-ring" />
        </div>

        <div className="relative z-10 grid max-w-6xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fadeIn text-center lg:text-left">
            <p className="mb-6 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Robotics • Mechatronics • Mechanical Design
            </p>

            <h1 className="mb-7 font-serif text-7xl italic tracking-tight md:text-9xl">
              Abhi Mahajan
            </h1>

            <p className="mb-10 max-w-3xl text-xl leading-relaxed text-slate-400 md:text-2xl">
              Mechanical Engineering student building across robotics,
              automation, embedded systems, and applied engineering design.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <a
                href="#featured"
                className="rounded-xl bg-white px-7 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/30 px-7 py-3 font-semibold transition hover:bg-white hover:text-black"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="animate-floatSlow mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl">
              <img
                src="/images/professional-picture.png"
                alt="Professional headshot of Abhi Mahajan"
                className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>About</SectionLabel>
        <h2 className="mb-6 max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
          Building systems where mechanical design meets electronics, controls,
          and software.
        </h2>
        <p className="max-w-4xl text-lg leading-8 text-slate-400">
          I am a Mechanical Engineering student at San Jose State University
          interested in practical systems that move, sense, and solve real
          problems. My work spans robotics, autonomous platforms,
          rehabilitation devices, embedded sensing, manufacturing, and applied
          AI engineering.
        </p>
      </section>

      <section id="featured" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Featured Work</SectionLabel>
        <h2 className="mb-20 text-4xl font-bold md:text-5xl">
          Engineering Projects
        </h2>

        <div className="space-y-32">
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section id="research" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Research + Concepts</SectionLabel>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Research</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {researchProjects.map((project) => (
            <SmallCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section id="tech" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Tools</SectionLabel>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Technical Stack</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {techStack.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <h3 className="mb-5 text-sm uppercase tracking-[0.25em] text-slate-500">
                {group.category}
              </h3>

              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Experience</SectionLabel>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Industry and Research Work
        </h2>

        <div className="space-y-8 border-l border-white/20 pl-6">
          {experience.map((item) => (
            <div key={item.title}>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mb-2 text-cyan-300">{item.org}</p>
              <p className="leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Affiliations</SectionLabel>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">
          Organizations
        </h2>

        <div className="grid gap-4 md:grid-cols-2">
          {organizations.map((org) => (
            <div
              key={org}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-5 text-slate-300 transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
            >
              {org}
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Outreach</SectionLabel>
        <h2 className="mb-12 text-4xl font-bold md:text-5xl">Volunteering</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {volunteering.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08]"
            >
              <p className="mb-4 text-3xl text-cyan-300">✦</p>
              <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
              <p className="text-slate-300">{item.org}</p>
              <p className="mt-2 text-sm text-slate-500">{item.location}</p>
              <p className="mt-5 leading-7 text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-28">
        <SectionLabel>Contact</SectionLabel>
        <h2 className="mb-12 font-serif text-5xl italic md:text-6xl">
          Get in Touch
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-white/[0.08]"
            >
              <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xl text-slate-300 group-hover:text-cyan-300">
                {link.icon}
              </div>

              <p className="mb-2 text-xs uppercase tracking-[0.25em] text-slate-500">
                {link.label}
              </p>

              <p className="break-words text-slate-200 group-hover:text-cyan-300">
                {link.value}
              </p>
            </a>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 bg-white/[0.03] px-6 py-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-sm text-slate-500">
          <p>Built by Abhi Mahajan</p>

          <a href="#top" className="transition hover:text-cyan-300">
            ↑ Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}