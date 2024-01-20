interface PhotoInfoProps {
  content: string;
}

const PhotoInfo = ({ content }: PhotoInfoProps) => {
  const parseHtml = (str: string) => {
    return { __html: str };
  };

  return (
    <div
      className="w-full bg-primary-light px-page-x pb-4 pt-16 text-primary-dark dark:bg-primary-dark dark:text-primary-light [&_dl]:grid [&_dl]:grid-cols-max-1fr [&_dl]:gap-x-4 [&_dl]:gap-y-2 [&_p]:text-base not-last:[&_p]:mb-4"
      dangerouslySetInnerHTML={parseHtml(content)}
    ></div>
  );
};

export default PhotoInfo;
