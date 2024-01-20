import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface ExpandBtnProps {
  handleClick: () => void;
  classes?: string;
}

const ExpandBtn = ({ classes, handleClick }: ExpandBtnProps) => {
  return (
    <Btn
      theme="dark"
      shape="square"
      classes={`${classes ? classes : ""}`}
      handleClick={handleClick}
      ariaLabel="Expand Image"
      ariaControls="photoViewerModal"
    >
      <Icon icon={"expand"} />
    </Btn>
  );
};

export default ExpandBtn;
