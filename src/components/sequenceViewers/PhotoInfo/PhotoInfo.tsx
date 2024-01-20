interface PhotoInfoProps {
    content: string
}

const PhotoInfo = ({ content }: PhotoInfoProps) => {
    const parseHtml = (str: string) => { return {__html: str} };
    
    return (
        <div className={`${PhotoInfoStyles['photo-info']} w-full pt-16 px-page-x pb-4 text-primary-dark dark:text-primary-light bg-primary-light dark:bg-primary-dark [&_dl]:grid [&_dl]:grid-cols-max-1fr [&_dl]:gap-x-4 [&_dl]:gap-y-2 [&_p]:text-base not-last:[&_p]:mb-4`} dangerouslySetInnerHTML={parseHtml(content)}>
        </div>
    )
}

export default PhotoInfo;