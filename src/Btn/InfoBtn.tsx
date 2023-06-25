import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface InfoBtnProps {
    handleClick: () => void;
    classes?: string;
}

const InfoBtn = ({ classes, handleClick }: InfoBtnProps) => {
    return (
        <Btn classes={`${classes ? classes : ''} btn--round`} handleClick={handleClick}>
            <Icon icon={'info'} />
        </Btn>
    )
}

export default InfoBtn;