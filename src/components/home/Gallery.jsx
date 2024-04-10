import gallery1 from "../../assets/images/gallery-sample-img-1.jpg";
import gallery2 from "../../assets/images/gallery-sample-img-2.jpg";
import gallery3 from "../../assets/images/gallery-sample-img-3.jpg";
import gallery4 from "../../assets/images/gallery-sample-img-4.jpg";
import gallery5 from "../../assets/images/gallery-sample-img-5.jpg";
import gallery6 from "../../assets/images/gallery-sample-img-6.jpg";

export default function Gallery()
{
    return(
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex w-full mb-20 flex-wrap">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#667eea] lg:w-1/3 lg:mb-0 mb-4">
                            Exploring My Web Development Journey
                        </h1>
                        <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
                            Take a look at the visual narrative of my journey in web development and design. Here, you will find a curated collection of my projects, showcasing my growth and evolution in both fields. Each image is a testament to my commitment to learning, innovation, and the creation of impactful digital experiences.
                        </p>
                    </div>
                    <div className="flex flex-wrap md:-m-2 -m-1">
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-75" src={gallery5} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-75" src={gallery2} />
                            </div>
                            <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block opacity-75" src={gallery3} />
                            </div>
                        </div>
                        <div className="flex flex-wrap w-1/2">
                            <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block opacity-75" src={gallery1} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-75" src={gallery4} />
                            </div>
                            <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block opacity-75" src={gallery6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}