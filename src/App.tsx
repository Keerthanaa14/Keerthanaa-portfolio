import ResearchMap from "./components/ResearchMap";
import { useState } from "react";
export default function ResearchEngineeringPortfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const focusAreas = [
  "Multiomics integration workflows",
  "Reproducible HPC pipelines",
  "Biomedical data workflows",
  "Cross-study metadata harmonization",
];

const flagshipProjects = [
  {
    title:
      "Astrocyte Extracellular Vesicle Multiomics for Brain Liquid Biopsy",

    description:
      "Conducted interdisciplinary PhD research focused on the molecular characterization of human adult astrocyte-derived extracellular vesicles (EVs) for biomarker discovery and development of brain liquid biopsy approaches. The work combined experimental molecular biology, extracellular vesicle isolation, small RNA sequencing, LC–MS/MS proteomics, microscopy, and computational multiomics analysis to identify candidate RNA cargo and transmembrane surface markers associated with neurodegenerative disease pathways.",

    workflowImage:
      `${import.meta.env.BASE_URL}project_images/astrocyte-workflow.svg`,

    resultsImage:
      `${import.meta.env.BASE_URL}project_images/astrocyte-results.png`,

    technologies: [
      "Extracellular Vesicles",
      "EV cargo analysis",
      "small RNA-seq",
      "LC–MS/MS",
      "Proteomics",
      "RNA Analysis",
      "Confocal Imaging",
      "TEM/CLEM",
      "qPCR",
      "Multiomics",
    ],

    github:
      "https://doi.org/10.3390/genes14040853",

    buttonLabel:
      "Related Publication",
  },

  {
    title:
      "Multiomics Data Pipeline",

    description:
      "Developed a config-driven multiomics data pipeline integrating RNA-seq and proteomics datasets from GEO and PRIDE repositories. The pipeline includes metadata harmonization, feature ID mapping, batch effect assessment, QC reporting, machine learning-based feature selection, dashboard generation, and reproducible multiomics analysis workflows.",

    workflowImage:
      `${import.meta.env.BASE_URL}project_images/multiomics-workflow.png`,

    resultsImage:
      `${import.meta.env.BASE_URL}project_images/multiomics-results.png`,

    technologies: [
      "Python",
      "RNA-seq",
      "Proteomics",
      "ETL",
      "Machine Learning",
      "APIs",
      "QC Dashboards",
    ],

    github:
      "https://github.com/Keerthanaa14/Multiomics_data_pipeline",

    buttonLabel:
      "View Repository",
  },

  {
    title:
      "Plant GO Annotation & Functional Enrichment Analysis",

    description:
      "Performed Gene Ontology annotation and functional enrichment analysis for plant-derived nanovesicle proteomics datasets. The workflow involved protein annotation, pathway interpretation, enrichment visualization, and downstream biological interpretation of LC–MS/MS proteomics data.",

    workflowImage:
      `${import.meta.env.BASE_URL}project_images/go-workflow.png`,

    resultsImage:
      `${import.meta.env.BASE_URL}project_images/go-results.svg`,

    technologies: [
      "Proteomics",
      "GO Annotation",
      "Functional Enrichment",
      "R",
      "Data Visualization",
      "LC–MS/MS",
    ],

    github:
      "https://github.com/Keerthanaa14/GO_annot_plant_snakemake",

    buttonLabel:
      "View Repository",
  },

  {
    title:
      "Protein Differential Expression Analysis Workflows",

    description:
      "Developed reproducible workflows for protein differential expression analysis and downstream visualization for extracellular vesicle and multiomics datasets. The analyses included normalization, statistical testing, visualization, and interpretation of biologically relevant protein expression patterns.",

    workflowImage:
      `${import.meta.env.BASE_URL}project_images/protein-workflow.png`,

    resultsImage:
      `${import.meta.env.BASE_URL}project_images/protein-results.svg`,

    technologies: [
      "Proteomics",
      "Differential Expression",
      "R",
      "Data Analysis",
      "Visualization",
      "Statistics",
    ],

    github:
      "https://github.com/Keerthanaa14/Protein_DE_DIA",

    buttonLabel:
      "View Repository",
  },
];
  

  const technicalSkills = {
    "Programming & Scientific Computing": [
      "Python",
      "R",
      "Bash",
      "pandas",
      "NumPy",
      "tidyverse",
      "Git",
      "Workflow Automation",
      "Statistical Analysis",
      "Data Visualization",
      "Data Processing",
      "Jupyter Notebooks",
    ],
    "Bioinformatics & Multiomics Analysis": [
      "RNA-seq",
      "small RNA-seq",
      "Proteomics",
      "Differential Expression Analysis",
      "DESeq2",
      "edgeR",
      "Pathway Enrichment",
      "GO Annotation",
      "Functional Enrichment",
      "Multiomics Integration",
      "QC Workflows",
      "Metadata Harmonization",
      "Transcriptomics",
      "Proteomics Interpretation",
      "Biological Data Analysis",
    ],
    "Data Engineering & Computational Workflows": [
      "ETL Workflows",
      "APIs",
      "Structured Logging",
      "Data Validation",
      "Workflow Automation",
      "Reproducible Pipelines",
      "Data Harmonization",
      "Dashboard Generation",
      "Machine Learning Integration",
      "Medallion Architecture",
      "Workflow Configuration",
      "Biomedical Data Processing",
    ],
    "HPC & Reproducible Computing": [
      "Snakemake",
      "CSC Puhti",
      "HPC Workflows",
      "Docker",
      "Singularity",
      "Linux",
      "Containerized Analysis",
      "Batch Processing",
      "Reproducible Analysis Pipelines",
      "Computational Workflow Design",
    ],
    "Experimental Biology": [
      "Extracellular Vesicles",
      "Human Primary Astrocyte Culture",
      "Mammalian Cell Culture",
      "Neuronal Differentiation",
      "qPCR",
      "ddPCR",
      "Patch-clamp Electrophsiology",
      "fucntional assays of ligand-receptor interaction (EC50, IC50)",
      "RNA sequencing sample preparation",
      "Western Blotting",
      "Immunoprecipitation",
      "Lentiviral Transduction",
      "Plasmid Transfection",
      "Confocal Microscopy",
      "TEM/CLEM Imaging",
      "Live-cell Imaging",
      "Incucyte Imaging",
      "EV Isolation",
      "EV Characterization",
      "Protein Sample Preparation for MS/MS analysis",
      "Biomarker Research",
      "LC–MS/MS",
    ],
  };

  const fundingSupport = [
    {
      year: "2024",
      title: "Doctoral Research Funding",
      organization: "Signe and Ane Gyllenberg Foundation, Finland",
      amount: "€7,500",
    },
    {
      year: "2023 – 2024",
      title: "Doctoral Research Funding",
      organization: "Developmental Biology Lab, University of Oulu",
      amount: "€7,500",
    },
    {
      year: "2018 – 2019",
      title: "ERASMUS+ Coordination Grant",
      organization: "European Union via Julius-Maximilians University of Würzburg",
      amount: "€4,500",
    },
    {
      year: "2018",
      title: "Travel Grant",
      organization: "UniOGS, University of Oulu",
      amount: "€980",
    },
  ];

  const publications = [
    {
      year: "2025",
      title:
        "Cloudberry-derived nanovesicles as stable oral drug delivery systems: gastrointestinal stability and age-related biodistribution in mice",
      journal: "Nanoscale",
      doi: "https://doi.org/10.1039/D4NR04694C",
    },
    {
      year: "2023",
      title:
        "Human Adult Astrocyte Extracellular Vesicle Transcriptomics Identifies Preferentially Secreted RNAs",
      journal: "Genes",
      doi: "https://doi.org/10.3390/genes14040853",
    },
    {
      year: "2015",
      title:
        "Plasma amyloid-β1-42 and tau as biomarkers for Alzheimer’s disease: systematic review and meta-analysis",
      journal: "SAGE Open Medicine",
      doi: "",
    },
  ];

  const journey = [
    {
      period: "2026 – Present",
      title: "Post-PhD Multiomics & Computational Analysis",
      description:
        "Completed my PhD in Biochemistry and Molecular Medicine at the University of Oulu and currently exploring opportunities combining experimental biology, multiomics analysis, reproducible computational workflows, and biomedical data analysis.",
    },
    {
      period: "2023 – 2026",
      title: "Computational Workflows & Multiomics Analysis",
      description:
        "Expanded into RNA-seq and proteomics analysis, reproducible HPC workflows on CSC Puhti, Snakemake-based pipelines, and computational approaches for integrating biological datasets.",
    },
    {
      period: "2020 – 2026",
      title: "PhD Research at University of Oulu",
      description:
        "Worked on extracellular vesicle biology, molecular techniques, RNA sequencing, proteomics, imaging workflows, and translational research within the Faculty of Biochemistry and Molecular Medicine.",
    },
    {
      period: "2025",
      title: "Visiting Research at Kyung Hee University",
      description:
        "Worked on plant-derived nanovesicle proteomics and characterization workflows during visiting research collaboration in South Korea.",
    },
    {
      period: "2018 – 2019",
      title: "Master’s Thesis at Sahlgrenska Institute",
      description:
        "Completed MSc thesis research in Gothenburg focused on extracellular vesicle isolation, characterization, and translational neuroscience biomarker research at the Sahlgrenska Institute.",
    },
    {
      period: "2017",
      title: "Research Experience at Institut Pasteur",
      description:
        "Completed visiting research experience in France focused on microbial protein production and molecular biology workflows at Institut Pasteur.",
    },
    {
      period: "2016 – 2019",
      title: "MSc in Translational Neuroscience",
      description:
        "Studied neurobiology, psychology, psychiatry, and molecular neuroscience  along with pathc clamp electrophysiology and ligand-receptor charcterization assays at Julius Maximilians University of Würzburg, Germany.",
    },
    {
      period: "2011 – 2015",
      title: "B.Tech in Biotechnology",
      description:
        "Completed undergraduate studies in Biotechnology at Anna University with early exposure to neurodegenerative disease biomarker research.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#071018] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.16),transparent_35%)]" />

        <nav className="relative z-10 flex items-center justify-between px-8 py-6 lg:px-20">
          <div>
            <h1 className="text-5xl font-bold tracking-wide text-cyan-300">
              Keerthanaa Balasubramanian Shanthi, Ph.D.
            </h1>
          </div>
        </nav>

        <div className="relative z-10 grid gap-16 px-8 pb-20 pt-1 lg:grid-cols-[1.3fr_0.7fr] lg:px-20 lg:pt-10">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.3em] text-cyan-300">
              Experimental Biology • Computational Workflows • Multiomics • Neurobiology • Extracellular vesicles 
            </p>

            <h2 className="max-w-4xl text-5xl font-bold leading-tight md:text-6xl">
              Experimental biology and computational workflows for multiomics research.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300">
              I completed my PhD in Biochemistry and Molecular Medicine at the University of Oulu, where my work combined experimental biology with RNA sequencing, proteomics, extracellular vesicle research, and scalable computational workflows on HPC infrastructure. My current interests include reproducible analysis workflows, computational data analysis, and machine learning approaches for multiomics research.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {[
                {
                  label: "Projects",
                  href: "#projects",
                },
                
                {
                  label: "Skills",
                  href: "#skills",
                },
                {
                  label: "Journey",
                  href: "#journey",
                },
                {
                  label: "Publications",
                  href: "#research",
                },
                {
                  label: "Contact",
                  href: "#contact",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/Keerthanaa14",
                  external: true,
                },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/keerthanaa-balasubramanian-shanthi-106b7364/",
                  external: true,
                },
                {
                  label: "ORCID",
                  href: "https://orcid.org/0000-0001-6031-8780",
                  external: true,
                },
              ].map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  target={button.external ? "_blank" : undefined}
                  rel={button.external ? "noopener noreferrer" : undefined}
                  className="rounded-2xl border border-cyan-300 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-900"
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
              <div className="mb-8 overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="/profile-photo.jpg"
                  alt="Keerthanaa Balasubramanian Shanthi"
                  className="h-[360px] w-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Current Focus Areas
                </p>

                <div className="mt-6 space-y-4 text-slate-300">
                  {focusAreas.map((area, index) => (
                    <div
                      key={index}
                      className="rounded-2xl bg-white/5 p-4"
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Flagship Projects */}
<section
  id="projects"
  className="border-y border-white/10 bg-[#0a141f] px-8 py-24 lg:px-20"
>
  <div className="mb-16">
    <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
      Portfolio
    </p>

    <h2 className="mt-3 text-4xl font-bold">
      Flagship Projects
    </h2>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
      Research engineering, computational biology, and multiomics workflows
      combining experimental biology with reproducible data analysis pipelines.
    </p>
  </div>

  <div className="space-y-10">
    {flagshipProjects.map((project, index) => (
      <div
        key={index}
        className="rounded-[2rem] border border-white/10 bg-[#071018] p-10 transition duration-300 hover:border-cyan-300/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]"
      >
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-between">

            <div>
              <h3 className="text-3xl font-bold leading-tight text-white">
                {project.title}
              </h3>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-cyan-300/10 bg-white/5 px-4 py-2 text-sm text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-cyan-300 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105 hover:bg-cyan-200"
              >
                {project.buttonLabel}
              </a>

              <button
                onClick={() => setSelectedProject(project)}
                className="rounded-2xl border border-cyan-300/20 bg-white/5 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-900"
              >
                View Workflow
              </button>
            </div>
          </div>

          {/* IMAGE PREVIEW */}
          <button
            onClick={() => setSelectedProject(project)}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b1520]"
          >

            <img
              src={project.workflowImage}
              alt={`${project.title} workflow`}
              className="h-[240px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/20 to-transparent" />

            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                  Workflow Preview
                </p>

                <p className="mt-2 text-sm text-slate-300">
                  Click to expand figures
                </p>
              </div>

              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-200">
                Open
              </div>
            </div>
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* MODAL */}
  {selectedProject && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">

      <div className="relative max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#071018] p-8">

        {/* Close */}
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute right-6 top-6 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-cyan-300 hover:text-slate-900"
        >
          Close
        </button>

        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Expanded Project View
          </p>

          <h3 className="mt-3 text-3xl font-bold text-white">
            {selectedProject.title}
          </h3>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Workflow */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
              Workflow Architecture
            </p>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a141f] p-4">
              <img
                src={selectedProject.workflowImage}
                alt="Workflow"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>

          {/* Results */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-cyan-300">
              Sample Outputs & Results
            </p>

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a141f] p-4">
              <img
                src={selectedProject.resultsImage}
                alt="Results"
                className="max-h-[75vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</section>

      {/* Skills */}
      <section
        id="skills"
        className="border-y border-white/10 bg-[#0a141f] px-8 py-24 lg:px-20"
      >
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Technical Skills
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Computational & Experimental Expertise
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#071018] p-8"
            >
              <h3 className="text-2xl font-semibold">{category}</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-cyan-300/30 bg-white/5 px-4 py-2 text-sm text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="px-8 py-24 lg:px-20">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Journey
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Research & Computational Development
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
  
          <div className="lg:sticky lg:top-24 h-fit">
            <ResearchMap />
          </div>
        <div className="relative border-l border-cyan-300/40 pl-8">
          {journey.map((item, index) => (
            <div key={index} className="relative mb-14">
              <div className="absolute -left-[42px] top-1 h-5 w-5 rounded-full bg-cyan-300" />

              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                {item.period}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Funding & Research Support */}
      <section className="border-y border-white/10 bg-[#0a141f] px-8 py-24 lg:px-20">
        <div className="mb-14">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Funding & Grants
          </p>
          <h2 className="mt-3 text-4xl font-bold">
            Research Funding & Academic Support
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {fundingSupport.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#071018] p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                {item.year}
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                {item.organization}
              </p>

              <p className="mt-4 text-lg font-semibold text-cyan-200">
                {item.amount}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section
        id="research"
        className="border-y border-white/10 bg-[#0a141f] px-8 py-24 lg:px-20"
      >
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
              Publications
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Selected Research Output
            </h2>
          </div>

          <a
            href="https://orcid.org/0000-0001-6031-8780"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-2xl border border-cyan-300 px-5 py-3 font-semibold text-cyan-300 transition hover:bg-cyan-300 hover:text-slate-900"
          >
            View ORCID Profile
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-[#071018] p-8"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
                {publication.year}
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-8">
                {publication.title}
              </h3>

              <p className="mt-4 text-slate-300">
                {publication.journal}
              </p>

              {publication.doi && (
                <a
                  href={publication.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-cyan-300 hover:underline"
                >
                  View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Current Interests */}
      <section className="px-8 py-24 lg:px-20">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-[#0d1824] p-12 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
            Emerging Research & Computational Interests
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Future Directions & Emerging Interests
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {[
              "Scalable multiomics integration workflows",
              "Machine learning approaches for omics analysis",
              "GPU-aware computational workflows",
              "High-performance computing for biological datasets",
              "Single-cell and extracellular vesicle analytics",
              "Data workflows for biomedical research",
              "Rust for performance-oriented scientific computing",
              "AI-assisted biological data interpretation",
            ].map((item, index) => (
              <span
                key={index}
                className="rounded-full border border-cyan-300/30 bg-white/5 px-5 py-3 text-cyan-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 px-8 py-24 text-center lg:px-20"
      >
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">
          Contact
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Let’s Connect
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          I am currently exploring opportunities in academia and industry where I can continue developing at the intersection of experimental biology, reproducible workflows, multiomics analysis, and computational analysis workflows.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {[
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/keerthanaa-balasubramanian-shanthi-106b7364/",
              external: true,
            },
            {
              label: "GitHub",
              href: "https://github.com/Keerthanaa14",
              external: true,
            },
            {
              label: "Email",
              href: "mailto:conveykeerthi@gmail.com",
            },
          ].map((button, index) => (
            <a
              key={index}
              href={button.href}
              target={button.external ? "_blank" : undefined}
              rel={button.external ? "noopener noreferrer" : undefined}
              className="rounded-2xl border border-cyan-300 px-6 py-3 font-semibold text-cyan-300 transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-900"
            >
              {button.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}