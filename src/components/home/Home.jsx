import Hero from "./Hero";
import Gallery from "./Gallery";
import Chart from "./charts/Chart";
import Testimonial from "./Testimonial";

export default function Home()
{
    return(
        <>
            <Hero />
            <Gallery />
            <Chart />
            <Testimonial />
        </>
    )
}