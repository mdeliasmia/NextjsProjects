import LineChart from "./line-chart";

function LineChart1() {
    return (
        <div>
            Line Chart1
        </div>
    );
}
export default function Charts() {
    const lineChart1 = LineChart1();
    return (
        <div>
            {lineChart1}
            <LineChart />
        </div>
    );
}