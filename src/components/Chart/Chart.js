import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValue = props.chartData.map((expense) => expense.value )
    const mMaxValue = Math.max(...dataPointsValue);
    return (
        <div className="chart">
            {props.chartData.map((mnthExpense) => (
                <ChartBar key={mnthExpense.label}
                    value={mnthExpense.value}
                    label={mnthExpense.label}
                    maxValue={mMaxValue} />
            ))}
        </div>
    )
};
export default Chart;