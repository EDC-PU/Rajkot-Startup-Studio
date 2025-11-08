import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="socialBar">
      <div className="icon">
        <Link href="https://www.instagram.com/rajkot_startupstudio/" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://www.facebook.com/profile.php?id=100090969957626" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://www.linkedin.com/company/rajkot-startup-studio-pierc" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </Link>
      </div>
      <div className="icon">
        <Link href="mailto:rajkotstartupstudio@paruluniversity.ac.in" target="_blank" rel="noopener noreferrer">
          <Mail />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
