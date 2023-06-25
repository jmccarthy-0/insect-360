import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface ExpandBtnProps {
    handleClick: () => void;
    classes?: string;
}

const ExpandBtn = ({ classes, handleClick }: ExpandBtnProps) => {
    return (
        <Btn classes={`${classes ? classes : ''} btn--round`} handleClick={handleClick}>
            <Icon icon={'expand'} />
        </Btn>
    )
}

export default ExpandBtn;