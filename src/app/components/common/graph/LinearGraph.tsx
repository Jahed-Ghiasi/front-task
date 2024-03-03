import { Line } from "react-chartjs-2";
import { CategoryScale, ChartData, ChartOptions } from "chart.js";
import Chart from "chart.js/auto";

interface IProps {
  data: ChartData<"line">;
  options?: ChartOptions<"line">;
}

const LinearGraph = ({ data, options }: IProps) => {
  Chart.register(CategoryScale);

  return <Line data={data} options={options} />;
};

export default LinearGraph;
