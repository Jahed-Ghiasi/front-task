import { IMeeting } from "types/dashboard.types";
import "./dashboard.css";
import DashboardInfoCard from "src/app/components/dashboard/dashboardInfoCard/dashboardInfoCard";
import { RiBankCardLine } from "react-icons/ri";
import { HiOutlineReceiptTax } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import DashboardMeetingCard from "src/app/components/dashboard/dashboardMeetingCard/dashboardMeetingCard";
import SectionHead from "src/app/components/common/sectionHead/sectionHead";
import Button from "src/app/components/common/button/button";
import LinearGraph from "src/app/components/common/graph/LinearGraph";
import { ChartOptions } from "chart.js";
import StatisticsCard from "src/app/components/dashboard/statisticsCard/StatisticsCard";
import { useAppContext } from "src/app/utils/context";

const lineChartOptions: ChartOptions<"line"> = {
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        boxWidth: 5,
        boxHeight: 5,
        usePointStyle: true,
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 5000,
        callback: function (value) {
          var ranges = [
            { divider: 1e6, suffix: "M" },
            { divider: 1e3, suffix: "k" },
          ];
          function formatNumber(n: any) {
            for (var i = 0; i < ranges.length; i++) {
              if (n >= ranges[i].divider) {
                return (n / ranges[i].divider).toString() + ranges[i].suffix;
              }
            }
            return n;
          }
          return formatNumber(value);
        },
      },
      border: { dash: [4, 4] }, // for the grid lines
      grid: {
        color: "#aaa", // for the grid lines
        tickColor: "#000", // for the tick mark
        tickBorderDash: [2, 3], // also for the tick, if long enough
        tickLength: 10, // just to see the dotted line
        tickWidth: 2,
        drawTicks: true, // true is default
        drawOnChartArea: true, // true is default
      },
    },
  },
};

const Dashboard = () => {
  const { meetings, statistics } = useAppContext();

  return (
    <>
      <div className="dashboard">
        <div className="left">
          {statistics ? (
            <div className="cards">
              <DashboardInfoCard
                icon={<RiBankCardLine />}
                title="Your bank balance"
                value={`$${statistics.cards.bank_balance}`}
              />
              <DashboardInfoCard
                icon={<HiOutlineReceiptTax />}
                title="Your tax"
                value={`$${statistics.cards.tax}`}
              />
              <DashboardInfoCard
                icon={<IoPersonOutline />}
                title="Employees working today"
                value={`$${statistics.cards.today_employees}`}
              />
              <DashboardInfoCard
                icon={<RiBankCardLine />}
                title={`this week' s card spending`}
                value={`$${statistics.cards.card_spending}`}
              />
            </div>
          ) : null}
          {statistics ? (
            <div className="statistics">
              <div className="statistics-cards">
                <StatisticsCard
                  title="New Clients"
                  percent={statistics.new_clients.change_percent}
                  value={statistics.new_clients.number}
                />
                <StatisticsCard
                  title="Invoice Overdue"
                  percent={statistics.invoice_overdue.change_percent}
                  value={statistics.invoice_overdue.number}
                />
              </div>
              <div className="graph">
                <SectionHead title="Revenue" />
                <LinearGraph
                  data={statistics.data}
                  options={lineChartOptions}
                />
              </div>
            </div>
          ) : null}
          <div className="meetings">
            <SectionHead
              title="Meeting Time"
              element={
                <Button text="Add Metting" className="add-meeting-button" />
              }
            />
            {meetings.map((meeting: IMeeting) => {
              return (
                <DashboardMeetingCard key={meeting.id} meeting={meeting} />
              );
            })}
          </div>
        </div>
        <div className="right">right box</div>
      </div>
    </>
  );
};

export default Dashboard;
