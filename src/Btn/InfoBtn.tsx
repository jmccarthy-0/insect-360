import Btn from "./Btn";
import Icon from "../Icon/Icon";

import './InfoBtn.css';

interface InfoBtnProps {
    handleClick: () => void;
}

const InfoBtn = ({ handleClick }: InfoBtnProps) => {
    return (
        <Btn classes={'info-btn'} handleClick={handleClick}>
            <Icon icon={'info'} />
        </Btn>
    )
}

export default InfoBtn;