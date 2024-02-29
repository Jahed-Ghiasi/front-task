import clsx from "clsx";
import "./styles.css";

interface IProps {
  stages: TStage[];
  activeStage: string;
}

type TStage = { title: string; description: string };

const FormStagePresenter = ({ activeStage, stages }: IProps) => {
  return (
    <div className="stages-container">
      {stages.map((stage: TStage, index: number) => {
        const { description, title } = stage;
        return (
          <div
            key={title}
            className={clsx("stage", title === activeStage && "activeStage")}
          >
            <span
              className={clsx(
                "number",
                index < stages.length - 1 && "connector"
              )}
            >
              {index + 1}
            </span>
            <div className="title-des">
              <span className="st-title">{title}</span>
              <span className="description">{description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FormStagePresenter;
