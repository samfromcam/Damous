import { useEffect } from 'react';
import './Hero.css';
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

// Add this type declaration at the top of your file
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Hero() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({url: 'https://calendly.com/damous-info/general-meeting'});
    } else {
      console.error('Calendly script not loaded');
    }
  };

  return (
    <div className="hero">
      <div className="hero-text">
        <div className="line1">
          <div className="words">
            <span>Work</span>
            <span>Code</span>
            <span>Train</span>
          </div>
          <p className='text1'>Like You Have</p>
        </div>
        <p className='text2'>The Data</p>
        <p className="subheading">Don't Have The Data You Need?<br />We'll Get It For You</p>
        <button onClick={openCalendly}>Get Data</button>
      </div>
      <img src='/hero_image.png' alt="Hero" />
    </div>
  );
}