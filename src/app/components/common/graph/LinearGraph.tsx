import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

interface IProps {
  data: any;
}

const LinearGraph = ({ data }: IProps) => {
  Chart.register(CategoryScale);

  return <Line data={data} />;
};

export default LinearGraph;
