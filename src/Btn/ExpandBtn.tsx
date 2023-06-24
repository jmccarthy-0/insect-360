import Btn from "./Btn";
import Icon from "../Icon/Icon";

import './ExpandBtn.css';

interface ExpandBtnProps {
    handleClick: () => void;
}

const ExpandBtn = ({ handleClick }: ExpandBtnProps) => {
    return (
        <Btn classes="expand-btn" handleClick={handleClick}>
            <Icon icon={'expand'} />
        </Btn>
    )
}

export default ExpandBtn;