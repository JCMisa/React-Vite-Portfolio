import profile from "../assets/images/profile-pic-2-no-bg-enhanced.png";

export default function Hero()
{
    return(
        <>
            <section className="text-gray-400 bg-transparent body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Welcome
                        <br className="hidden lg:inline-block" /> <span className="text-[#667eea]">I am John Carlo Misa</span>
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        A passionate developer dedicated to creating meaningful digital experiences. Welcome to my portfolio, a humble showcase of my journey and accomplishments in the world of coding.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View My Work</button>
                        <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">More About Me</button>
                    </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={profile} />
                    </div>
                </div>
            </section>
        </>
    )
}