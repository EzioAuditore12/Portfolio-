import React from 'react'

function Resume() {
  const academic = [
    { year: "Aug, 2022 - Present", degree: "B.Tech in Computer Science", institute: "Graphic Era Hill University Dehradun", score: "7.79/10.0" }
  ]

  const projects = [
    {
      name: "InkAlchemy",
      github: "https://github.com/EzioAuditore12/InkAlchemy",
      date: "Nov, 2024 - Nov, 2024",
      points: [
        "InkAlchemy integrates AWS services like Textract, Translate, Comprehend, and Polly to provide text extraction, translation, sentiment analysis, and text-to-speech capabilities. The backend, built with Node.js and the AWS SDK, handles real-time processing of user inputs.",
        "The frontend is built with React, offering a dynamic user interface that allows users to input text, upload images, and view real-time results. Tailwind CSS ensures a modern and responsive design for an enhanced user experience.",
        "Additionally, InkAlchemy includes a copy-to-clipboard feature, enabling users to easily copy the processed results such as translations, sentiment analysis, and extracted text for convenience and efficiency."
      ]
    },
    {
      name: "ERP-PORTAL",
      github: "https://github.com/EzioAuditore12/ERP-PORTAL",
      date: "July, 2024 - July, 2024",
      points: [
        "The ERP Portal project integrates MySQL for database management, allowing users to store and retrieve data efficiently. The backend is built with Node.js, which connects to the MySQL database to fetch and display data on the dashboard.",
        "The frontend is designed using HTML and CSS, providing a user-friendly interface to view the data. The dashboard displays relevant details from the database in a clean and organized manner.",
        "In addition, Blob data types are used to store images directly in the MySQL database, enabling the upload and retrieval of images seamlessly within the portal, enhancing its functionality and user experience."
      ]
    },
    {
      name: "VisualAnime",
      github: "https://github.com/EzioAuditore12/VisualAnime",
      date: "Nov, 2024 - Nov, 2024",
      points: [
        "Developed a responsive, anime-themed website using Bootstrap for the frontend, ensuring a mobile-first design that adapts seamlessly to various screen sizes. Integrated features like anime content display, user-friendly navigation, and visually engaging layouts. Employed HTML, CSS, and JavaScript to create a smooth and dynamic browsing experience, with a focus on clean UI and accessibility."
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
    languages: ["JavaScript", "SQL", "C++", "C", "Java", "Python", "HTML", "CSS"],
    toolsAndFrameworks: ["Git", "Bootstrap", "Tailwind", "React", "Node.js"],
    technologies: ["PostgreSQL", "AWS (RDS, S3, EC2)"],
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