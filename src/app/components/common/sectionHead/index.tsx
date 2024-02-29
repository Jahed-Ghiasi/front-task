import "./styles.css";

interface IProps {
  title: string;
  element?: JSX.Element;
}

const SectionHead = ({ title, element }: IProps) => {
  return (
    <div className="section-head">
      <h4>{title}</h4>
      {element}
    </div>
  );
};

export default SectionHead;
