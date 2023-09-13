import classes from './PhotoInfo.module.css';

interface PhotoInfoProps {
    content: string
}

const PhotoInfo = ({ content }: PhotoInfoProps) => {
    const parseHtml = (str: string) => { return {__html: str} };
    
    return (
        <div className={classes['photo-info']} dangerouslySetInnerHTML={parseHtml(content)}>
        </div>
    )
}

export default PhotoInfo;