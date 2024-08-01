import './SidebarHeader.css';
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

function SidebarHeader() {
    return (
        <aside className="sidebar">
            <div className="sidebar-title">
                <h1>Civilian Comfort in Underground Urban Transport</h1>
            </div>
            <div className='sidebar-logo'>
                <img src="./northwestern_logo.png" alt="Northwestern University logo" />
            </div>
            <nav className='sidebar-nav'>
                <a href="#problem">Problem</a>
                <a href="#solution">Solution</a>
                <a href="#result">Result</a>
                <a href="#review">Review</a>
            </nav>
        </aside>
    );
}

export default SidebarHeader;
