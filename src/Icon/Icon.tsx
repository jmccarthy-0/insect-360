import closeIcon from '../assets/icons/close_FILL0_wght400_GRAD0_opsz48.svg';
import expandIcon from '../assets/icons/expand_content_FILL0_wght400_GRAD0_opsz48.svg';
import infoIcon from '../assets/icons/info_modified.svg';


type iconType = 'close' | 'expand' | 'info';

interface IconProps {
    icon: iconType;
}

const getIconUrl = (iconKey: iconType) => {
    switch (iconKey) {
        case 'close': 
            return closeIcon;
        case 'expand':
            return expandIcon;
        case 'info': 
            return infoIcon;
    }    
}

const Icon = ({ icon }: IconProps) => {

    const iconUrl = getIconUrl(icon);

    return (
        <img src={iconUrl}/>
    )
}

export default Icon;