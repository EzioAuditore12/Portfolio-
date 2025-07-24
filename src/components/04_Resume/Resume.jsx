function Resume() {
  const academic = [
    { year: "Aug, 2022 - Present", degree: "B.Tech in Computer Science", institute: "Graphic Era Hill University Dehradun", score: "7.83/10.0" }
  ]

  const projects = [
    {
      name: "ByteBoulevard Website",
      github: "https://github.com/EzioAuditore12/ByteBoulevard",
      date: "Nov, 2024 - Nov, 2024",
      points: [
        "Developed a modern, responsive portfolio website using React and Tailwind CSS, focusing on clean UI and smooth user experience.",
        "Implemented interactive components and dynamic layouts to showcase projects and skills effectively.",
        "Optimized for fast load times and mobile compatibility, ensuring accessibility across devices.",
        "Designed and deployed the site as a static frontend with no backend dependencies."
      ]
    },
    {
      name: "MinixOsCuda",
      github: "https://github.com/EzioAuditore12/MinixOsCuda",
      date: "July, 2024 - July, 2024",
      points: [
        "Engineered a cross-platform desktop application using Tauri, React, and Tailwind CSS for the UI, enabling lightweight and secure performance.",
        "Integrated CUDA and C for high-performance computing tasks, leveraging GPU acceleration for intensive operations.",
        "Built modular features combining frontend interactivity with native backend processing.",
        "Ensured seamless communication between the React frontend and native modules, providing a robust user experience."
      ]
    },
    {
      name: "Spam Ham Detector",
      github: "https://github.com/EzioAuditore12/Spam-Ham-Detection",
      date: "Sep, 2024 - Sep, 2024",
      points: [
        "Collaborated on a web-based application to classify messages as spam or ham.",
        "Developed the front-end using HTML, CSS, and JavaScript for user interaction and message submission.",
        "Integrated a Flask-based backend with a CNN model designed by a teammate for real-time message prediction.",
        "Gained experience in front-end devlopment and machine learning application integration."
      ]
    }
  ]

  const skills = {
    languages: ["JavaScript","Typescript", "SQL", "C++", "C", "Java", "Python", "HTML", "CSS"],
    toolsAndFrameworks: ["Git", "Bootstrap", "Tailwind", "React", "Node.js","React Native","Tauri","ShadCN"],
    technologies: ["PostgreSQL", "AWS (RDS, S3, EC2)","MongoDB"],
    hardSkills: ["Debugging and Problem-solving"]
  }

  return (
    <div className='grid gap-5 mb-[100px] h-sm:mb-[100px] md:mb-3'>
      {/* Header Section */}
      <section className='sectionCSS p-6'>
        <h1 className='text-3xl font-bold'>Daksh Purohit</h1>
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
          <a href="https://github.com/EzioAuditore12" target="_blank" className='hover:text-blue-500'>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/daksh-purohit-0230372a1/" target="_blank" className='hover:text-blue-500'>
            LinkedIn
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
                <h3 className='text-xl font-semibold'>{project.name}</h3>
                <span className='text-sm'>{project.date}</span>
              </div>
              <a href={project.github} target="_blank" className='text-blue-500 hover:underline'>
                GitHub Link
              </a>
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
        <div className='w-full'>
          <p className='font-semibold'>Smart India Hackathon (Internal):</p>
          <p>Successfully qualified in the University Internal Hackathon in both 2023 and 2024 among 100+ teams.</p>
        </div>
      </section>
    </div>
  )
}

export default Resume