function Resume() {
  const academic = [
    {
      year: 'August 2022 - 2026',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institute: 'Graphic Era Hill University Dehradun, Uttarakhand, India',
      score: 'CGPA: 7.98/10.0'
    }
  ]

  const projects = [
    {
      name: 'KnoziChat',
      stack: 'React Native, NestJS, Socket.IO, LangChain, FastAPI, PostgreSQL, MongoDB',
      date: 'Dec 2025 - Present',
      points: [
        'Built a real-time Android chat application via React Native (Expo) using a local-first architecture supported by SQLite for offline-first message access.',
        'Developed scalable one-to-one and group messaging with NestJS, Node.js, and Socket.IO, backed by PostgreSQL and MongoDB in a hybrid polyglot setup.',
        'Added AI-enabled group chats with FastAPI and LangChain for context-aware interactions and intelligent replies.',
        'Enabled full-text message search on-device using SQLite FTS5.'
      ],
      links: [
        { label: 'Application', url: 'https://github.com/EzioAuditore12/KnoziChat' },
        { label: 'Backend', url: 'https://github.com/EzioAuditore12/KnoziChat-Backend' },
        { label: 'Android APK', url: 'https://expo.dev/artifacts/eas/jD1GYnAXZ8PgSLRyHE3TST.apk' }
      ]
    },
    {
      name: 'RagSphere',
      stack: 'Next.js, Express.js, LangChain, Redis, PostgreSQL, pgvector',
      date: 'Mar 2026 - Apr 2026',
      points: [
        'Created a platform that lets users upload PDFs and chat with a context-aware assistant.',
        'Implemented ingestion using Unstructured and chunking, then stored semantic vectors in PostgreSQL with pgvector.',
        'Connected Redis for conversation session management and used Server-Sent Events (SSE) in Express.js for live AI output streaming.',
        'Designed a Next.js frontend to collect user questions and communicate with the Express.js backend.'
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/EzioAuditore12/Multi-Modal-RAG' },
        { label: 'Live', url: 'https://multi-modal-rag-gamma.vercel.app/' }
      ]
    },
    {
      name: 'Rental PG Website',
      stack: 'Spring Boot, Java, React.js, PostgreSQL, GraphQL',
      date: 'Sept 2025 - Dec 2025',
      points: [
        'Built a web application where users can browse properties and admins can manage listings through an interactive location-based map system.',
        'Used React.js for the frontend and Mapbox API for map-based property visualizations.',
        'Implemented backend security and APIs with Spring Boot, Spring Security, JWT, Spring GraphQL, and role-based authorization.',
        'Designed the database in PostgreSQL with PostGIS and integrated it using Spring Data JPA.'
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/EzioAuditore12/Real-Estate-Project' }
      ]
    }
  ]

  const skills = {
    languages: ['Java', 'HTML', 'CSS', 'JavaScript', 'Typescript', 'Python'],
    toolsAndFrameworks: ['Spring Boot', 'Express.js', 'NestJS', 'FastAPI', 'React.js', 'React Native', 'Next.js', 'GraphQL', 'Socket.IO', 'Tailwind CSS', 'Git'],
    technologies: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis', 'Docker']
  }

  return (
    <div className='grid gap-5 mb-[100px] h-sm:mb-[100px] md:mb-3'>
      {/* Header Section */}
      <section className='sectionCSS p-6'>
        <h1 className='text-3xl font-bold'>Daksh Purohit</h1>
        <p>Dehradun, Uttarakhand</p>
        <div className='flex flex-col md:flex-row gap-2 items-center'>
          <a href="mailto:daksh.purohit20080139@gmail.com" className='hover:text-blue-500'>
            daksh.purohit20080139@gmail.com
          </a>
          <span className='hidden md:block'>•</span>
          <a href="tel:+916398322317" className='hover:text-blue-500'>
            (+91) 6398322317
          </a>
        </div>
        <div className='flex gap-4'>
          <a href="https://github.com/EzioAuditore12" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/daksh-purohit-0230372a1/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-500'>
            LinkedIn
          </a>
          <a href="/" className='hover:text-blue-500'>
            Portfolio
          </a>
        </div>
      </section>

      {/* Academic Details */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full'>Academic Details</h2>
        <div className='w-full overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='text-left'>
                <th>Year</th>
                <th>Degree/Exam</th>
                <th>Institute</th>
                <th>GPA/Marks(%)</th>
              </tr>
            </thead>
            <tbody>
              {academic.map((item, index) => (
                <tr key={index}>
                  <td>{item.year}</td>
                  <td>{item.degree}</td>
                  <td>{item.institute}</td>
                  <td>{item.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Projects Section */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full'>Projects</h2>
        <div className='w-full space-y-6'>
          {projects.map((project, index) => (
            <div key={index} className='space-y-2'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-semibold'>
                  {project.name}
                  <span className='block text-sm font-normal'>{project.stack}</span>
                </h3>
                <span className='text-sm'>{project.date}</span>
              </div>
              <div className='flex flex-wrap gap-3'>
                {project.links.map((link, idx) => (
                  <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>
                    {link.label}
                  </a>
                ))}
              </div>
              <ul className='list-disc pl-5 space-y-2'>
                {project.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full'>Technical Skills</h2>
        <div className='w-full space-y-4'>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className='space-y-2'>
              <h3 className='font-semibold capitalize'>{category.replace(/([A-Z])/g, ' $1').trim()}:</h3>
              <p>{items.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full'>Scholastic Achievements</h2>
        <div className='w-full space-y-2'>
          <div>
            <p className='font-semibold'>OpenHack 2025:</p>
            <p>Qualified for the OpenHack 2025 finals held at IISc Bangalore among the top 8 teams.</p>
          </div>
          <div>
            <p className='font-semibold'>Smart India Hackathon (Internal):</p>
            <p>Successfully qualified for the University Internal Hackathon in both 2023 and 2024 among 100+ teams.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume