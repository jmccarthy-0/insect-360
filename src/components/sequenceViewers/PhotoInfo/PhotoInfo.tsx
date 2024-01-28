import { TaxonPhotoMeta } from "@utils/ts/types";

interface PhotoInfoProps {
  photoMeta: TaxonPhotoMeta;
}

const PhotoInfo = ({ photoMeta: { description, cameraModel, lens, flash, stacker }}: PhotoInfoProps) => {
  const getListItem = (key:string,val:string) => {
    return (<>
      <dt>{key}:</dt>
      <dd>{val}</dd>
    </>);
  }

  return (
    <div
      className="w-full bg-primary-light px-page-x pb-4 pt-16 text-primary-dark dark:bg-primary-dark dark:text-primary-light ">
      {description && <p className="text-base not-last:mb-4">{description}</p>}
      <dl className="grid grid-cols-max-1fr gap-x-4 gap-y-2">
        {cameraModel && getListItem('Camera', cameraModel)}
        {lens && getListItem('Lens', lens)}
        {flash && getListItem('Flash', flash)}
        {stacker && getListItem('Stack', stacker)}
      </dl>
    </div>
  );
};

export default PhotoInfo;
