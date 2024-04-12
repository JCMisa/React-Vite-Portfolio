import BarChart from "./BarChart";
import LineChart from "./LineChart";
import { PLData } from "../../../assets/data/PLData";
import { SoftSkillsData } from "../../../assets/data/SoftSkills";
import { useState } from "react";

export default function Chart()
{
    const programmingLanguage = {
        labels: PLData.map((data) => data.language),
        datasets: [{
            label: "Programming Languages",
            data: PLData.map((data) => data.language_strength),
            backgroundColor: '#667eea'
        }]
    };

    const framework = {
        labels: PLData.map((data) => data.framework),
        datasets: [{
            label: "Frameworks",
            data: PLData.map((data) => data.framework_strength),
            backgroundColor: '#667eea'
        }]
    };

    const [btnName, setBtnName] = useState(true);
    const [data, setData] = useState(programmingLanguage);
    const [isOriginalData, setIsOriginalData] = useState(true);

    function changeChart()
    {
        setBtnName((prevState) => !prevState)

        if(isOriginalData) {
            setData(framework);
        }
        else {
            setData(programmingLanguage);
        }
        setIsOriginalData(!isOriginalData);
    }

    





    const currentSkills = {
        labels: SoftSkillsData.map((data) => data.skill),
        datasets: [{
            label: "Current Soft Skills",
            data: SoftSkillsData.map((data) => data.current_level),
            backgroundColor: '#667eea'
        }]
    };

    const targetSkills = {
        labels: SoftSkillsData.map((data) => data.skill),
        datasets: [{
            label: "Target Soft Skills",
            data: SoftSkillsData.map((data) => data.target_level),
            backgroundColor: '#667eea'
        }]
    };

    const [softSkillsBtn, setSoftSkillsBtn] = useState(true);
    const [softData, setSoftData] = useState(currentSkills);
    const [isOriginalSoftData, setIsOriginalSoftData] = useState(true);

    function changeLineChart()
    {
        setSoftSkillsBtn((prevState) => !prevState);

        if(isOriginalSoftData) {
            setSoftData(targetSkills);
        }
        else {
            setSoftData(currentSkills);
        }
        setIsOriginalSoftData(!isOriginalSoftData);
    }





    const options = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10
            }
        }
    }




    return(
        <>
            <section className="text-gray-400 bg-transparent body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Skills</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <BarChart data={data} options={options} />
                            <button onClick={changeChart}>{(btnName) ? "Programming Language" : "Framework"}</button>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <LineChart data={softData} options={options} />
                            <button onClick={changeLineChart}>{(softSkillsBtn) ? "Current" : "Target"}</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}