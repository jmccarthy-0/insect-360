interface PageIntroProps {
  binomialName: string
  commonName?: string
  classifiedBy?: string
  classifiedYear?: string
}

const PageIntro = ({
  binomialName, commonName, classifiedBy, classifiedYear
}: PageIntroProps) => {
  return (
    <div className="px-page-x">
      <div className="text-center">
        <h1 className={"mb-2"}>
          <span className="block text-4xl italic text-primary-dark dark:text-primary-light xl:inline">
            {binomialName}
          </span>
          {commonName && (
            <span className="block text-2xl text-primary-dark before:content-[''] dark:text-primary-light xl:inline xl:text-4xl xl:before:content-['_-_']">
              {commonName}
            </span>
          )}
        </h1>
        {classifiedBy && (
          <p className="text-primary-dark dark:text-primary-light">
            ({classifiedBy}{classifiedYear ? `, ${classifiedYear}` : ''})
          </p>
        )}
      </div>
    </div>
  );
};

export default PageIntro;
