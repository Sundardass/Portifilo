import React from 'react';

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const handleLinkClick = (path) => {
  // Navigate to the given path
  window.location.href = path;
};

const SocialMedia = () => (
  
  <div className="app__social">
    <div>
    <div onClick={() => handleLinkClick('https://twitter.com/SundarDass11?t=gxniP08PGdlHxz9xuie_FQ&s=09')}>
      <BsTwitter />
      </div>
    </div>
    <div onClick={() => handleLinkClick('https://www.facebook.com/profile.php?id=100093562962511&mibextid=ZbWKwL')}>
        <FaFacebookF />
      </div>
      <div onClick={() => handleLinkClick('https://instagram.com/sundardass_s?igshid=MzNlNGNkZWQ4Mg==')}>
        <BsInstagram />
      </div>
    </div>
);

export default SocialMedia;