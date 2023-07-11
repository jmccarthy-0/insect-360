import {ReactComponent as CloseIcon} from '../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as ExpandIcon} from '../assets/icons/expand_content_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as InfoIcon} from '../assets/icons/info_modified.svg';


type iconType = 'close' | 'expand' | 'info';

interface IconProps {
    icon: iconType;
}

const getIconUrl = (iconKey: iconType) => {
    switch (iconKey) {
        case 'close': 
            return <CloseIcon />;
        case 'expand':
            return <ExpandIcon />;
        case 'info': 
            return <InfoIcon />;
    }    
}

const Icon = ({ icon }: IconProps) => {

    const iconComponent = getIconUrl(icon);

    return (
        <>   
            {iconComponent}
        </>
    )
}

export default Icon;