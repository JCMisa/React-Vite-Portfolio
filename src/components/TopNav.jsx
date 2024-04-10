import { useState, useEffect } from 'react';
import logo from '../assets/images/logo-no-bg.png';

export default function TopNav()
{
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }
            else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isScrolled]);

    return(
        <>
            <header className={`z-[1] text-gray-400 body-font w-full mx-auto fixed top-0 top-nav transition-colors duration-300 ease-in-out ${isScrolled ? 'backdrop-blur' : 'bg-transparent'}`} id="top">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
                        <img src={logo} alt="sampleLogo" width="90px" height="90px" />
                        <span className="ml-3 text-xl">Portfolio</span>
                    </a>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-white cursor-pointer">Home</a>
                        <a className="mr-5 hover:text-white cursor-pointer">About</a>
                        <a className="mr-5 hover:text-white cursor-pointer">Projects</a>
                        <a className="mr-5 hover:text-white cursor-pointer">Contacts</a>
                    </nav>
                </div>
            </header>
        </>
    )
}