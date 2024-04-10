import BarChart from "./BarChart";
import { GithubData } from "../../../assets/data/GithubData";
import { useState } from "react";

export default function Chart()
{
    const [data] = useState(
        {
            labels: GithubData.map((data) => data.year),
            datasets: [{
                label: "Language Used",
                data: GithubData.map((data) => data.userGain)
            }]
        }
    );
    return(
        <>
            <section className="text-gray-400 bg-transparent body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                        <BarChart data={data} />
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                        
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}