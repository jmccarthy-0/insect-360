import PhotoInfoStyles from './PhotoInfo.module.css';

interface PhotoInfoProps {
    content: string
}

const PhotoInfo = ({ content }: PhotoInfoProps) => {
    const parseHtml = (str: string) => { return {__html: str} };
    
    return (
        <div className={`${PhotoInfoStyles['photo-info']} w-full pt-16 px-page-x pb-4 text-primary-dark dark:text-primary-light bg-primary-light dark:bg-primary-dark`} dangerouslySetInnerHTML={parseHtml(content)}>
        </div>
    )
}

export default PhotoInfo;