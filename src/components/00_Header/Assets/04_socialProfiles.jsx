import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaReddit, FaTwitter } from 'react-icons/fa';

const socialProfiles = [
  { name: 'Github', href: 'https://github.com/EzioAuditore12', icon: FaGithub },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/daksh-purohit-0230372a1/', icon: FaLinkedin },
  { name: 'StackOverflow', href: 'https://stackoverflow.com/users/28030439/kin-kaneki', icon: FaStackOverflow },
  { name: 'Reddit', href: 'https://www.reddit.com/user/LongjumpingDoubt5206/', icon: FaReddit },
  { name: 'Twitter', href: 'https://x.com/LvxSasuke', icon: FaTwitter }
];

function SocialProfiles() {
  return (
    <div className='hidden md:block mr-7 mx-auto'>
      <div className='flex items-center justify-center gap-2'>
        {socialProfiles.map((profile, index) => (
          <a 
            key={index} 
            href={profile.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
          >
            <profile.icon size={30} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialProfiles;
