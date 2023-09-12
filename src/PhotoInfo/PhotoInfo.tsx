import classes from './PhotoInfo.module.css';

interface PhotoInfoProps {
    content: string
}

const PhotoInfo = ({ content }: PhotoInfoProps) => {
    return (
        <div className={classes['photo-info']}>
            {content}
        </div>
    )
}

export default PhotoInfo;