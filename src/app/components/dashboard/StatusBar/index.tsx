import Button from "src/app/components/common/button";
import "./styles.css";

const StatusBar = () => {
  return (
    <div className="status-bar">
      <h3>Formation Status</h3>
      <div className="status-section">
        <span className="status-title">In progress</span>
        <div className="progress-presenter">
          <div className="progress-range" style={{ width: "75%" }}></div>
        </div>
      </div>
      <div className="status-section">
        <span className="status-title">Estimated processing</span>
        <span className="status-des">4-5 business days</span>
      </div>
      <Button buttonType="button" text="View status" isFullWidth />
    </div>
  );
};

export default StatusBar;
