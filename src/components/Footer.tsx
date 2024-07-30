import './Footer.css'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"

export default function Footer() {
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
        <>
            <hr/>
            <footer>
                <div className='left_text'>
                    <p className="title">Damous</p>
                    <p className="emails">info@damous.com</p>
                    <p className="emails">contact@damous.com</p>
                </div>
                <div className="right_text">
                    <p>Can't find the data you need? Let us get it for you</p>
                    <button onClick={openCalendly}>Talk to us</button>
                </div>
            </footer>
        </>
    )
}
