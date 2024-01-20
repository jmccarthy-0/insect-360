import Btn from "./Btn";
import Icon from "../Icon/Icon";

interface InfoBtnProps {
    handleClick: () => void;
    classes?: string;
}

const InfoBtn = ({ classes, handleClick }: InfoBtnProps) => {
    return (
        <Btn theme="dark" shape="square" classes={`${classes ? classes : ''}`} handleClick={handleClick} ariaLabel="Photo Info" ariaControls="photoInfoModal">
            <Icon icon={'info'} />
        </Btn>
    )
}

export default InfoBtn;