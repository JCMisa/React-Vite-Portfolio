import logo from '../assets/images/logo-no-bg.png';

export default function Footer()
{
    return(
        <>
            <footer className="text-gray-400 body-font bg-transparent mb-10">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="footer-logo flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <img src={logo} alt="logo" className='w-50 h-10' />
                        <span className="ml-3 text-xl">Portfolio</span>
                    </a>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2024 Portfolio —
                    <a href="https://www.facebook.com/johncarlomisa26" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">John Carlo Misa</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                    <a className="text-gray-400">
                        <i className="fa-brands fa-facebook w-5 h-5"></i>
                    </a>
                    <a className="ml-3 text-gray-400">
                        <i className="fa-brands fa-linkedin w-5 h-5"></i>
                    </a>
                    <a className="ml-3 text-gray-400">
                        <i className="fa-brands fa-github w-5 h-5"></i>
                    </a>
                    <a className="ml-3 text-gray-400">
                        <i className="fa-brands fa-twitter w-5 h-5"></i>
                    </a>
                    </span>
                </div>
            </footer>
        </>
    )
}