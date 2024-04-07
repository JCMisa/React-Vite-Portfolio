import viteImg from '../assets/images/vite.svg';

export default function SideNav()
{
    return(
        <>
            <nav className="sn-navbar">
                <ul className="sn-navbar-nav">
                    <li className="sn-logo">
                        <a href="#" className="sn-nav-link">
                            <span className="sn-link-text">PORTFOLIO</span>
                            <img src={viteImg} alt="sampleLogo" width="30px" height="30px" />
                        </a>
                    </li>
            
                    <li className="sn-nav-item">
                        <a href="#top" className="sn-nav-link">
                            <i className="fa-solid fa-house"></i>
                            <span className="sn-link-text">Home</span>
                        </a>
                    </li>
            
                    <li className="sn-nav-item">
                        <a href="#about" className="sn-nav-link">
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <span className="sn-link-text">About</span>
                        </a>
                    </li>
            
                    <li className="sn-nav-item">
                        <a href="#projects" className="sn-nav-link">
                            <i className="fa-solid fa-list-check"></i>
                            <span className="sn-link-text">Projects</span>
                        </a>
                    </li>
            
                    <li className="sn-nav-item">
                        <a href="#practical" className="sn-nav-link">
                            <i className="fa-solid fa-phone"></i>
                            <span className="sn-link-text">Contacts</span>
                        </a>
                    </li>
            
                    <li className="sn-nav-item">
                        <a href="#top" className="sn-nav-link sn-logout">
                            <i className="fa-solid fa-chevron-up"></i>
                            <span className="sn-link-text">Go Top</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}