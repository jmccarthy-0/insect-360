import {ReactComponent as CloseIcon} from '../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as ExpandIcon} from '../assets/icons/expand_content_FILL0_wght400_GRAD0_opsz48.svg';
import {ReactComponent as InfoIcon} from '../assets/icons/info_modified.svg';
import {ReactComponent as LightIcon} from '../assets/icons/light_mode_FILL0_wght400_GRAD0_opsz24.svg';
import {ReactComponent as DarkIcon} from '../assets/icons/dark_mode_FILL0_wght400_GRAD0_opsz24.svg';


type iconType = 'close' | 'expand' | 'info' | 'light' | 'dark';

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
        case 'light':
            return <LightIcon />;
        case 'dark':
            return <DarkIcon />;
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