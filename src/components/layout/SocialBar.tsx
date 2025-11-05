import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

const SocialBar = () => {
  return (
    <div className="socialBar">
      <div className="icon">
        <Link href="https://www.instagram.com/vstartupstudio" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://www.facebook.com/vstartupstudio/" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </Link>
      </div>
      <div className="icon">
        <Link href="https://in.linkedin.com/in/vstartupstudio" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </Link>
      </div>
      <div className="icon">
        <Link href="mailto:vss@paruluniversity.ac.in" target="_blank" rel="noopener noreferrer">
          <Mail />
        </Link>
      </div>
    </div>
  );
};

export default SocialBar;
