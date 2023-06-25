import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface CloseBtnProps {
    handleClick: () => void;
    classes?: string;
}

const CloseBtn = ({ classes, handleClick }: CloseBtnProps) => {
    return (
        <Btn classes={`close-btn ${classes ? classes : ''}`} handleClick={handleClick}>
            <Icon icon={'close'} />
        </Btn>
    )
}

export default CloseBtn;