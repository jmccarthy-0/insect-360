import { TaxonDetails } from '@utils/ts/types';

interface PageIntroProps {
  content: TaxonDetails
}

const PageIntro = ({content: {binomialName, commonName, classifiedBy}}: PageIntroProps) => {
    return (
        <div className='px-page-x'>
          <div className='text-center'>
            <h1 className={'mb-2'}>
              <span className='block xl:inline text-4xl italic text-primary-dark dark:text-primary-light'>{binomialName}</span>
              {commonName && <span className="block xl:inline text-2xl xl:text-4xl text-primary-dark dark:text-primary-light before:content-[''] xl:before:content-['_-_']">{commonName}</span>}
            </h1>
            {classifiedBy && <p className='text-primary-dark dark:text-primary-light'>({classifiedBy})</p>}
          </div>
        </div>
    );
}

export default PageIntro;