function Contact() {
  const contactInfo = [
    {
      title: "Email",
      value: "daksh.purohit20080139@gmail.com",
      link: "mailto:daksh.purohit20080139@gmail.com",
      description: "Feel free to email me for any queries or opportunities."
    },
    {
      title: "Phone/WhatsApp",
      value: "+91 6398322317",
      link: "https://wa.me/916398322317",
      description: "Available for calls or WhatsApp messages during business hours (9 AM - 6 PM IST)."
    },
    {
      title: "LinkedIn",
      value: "Daksh Purohit",
      link: "https://www.linkedin.com/in/daksh-purohit-0230372a1/",
      description: "Connect with me on LinkedIn for professional networking."
    },
    {
      title: "GitHub",
      value: "EzioAuditore12",
      link: "https://github.com/EzioAuditore12",
      description: "Check out my code repositories and projects."
    }
  ]

  return (
    <div className='grid gap-5 mb-[100px] h-sm:mb-[100px] md:mb-3'>
      {/* Header Section */}
      <section className='sectionCSS p-6'>
        <h1 className='text-3xl font-bold'>Get in Touch</h1>
        <p className='text-center max-w-2xl'>
          I am currently looking for new opportunities and would love to hear from you. 
          Whether you have a question or just want to say hi, I will try my best to get back to you!
        </p>
      </section>

      {/* Contact Methods */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full mb-6'>Contact Methods</h2>
        <div className='grid md:grid-cols-2 gap-6 w-full'>
          {contactInfo.map((info, index) => (
            <div key={index} className='p-4 border dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow'>
              <h3 className='text-xl font-semibold mb-2'>{info.title}</h3>
              <a 
                href={info.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className='text-blue-500 hover:underline block mb-2'
              >
                {info.value}
              </a>
              <p className='text-sm text-gray-600 dark:text-gray-400'>{info.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full mb-6'>Send a Message</h2>
        <form className='w-full max-w-2xl space-y-4'>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <label className='block mb-1'>Name</label>
              <input 
                type="text" 
                className='w-full p-2 border dark:border-gray-700 rounded bg-transparent'
                placeholder='Your name'
              />
            </div>
            <div>
              <label className='block mb-1'>Email</label>
              <input 
                type="email" 
                className='w-full p-2 border dark:border-gray-700 rounded bg-transparent'
                placeholder='Your email'
              />
            </div>
          </div>
          <div>
            <label className='block mb-1'>Subject</label>
            <input 
              type="text" 
              className='w-full p-2 border dark:border-gray-700 rounded bg-transparent'
              placeholder='Message subject'
            />
          </div>
          <div>
            <label className='block mb-1'>Message</label>
            <textarea 
              className='w-full p-2 border dark:border-gray-700 rounded bg-transparent min-h-[150px]'
              placeholder='Your message'
            ></textarea>
          </div>
          <button 
            type="submit" 
            className='customButton'
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Location Section */}
      <section className='sectionCSS p-6'>
        <h2 className='text-2xl font-bold w-full mb-2'>Location</h2>
        <p>Dehradun, Uttarakhand, India</p>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Available for remote work and willing to relocate for the right opportunity
        </p>
      </section>
    </div>
  )
}

export default Contact