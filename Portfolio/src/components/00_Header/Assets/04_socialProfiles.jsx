import React from 'react';
import Github from './Svg/02_SocialProfileIcons/01_Github.svg';
import Linkedin from './Svg/02_SocialProfileIcons/02_Linkedin.svg';
import StackOverflow from './Svg/02_SocialProfileIcons/03_StackOverflow.svg';
import Reddit from './Svg/02_SocialProfileIcons/04_Reddit.svg';
import Twitter from './Svg/02_SocialProfileIcons/05_Twitter.svg';

const socialProfiles = [
  { name: 'Github', href: 'https://github.com/EzioAuditore12', icon: Github },
  { name: 'Linkedin', href: 'https://www.linkedin.com/in/daksh-purohit-0230372a1/', icon: Linkedin },
  { name: 'StackOverflow', href: 'https://stackoverflow.com/users/28030439/kin-kaneki', icon: StackOverflow },
  { name: 'Reddit', href: 'https://www.reddit.com/user/LongjumpingDoubt5206/', icon: Reddit },
  { name: 'Twitter', href: 'https://x.com/LvxSasuke', icon: Twitter }
];

function SocialProfiles() {
  return (
    <div className='hidden md:block mr-7 mx-auto'>
      <div className='flex items-center justify-center gap-2'>
        {socialProfiles.map((profile, index) => (
          <a key={index} href={profile.href} target="_blank" rel="noopener noreferrer">
            <img className='h-[35px] w-[40px]' src={profile.icon} alt={profile.name} />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialProfiles;
