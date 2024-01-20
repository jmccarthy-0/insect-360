import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface CloseBtnProps {
  handleClick: () => void;
  classes?: string;
  theme?: "default" | "dark" | "light";
}

const CloseBtn = ({
  classes,
  handleClick,
  theme = "default",
}: CloseBtnProps) => {
  return (
    <Btn
      theme={theme}
      shape="square"
      classes={`${classes ? classes : ""}`}
      handleClick={handleClick}
      ariaLabel="Close Modal"
    >
      <Icon icon={"close"} />
    </Btn>
  );
};

export default CloseBtn;
