import React from 'react';
import { Linkedin, Youtube } from 'lucide-react';

// ─── CONFIGURE YOUR LINKS HERE ──────────────────────────────────────────────
const SMS_NUMBER   = '+15036640564';
const LINKEDIN_URL = 'https://www.linkedin.com/in/ernestofgaia/';
const TWITTER_URL  = 'https://x.com/ErnestOfGaia';
const YOUTUBE_URL  = 'https://www.youtube.com/@ErnestOfGaia';
// ────────────────────────────────────────────────────────────────────────────

// X logo SVG (lucide-react's Twitter icon shows the old bird, so we use the X mark)
const XIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.627 5.905-5.627zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header
      aria-label="Site header"
      style={{
        position: 'relative',
        width: '100%',
        background: 'transparent',
        zIndex: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 2.5rem',
        }}
      >
        {/* Social icon buttons */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-btn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={TWITTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X / Twitter"
            className="social-btn"
          >
            <XIcon />
          </a>
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="social-btn"
          >
            <Youtube size={18} />
          </a>
        </div>

        {/* SMS button */}
        <a href={`sms:${SMS_NUMBER}`} className="sketch-btn">
          Leave a text message
        </a>
      </div>
    </header>
  );
};

export default Header;
