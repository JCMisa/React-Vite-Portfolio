import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales } from "chart.js/auto";

export default function LineChart(props)
{
    return(
        <>
            <Line data={props.data} options={props.options} />
        </>
    )
}