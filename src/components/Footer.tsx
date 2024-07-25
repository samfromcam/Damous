import './Footer.css'
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/500.css"

export default function Footer() {
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
                    
                </div>
            </footer>
        </>
    )
}