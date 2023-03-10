import { Pie } from "react-chartjs-2";

export const PieChart = ({ pendingCount, todoCount, completedCount }) => {
  const data = {
    labels: ["Pending", "Todo", "Completed"],
    datasets: [
      {
        data: [pendingCount, todoCount, completedCount],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};